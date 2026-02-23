import type { Metadata } from "next";
import { GuidesClient } from "@/components/guides-client";

export const metadata: Metadata = {
  title: "指南库 | OpenClaw 指南 - BotGuide",
  description:
    "浏览全部 OpenClaw 学习资源，按类型、语言、平台筛选，快速找到你需要的指南。",
};

export default function GuidesPage() {
  return <GuidesClient />;
}
