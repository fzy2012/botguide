"use client";

import Link from "next/link";
import { FadeUp } from "./animated-text";

const steps = [
  {
    step: 1,
    title: "安装 OpenClaw",
    desc: "OpenClaw 是自托管平台，根据你的情况选择部署方式，跟着对应教程一步步操作。",
    href: "/get-started",
    external: false,
    cta: "查看安装指南",
    accent: true,
  },
  {
    step: 2,
    title: "浏览指南库",
    desc: "从 242+ 篇精选资源中，按分类、语言快速找到你需要的教程、文档和实战案例。",
    href: "/guides",
    external: false,
    cta: "进入指南库",
    accent: false,
  },
  {
    step: 3,
    title: "按路线学习",
    desc: "跟随 BotGuide 规划的 6 大模块学习路线，从基础到进阶，系统掌握 AI Agent 全栈能力。",
    href: "/#learning-path",
    external: false,
    cta: "查看路线",
    accent: false,
  },
];

export function OnboardingSteps() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <FadeUp>
            <span className="text-sm font-mono text-accent tracking-widest uppercase">
              Quick Start
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
              {"三步开始你的 AI Agent 之旅"}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              {"从安装到上手，最快 5 分钟入门，配合 BotGuide 精选资源快速进阶"}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-accent/30 via-accent/20 to-accent/30 pointer-events-none" />

          {steps.map((s, i) => (
            <FadeUp key={s.step} delay={i * 120}>
              {s.external ? (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col rounded-2xl border p-8 lg:p-9 card-glow transition-all duration-300 h-full ${
                    s.accent
                      ? "border-accent/40 bg-accent/5 hover:border-accent/60 hover:bg-accent/8"
                      : "border-border bg-card hover:border-accent/20"
                  }`}
                >
                  <StepContent step={s} />
                </a>
              ) : (
                <Link
                  href={s.href}
                  className={`group relative flex flex-col rounded-2xl border p-8 lg:p-9 card-glow transition-all duration-300 h-full ${
                    s.accent
                      ? "border-accent/40 bg-accent/5 hover:border-accent/60 hover:bg-accent/8"
                      : "border-border bg-card hover:border-accent/20"
                  }`}
                >
                  <StepContent step={s} />
                </Link>
              )}
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepContent({ step }: { step: typeof steps[number] }) {
  return (
    <>
      {/* Step number */}
      <div className="flex items-center justify-between mb-6">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold font-mono transition-colors duration-300 ${
            step.accent
              ? "bg-accent text-accent-foreground"
              : "bg-accent/10 text-accent group-hover:bg-accent/15"
          }`}
        >
          {step.step}
        </div>
        {step.step === 1 && (
          <span className="inline-flex items-center rounded-lg bg-accent/10 px-2.5 py-1 text-xs font-mono font-semibold text-accent border border-accent/20">
            {"从这里开始"}
          </span>
        )}
      </div>

      <h3 className={`text-xl lg:text-2xl font-bold mb-3 transition-colors duration-200 ${
        step.accent ? "text-accent" : "text-foreground group-hover:text-accent"
      }`}>
        {step.title}
      </h3>
      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed flex-1 mb-6">
        {step.desc}
      </p>

      <div className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3 ${
        step.accent ? "text-accent" : "text-accent"
      }`}>
        {step.cta}
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {step.external ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          )}
        </svg>
      </div>
    </>
  );
}
