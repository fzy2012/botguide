/**
 * Quick smoke-test for Feishu credentials and wiki node retrieval.
 * Run: node scripts/test-feishu.mjs
 */

import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env.local manually (no dotenv dep needed)
const envFile = resolve(process.cwd(), ".env.local");
try {
  const lines = readFileSync(envFile, "utf8").split("\n");
  for (const line of lines) {
    const [key, ...rest] = line.split("=");
    if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
  }
} catch {
  console.warn("No .env.local found, using existing env vars.");
}

const FEISHU_BASE_URL = "https://open.feishu.cn/open-apis";
// Set FEISHU_WIKI_NODE_TOKEN in .env.local to your ntn_* wiki node token
const NODE_TOKEN = process.env.FEISHU_WIKI_NODE_TOKEN;

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
  if (data.code !== 0) throw new Error(`Auth failed: ${data.msg}`);
  return data.tenant_access_token;
}

async function feishuGet(path, token) {
  const res = await fetch(`${FEISHU_BASE_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
  const json = await res.json();
  return json;
}

async function main() {
  console.log("=== Feishu Integration Test ===\n");
  console.log("App ID:", process.env.FEISHU_APP_ID);

  if (!NODE_TOKEN) {
    console.error("Set FEISHU_WIKI_NODE_TOKEN in .env.local and re-run.");
    process.exit(1);
  }

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

  // 2. Try fetching wiki node with tenant token
  console.log(`\n[2] Fetching wiki node (tenant token): ${NODE_TOKEN}`);
  const tenantNodeRes = await feishuGet(
    `/wiki/v2/spaces/get_node?token=${encodeURIComponent(NODE_TOKEN)}`,
    tenantToken
  );
  if (tenantNodeRes.code === 0) {
    const node = tenantNodeRes.data.node;
    console.log("    ✓ Node title:", node.title);
    console.log("      obj_type:", node.obj_type);
    console.log("      obj_token:", node.obj_token);
    console.log("      space_id:", node.space_id);

    // 3. Fetch document content
    if (node.obj_type === "docx" || node.obj_type === "doc") {
      console.log("\n[3] Fetching document content...");
      const docRes = await feishuGet(
        `/docx/v1/documents/${node.obj_token}/raw_content`,
        tenantToken
      );
      if (docRes.code === 0) {
        const preview = docRes.data.content.slice(0, 300).replace(/\n/g, " ");
        console.log("    ✓ Content preview:", preview + (docRes.data.content.length > 300 ? "..." : ""));
      } else {
        console.warn("    ✗ Doc fetch failed:", docRes.code, docRes.msg);
      }
    }
  } else {
    console.warn("    ✗ Tenant token failed:", tenantNodeRes.code, tenantNodeRes.msg);

    // 3. Retry with user access token
    const userToken = process.env.FEISHU_USER_ACCESS_TOKEN;
    if (userToken) {
      console.log("\n[3] Retrying with user access token...");
      const userNodeRes = await feishuGet(
        `/wiki/v2/spaces/get_node?token=${encodeURIComponent(NODE_TOKEN)}`,
        userToken
      );
      if (userNodeRes.code === 0) {
        const node = userNodeRes.data.node;
        console.log("    ✓ Node title:", node.title);
        console.log("      obj_type:", node.obj_type);
        console.log("      obj_token:", node.obj_token);

        if (node.obj_type === "docx" || node.obj_type === "doc") {
          console.log("\n[4] Fetching document content with user token...");
          const docRes = await feishuGet(
            `/docx/v1/documents/${node.obj_token}/raw_content`,
            userToken
          );
          if (docRes.code === 0) {
            const preview = docRes.data.content.slice(0, 300).replace(/\n/g, " ");
            console.log("    ✓ Content preview:", preview + (docRes.data.content.length > 300 ? "..." : ""));
          } else {
            console.warn("    ✗ Doc fetch failed:", docRes.code, docRes.msg);
          }
        }
      } else {
        console.error("    ✗ User token also failed:", userNodeRes.code, userNodeRes.msg);
      }
    }
  }

  console.log("\n=== Done ===");
}

main().catch((e) => { console.error(e); process.exit(1); });
