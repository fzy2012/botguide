import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "安装 OpenClaw | BotGuide - 入行 365",
  description:
    "一步步学会安装和配置 OpenClaw，从下载到第一次对话，最快 5 分钟上手。",
};

const steps = [
  {
    step: 1,
    title: "下载 OpenClaw",
    desc: "前往 OpenClaw 官网，选择适合你操作系统的版本下载。支持 Windows、macOS、Linux，也提供命令行一键安装脚本。",
    tag: "必须完成",
    tagStyle: "accent",
    actions: [
      {
        label: "前往下载页面",
        href: "https://openclaw.ai/download",
        primary: true,
        external: true,
      },
      {
        label: "查看 Mac/Linux 脚本安装",
        href: "https://github.com/miaoxworld/ClawdBotInstaller",
        primary: false,
        external: true,
      },
    ],
    tip: "不知道选哪个版本？选「推荐版本」即可，适合大多数用户。",
    details: [
      { icon: "🪟", text: "Windows：下载 .exe 安装包，双击运行" },
      { icon: "🍎", text: "macOS：下载 .dmg 文件，拖入 Applications" },
      { icon: "🐧", text: "Linux：使用安装脚本或下载 .AppImage" },
    ],
  },
  {
    step: 2,
    title: "启动并完成初始配置",
    desc: "安装完成后启动 OpenClaw，首次启动会引导你完成基础设置，整个过程约 2 分钟。",
    tag: "约 2 分钟",
    tagStyle: "default",
    actions: [],
    tip: "如果遇到「无法验证开发者」提示（macOS），在系统设置 → 隐私与安全中点击「仍要打开」。",
    details: [
      { icon: "①", text: "首次启动会自动打开 Web 界面（浏览器）" },
      { icon: "②", text: "创建一个账号或以访客模式继续" },
      { icon: "③", text: "完成界面语言和基础偏好设置" },
    ],
  },
  {
    step: 3,
    title: "连接 AI 模型",
    desc: "OpenClaw 本身不内置 AI，你需要接入一个 AI 模型（API Key）。推荐新手选择 DeepSeek，价格低且效果好。",
    tag: "关键步骤",
    tagStyle: "default",
    actions: [
      {
        label: "获取 DeepSeek API Key（推荐）",
        href: "https://platform.deepseek.com/api_keys",
        primary: true,
        external: true,
      },
      {
        label: "查看所有支持的模型",
        href: "https://docs.openclaw.ai/models",
        primary: false,
        external: true,
      },
    ],
    tip: "DeepSeek 新用户有免费额度，足够用来上手体验。OpenAI / Claude / 其他模型同样支持。",
    details: [
      { icon: "①", text: "在 AI 平台注册账号并创建 API Key" },
      { icon: "②", text: "进入 OpenClaw 设置 → 模型 → 添加新模型" },
      { icon: "③", text: "粘贴 API Key，选择模型版本，点击保存" },
      { icon: "④", text: "回到主界面，发送第一条消息验证是否成功" },
    ],
  },
  {
    step: 4,
    title: "安装你的第一个技能（Skills）",
    desc: "Skills 是 OpenClaw 的扩展插件，能让你的 Agent 具备特定能力，比如联网搜索、读写文件、发送消息等。",
    tag: "可选但推荐",
    tagStyle: "default",
    actions: [
      {
        label: "浏览 ClawHub 技能市场",
        href: "https://clawhub.com",
        primary: true,
        external: true,
      },
    ],
    tip: "推荐新手先安装「Web Search」技能，让 Agent 具备实时搜索能力。",
    details: [
      { icon: "①", text: "打开 OpenClaw 中的「技能市场」入口（或访问 clawhub.com）" },
      { icon: "②", text: "搜索你想要的技能，点击「安装」" },
      { icon: "③", text: "安装完成后在对话中 @技能名 即可调用" },
    ],
  },
  {
    step: 5,
    title: "开始使用！",
    desc: "你已经完成了所有基础设置。现在可以开始和你的 AI Agent 对话，也可以进一步探索自动化工作流和更多玩法。",
    tag: "完成 🎉",
    tagStyle: "success",
    actions: [
      {
        label: "浏览 BotGuide 指南库",
        href: "/guides",
        primary: true,
        external: false,
      },
      {
        label: "查看学习路线",
        href: "/#learning-path",
        primary: false,
        external: false,
      },
    ],
    tip: "遇到问题？查看官方文档或加入 Discord 社区，有数万用户可以帮你解答。",
    details: [
      { icon: "💬", text: "在输入框输入任意问题，开始第一次对话" },
      { icon: "🔧", text: "探索设置面板，根据需要调整 Agent 行为" },
      { icon: "📚", text: "在 BotGuide 找到进阶教程，系统提升技能" },
    ],
  },
];

const tagStyles = {
  accent: "bg-accent/10 text-accent border border-accent/30",
  default: "bg-muted text-muted-foreground border border-border",
  success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              Step by Step
            </span>
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
            安装 OpenClaw
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
            {"5 步完成安装，从下载到第一次对话，全程不超过 10 分钟"}
          </p>

          {/* Progress dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {steps.map((s) => (
              <div key={s.step} className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-accent/30 bg-accent/5 text-xs font-mono text-accent">
                  {s.step}
                </div>
                {s.step < steps.length && (
                  <div className="h-px w-6 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 space-y-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Step header */}
              <div className="flex items-start gap-5 p-7 lg:p-9 pb-5 lg:pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl font-bold font-mono text-accent">
                  {s.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="text-xl lg:text-2xl font-bold text-foreground">
                      {s.title}
                    </h2>
                    <span
                      className={`inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-mono ${
                        tagStyles[s.tagStyle as keyof typeof tagStyles]
                      }`}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Detail steps */}
              <div className="px-7 lg:px-9 pb-5 lg:pb-6">
                <div className="rounded-xl bg-background/50 border border-border/50 divide-y divide-border/50">
                  {s.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-3 px-5 py-3.5">
                      <span className="text-base shrink-0 w-6 text-center">{d.icon}</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{d.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tip */}
              <div className="px-7 lg:px-9 pb-5 lg:pb-6">
                <div className="flex items-start gap-3 rounded-xl bg-accent/5 border border-accent/10 px-5 py-3.5">
                  <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zM10 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  </svg>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.tip}</p>
                </div>
              </div>

              {/* Actions */}
              {s.actions.length > 0 && (
                <div className="flex flex-wrap gap-3 px-7 lg:px-9 pb-7 lg:pb-9">
                  {s.actions.map((a) =>
                    a.external ? (
                      <a
                        key={a.label}
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                          a.primary
                            ? "bg-accent text-accent-foreground hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
                            : "border border-border bg-background text-foreground hover:border-accent/30 hover:bg-accent/5"
                        }`}
                      >
                        {a.label}
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        key={a.label}
                        href={a.href}
                        className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                          a.primary
                            ? "bg-accent text-accent-foreground hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
                            : "border border-border bg-background text-foreground hover:border-accent/30 hover:bg-accent/5"
                        }`}
                      >
                        {a.label}
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Bottom help links */}
          <div className="rounded-2xl border border-border bg-card p-7 lg:p-9 text-center">
            <p className="text-base text-muted-foreground mb-5">
              {"遇到问题？以下资源可以帮助你"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://docs.openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                官方文档
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
              <a
                href="https://discord.com/invite/clawd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                Discord 社区
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
              <a
                href="https://github.com/openclaw/openclaw/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                GitHub Issues
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
              <Link
                href="/guides?type=Tutorial"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                安装教程合集
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
