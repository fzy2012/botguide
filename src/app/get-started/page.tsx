import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "开始使用 OpenClaw | BotGuide - 入行 365",
  description:
    "OpenClaw 快速入门指南：选择部署方式、配置 AI 模型、连接聊天平台，一步步搭建你的 AI 助理。",
};

const deployOptions = [
  {
    id: "cloud-cn",
    badge: "新手推荐",
    badgeStyle: "bg-accent/10 text-accent border border-accent/30",
    title: "国内云平台一键部署",
    desc: "阿里云、腾讯云提供轻量服务器一键部署模板，点几下鼠标即可运行，无需命令行经验。",
    pros: ["无需会用命令行", "国内网络稳定", "有官方图文教程"],
    guides: [
      {
        label: "阿里云轻量服务器一键部署",
        href: "https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw",
      },
      {
        label: "腾讯云 Lighthouse 一键部署 + 飞书配置",
        href: "https://cloud.tencent.com/developer/article/2625073",
      },
      {
        label: "阿里云一键秒级部署全攻略",
        href: "https://developer.aliyun.com/article/1709761",
      },
    ],
  },
  {
    id: "local",
    badge: "有一定技术基础",
    badgeStyle: "bg-muted text-muted-foreground border border-border",
    title: "本地部署（Mac / Linux）",
    desc: "在自己的电脑上运行 OpenClaw，适合想折腾本地模型（Ollama）或有一定技术背景的用户。",
    pros: ["数据本地可控", "可对接本地 AI 模型", "完全免费（无需云服务器）"],
    guides: [
      {
        label: "ClawdBot 一键安装脚本（Mac/Linux）",
        href: "https://github.com/miaoxworld/ClawdBotInstaller",
      },
      {
        label: "OpenClaw + Ollama 本地运行指南",
        href: "https://codersera.com/blog/openclaw-ollama-setup-guide-run-local-ai-agents-2026",
      },
      {
        label: "零度解说：本地部署 + 聊天软件对接（B站）",
        href: "https://www.bilibili.com/video/BV1vz6nBmEA3/",
      },
    ],
  },
  {
    id: "vps-intl",
    badge: "国际 VPS",
    badgeStyle: "bg-muted text-muted-foreground border border-border",
    title: "VPS + Docker 部署",
    desc: "在 DigitalOcean、Hetzner、Hostinger 等 VPS 上用 Docker 部署，适合需要国际线路或有 VPS 使用经验的用户。",
    pros: ["成本可控", "Docker 一键启动", "有多平台教程"],
    guides: [
      {
        label: "DigitalOcean 官方部署教程",
        href: "https://www.digitalocean.com/community/tutorials/how-to-run-openclaw",
      },
      {
        label: "Hostinger VPS Docker 一键部署",
        href: "https://www.hostinger.com/support/how-to-install-openclaw-on-hostinger-vps/",
      },
      {
        label: "YouTube: Full VPS + Docker Setup",
        href: "https://www.youtube.com/watch?v=Gc4fyY0_8Rc",
      },
    ],
  },
];

const afterDeploySteps = [
  {
    step: 2,
    title: "配置 AI 模型",
    desc: "OpenClaw 本身不内置 AI，你需要接入一个 AI 模型的 API Key。推荐新手从 DeepSeek 开始，注册即有免费额度。",
    tip: "在 OpenClaw 设置 → 模型 中填入 API Key 即可。支持 OpenAI、DeepSeek、Claude、Gemini、Ollama 等几乎所有主流模型。",
    links: [
      { label: "获取 DeepSeek API Key（推荐）", href: "https://platform.deepseek.com/api_keys", primary: true },
      { label: "查看所有支持的模型", href: "https://docs.openclaw.ai/models", primary: false },
    ],
  },
  {
    step: 3,
    title: "连接你的聊天平台",
    desc: "OpenClaw 支持通过飞书、钉钉、企业微信、Telegram 等平台使用，配置完成后可在对话框里直接调用 AI 助理。",
    tip: "新手建议先接飞书或钉钉，两者都有官方图文教程，配置步骤最详细。",
    links: [
      { label: "飞书机器人接入教程", href: "https://cloud.tencent.com/developer/article/2625073", primary: true },
      { label: "钉钉接入教程", href: "https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw", primary: false },
    ],
  },
  {
    step: 4,
    title: "安装技能（Skills）",
    desc: "技能是 OpenClaw 的扩展插件，让你的助理具备联网搜索、读写文件、发邮件等能力。在 ClawHub 技能市场浏览和安装。",
    tip: "推荐先装「Web Search」技能，让助理可以联网查实时信息。",
    links: [
      { label: "浏览 ClawHub 技能市场", href: "https://clawhub.com", primary: true },
    ],
  },
];

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
              Getting Started
            </span>
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
            开始使用 OpenClaw
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
            OpenClaw 是自托管的 AI 助理平台，没有安装包。
            <br />
            选一种部署方式，跟着对应教程操作即可。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 pb-24 lg:pb-32 space-y-8">

        {/* Step 1: Choose deploy method */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-lg font-bold font-mono text-accent">
              1
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-foreground">选择部署方式</h2>
              <p className="text-sm text-muted-foreground mt-0.5">三种方式，根据你的情况选一种即可</p>
            </div>
          </div>

          <div className="space-y-4">
            {deployOptions.map((opt) => (
              <div key={opt.id} className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-foreground">{opt.title}</h3>
                      <span className={`inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-mono ${opt.badgeStyle}`}>
                        {opt.badge}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{opt.desc}</p>

                  {/* Pros */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {opt.pros.map((pro) => (
                      <span key={pro} className="inline-flex items-center gap-1.5 rounded-lg bg-background border border-border px-3 py-1 text-xs text-muted-foreground">
                        <span className="text-accent">✓</span>
                        {pro}
                      </span>
                    ))}
                  </div>

                  {/* Guides */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-3">对应教程</p>
                    {opt.guides.map((g, i) => (
                      <a
                        key={i}
                        href={g.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                      >
                        <span className="group-hover:text-accent transition-colors duration-200">{g.label}</span>
                        <svg className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-mono text-muted-foreground/50">部署完成后继续</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Steps 2-4 */}
        <div className="space-y-5">
          {afterDeploySteps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="flex items-start gap-5 p-6 lg:p-8 pb-4 lg:pb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-lg font-bold font-mono text-accent">
                  {s.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg lg:text-xl font-bold text-foreground mb-2">{s.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>

              <div className="px-6 lg:px-8 pb-4 lg:pb-5">
                <div className="flex items-start gap-3 rounded-xl bg-accent/5 border border-accent/10 px-4 py-3.5">
                  <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zM10 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  </svg>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.tip}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 px-6 lg:px-8 pb-6 lg:pb-8">
                {s.links.map((l) =>
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                      l.primary
                        ? "bg-accent text-accent-foreground hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
                        : "border border-border bg-background text-foreground hover:border-accent/30 hover:bg-accent/5"
                    }`}
                  >
                    {l.label}
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Done! */}
        <div className="rounded-2xl border border-border bg-card p-7 lg:p-9 text-center">
          <div className="text-3xl mb-4">🎉</div>
          <h2 className="text-xl font-bold text-foreground mb-2">搭好了！下一步做什么？</h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            {"OpenClaw 玩法很多，BotGuide 整理了 200+ 篇教程，按学习路线系统进阶。"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all duration-200"
            >
              浏览指南库
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/#learning-path"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-2.5 text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
            >
              查看学习路线
            </Link>
            <a
              href="https://discord.com/invite/clawd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-2.5 text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
            >
              加入 Discord 社区
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Trouble? */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {"遇到问题？查看 "}
            <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              官方文档
            </a>
            {" · "}
            <Link href="/guides?type=Tutorial" className="text-accent hover:underline">
              安装教程合集
            </Link>
            {" · "}
            <a href="https://github.com/openclaw/openclaw/issues" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              GitHub Issues
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
