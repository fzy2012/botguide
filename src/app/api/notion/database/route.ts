/**
 * GET  /api/notion/database?id=<databaseId>
 *   Returns database schema (title, property definitions).
 *
 * POST /api/notion/database?id=<databaseId>
 *   Query rows from the database.
 *   Body (JSON, all optional):
 *     { filter?: object, sorts?: object[] }
 *
 *   Example – filter by a checkbox property:
 *     { "filter": { "property": "Done", "checkbox": { "equals": true } } }
 *
 *   Example – sort by created time descending:
 *     { "sorts": [{ "timestamp": "created_time", "direction": "descending" }] }
 */

import { NextRequest, NextResponse } from "next/server";
import { getDatabase, queryDatabase } from "@/lib/notion";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const databaseId = searchParams.get("id");

  if (!databaseId) {
    return NextResponse.json(
      { error: "Missing required query parameter: id" },
      { status: 400 }
    );
  }

  try {
    const db = await getDatabase(databaseId);
    return NextResponse.json({ database: db });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const databaseId = searchParams.get("id");

  if (!databaseId) {
    return NextResponse.json(
      { error: "Missing required query parameter: id" },
      { status: 400 }
    );
  }

  let body: { filter?: Record<string, unknown>; sorts?: Record<string, unknown>[] } = {};
  try {
    body = await req.json();
  } catch {
    // Empty body is fine – query without filter
  }

  try {
    const rows = await queryDatabase(databaseId, body.filter, body.sorts);
    return NextResponse.json({ databaseId, total: rows.length, rows });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
