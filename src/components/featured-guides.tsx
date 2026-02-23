"use client";

import Link from "next/link";
import { FadeUp } from "./animated-text";
import { guides } from "@/data/guides";
import { getTypeIcon, getTypeColor } from "@/lib/guide-utils";

const featured = guides.filter((g) => g.isFeatured).slice(0, 8);

export function FeaturedGuides() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <FadeUp>
              <span className="text-sm font-mono text-accent tracking-widest uppercase">
                Featured
              </span>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                精选指南
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                编辑精选的高质量 OpenClaw 学习资源
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={300}>
            <Link
              href="/guides"
              className="group inline-flex items-center gap-2 text-base text-accent hover:text-accent/80 transition-colors"
            >
              <span>{"查看全部指南"}</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((guide, i) => (
            <FadeUp key={guide.id} delay={i * 80}>
              <a
                href={guide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 card-glow transition-all duration-300 h-full"
              >
                {/* Type badge */}
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono font-medium tracking-wide ${getTypeColor(guide.type)}`}
                  >
                    <span>{getTypeIcon(guide.type)}</span>
                    {guide.type}
                  </span>
                  <span className="text-xs text-muted-foreground/60 font-mono">
                    {guide.language === "Chinese" ? "中文" : "EN"}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                  {guide.name}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                  {guide.description}
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs lg:text-sm text-muted-foreground/50 font-mono">
                    {guide.platform}
                  </span>
                  <svg
                    className="h-4 w-4 text-muted-foreground/30 group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

        {/* Bottom link */}
        <FadeUp delay={400}>
          <div className="mt-10 text-center">
            <p className="text-sm lg:text-base text-muted-foreground">
              {"持续更新中 \u00B7 "}
              <a
                href="https://github.com/nicepkg/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {"欢迎提交 PR 补充资源"}
              </a>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
