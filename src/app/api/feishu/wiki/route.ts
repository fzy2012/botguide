/**
 * GET /api/feishu/wiki
 *   List all wiki spaces the app can access.
 *
 * GET /api/feishu/wiki?space_id=<id>
 *   List top-level nodes in a wiki space.
 *
 * GET /api/feishu/wiki?space_id=<id>&node_token=<token>
 *   List child nodes of a specific wiki node.
 */

import { NextRequest, NextResponse } from "next/server";
import { listWikiSpaces, listWikiNodes } from "@/lib/feishu";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const spaceId = searchParams.get("space_id");
  const nodeToken = searchParams.get("node_token") ?? undefined;

  try {
    if (!spaceId) {
      const spaces = await listWikiSpaces();
      return NextResponse.json({ spaces });
    }

    const nodes = await listWikiNodes(spaceId, nodeToken);
    return NextResponse.json({ spaceId, parentNodeToken: nodeToken ?? null, nodes });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
