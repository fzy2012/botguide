import Link from "next/link";

const ecosystem = [
  { label: "入行 365 官网", href: "https://ruhang365.cn" },
  { label: "入行日报", href: "https://daily.ruhang365.cn" },
  { label: "入行之路", href: "https://rhzl.ruhang365.cn" },
  { label: "什么值得用", href: "https://smzdy.ruhang365.cn" },
  { label: "个人中心", href: "https://ruhangcenter.ruhang365.cn" },
];

const tools = [
  { label: "AI 订阅后悔药", href: "https://sub.ruhang365.cn" },
  { label: "Agent 学习", href: "https://adpc.ruhang365.cn" },
  { label: "BotSkills 集合", href: "https://botskills.ruhang365.cn" },
  { label: "BotGuide 指南", href: "https://botguide.ruhang365.cn" },
  { label: "AiCoding 指南", href: "https://ruhangcodeguide.ruhang365.cn" },
];

const resources = [
  { label: "BotGuide 指南库", href: "/guides" },
  { label: "学习路线图", href: "/#learning-path" },
  { label: "GitHub 仓库", href: "https://github.com/fzy2012/botguide" },
  { label: "入行 365 社区", href: "https://ruhang365.cn" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-accent"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">
                  BotGuide
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  AI Agent 学习指南
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {"入行 365 旗下 AI Agent 知识库，精选全网优质教程、工具与实战资源，助你快速掌握 AI Agent 开发与应用。"}
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
              {"入行 365 生态"}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {ecosystem.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
              工具与指南
            </h3>
            <ul className="flex flex-col gap-2.5">
              {tools.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
              快速导航
            </h3>
            <ul className="flex flex-col gap-2.5">
              {resources.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground/60">
            {"© 2017-2026 入行 365 (Ruhang365). All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://ruhang365.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/60 hover:text-accent transition-colors"
            >
              ruhang365.cn
            </a>
            <span className="text-muted-foreground/30">|</span>
            <a
              href="https://botguide.ruhang365.cn"
              className="text-xs text-muted-foreground/60 hover:text-accent transition-colors"
            >
              botguide.ruhang365.cn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
