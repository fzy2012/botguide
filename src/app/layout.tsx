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
  title: "BotGuide - AI Agent 学习指南 | 入行 365",
  description:
    "入行 365 旗下 AI Agent 知识库，精选全网优质教程、工具与实战资源，从入门到精通一站式学习。",
  keywords: ["AI Agent", "入行365", "BotGuide", "教程", "指南", "学习路线"],
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
