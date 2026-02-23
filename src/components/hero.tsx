"use client";

import Link from "next/link";
import { ParticleField } from "./particle-field";
import { AnimatedTitle, FadeUp, AnimatedCounter } from "./animated-text";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Particle background */}
      <ParticleField />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <FadeUp delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-medium text-accent font-mono tracking-wide">
              {"开源免费 \u00B7 收录 293+ 篇教程资源"}
            </span>
          </div>
        </FadeUp>

        {/* Title */}
        <AnimatedTitle
          text="OpenClaw 101"
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight gradient-text mb-6"
          delay={200}
        />

        <FadeUp delay={600}>
          <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-semibold mt-4 mb-4 text-balance">
            {"从零开始，7天掌握你的 AI 私人助理"}
          </p>
        </FadeUp>

        <FadeUp delay={800}>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
            {"The open-source guide to building your AI assistant with OpenClaw"}
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={1000}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guides"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-accent px-10 py-4 text-base font-semibold text-accent-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            >
              <span>{"开始学习"}</span>
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
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
            <Link
              href="/guides"
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-10 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <span>{"浏览资源"}</span>
            </Link>
            <a
              href="https://github.com/nicepkg/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-10 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </FadeUp>

        {/* Stats bar */}
        <FadeUp delay={1200}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "教程收录", value: 293, suffix: "+" },
              { label: "学习路径", value: 7, suffix: " 天" },
              { label: "GitHub Stars", value: 145, suffix: "k+" },
              { label: "开源免费", value: 100, suffix: "%" },
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

      {/* Bottom gradient scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-muted-foreground/50 font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
}
