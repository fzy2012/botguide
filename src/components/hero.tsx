"use client";

import Link from "next/link";
import { ParticleField } from "./particle-field";
import { AnimatedTitle, FadeUp, AnimatedCounter } from "./animated-text";
import { guides } from "@/data/guides";

const totalGuides = guides.length;
const cnGuides = guides.filter((g) => g.language === "Chinese").length;
const enGuides = guides.filter((g) => g.language === "English").length;
const types = new Set(guides.map((g) => g.type)).size;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <ParticleField />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <FadeUp delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-medium text-accent font-mono tracking-wide">
              {"入行 365 出品 \u00B7 收录 " + totalGuides + " 篇精选资源"}
            </span>
          </div>
        </FadeUp>

        <AnimatedTitle
          text="BotGuide"
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight gradient-text mb-6"
          delay={200}
        />

        <FadeUp delay={600}>
          <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-semibold mt-4 mb-4 text-balance">
            {"AI Agent 学习指南，一站式掌握"}
          </p>
        </FadeUp>

        <FadeUp delay={800}>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
            {"入行 365 旗下 AI Agent 知识库，精选全网优质教程、工具与实战资源"}
          </p>
        </FadeUp>

        <FadeUp delay={1000}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guides"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-accent px-10 py-4 text-base font-semibold text-accent-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            >
              <span>{"开始探索"}</span>
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
              <svg className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={1200}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "精选资源", value: totalGuides, suffix: "+" },
              { label: "中文资源", value: cnGuides, suffix: "" },
              { label: "英文资源", value: enGuides, suffix: "" },
              { label: "内容分类", value: types, suffix: " 个" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent font-mono">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm md:text-base text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-muted-foreground/50 font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
}
