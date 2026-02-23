"use client";

import Link from "next/link";
import { FadeUp } from "./animated-text";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Contribute Block */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 mb-20">
        <FadeUp>
          <div className="rounded-2xl border border-border bg-card p-10 lg:p-14 text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {"一起让 OpenClaw 101 变得更好"}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
              {"发现了好教程？写了使用心得？做了有趣的技能？提一个 PR，你的贡献将帮助更多人。"}
            </p>
            <a
              href="https://github.com/nicepkg/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border border-border bg-background px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>{"Star & Fork on GitHub"}</span>
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Main CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
            {"准备好开启你的"}
            <br />
            <span className="gradient-text">{"AI Agent 之旅"}</span>
            {"了吗？"}
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 text-balance">
            {"加入入行 365 社区，获取更多实战教程、项目跟练和专属工具支持"}
          </p>
        </FadeUp>

        <FadeUp delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guides"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-accent px-10 py-4 text-base font-semibold text-accent-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            >
              <span>{"开始探索指南"}</span>
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
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
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-10 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
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
