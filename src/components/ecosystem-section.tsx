"use client";

import { FadeUp } from "./animated-text";

const ecosystem = [
  {
    name: "入行 365 官网",
    desc: "入行从这里开始",
    href: "https://ruhang365.cn",
    tag: "主站",
  },
  {
    name: "入行日报",
    desc: "每日精选行业资讯",
    href: "https://daily.ruhang365.cn",
    tag: "资讯",
  },
  {
    name: "入行之路",
    desc: "系统化学习路径",
    href: "https://rhzl.ruhang365.cn",
    tag: "学习",
  },
  {
    name: "什么值得用",
    desc: "工具推荐与评测",
    href: "https://smzdy.ruhang365.cn",
    tag: "工具",
  },
  {
    name: "AI 订阅后悔药",
    desc: "AI 订阅省钱指南",
    href: "https://sub.ruhang365.cn",
    tag: "省钱",
  },
  {
    name: "Agent 学习",
    desc: "AI Agent 学习中心",
    href: "https://adpc.ruhang365.cn",
    tag: "Agent",
  },
  {
    name: "OpenClaw Skills",
    desc: "Skills 技能集合",
    href: "https://botskills.ruhang365.cn",
    tag: "Skills",
  },
  {
    name: "AiCoding 指南",
    desc: "AI 辅助编程指南",
    href: "https://ruhangcodeguide.ruhang365.cn",
    tag: "Coding",
  },
];

export function EcosystemSection() {
  return (
    <section className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              Ecosystem
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              {"入行 365 生态"}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-balance">
              BotGuide 是入行 365 生态的重要一环，与其他产品紧密协同
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ecosystem.map((item, i) => (
            <FadeUp key={item.href} delay={i * 60}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 card-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-mono font-medium text-accent border border-accent/20">
                    {item.tag}
                  </span>
                  <svg
                    className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
