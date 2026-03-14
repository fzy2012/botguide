/**
 * Feishu (飞书) Open API Client
 *
 * Supports retrieving content from:
 * - Feishu Documents (飞书文档)
 * - Feishu Wiki (飞书知识库)
 * - Feishu Sheets (飞书表格)
 *
 * Required environment variables:
 *   FEISHU_APP_ID              - Your Feishu app ID (AppID)
 *   FEISHU_APP_SECRET          - Your Feishu app secret (AppSecret)
 *   FEISHU_USER_ACCESS_TOKEN   - (optional) User access token for personal-space content
 */

const FEISHU_BASE_URL = "https://open.feishu.cn/open-apis";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FeishuToken {
  tenant_access_token: string;
  expire: number; // seconds until expiry
}

export interface FeishuDocument {
  document_id: string;
  revision_id: number;
  title: string;
}

export interface FeishuDocumentContent {
  document: FeishuDocument;
  content: string; // raw text content
}

export interface FeishuBlock {
  block_id: string;
  block_type: number;
  parent_id: string;
  children: string[];
  page?: { elements: FeishuTextElement[] };
  text?: { elements: FeishuTextElement[]; style?: Record<string, unknown> };
  heading1?: { elements: FeishuTextElement[] };
  heading2?: { elements: FeishuTextElement[] };
  heading3?: { elements: FeishuTextElement[] };
  bullet?: { elements: FeishuTextElement[] };
  ordered?: { elements: FeishuTextElement[] };
  code?: { elements: FeishuTextElement[]; style?: { language?: number } };
  quote?: { elements: FeishuTextElement[] };
  todo?: { elements: FeishuTextElement[]; style?: { done?: boolean } };
}

export interface FeishuTextElement {
  type: string;
  text_run?: { content: string; text_element_style?: Record<string, unknown> };
  mention_user?: { user_id: string };
  mention_doc?: { token: string; obj_type: number; url: string; title: string };
  inline_block?: { block_id: string };
}

export interface FeishuWikiSpace {
  space_id: string;
  name: string;
  description: string;
  visibility: string;
}

export interface FeishuWikiNode {
  space_id: string;
  node_token: string;
  obj_token: string;
  obj_type: string; // "doc", "sheet", "mindnote", etc.
  parent_node_token: string;
  node_type: string;
  origin_node_token: string;
  origin_space_id: string;
  has_child: boolean;
  title: string;
  obj_create_time: string;
  obj_edit_time: string;
  node_create_time: string;
  creator: string;
  owner: string;
}

export interface FeishuSheetInfo {
  spreadsheet_token: string;
  title: string;
  sheets: FeishuSheet[];
}

export interface FeishuSheet {
  sheet_id: string;
  title: string;
  index: number;
  row_count: number;
  column_count: number;
}

// ─── Token cache ──────────────────────────────────────────────────────────────

let cachedToken: string | null = null;
let tokenExpireAt = 0;

// ─── Core helpers ─────────────────────────────────────────────────────────────

/**
 * Get a tenant access token. Tokens are cached in memory until 60 s before
 * expiry to avoid unnecessary round-trips.
 */
export async function getTenantAccessToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && now < tokenExpireAt - 60) {
    return cachedToken;
  }

  const appId = process.env.FEISHU_APP_ID;
  const appSecret = process.env.FEISHU_APP_SECRET;

  if (!appId || !appSecret) {
    throw new Error(
      "Missing Feishu credentials. Set FEISHU_APP_ID and FEISHU_APP_SECRET environment variables."
    );
  }

  const res = await fetch(`${FEISHU_BASE_URL}/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  });

  if (!res.ok) {
    throw new Error(`Failed to get Feishu tenant access token: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as { code: number; msg: string } & FeishuToken;

  if (data.code !== 0) {
    throw new Error(`Feishu auth error (${data.code}): ${data.msg}`);
  }

  cachedToken = data.tenant_access_token;
  tokenExpireAt = now + data.expire;
  return cachedToken;
}

/**
 * Get the user access token from env (does not refresh – caller must ensure freshness).
 */
export function getUserAccessToken(): string {
  const token = process.env.FEISHU_USER_ACCESS_TOKEN;
  if (!token) {
    throw new Error(
      "Missing FEISHU_USER_ACCESS_TOKEN environment variable."
    );
  }
  return token;
}

async function feishuGet<T>(path: string, useUserToken = false): Promise<T> {
  const token = useUserToken ? getUserAccessToken() : await getTenantAccessToken();
  const res = await fetch(`${FEISHU_BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  if (!res.ok) {
    throw new Error(`Feishu API error ${res.status} for ${path}: ${res.statusText}`);
  }

  const json = (await res.json()) as { code: number; msg: string; data: T };
  if (json.code !== 0) {
    throw new Error(`Feishu API error (${json.code}): ${json.msg}`);
  }

  return json.data;
}

// ─── Document API ─────────────────────────────────────────────────────────────

/**
 * Retrieve the raw text content of a Feishu document.
 *
 * @param documentId - The document token (visible in the document URL)
 */
export async function getDocumentContent(documentId: string): Promise<FeishuDocumentContent> {
  const data = await feishuGet<{ content: string; document: FeishuDocument }>(
    `/docx/v1/documents/${documentId}/raw_content`
  );
  return {
    document: data.document,
    content: data.content,
  };
}

/**
 * Retrieve all blocks in a Feishu document (structured content).
 *
 * @param documentId - The document token
 */
export async function getDocumentBlocks(documentId: string): Promise<FeishuBlock[]> {
  const blocks: FeishuBlock[] = [];
  let pageToken: string | undefined;

  do {
    const query = pageToken ? `?page_token=${pageToken}` : "";
    const data = await feishuGet<{
      items: FeishuBlock[];
      page_token: string;
      has_more: boolean;
    }>(`/docx/v1/documents/${documentId}/blocks${query}`);

    blocks.push(...data.items);
    pageToken = data.has_more ? data.page_token : undefined;
  } while (pageToken);

  return blocks;
}

/**
 * Convert document blocks to plain Markdown.
 */
export function blocksToMarkdown(blocks: FeishuBlock[]): string {
  const lines: string[] = [];

  for (const block of blocks) {
    const text = extractText(block);
    if (!text) continue;

    switch (block.block_type) {
      case 1:  // page
        lines.push(`# ${text}`);
        break;
      case 2:  // text
        lines.push(text);
        break;
      case 3:  // heading 1
        lines.push(`# ${text}`);
        break;
      case 4:  // heading 2
        lines.push(`## ${text}`);
        break;
      case 5:  // heading 3
        lines.push(`### ${text}`);
        break;
      case 6:  // heading 4
        lines.push(`#### ${text}`);
        break;
      case 7:  // heading 5
        lines.push(`##### ${text}`);
        break;
      case 8:  // heading 6
        lines.push(`###### ${text}`);
        break;
      case 9:  // bullet list
        lines.push(`- ${text}`);
        break;
      case 10: // ordered list
        lines.push(`1. ${text}`);
        break;
      case 11: // code block
        lines.push(`\`\`\`\n${text}\n\`\`\``);
        break;
      case 12: // quote
        lines.push(`> ${text}`);
        break;
      case 14: // todo
        lines.push(`- [ ] ${text}`);
        break;
      default:
        if (text) lines.push(text);
    }
  }

  return lines.join("\n\n");
}

function extractText(block: FeishuBlock): string {
  const elementsKey = [
    "page",
    "text",
    "heading1",
    "heading2",
    "heading3",
    "bullet",
    "ordered",
    "code",
    "quote",
    "todo",
  ].find((k) => k in block) as keyof FeishuBlock | undefined;

  if (!elementsKey) return "";
  const section = block[elementsKey] as { elements?: FeishuTextElement[] } | undefined;
  if (!section?.elements) return "";

  return section.elements
    .map((el) => el.text_run?.content ?? el.mention_doc?.title ?? "")
    .join("");
}

// ─── Wiki API ─────────────────────────────────────────────────────────────────

/**
 * List all wiki spaces the app has access to.
 */
export async function listWikiSpaces(): Promise<FeishuWikiSpace[]> {
  const spaces: FeishuWikiSpace[] = [];
  let pageToken: string | undefined;

  do {
    const query = pageToken ? `?page_token=${pageToken}` : "";
    const data = await feishuGet<{
      items: FeishuWikiSpace[];
      page_token: string;
      has_more: boolean;
    }>(`/wiki/v2/spaces${query}`);

    spaces.push(...(data.items ?? []));
    pageToken = data.has_more ? data.page_token : undefined;
  } while (pageToken);

  return spaces;
}

/**
 * List nodes (pages) inside a wiki space.
 *
 * @param spaceId   - The wiki space ID
 * @param parentNodeToken - Optional: retrieve children of a specific node
 */
export async function listWikiNodes(
  spaceId: string,
  parentNodeToken?: string
): Promise<FeishuWikiNode[]> {
  const nodes: FeishuWikiNode[] = [];
  let pageToken: string | undefined;

  do {
    const params = new URLSearchParams();
    if (pageToken) params.set("page_token", pageToken);
    if (parentNodeToken) params.set("parent_node_token", parentNodeToken);
    const query = params.toString() ? `?${params}` : "";

    const data = await feishuGet<{
      items: FeishuWikiNode[];
      page_token: string;
      has_more: boolean;
    }>(`/wiki/v2/spaces/${spaceId}/nodes${query}`);

    nodes.push(...(data.items ?? []));
    pageToken = data.has_more ? data.page_token : undefined;
  } while (pageToken);

  return nodes;
}

/**
 * Get metadata for a specific wiki node.
 */
export async function getWikiNode(
  spaceId: string,
  nodeToken: string
): Promise<FeishuWikiNode> {
  const data = await feishuGet<{ node: FeishuWikiNode }>(
    `/wiki/v2/spaces/${spaceId}/nodes/${nodeToken}`
  );
  return data.node;
}

/**
 * Look up a wiki node by its token alone (no space_id needed).
 * Works with `ntn_*` tokens. Falls back to user access token if tenant token fails.
 *
 * @param nodeToken - The wiki node token (e.g. ntn_xxxxxxxx)
 */
export async function getWikiNodeByToken(nodeToken: string): Promise<FeishuWikiNode> {
  // Try tenant token first, then user token
  for (const useUserToken of [false, true]) {
    try {
      const data = await feishuGet<{ node: FeishuWikiNode }>(
        `/wiki/v2/spaces/get_node?token=${encodeURIComponent(nodeToken)}`,
        useUserToken
      );
      return data.node;
    } catch (err) {
      if (!useUserToken) continue; // try again with user token
      throw err;
    }
  }
  throw new Error("Unreachable");
}

/**
 * Retrieve the full text content of a wiki node.
 * Resolves the node to its underlying document and fetches raw content.
 *
 * @param nodeToken - The wiki node token (e.g. ntn_xxxxxxxx)
 */
export async function getWikiNodeContent(
  nodeToken: string
): Promise<{ node: FeishuWikiNode; content: string }> {
  const node = await getWikiNodeByToken(nodeToken);

  if (node.obj_type !== "docx" && node.obj_type !== "doc") {
    throw new Error(
      `Wiki node "${node.title}" has type "${node.obj_type}" which is not a text document. ` +
      `Only docx/doc nodes can be retrieved as text.`
    );
  }

  const result = await getDocumentContent(node.obj_token);
  return { node, content: result.content };
}

// ─── Sheets API ───────────────────────────────────────────────────────────────

/**
 * Get spreadsheet metadata including all sheet tabs.
 *
 * @param spreadsheetToken - The spreadsheet token from the URL
 */
export async function getSpreadsheetInfo(spreadsheetToken: string): Promise<FeishuSheetInfo> {
  const data = await feishuGet<{ spreadsheet: FeishuSheetInfo }>(
    `/sheets/v3/spreadsheets/${spreadsheetToken}`
  );
  return data.spreadsheet;
}

/**
 * Read cell values from a sheet range.
 *
 * @param spreadsheetToken - The spreadsheet token
 * @param range - A1 notation range, e.g. "Sheet1!A1:D10" or just "A1:D10"
 */
export async function getSheetValues(
  spreadsheetToken: string,
  range: string
): Promise<unknown[][]> {
  const data = await feishuGet<{
    valueRange: { values: unknown[][] };
  }>(
    `/sheets/v2/spreadsheets/${spreadsheetToken}/values/${encodeURIComponent(range)}`
  );
  return data.valueRange?.values ?? [];
}
