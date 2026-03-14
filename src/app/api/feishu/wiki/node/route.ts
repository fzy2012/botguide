/**
 * GET /api/feishu/wiki/node?token=<ntn_token>
 *
 * Fetch metadata + text content for a Feishu wiki node by its token.
 * Works with tokens like ntn_57755968516jPZNV09vR9...
 *
 * Returns:
 *   { node: FeishuWikiNode, content: string }
 */

import { NextRequest, NextResponse } from "next/server";
import { getWikiNodeByToken, getWikiNodeContent } from "@/lib/feishu";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const token = searchParams.get("token");
  const contentOnly = searchParams.get("content") !== "false";

  if (!token) {
    return NextResponse.json(
      { error: "Missing required query parameter: token" },
      { status: 400 }
    );
  }

  try {
    if (!contentOnly) {
      const node = await getWikiNodeByToken(token);
      return NextResponse.json({ node });
    }

    const result = await getWikiNodeContent(token);
    return NextResponse.json({
      node: result.node,
      content: result.content,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
