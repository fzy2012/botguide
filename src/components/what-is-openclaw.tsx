"use client";

import { FadeUp } from "./animated-text";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "体系化学习路径",
    description:
      "从 AI Agent 基础概念到高级应用，BotGuide 为你规划清晰的学习路线，告别碎片化学习。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "全网精选聚合",
    description:
      "从 Bilibili、CSDN 到 DigitalOcean、Medium，聚合中英文全网优质 AI Agent 教程与实战文章。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.07-9.07l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
      </svg>
    ),
    title: "入行 365 生态互联",
    description:
      "与入行日报、Agent 学习、AiCoding 指南等产品深度联动，构建完整的 AI 学习生态。",
  },
];

export function WhyBotGuide() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="about">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-sm font-mono text-accent tracking-widest uppercase">
              About BotGuide
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              {"为什么需要 BotGuide？"}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              {"AI Agent 生态资源分散、质量参差不齐。BotGuide 帮你筛选、分类、整理，让学习高效又有条理。"}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <FadeUp key={feature.title} delay={i * 120}>
              <div className="group relative rounded-2xl border border-border bg-card p-8 lg:p-10 card-glow transition-all duration-300 h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 mb-6 group-hover:bg-accent/15 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
