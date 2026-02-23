"use client";

import Link from "next/link";
import { ParticleField } from "./particle-field";
import { AnimatedTitle, FadeUp } from "./animated-text";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Particle background */}
      <ParticleField />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <FadeUp delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-accent font-mono tracking-wide">
              {"入行 365 旗下产品"}
            </span>
          </div>
        </FadeUp>

        {/* Title */}
        <AnimatedTitle
          text="OpenClaw 指南"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text mb-4"
          delay={200}
        />

        <FadeUp delay={600}>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mt-4 mb-2 text-balance">
            AI Agent 全面指南集合
          </p>
        </FadeUp>

        <FadeUp delay={800}>
          <p className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            从入门教程到高级开发，从部署指南到平台集成 ——
            一站式掌握 OpenClaw 生态，让你的 AI Agent 之旅不走弯路。
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={1000}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guides"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            >
              <span>浏览指南库</span>
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
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
              <span className="text-muted-foreground text-xs font-mono">150k+</span>
            </a>
          </div>
        </FadeUp>

        {/* Stats bar */}
        <FadeUp delay={1200}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { label: "精选指南", value: "250+" },
              { label: "涵盖类型", value: "10+" },
              { label: "持续更新", value: "每周" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-foreground font-mono">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Bottom gradient scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-muted-foreground/50 font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
}
