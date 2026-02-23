"use client";

import Link from "next/link";
import { FadeUp } from "./animated-text";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 mb-8">
            <span className="text-xs font-medium text-accent font-mono">
              {"限时免费加入"}
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6 text-balance">
            准备好开启你的
            <br />
            <span className="gradient-text">AI Agent 之旅</span>
            了吗？
          </h2>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="text-muted-foreground text-lg mb-10 text-balance">
            加入入行 365 社区，获取更多实战教程、项目跟练和专属工具支持
          </p>
        </FadeUp>

        <FadeUp delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guides"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            >
              <span>开始探索指南</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://ruhang365.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
            >
              <span>{"了解入行 365"}</span>
              <svg
                className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
