"use client";

import { FadeUp } from "./animated-text";

const days = [
  {
    day: 1,
    title: "初识 OpenClaw",
    desc: "了解 AI 私人助理的真正含义，以及 OpenClaw 能为你做什么。",
    icon: "\uD83D\uDC4B",
  },
  {
    day: 2,
    title: "深入对话",
    desc: "掌握与 AI 助理对话的技巧，让沟通更高效、更自然。",
    icon: "\uD83D\uDCAC",
  },
  {
    day: 3,
    title: "文件与代码",
    desc: "让 AI 助理帮你处理文件、写代码、执行脚本。",
    icon: "\uD83D\uDCC1",
  },
  {
    day: 4,
    title: "网络能力",
    desc: "搜索、抓取、API 调用，让 AI 助理连接互联网。",
    icon: "\uD83C\uDF10",
  },
  {
    day: 5,
    title: "技能扩展",
    desc: "安装社区技能，让 AI 助理学会更多能力。",
    icon: "\uD83E\uDDE9",
  },
  {
    day: 6,
    title: "自动化",
    desc: "定时任务、心跳检测、主动推送，让 AI 助理自主工作。",
    icon: "\u23F0",
  },
  {
    day: 7,
    title: "高级技巧",
    desc: "多 Agent、浏览器控制、设备联动，解锁全部潜力。",
    icon: "\uD83D\uDE80",
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
              Learning Path
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              {"7天学习路径"}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {"从入门到进阶，每天一个主题，循序渐进掌握 OpenClaw 的全部能力。"}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {days.map((day, i) => (
            <FadeUp key={day.day} delay={i * 80}>
              <div className="group relative rounded-2xl border border-border bg-card p-7 lg:p-8 card-glow transition-all duration-300 h-full flex flex-col">
                {/* Day badge + icon row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl lg:text-4xl">{day.icon}</span>
                  <span className="inline-flex items-center rounded-lg bg-accent/10 px-3 py-1 text-xs font-mono font-semibold text-accent border border-accent/20">
                    DAY {day.day}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
                  {day.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed flex-1">
                  {day.desc}
                </p>

                {/* Link */}
                <div className="mt-5">
                  <span className="inline-flex items-center gap-1.5 text-sm text-accent group-hover:gap-2.5 transition-all duration-300 cursor-pointer">
                    {"查看详情"}
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
