"use client";

import { FadeUp } from "./animated-text";

const modules = [
  {
    step: 1,
    title: "AI Agent 入门",
    desc: "理解什么是 AI Agent，了解主流平台和工具，建立整体认知框架。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "对话与交互",
    desc: "学习 Prompt 工程、对话设计和上下文管理，让 Agent 更懂你。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "工具与集成",
    desc: "掌握 Function Calling、API 对接和第三方服务集成。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 010-3.18L11.42 1.79m5.16 13.38l5.1-5.1a2.25 2.25 0 000-3.18L16.58 1.79M9 21h6" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "多 Agent 协作",
    desc: "了解多 Agent 系统、任务分发与协作模式，构建复杂工作流。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "部署与运维",
    desc: "本地部署、云端运行、Docker 容器化，让你的 Agent 稳定上线。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    step: 6,
    title: "实战进阶",
    desc: "真实项目案例分析、性能优化、安全最佳实践，成为 Agent 专家。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export function LearningPath() {
  return (
    <section id="learning-path" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-sm font-mono text-accent tracking-widest uppercase">
              Learning Roadmap
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              {"学习路线图"}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {"BotGuide 为你规划 6 大模块，从基础到进阶，系统掌握 AI Agent 全栈能力。"}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <FadeUp key={mod.step} delay={i * 80}>
              <div className="group relative rounded-2xl border border-border bg-card p-7 lg:p-8 card-glow transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/15 transition-colors duration-300">
                    {mod.icon}
                  </div>
                  <span className="inline-flex items-center rounded-lg bg-accent/10 px-3 py-1 text-xs font-mono font-semibold text-accent border border-accent/20">
                    {"STEP " + mod.step}
                  </span>
                </div>

                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
                  {mod.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed flex-1">
                  {mod.desc}
                </p>

                <div className="mt-5">
                  <span className="inline-flex items-center gap-1.5 text-sm text-accent group-hover:gap-2.5 transition-all duration-300 cursor-pointer">
                    {"浏览相关指南"}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
