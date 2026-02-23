"use client";

import { FadeUp, AnimatedCounter } from "./animated-text";

const categories = [
  { icon: "\uD83C\uDF10", title: "网页 & 前端", count: 46, skills: ["frontend-design", "nextjs-expert", "ui-audit", "remotion-server"] },
  { icon: "\uD83E\uDD16", title: "编程 Agent", count: 55, skills: ["coding-agent", "opencode-acp-control", "claude-team", "skill-creator"] },
  { icon: "\u2601\uFE0F", title: "DevOps & 云", count: 144, skills: ["cloudflare", "docker-essentials", "kubernetes", "coolify"] },
  { icon: "\uD83D\uDD0D", title: "搜索 & 研究", count: 148, skills: ["exa-plus", "deepwiki", "technews", "read-github"] },
  { icon: "\uD83D\uDCC8", title: "营销 & 销售", count: 94, skills: ["seo-audit", "social-content", "email-sequence", "copywriting"] },
  { icon: "\uD83E\uDDE0", title: "AI & 大模型", count: 159, skills: ["kimi-integration", "chatgpt-apps", "chromadb-memory", "agentmemory"] },
  { icon: "\uD83C\uDFE0", title: "智能家居", count: 50, skills: ["homeassistant", "adguard", "emporia-energy", "trmnl"] },
  { icon: "\uD83D\uDDE3\uFE0F", title: "语音 & 音频", count: 44, skills: ["aliyun-tts", "whisper", "azure-ai-voicelive", "speech-to-text"] },
  { icon: "\uD83D\uDCAC", title: "通讯集成", count: 58, skills: ["slack", "discord", "telegram", "smtp-send"] },
  { icon: "\uD83C\uDFCB\uFE0F", title: "健康 & 健身", count: 35, skills: ["workout-logger", "fasting-tracker", "weight-loss", "habit-tracker"] },
  { icon: "\uD83D\uDCDD", title: "笔记 & 知识", count: 61, skills: ["logseq", "obsidian", "notion", "newsletter-digest"] },
  { icon: "\uD83C\uDFAE", title: "游戏", count: 7, skills: ["dnd", "moltpet", "bot-bowl-party", "winamp"] },
];

const stats = [
  { label: "总技能数", value: 1715, suffix: "+", color: "text-orange-400" },
  { label: "分类数", value: 31, suffix: "", color: "text-blue-400" },
  { label: "AI & LLM", value: 159, suffix: "", color: "text-emerald-400" },
  { label: "搜索研究", value: 148, suffix: "", color: "text-violet-400" },
];

export function SkillsShowcase() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-sm font-mono text-accent tracking-widest uppercase">
              {"1715+ 社区技能"}
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              {"精选技能推荐"}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              {"来自 awesome-openclaw-skills 的精选技能，涵盖 31 个分类。一键安装，即刻增强你的 AI 助理能力。"}
            </p>
          </FadeUp>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((cat, i) => (
            <FadeUp key={cat.title} delay={i * 60}>
              <div className="group rounded-2xl border border-border bg-card p-6 lg:p-7 card-glow transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl lg:text-3xl">{cat.icon}</span>
                    <h3 className="text-base lg:text-lg font-semibold text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-2xl lg:text-3xl font-bold text-accent font-mono">
                    {cat.count}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-mono text-muted-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Stats row */}
        <FadeUp delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl border border-border bg-card p-8 lg:p-10 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold font-mono ${stat.color}`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* CLI Install */}
        <FadeUp delay={400}>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
              {"一键安装任意技能"}
            </h3>
            <p className="text-sm lg:text-base text-muted-foreground mb-6">
              {"使用 ClawHub CLI 快速安装"}
            </p>
            <div className="rounded-xl bg-muted/50 border border-border px-6 py-4 font-mono text-sm md:text-base text-accent overflow-x-auto">
              {"npx clawhub@latest install <skill-name>"}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/nicepkg/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-card border border-border px-8 py-3.5 text-base font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>{"浏览完整列表"}</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://clawhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
              >
                <span>{"访问 ClawHub"}</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
