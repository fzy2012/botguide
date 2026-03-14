/**
 * GET /api/feishu/document?id=<documentId>&format=<raw|markdown>
 *
 * Retrieve content from a Feishu document.
 *
 * Query params:
 *   id      - (required) The Feishu document token (visible in the document URL)
 *   format  - (optional) "raw" (default) returns plain text; "markdown" converts blocks to Markdown
 */

import { NextRequest, NextResponse } from "next/server";
import {
  getDocumentContent,
  getDocumentBlocks,
  blocksToMarkdown,
} from "@/lib/feishu";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const documentId = searchParams.get("id");
  const format = searchParams.get("format") ?? "raw";

  if (!documentId) {
    return NextResponse.json(
      { error: "Missing required query parameter: id" },
      { status: 400 }
    );
  }

  try {
    if (format === "markdown") {
      const blocks = await getDocumentBlocks(documentId);
      const markdown = blocksToMarkdown(blocks);
      return NextResponse.json({ documentId, format: "markdown", content: markdown });
    }

    const result = await getDocumentContent(documentId);
    return NextResponse.json({
      documentId,
      format: "raw",
      title: result.document.title,
      content: result.content,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
