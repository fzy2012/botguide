/**
 * GET /api/notion/search?q=<query>&filter=page|database
 *
 * Search across all Notion content the integration can access.
 *
 * Query params:
 *   q      - Search text (optional; omit to list all accessible content)
 *   filter - "page" | "database" (optional; returns both by default)
 */

import { NextRequest, NextResponse } from "next/server";
import { searchNotion } from "@/lib/notion";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get("q") ?? "";
  const filter = searchParams.get("filter") as "page" | "database" | null;

  try {
    const results = await searchNotion(query, filter ?? undefined);
    return NextResponse.json({ query, total: results.length, results });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
