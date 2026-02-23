import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenClaw 指南 | BotGuide - 入行 365",
  description:
    "OpenClaw AI Agent 全面指南集合 - 从入门教程到高级开发，一站式掌握 OpenClaw 生态。入行 365 旗下产品。",
  keywords: ["OpenClaw", "AI Agent", "入行365", "BotGuide", "教程", "指南"],
};

export const viewport: Viewport = {
  themeColor: "#06080d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-overlay`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
