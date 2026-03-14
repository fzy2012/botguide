/**
 * Smoke-test for Feishu credentials.
 * Run: node scripts/test-feishu.mjs
 */

import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env.local manually (no dotenv dep needed)
const envFile = resolve(process.cwd(), ".env.local");
try {
  const lines = readFileSync(envFile, "utf8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
  }
} catch {
  console.warn("No .env.local found, using existing env vars.");
}

const FEISHU_BASE_URL = "https://open.feishu.cn/open-apis";

async function getTenantToken() {
  const res = await fetch(`${FEISHU_BASE_URL}/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      app_id: process.env.FEISHU_APP_ID,
      app_secret: process.env.FEISHU_APP_SECRET,
    }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`Auth failed (${data.code}): ${data.msg}`);
  return data.tenant_access_token;
}

async function feishuGet(path, token) {
  const res = await fetch(`${FEISHU_BASE_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
  return res.json();
}

async function main() {
  console.log("=== Feishu Integration Test ===\n");
  console.log("App ID:", process.env.FEISHU_APP_ID);

  // 1. Get tenant access token
  console.log("\n[1] Getting tenant access token...");
  let tenantToken;
  try {
    tenantToken = await getTenantToken();
    console.log("    ✓ tenant_access_token obtained");
  } catch (e) {
    console.error("    ✗", e.message);
    process.exit(1);
  }

  // 2. List wiki spaces accessible to this app
  console.log("\n[2] Listing wiki spaces (tenant token)...");
  const spacesRes = await feishuGet("/wiki/v2/spaces", tenantToken);
  if (spacesRes.code === 0) {
    const spaces = spacesRes.data?.items ?? [];
    if (spaces.length === 0) {
      console.log("    (no spaces accessible – add the app as a wiki member)");
    } else {
      spaces.forEach((s) => console.log(`    ✓ ${s.name} (${s.space_id})`));
    }
  } else {
    console.warn("    ✗", spacesRes.code, spacesRes.msg);
  }

  // 3. Retry step 2 with user access token
  const userToken = process.env.FEISHU_USER_ACCESS_TOKEN;
  if (userToken) {
    console.log("\n[3] Listing wiki spaces (user access token)...");
    const userSpacesRes = await feishuGet("/wiki/v2/spaces", userToken);
    if (userSpacesRes.code === 0) {
      const spaces = userSpacesRes.data?.items ?? [];
      if (spaces.length === 0) {
        console.log("    (no spaces returned for this user)");
      } else {
        spaces.forEach((s) => console.log(`    ✓ ${s.name} (${s.space_id})`));
      }
    } else {
      console.warn("    ✗", userSpacesRes.code, userSpacesRes.msg);
    }
  }

  console.log("\n=== Done ===");
}

main().catch((e) => { console.error(e); process.exit(1); });
