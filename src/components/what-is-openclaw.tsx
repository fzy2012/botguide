"use client";

import { FadeUp } from "./animated-text";

const features = [
  {
    icon: "\uD83E\uDDE0",
    title: "全平台接入",
    description:
      "Telegram、Discord、WhatsApp、Signal 等多平台无缝连接，随时随地与你的 AI 助理对话。",
  },
  {
    icon: "\u26A1",
    title: "技能扩展",
    description:
      "1000+ 社区技能，从天气查询到代码生成，一键安装即用。",
  },
  {
    icon: "\uD83D\uDD12",
    title: "数据自主",
    description:
      "完全自托管，数据存储在你自己的服务器上，隐私和安全尽在掌握。",
  },
];

export function WhatIsOpenClaw() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="about">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-sm font-mono text-accent tracking-widest uppercase">
              About
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              {"什么是 OpenClaw？"}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              {"OpenClaw 是一个开源 AI 助理平台，让你拥有一个 24/7 在线的私人 AI 助理。它能理解你、帮助你、为你执行任务。"}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <FadeUp key={feature.title} delay={i * 120}>
              <div className="group relative rounded-2xl border border-border bg-card p-8 lg:p-10 card-glow transition-all duration-300 h-full">
                <div className="text-4xl lg:text-5xl mb-6">{feature.icon}</div>
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

        {/* GitHub CTA */}
        <FadeUp delay={500}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/nicepkg/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 card-glow"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>{"145k+ Stars on GitHub"}</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
