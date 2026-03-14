/**
 * Notion API Client
 *
 * Supports:
 * - Search across all pages/databases
 * - Retrieve page metadata + content blocks (converted to Markdown)
 * - Query database rows with optional filters
 * - List databases
 *
 * Required environment variable:
 *   NOTION_TOKEN - Internal integration token (ntn_* or secret_*)
 *
 * API reference: https://developers.notion.com/reference
 * API version:   2022-06-28
 */

const NOTION_BASE_URL = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NotionRichText {
  type: string;
  text?: { content: string; link?: { url: string } | null };
  mention?: { type: string; [key: string]: unknown };
  equation?: { expression: string };
  annotations?: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href?: string | null;
}

export interface NotionBlock {
  id: string;
  type: string;
  has_children: boolean;
  // Block content keyed by block type
  [key: string]: unknown;
}

export interface NotionPage {
  id: string;
  url: string;
  created_time: string;
  last_edited_time: string;
  parent: { type: string; [key: string]: unknown };
  properties: Record<string, NotionProperty>;
  archived: boolean;
}

export interface NotionProperty {
  id: string;
  type: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  number?: number | null;
  select?: { name: string; color: string } | null;
  multi_select?: { name: string; color: string }[];
  date?: { start: string; end?: string | null } | null;
  checkbox?: boolean;
  url?: string | null;
  email?: string | null;
  phone_number?: string | null;
  files?: { name: string; type: string; [key: string]: unknown }[];
  relation?: { id: string }[];
  formula?: { type: string; [key: string]: unknown };
  status?: { name: string; color: string } | null;
}

export interface NotionDatabase {
  id: string;
  url: string;
  title: NotionRichText[];
  description: NotionRichText[];
  created_time: string;
  last_edited_time: string;
  properties: Record<string, { id: string; name: string; type: string; [key: string]: unknown }>;
}

export interface NotionSearchResult {
  id: string;
  object: "page" | "database";
  url: string;
  title: string;
  last_edited_time: string;
}

// ─── Core helper ──────────────────────────────────────────────────────────────

function getToken(): string {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    throw new Error("Missing NOTION_TOKEN environment variable.");
  }
  return token;
}

async function notionRequest<T>(
  method: "GET" | "POST",
  path: string,
  body?: unknown
): Promise<T> {
  const res = await fetch(`${NOTION_BASE_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      `Notion API ${res.status} on ${method} ${path}: ${(err as { message?: string }).message ?? res.statusText}`
    );
  }

  return res.json() as Promise<T>;
}

// ─── Search ───────────────────────────────────────────────────────────────────

/**
 * Search across all pages and databases the integration can access.
 *
 * @param query  - Text to search for (empty string returns everything)
 * @param filter - Optionally restrict to "page" or "database"
 */
export async function searchNotion(
  query: string,
  filter?: "page" | "database"
): Promise<NotionSearchResult[]> {
  const results: NotionSearchResult[] = [];
  let cursor: string | undefined;

  do {
    const body: Record<string, unknown> = { query, page_size: 100 };
    if (filter) body.filter = { value: filter, property: "object" };
    if (cursor) body.start_cursor = cursor;

    const data = await notionRequest<{
      results: (NotionPage | NotionDatabase)[];
      next_cursor: string | null;
      has_more: boolean;
    }>("POST", "/search", body);

    for (const item of data.results) {
      results.push({
        id: item.id,
        object: item.object as "page" | "database",
        url: item.url,
        title: extractTitle(item),
        last_edited_time: item.last_edited_time,
      });
    }

    cursor = data.has_more && data.next_cursor ? data.next_cursor : undefined;
  } while (cursor);

  return results;
}

function extractTitle(item: NotionPage | NotionDatabase): string {
  if ("title" in item && Array.isArray(item.title)) {
    // Database
    return (item as NotionDatabase).title.map((t) => t.plain_text).join("");
  }
  // Page: look for a property of type "title"
  const props = (item as NotionPage).properties ?? {};
  for (const prop of Object.values(props)) {
    if (prop.type === "title" && prop.title) {
      return prop.title.map((t) => t.plain_text).join("");
    }
  }
  return "(untitled)";
}

// ─── Pages ────────────────────────────────────────────────────────────────────

/**
 * Get page metadata (title, properties, timestamps, URL).
 */
export async function getPage(pageId: string): Promise<NotionPage> {
  return notionRequest<NotionPage>("GET", `/pages/${normalizeId(pageId)}`);
}

/**
 * Get all content blocks of a page/block (auto-paginated).
 */
export async function getBlocks(blockId: string): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;

  do {
    const query = cursor ? `?start_cursor=${cursor}` : "";
    const data = await notionRequest<{
      results: NotionBlock[];
      next_cursor: string | null;
      has_more: boolean;
    }>("GET", `/blocks/${normalizeId(blockId)}/children${query}`);

    blocks.push(...data.results);
    cursor = data.has_more && data.next_cursor ? data.next_cursor : undefined;
  } while (cursor);

  return blocks;
}

/**
 * Get a page's full content as Markdown (recursively fetches nested blocks).
 */
export async function getPageMarkdown(pageId: string): Promise<{ title: string; markdown: string }> {
  const [page, blocks] = await Promise.all([
    getPage(pageId),
    getBlocks(pageId),
  ]);

  const title = extractTitle(page);
  const markdown = await blocksToMarkdown(blocks, 0);
  return { title, markdown };
}

// ─── Databases ────────────────────────────────────────────────────────────────

/**
 * Get database schema (title, property definitions).
 */
export async function getDatabase(databaseId: string): Promise<NotionDatabase> {
  return notionRequest<NotionDatabase>("GET", `/databases/${normalizeId(databaseId)}`);
}

/**
 * Query rows from a Notion database.
 *
 * @param databaseId - The database ID
 * @param filter     - Optional Notion filter object
 * @param sorts      - Optional sort array
 */
export async function queryDatabase(
  databaseId: string,
  filter?: Record<string, unknown>,
  sorts?: Record<string, unknown>[]
): Promise<NotionPage[]> {
  const rows: NotionPage[] = [];
  let cursor: string | undefined;

  do {
    const body: Record<string, unknown> = { page_size: 100 };
    if (filter) body.filter = filter;
    if (sorts) body.sorts = sorts;
    if (cursor) body.start_cursor = cursor;

    const data = await notionRequest<{
      results: NotionPage[];
      next_cursor: string | null;
      has_more: boolean;
    }>("POST", `/databases/${normalizeId(databaseId)}/query`, body);

    rows.push(...data.results);
    cursor = data.has_more && data.next_cursor ? data.next_cursor : undefined;
  } while (cursor);

  return rows;
}

// ─── Markdown conversion ──────────────────────────────────────────────────────

/**
 * Recursively convert Notion blocks to Markdown.
 */
export async function blocksToMarkdown(
  blocks: NotionBlock[],
  depth = 0
): Promise<string> {
  const indent = "  ".repeat(depth);
  const lines: string[] = [];

  for (const block of blocks) {
    const line = blockToMarkdownLine(block, indent);
    if (line !== null) lines.push(line);

    // Recursively fetch and render children
    if (block.has_children) {
      try {
        const children = await getBlocks(block.id);
        const childMd = await blocksToMarkdown(children, depth + 1);
        if (childMd) lines.push(childMd);
      } catch {
        // Skip unreadable children
      }
    }
  }

  return lines.join("\n");
}

function blockToMarkdownLine(block: NotionBlock, indent: string): string | null {
  const rt = (key: string): string =>
    richTextToMarkdown(((block[block.type] as Record<string, unknown>)?.[key] as NotionRichText[]) ?? []);

  switch (block.type) {
    case "paragraph":
      return `${indent}${rt("rich_text")}` || null;
    case "heading_1":
      return `# ${rt("rich_text")}`;
    case "heading_2":
      return `## ${rt("rich_text")}`;
    case "heading_3":
      return `### ${rt("rich_text")}`;
    case "bulleted_list_item":
      return `${indent}- ${rt("rich_text")}`;
    case "numbered_list_item":
      return `${indent}1. ${rt("rich_text")}`;
    case "to_do": {
      const checked = ((block.to_do as Record<string, unknown>)?.checked as boolean) ?? false;
      return `${indent}- [${checked ? "x" : " "}] ${rt("rich_text")}`;
    }
    case "toggle":
      return `${indent}<details><summary>${rt("rich_text")}</summary>`;
    case "quote":
      return `${indent}> ${rt("rich_text")}`;
    case "callout":
      return `${indent}> ${rt("rich_text")}`;
    case "code": {
      const lang = ((block.code as Record<string, unknown>)?.language as string) ?? "";
      return `\`\`\`${lang}\n${rt("rich_text")}\n\`\`\``;
    }
    case "divider":
      return "---";
    case "equation":
      return `$$${(block.equation as Record<string, unknown>)?.expression as string}$$`;
    case "image": {
      const img = block.image as Record<string, unknown>;
      const url = (img?.file as Record<string, string>)?.url ?? (img?.external as Record<string, string>)?.url ?? "";
      const caption = richTextToMarkdown((img?.caption as NotionRichText[]) ?? []);
      return `![${caption || "image"}](${url})`;
    }
    case "bookmark":
    case "link_preview": {
      const bk = block[block.type] as Record<string, unknown>;
      const url = bk?.url as string ?? "";
      const caption = richTextToMarkdown((bk?.caption as NotionRichText[]) ?? []);
      return `[${caption || url}](${url})`;
    }
    case "table_of_contents":
      return null; // skip
    case "column_list":
    case "column":
      return null; // children handled by recursion
    default:
      return null;
  }
}

function richTextToMarkdown(richText: NotionRichText[]): string {
  return richText
    .map((t) => {
      let text = t.plain_text;
      if (!text) return "";
      const a = t.annotations;
      if (a?.code) text = `\`${text}\``;
      if (a?.bold) text = `**${text}**`;
      if (a?.italic) text = `*${text}*`;
      if (a?.strikethrough) text = `~~${text}~~`;
      if (t.href) text = `[${text}](${t.href})`;
      return text;
    })
    .join("");
}

// ─── Utilities ────────────────────────────────────────────────────────────────

/** Strip hyphens from a Notion ID (both formats are accepted). */
function normalizeId(id: string): string {
  return id.replace(/-/g, "");
}
