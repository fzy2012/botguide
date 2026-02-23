"use client";

import { FadeUp } from "./animated-text";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 lg:h-8 lg:w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "全面的指南收录",
    description: "覆盖官方文档、社区教程、视频讲解、部署指南等多维度内容，不断更新。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 lg:h-8 lg:w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "智能分类筛选",
    description: "按类型、语言、平台多维度筛选，快速找到你需要的学习资源。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 lg:h-8 lg:w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "精选推荐",
    description: "每篇指南经过筛选和标注，精选内容一目了然，让你少走弯路。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 lg:h-8 lg:w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.07-9.07l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
      </svg>
    ),
    title: "生态互联",
    description: "作为入行 365 生态的一环，与 AI 订阅、Skills 集合、Agent 学习等工具无缝衔接。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 lg:h-8 lg:w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "中英双语",
    description: "同时收录中文和英文资源，跨越语言障碍，获取全球优质内容。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 lg:h-8 lg:w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "开发者友好",
    description: "Skill 开发、API 集成、本地部署...覆盖开发者所需的一切技术资源。",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-sm font-mono text-accent tracking-widest uppercase">
              Features
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              为什么选择 BotGuide
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {"不只是链接收藏，而是经过精心分类和标注的 AI Agent 学习路线图"}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeUp key={feature.title} delay={i * 100}>
              <div className="group relative rounded-2xl border border-border bg-card p-8 lg:p-10 card-glow transition-all duration-300 h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent mb-6 group-hover:bg-accent/15 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
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
