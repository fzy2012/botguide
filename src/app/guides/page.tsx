import type { Metadata } from "next";
import { GuidesClient } from "@/components/guides-client";

export const metadata: Metadata = {
  title: "指南库 | BotGuide - 入行 365",
  description:
    "浏览全部 AI Agent 学习资源，按类型、语言、平台筛选，快速找到你需要的指南。",
};

export default function GuidesPage() {
  return <GuidesClient />;
}
