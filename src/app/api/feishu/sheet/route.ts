/**
 * GET /api/feishu/sheet?token=<spreadsheetToken>
 *   Get spreadsheet metadata (title, sheet list).
 *
 * GET /api/feishu/sheet?token=<spreadsheetToken>&range=<A1Notation>
 *   Read cell values from the given range.
 *   e.g. range=Sheet1!A1:D20
 */

import { NextRequest, NextResponse } from "next/server";
import { getSpreadsheetInfo, getSheetValues } from "@/lib/feishu";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const token = searchParams.get("token");
  const range = searchParams.get("range");

  if (!token) {
    return NextResponse.json(
      { error: "Missing required query parameter: token" },
      { status: 400 }
    );
  }

  try {
    if (!range) {
      const info = await getSpreadsheetInfo(token);
      return NextResponse.json({ spreadsheet: info });
    }

    const values = await getSheetValues(token, range);
    return NextResponse.json({ token, range, values });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
