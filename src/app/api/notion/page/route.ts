/**
 * GET /api/notion/page?id=<pageId>&format=meta|markdown
 *
 * Retrieve a Notion page.
 *
 * Query params:
 *   id     - (required) Page ID (with or without hyphens)
 *   format - "markdown" (default) returns full page content as Markdown
 *            "meta" returns only page metadata/properties
 */

import { NextRequest, NextResponse } from "next/server";
import { getPage, getPageMarkdown } from "@/lib/notion";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const pageId = searchParams.get("id");
  const format = searchParams.get("format") ?? "markdown";

  if (!pageId) {
    return NextResponse.json(
      { error: "Missing required query parameter: id" },
      { status: 400 }
    );
  }

  try {
    if (format === "meta") {
      const page = await getPage(pageId);
      return NextResponse.json({ page });
    }

    const { title, markdown } = await getPageMarkdown(pageId);
    return NextResponse.json({ pageId, title, markdown });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
