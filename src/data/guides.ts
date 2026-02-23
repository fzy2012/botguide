
export type Guide = {
  id: string;
  name: string;
  description: string;
  link: string;
  platform: string;
  language: 'Chinese' | 'English';
  type: string;
  isFeatured: boolean;
  topics: string[];
  addedAt: string;
};

export const guides: Guide[] = [
  {
    "id": "y2mx3szbk",
    "name": "OpenClaw 官方文档",
    "description": "完整的 API 参考、配置指南和架构说明",
    "link": "https://docs.openclaw.ai",
    "platform": "OpenClaw",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "文档",
      "必读"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ldsots0lo",
    "name": "GitHub — openclaw/openclaw",
    "description": "源代码、Issue 跟踪和社区贡献指南 (150k+ ⭐)",
    "link": "https://github.com/openclaw/openclaw",
    "platform": "GitHub",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "源码",
      "开源"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "tdpk8axrv",
    "name": "ClawHub 技能市场",
    "description": "发现、安装和分享 AI 技能插件",
    "link": "https://clawhub.com",
    "platform": "ClawHub",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "技能",
      "市场"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "qmgtes44t",
    "name": "Getting Started — 官方入门指南",
    "description": "从零到第一次对话的最快路径",
    "link": "https://docs.openclaw.ai/start/getting-started",
    "platform": "OpenClaw Docs",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "入门",
      "必读"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "8hyywsm23",
    "name": "Discord 社区",
    "description": "与数万开发者和用户实时交流",
    "link": "https://discord.com/invite/clawd",
    "platform": "Discord",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "社区",
      "讨论"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "3wnbpkab6",
    "name": "OpenClaw — Wikipedia",
    "description": "维基百科词条，了解 OpenClaw 的历史和影响",
    "link": "https://en.wikipedia.org/wiki/OpenClaw",
    "platform": "Wikipedia",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "百科"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "tmtakzziz",
    "name": "ClawHub Skills 仓库",
    "description": "所有已发布技能的源码归档",
    "link": "https://github.com/openclaw/skills",
    "platform": "GitHub",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "技能",
      "源码"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "h364jsqm0",
    "name": "阿里云 — 部署 OpenClaw 构建钉钉 AI 助理",
    "description": "轻量应用服务器一键部署，可视化配置面板接入钉钉",
    "link": "https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw",
    "platform": "阿里云",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": true,
    "topics": [
      "阿里云",
      "钉钉",
      "一键部署"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "kog7feipq",
    "name": "阿里云 — AppFlow 集成企业微信",
    "description": "通过应用连接器将 OpenClaw 与企业微信集成，群聊直接交互",
    "link": "https://help.aliyun.com/zh/simple-application-server/use-cases/openclaw-enterprise-wechat-integration",
    "platform": "阿里云",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "阿里云",
      "企业微信",
      "AppFlow"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "7pw3z3aj2",
    "name": "腾讯云 — OpenClaw 接入飞书保姆级教程",
    "description": "Lighthouse 一键部署 + 飞书机器人全流程配置",
    "link": "https://cloud.tencent.com/developer/article/2625073",
    "platform": "腾讯云",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": true,
    "topics": [
      "腾讯云",
      "飞书",
      "Lighthouse"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "s8u989x2o",
    "name": "腾讯云 — OpenClaw 接入企业微信完全指南",
    "description": "可视化配置面板，几步完成企业微信接入",
    "link": "https://cloud.tencent.com/developer/article/2625147",
    "platform": "腾讯云",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "腾讯云",
      "企业微信"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "vw09apc0l",
    "name": "DigitalOcean — One-Click Deploy OpenClaw",
    "description": "Learn how to deploy OpenClaw using DigitalOcean\\",
    "link": "https://www.digitalocean.com/community/tutorials/how-to-run-openclaw",
    "platform": "DigitalOcean",
    "language": "English",
    "type": "Resource",
    "isFeatured": true,
    "topics": [
      "DigitalOcean",
      "一键部署"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "lqv7vky77",
    "name": "Hostinger — How to Set Up OpenClaw on a Private Server",
    "description": "Step-by-step guide for Hostinger VPS deployment",
    "link": "https://www.hostinger.com/tutorials/how-to-set-up-openclaw",
    "platform": "Hostinger",
    "language": "English",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "Hostinger",
      "VPS"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "7blzzjvxe",
    "name": "OpenClaw 下载安装使用 — 详细图文教程",
    "description": "系统要求、多种安装方式对比、常见问题排查、Web/终端两种界面入门",
    "link": "https://apifox.com/apiskills/openclaw-installation-and-usage-guide/",
    "platform": "Apifox",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "图文",
      "新手友好"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "xfysxava5",
    "name": "小白零基础教程 — 安装 OpenClaw",
    "description": "零基础也能看懂，Telegram 连接详细步骤",
    "link": "https://www.cnblogs.com/gyc567/p/19561281",
    "platform": "博客园",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "零基础",
      "Telegram"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "rkfihk45e",
    "name": "ClawdBot 火爆全网 — 手把手部署 + 钉钉操作",
    "description": "国内用户部署指南，包含踩坑经验和钉钉接入",
    "link": "https://www.53ai.com/news/OpenSourceLLM/2026012862704.html",
    "platform": "53AI",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "部署",
      "钉钉",
      "踩坑"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "5o1o27snc",
    "name": "怎么用上一夜爆火的 Clawdbot — 详细配置教程",
    "description": "实测踩了三个大坑，分享避坑指南",
    "link": "https://news.qq.com/rain/a/20260127A05EEN00",
    "platform": "腾讯新闻",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "避坑",
      "实测"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "nv6ac1npg",
    "name": "Openclaw 安装部署一文详解 + 国产平替方案",
    "description": "产品介绍、官网资源、本地/云端部署四维度全面解析",
    "link": "https://www.ai-indeed.com/article/15272.html",
    "platform": "实在智能",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "全面",
      "平替"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ifh2mdeq1",
    "name": "Codecademy — OpenClaw Installation to First Chat",
    "description": "Structured tutorial from installation to your first conversation",
    "link": "https://www.codecademy.com/article/open-claw-tutorial-installation-to-first-chat-setup",
    "platform": "Codecademy",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Codecademy",
      "结构化"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "wshcwanvx",
    "name": "Full Tutorial: Set Up Your 24/7 AI Employee in 20 Minutes",
    "description": "From zero to a running AI agent in 20 minutes flat",
    "link": "https://creatoreconomy.so/p/full-tutorial-set-up-your-247-ai-employee-clawd-molt",
    "platform": "Creator Economy",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "快速",
      "20分钟"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "4zeybap72",
    "name": "How to Get OpenClaw Set Up in an Afternoon",
    "description": "Practical guide from the AI Product Playbook newsletter",
    "link": "https://amankhan1.substack.com/p/how-to-get-clawdbotmoltbotopenclaw",
    "platform": "Substack",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "实用"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "787ijrszq",
    "name": "保姆级飞书对接教程 — 手把手搭建 AI 助手",
    "description": "Linux 下安装 OpenClaw 并对接飞书机器人，打造专属智能助理",
    "link": "https://www.cnblogs.com/catchadmin/p/19556552",
    "platform": "博客园",
    "language": "Chinese",
    "type": "Integration",
    "isFeatured": true,
    "topics": [
      "飞书",
      "保姆级"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "wvsdklcfq",
    "name": "飞书对接教程 — CSDN 版",
    "description": "详细的 OpenClaw 飞书机器人配置指南",
    "link": "https://blog.csdn.net/qq_31470439/article/details/157578441",
    "platform": "CSDN",
    "language": "Chinese",
    "type": "Integration",
    "isFeatured": false,
    "topics": [
      "飞书",
      "CSDN"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "g0fniwhvw",
    "name": "MiniMax — Build AI Assistant on Telegram",
    "description": "Connect MiniMax M2.1 to Telegram via OpenClaw",
    "link": "https://platform.minimax.io/docs/solutions/moltbot",
    "platform": "MiniMax",
    "language": "English",
    "type": "Integration",
    "isFeatured": false,
    "topics": [
      "Telegram",
      "MiniMax"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "nvl1in9s0",
    "name": "ClawHub 技能开发文档",
    "description": "如何创建、发布和管理自定义技能",
    "link": "https://docs.openclaw.ai/tools/clawhub",
    "platform": "OpenClaw Docs",
    "language": "English",
    "type": "Development",
    "isFeatured": true,
    "topics": [
      "技能",
      "开发"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "irk95u0d7",
    "name": "OpenClaw Skills 在 Claude Code 中使用",
    "description": "Reddit 社区分享：在 Claude Code 中运行 OpenClaw 的提示词和技能",
    "link": "https://www.reddit.com/r/ClaudeAI/comments/1qs49hw/",
    "platform": "Reddit",
    "language": "English",
    "type": "Development",
    "isFeatured": false,
    "topics": [
      "Claude Code",
      "Reddit"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "w78614jui",
    "name": "ClawHub Skill Directory 源码",
    "description": "ClawHub 的 GitHub 仓库，了解技能目录结构",
    "link": "https://github.com/openclaw/clawhub",
    "platform": "GitHub",
    "language": "English",
    "type": "Development",
    "isFeatured": false,
    "topics": [
      "源码",
      "参考"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "piiizgwnn",
    "name": "OpenClaw 海量全玩法攻略 — 国内网络使用 + 本地部署",
    "description": "B站详细视频教程，涵盖所有主要功能和配置",
    "link": "https://www.bilibili.com/video/BV1kH6nBFEPq/",
    "platform": "Bilibili",
    "language": "Chinese",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "B站",
      "全面"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "xlj1yayve",
    "name": "IBM Think — OpenClaw: The Viral \"Space Lobster\" Agent",
    "description": "IBM 深度分析 OpenClaw 的架构创新和垂直集成策略",
    "link": "https://www.ibm.com/think/news/clawdbot-ai-agent-testing-limits-vertical-integration",
    "platform": "IBM",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "IBM",
      "深度分析"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "a22t2xpko",
    "name": "DigitalOcean — What is OpenClaw?",
    "description": "全面介绍 OpenClaw 的功能、架构和使用场景",
    "link": "https://www.digitalocean.com/resources/articles/what-is-openclaw",
    "platform": "DigitalOcean",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "概览",
      "入门"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "f1ighwk5f",
    "name": "Reddit — The Ultimate Guide to OpenClaw",
    "description": "从功能到安全风险的全面指南，不回避争议话题",
    "link": "https://www.reddit.com/r/ThinkingDeeplyAI/comments/1qsoq4h/",
    "platform": "Reddit",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Reddit",
      "全面",
      "安全"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "3m9f8y4xc",
    "name": "NxCode — OpenClaw Complete Guide 2026",
    "description": "Clawdbot → Moltbot → OpenClaw 完整演进指南",
    "link": "https://www.nxcode.io/resources/news/openclaw-complete-guide-2026",
    "platform": "NxCode",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "历史",
      "完整"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "0ci35w1k8",
    "name": "ClawdBot 一键部署工具",
    "description": "Mac/Linux 一键安装脚本，自动化环境配置",
    "link": "https://github.com/miaoxworld/ClawdBotInstaller",
    "platform": "GitHub",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "一键",
      "脚本"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "km9t3w0vw",
    "name": "Clawdbot 中文文档",
    "description": "社区翻译的中文 README 和使用指南",
    "link": "https://github.com/bbylw/clawdbot-cn",
    "platform": "GitHub",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "中文",
      "文档"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "9gddp2mbc",
    "name": "阿里云开发者社区 — 2026年 OpenClaw 部署教程及常见问题解答",
    "description": "百炼模型配置、通义千问接入，含高频问题 FAQ 和完整 JSON 示例",
    "link": "https://developer.aliyun.com/article/1709761",
    "platform": "阿里云开发者社区",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "阿里云",
      "百炼",
      "通义千问",
      "FAQ"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "8zr2mgcvf",
    "name": "DataCamp — OpenClaw Tutorial: Control Your PC from WhatsApp",
    "description": "WhatsApp 远程控制电脑实操教程，涵盖 Skill 开发与 AgentSkills 标准",
    "link": "https://www.datacamp.com/tutorial/moltbot-clawdbot-tutorial",
    "platform": "DataCamp",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "DataCamp",
      "WhatsApp",
      "Skill"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "x23tqb36w",
    "name": "OpenClaw + Ollama 本地 AI Agent 搭建指南",
    "description": "全面的 Ollama 本地模型 + OpenClaw 集成指南，含模型选型对比和性能基准",
    "link": "https://codersera.com/blog/openclaw-ollama-setup-guide-run-local-ai-agents-2026",
    "platform": "CoderSera",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Ollama",
      "本地模型",
      "性能对比"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "a6trq1whx",
    "name": "掘金 — OpenClaw 安装教程：从 0 搭建本地 AI 助手完整记录",
    "description": "掘金社区原创，从零到跑通的详实记录，含架构理解和踩坑笔记",
    "link": "https://juejin.cn/post/7600752623068102666",
    "platform": "掘金",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "掘金",
      "实战记录",
      "本地部署"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "1csp27r3i",
    "name": "至顶AI — OpenClaw 完整部署指南（全网最详细版）",
    "description": "从环境准备到飞书插件配置、十大经典应用场景推荐，亲测有效",
    "link": "https://news.qq.com/rain/a/20260202A04NT600",
    "platform": "腾讯新闻",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "至顶AI",
      "全面",
      "飞书插件"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "4ge1iql2r",
    "name": "CSDN — OpenClaw 史上最全保姆级安装配置教程",
    "description": "多平台接入、Docker 沙箱安全配置、Ollama 本地模型对接",
    "link": "https://blog.csdn.net/liwang0113/article/details/157579187",
    "platform": "CSDN",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "CSDN",
      "保姆级",
      "安全配置"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "efrd8i7dj",
    "name": "DEV Community — Unleashing OpenClaw: Ultimate Guide for Developers",
    "description": "���发者视角深度解析：Gateway 架构、Brain 模型层、自定义 Skill 编写",
    "link": "https://dev.to/mechcloud_academy/unleashing-openclaw-the-ultimate-guide-to-local-ai-agents-for-developers-in-2026-3k0h",
    "platform": "DEV Community",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "DEV",
      "架构",
      "Skill开发"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "7q7qjc34y",
    "name": "The Hacker News — 341 个恶意 ClawHub 技能窃取用户数据",
    "description": "Koi Security 审计发现 ClawHavoc 供应链攻击，OpenClaw 用户必读安全警示",
    "link": "https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html",
    "platform": "The Hacker News",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "安全",
      "ClawHub",
      "供应链攻击"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "5cpikw3qh",
    "name": "CNBC — From Clawdbot to OpenClaw: The AI Agent Generating Buzz and Fear",
    "description": "CNBC 深度报道 OpenClaw 的崛起、145k+ GitHub Stars 背后的争议与风险",
    "link": "https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html",
    "platform": "CNBC",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "CNBC",
      "媒体",
      "争议"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "gdy47zeki",
    "name": "Medium — Stop Watching Install Tutorials, This Is How You Actually Tame It",
    "description": "跳过安装，直接讲如何驾驭 OpenClaw：工作流设计、提示词策略和安全边界",
    "link": "https://medium.com/activated-thinker/stop-watching-openclaw-install-tutorials-this-is-how-you-actually-tame-it-f3416f5d80bc",
    "platform": "Medium",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Medium",
      "进阶",
      "工作流"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "unxlk2cbp",
    "name": "Apiyi — OpenClaw 扩展生态全解析：50+ 官方集成",
    "description": "700+ Skills 库、12 大平台集成总览，ClawHub 技能商店使用指南",
    "link": "https://help.apiyi.com/en/openclaw-extensions-ecosystem-guide-en.html",
    "platform": "Apiyi",
    "language": "English",
    "type": "Development",
    "isFeatured": false,
    "topics": [
      "生态",
      "集成",
      "ClawHub"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "b88egeald",
    "name": "YouTube — OpenClaw Tutorial For Beginners (2026)",
    "description": "英文入门视频教程，从安装到主要功能和自动化任务演示",
    "link": "https://www.youtube.com/watch?v=Gc4fyY0_8Rc",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "入门",
      "英文"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "uwbc5vzgl",
    "name": "B站 — OpenClaw 是什么？Skills/MCP/RAG/Memory/AI Agent 全解析",
    "description": "架构科普视频：拆解 OpenClaw 与技能系统、MCP 协议、RAG、记忆系统的关系",
    "link": "https://www.bilibili.com/video/BV1Bm6bB5EJ3/",
    "platform": "Bilibili",
    "language": "Chinese",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "B站",
      "架构",
      "MCP",
      "RAG"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "sttrw2yp5",
    "name": "B站 — Clawdbot 为什么能记住你说过的话？AI 记忆系统拆解",
    "description": "深入分析 OpenClaw 的记忆机制：日记文件、长期记忆、上下文窗口管理",
    "link": "https://www.bilibili.com/video/BV1fv61B4EQ5/",
    "platform": "Bilibili",
    "language": "Chinese",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "B站",
      "记忆系统",
      "深度"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "0tgwahli7",
    "name": "B站 — OpenClaw 爆火 AI 自动化神器！本地部署教程 | 零度解说",
    "description": "零度解说出品，本地部署 + 聊天软件对接全流程演示",
    "link": "https://www.bilibili.com/video/BV1vz6nBmEA3/",
    "platform": "Bilibili",
    "language": "Chinese",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "B站",
      "零度解说",
      "部署"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "6u9wdq3s7",
    "name": "Scientific American — OpenClaw is an open-source AI agent that runs your computer",
    "description": "This open-source agent installs software, makes calls and runs your digital life—redefining what \"digital assistants\" are supposed to do",
    "link": "https://www.scientificamerican.com/article/moltbot-is-an-open-source-ai-agent-that-runs-your-computer/",
    "platform": "Scientific American",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "科普",
      "主流媒体",
      "深度"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "7lojnfyyc",
    "name": "Cisco Blogs — Personal AI Agents like OpenClaw Are a Security Nightmare",
    "description": "Security analysis of open-source personal AI agents: risks, attack vectors, and enterprise implications",
    "link": "https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare",
    "platform": "Cisco",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "安全",
      "企业",
      "风险分析"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ylhljykvt",
    "name": "TechCrunch — OpenClaw\\",
    "description": "The viral personal AI assistant has a new shell — again. Coverage of the Clawdbot → Moltbot → OpenClaw evolution",
    "link": "https://techcrunch.com/2026/01/30/openclaws-ai-assistants-are-now-building-their-own-social-network/",
    "platform": "TechCrunch",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "TechCrunch",
      "AI社交",
      "品牌演变"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "rcksl4q14",
    "name": "CNET — From Clawdbot to Moltbot to OpenClaw: The Wild Ride",
    "description": "How OpenClaw routes messages to AI servers and the LLM selection flexibility (Claude, ChatGPT, Gemini)",
    "link": "https://www.cnet.com/tech/services-and-software/from-clawdbot-to-moltbot-to-openclaw/",
    "platform": "CNET",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "CNET",
      "架构",
      "LLM选择"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "2cc4f55uw",
    "name": "The Verge — OpenClaw: all the news about the trending AI agent",
    "description": "Comprehensive news hub tracking the AI agent that \"actually does things\" — reminders, forms, flight check-ins, and more",
    "link": "https://www.theverge.com/news/872091/openclaw-moltbot-clawdbot-ai-agent-news",
    "platform": "The Verge",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "新闻聚合",
      "权威",
      "The Verge"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "w8jb9ypfg",
    "name": "The Guardian — Viral AI personal assistant seen as step change",
    "description": "OpenClaw runs as a layer atop LLMs and can operate autonomously depending on permissions granted",
    "link": "https://www.theguardian.com/technology/2026/feb/02/openclaw-viral-ai-agent-personal-assistant-artificial-intelligence",
    "platform": "The Guardian",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "The Guardian",
      "英国媒体",
      "分析"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "fmmqxowo5",
    "name": "AWS 中国博客 — 基于 Mac 实例部署 OpenClaw",
    "description": "亚马逊云科技 Mac 实例部署指南，深度苹果生态自动化的最佳选择",
    "link": "https://aws.amazon.com/cn/blogs/china/openclaw-deployment-aws-mac/",
    "platform": "AWS",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": true,
    "topics": [
      "AWS",
      "Mac",
      "苹果生态"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "w05mtlq29",
    "name": "菜鸟教程 — OpenClaw (Clawdbot) 完整教程",
    "description": "从 git clone 到 pnpm build，含 onboard 和 gateway:watch 开发模式",
    "link": "https://www.runoob.com/ai-agent/openclaw-clawdbot-tutorial.html",
    "platform": "菜鸟教程",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "菜鸟教程",
      "源码编译",
      "开发模式"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "sgrjs7upc",
    "name": "痴者工良 — 手把手教你部署 OpenClaw",
    "description": "博客园原创，openclaw configure 配置飞书全流程",
    "link": "https://www.cnblogs.com/whuanle/p/19558535",
    "platform": "博客园",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "博客园",
      "飞书",
      "配置向导"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "e1w5c3j40",
    "name": "DAMO 开发者矩阵 — Mac mini 接入国产大模型与飞书",
    "description": "命令行安装 + DeepSeek 配置 + 飞书插件全流程",
    "link": "https://damodev.csdn.net/697dff7b7c1d88441d90f0e4.html",
    "platform": "CSDN DAMO",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Mac mini",
      "DeepSeek",
      "飞书插件"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "bpxpjvvcr",
    "name": "Adven Boost — OpenClaw: 10 Steps to Set Up Your Personal AI Agent",
    "description": "Structured 10-step playbook from installation to optimization",
    "link": "https://advenboost.com/en/openclaw-setup-10-steps-guide/",
    "platform": "Adven Boost",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "10步",
      "结构化",
      "ROI分析"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "6zt0o82pm",
    "name": "知乎 — 一文读懂 OpenClaw 分析与教程",
    "description": "完整目录结构解析：AGENTS.md / SOUL.md / MEMORY.md / Skills 全拆解",
    "link": "https://zhuanlan.zhihu.com/p/2000850539936765122",
    "platform": "知乎",
    "language": "Chinese",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "知乎",
      "架构",
      "目录结构"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "vscff7r38",
    "name": "Turing College — The AI Assistant That Actually Does Things",
    "description": "深度解析 OpenClaw 三大核心能力：电脑控制、持久记忆、心跳机制",
    "link": "https://www.turingcollege.com/blog/openclaw",
    "platform": "Turing College",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "深度",
      "心跳机制",
      "记忆系统"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "s7r0rtc86",
    "name": "OpenClaw 7天入门指南 — 飞书知识库",
    "description": "从认识到进阶，每天一个主题的系统化学习路径",
    "link": "https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf",
    "platform": "OpenClaw 101",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "7天",
      "系统化",
      "飞书"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "vmciih43o",
    "name": "OpenClaw 汉化版 — CLI + Dashboard 全中文",
    "description": "每小时自动同步官方仓库，含完整中文 README、全流程搭建教程和排错指南",
    "link": "https://github.com/1186258278/OpenClawChineseTranslation",
    "platform": "GitHub",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": true,
    "topics": [
      "汉化",
      "中文",
      "同步"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "b0v3sc7gt",
    "name": "搬主题 — 一键安装部署超详细图文教程",
    "description": "含钉钉/飞书/微信/Web 四种集成方法，国内用户首选参考",
    "link": "https://www.banzhuti.com/openclaw-moltbot-clawdbot-tutorial.html",
    "platform": "搬主题",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "钉钉",
      "飞书",
      "微信",
      "Web"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "5fyvk511h",
    "name": "飞书官方 — 一文完全搞懂 Clawd Bot 附飞书对接指南",
    "description": "来自飞书安全团队，Gateway-Node 架构深度解析、Canvas 画布、部署方案与成本分析",
    "link": "https://www.feishu.cn/content/article/7602519239445974205",
    "platform": "飞书官网",
    "language": "Chinese",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "飞书官方",
      "架构",
      "安全"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "khxbuats8",
    "name": "PromptLayer — How to Install OpenClaw: Step-by-Step Guide",
    "description": "From the agentic AI tracking team, covers installation, configuration, and first chat",
    "link": "https://blog.promptlayer.com/how-to-install-openclaw-step-by-step-guide-formerly-clawdbot-moltbot/",
    "platform": "PromptLayer",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "PromptLayer",
      "Agent追踪",
      "最新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "oujqlc5vw",
    "name": "Medium — What is OpenClaw: Open-Source AI Agent in 2026",
    "description": "Covers Home Assistant integration, agent social networks, and privacy-first local deployment",
    "link": "https://medium.com/@gemQueenx/what-is-openclaw-open-source-ai-agent-in-2026-setup-features-8e020db20e5e",
    "platform": "Medium",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Medium",
      "Home Assistant",
      "隐私"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "um1xap5ll",
    "name": "AIML API — OpenClaw Tutorial: Installation to First Chat Setup",
    "description": "Step-by-step guide: installation, model setup, Telegram connection, skills, web search, and safety tips",
    "link": "https://aimlapi.com/blog/openclaw-tutorial-installation-to-first-chat-setup",
    "platform": "AIML API",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Telegram",
      "Skills",
      "安全"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "go8u7xx5f",
    "name": "BoostedHost — How to Install OpenClaw (For Beginner)",
    "description": "Plain language guide explaining gateways, tokens, VPS setup, and common errors from zero",
    "link": "https://boostedhost.com/blog/en/how-to-install-openclaw-get-started-guide/",
    "platform": "BoostedHost",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "新手友好",
      "VPS",
      "排错"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ityz8rzx9",
    "name": "AIML API — OpenClaw Tutorial: Real Automation Use (Step by Step)",
    "description": "Practical guide on connecting email, files, websites, and APIs for real task execution on VPS",
    "link": "https://aimlapi.com/blog/openclaw-full-tutorial-installation-setup-real-automation-use-step-by-step",
    "platform": "AIML API",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "自动化",
      "API集成",
      "VPS"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "s8m4nswyi",
    "name": "YouTube — Full OpenClaw Setup Tutorial: Step-by-Step Walkthrough",
    "description": "Complete video walkthrough for installing and configuring OpenClaw AI assistant",
    "link": "https://www.youtube.com/watch?v=fcZMmP5dsl4",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "完整教程",
      "最新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "9gs7cdyeu",
    "name": "YouTube — OpenClaw Tutorial: How to Run a Local AI Agent (2026)",
    "description": "Self-hosted, local-first AI assistant setup guide with practical demonstrations",
    "link": "https://www.youtube.com/watch?v=StKBpXSf08E",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "本地部署",
      "2026"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "zb5jrq0ba",
    "name": "freeCodeCamp — OpenClaw Full Tutorial for Beginners",
    "description": "从被动聊天到主动 Agent 的转变，freeCodeCamp 出品的全面入门教程",
    "link": "https://www.freecodecamp.org/news/openclaw-full-tutorial-for-beginners/",
    "platform": "freeCodeCamp",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "freeCodeCamp",
      "入门",
      "权威"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "p7j1yx22s",
    "name": "AI Free API — OpenClaw 安装与集成完全指南 2026",
    "description": "一条命令安装 + onboard 向导 + WhatsApp/Telegram/Discord/Browser Relay 全平台集成",
    "link": "https://www.aifreeapi.com/en/posts/openclaw-installation-guide",
    "platform": "AI Free API",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "多平台",
      "Browser Relay",
      "排错"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "hv9zjfwth",
    "name": "Marc0.dev — OpenClaw Mac Mini M4 Pro 完全指南",
    "description": "M4 Pro 64GB Mac Mini 零云端部署，本地 Ollama 集成实测",
    "link": "https://www.marc0.dev/en/blog/openclaw-mac-mini-the-complete-guide-to-running-your-own-ai-agent-in-2026-1770057455419",
    "platform": "Marc0.dev",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Mac Mini",
      "M4 Pro",
      "本地部署",
      "Ollama"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "3knjtnzh7",
    "name": "AMD Developer Cloud — OpenClaw + vLLM 免费运行指南",
    "description": "使用 MI300X 192GB 企业级 GPU 免费运行本地大模型，连接 OpenClaw",
    "link": "https://www.amd.com/en/developer/resources/technical-articles/2026/openclaw-with-vllm-running-for-free-on-amd-developer-cloud-.html",
    "platform": "AMD",
    "language": "English",
    "type": "Resource",
    "isFeatured": true,
    "topics": [
      "AMD",
      "vLLM",
      "免费GPU",
      "MI300X"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "5f286f0a1",
    "name": "Clawctl Blog — OpenClaw + 本地 LLM 完全指南",
    "description": "零 API 费用，Ollama/vLLM/LM Studio 三种本地方案全覆盖",
    "link": "https://clawctl.com/blog/openclaw-local-llm-complete-guide",
    "platform": "Clawctl",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "本地LLM",
      "Ollama",
      "vLLM",
      "LM Studio"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "u1l5dbqno",
    "name": "ZDNet — From Clawdbot to OpenClaw: Nightmare Fuel for Security Pros",
    "description": "34 个安全相关 commit，一键 RCE 修复，安全加固进展深度报道",
    "link": "https://www.zdnet.com/article/clawdbot-moltbot-openclaw-security-nightmare/",
    "platform": "ZDNet",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "ZDNet",
      "安全",
      "RCE修复"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "nyn30lx0z",
    "name": "CyberSecurity News — OpenClaw v2026.2.6 发布：Safety Scanner + Opus 4.6",
    "description": "新版本支持 Opus 4.6/GPT-5.3-Codex，内置代码安全扫描器",
    "link": "https://cybersecuritynews.com/openclaw-v2026-2-6-released/",
    "platform": "CyberSecurity News",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "版本更新",
      "安全扫描",
      "v2026.2.6"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "c6f6ooz4p",
    "name": "Yahoo Finance — OpenClaw: What Is Clawdbot and Why It\\",
    "description": "WhatsApp 集成吸引非技术用户，从聊天到执行真实任务的范式转变",
    "link": "https://finance.yahoo.com/news/openclaw-clawdbot-why-taking-over-130000159.html",
    "platform": "Yahoo Finance",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Yahoo",
      "主流媒体",
      "WhatsApp"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "j4iobh7h7",
    "name": "Medium — From Moltbot to OpenClaw: Multi-Agent AI with Qwen3 and Matrix",
    "description": "私有多 Agent 架构：vLLM + Qwen3 + Matrix 协议，跨平台统一会话",
    "link": "https://medium.com/@dorangao/from-moltbot-to-openclaw-upgrading-your-private-multi-agent-ai-with-qwen3-and-matrix-91a814833ae5",
    "platform": "Medium",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Multi-Agent",
      "Qwen3",
      "Matrix",
      "vLLM"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "u0exa5g7a",
    "name": "YouTube — OpenClaw Tutorial for Beginners: Full VPS + Docker Setup",
    "description": "VPS Docker 部署全流程视频，从零到运行",
    "link": "https://www.youtube.com/watch?v=Zo7Putdga_4",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "VPS",
      "Docker",
      "最新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "p3wau897p",
    "name": "B站 — 超详细的最强AI部署教程，小白友好",
    "description": "2026 年最新版部署教程，面向零基础用户的保姆级讲解",
    "link": "https://www.bilibili.com/video/BV1fMfZBuEMj/",
    "platform": "Bilibili",
    "language": "Chinese",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "B站",
      "小白友好",
      "最新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "btvwkjbjh",
    "name": "Medium — How to Install & Secure Your Personal AI Bot",
    "description": "Security-focused setup guide: installation plus hardening to prevent strangers accessing your machine",
    "link": "https://medium.com/@proflead/openclaw-tutorial-how-to-install-secure-your-personal-ai-bot-0dde8dc71624",
    "platform": "Medium",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Medium",
      "安全",
      "加固"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "uw00outhj",
    "name": "Habr — Don\\",
    "description": "Russian tech community\\",
    "link": "https://habr.com/en/articles/992720/",
    "platform": "Habr",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Habr",
      "安全",
      "俄罗斯社区"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "kwgmps8vk",
    "name": "Contabo — What is OpenClaw: Self-Hosted AI Agent Guide",
    "description": "VPS hosting provider guide: OpenClaw vs n8n comparison, setup tips for self-hosted deployment",
    "link": "https://contabo.com/blog/what-is-openclaw-self-hosted-ai-agent-guide/",
    "platform": "Contabo",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Contabo",
      "VPS",
      "n8n对比"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "n6alhuryx",
    "name": "Hostinger — How to Install OpenClaw on Hostinger VPS",
    "description": "One-click Docker template deployment on Hostinger VPS, official help center guide",
    "link": "https://www.hostinger.com/support/how-to-install-openclaw-on-hostinger-vps/",
    "platform": "Hostinger",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Hostinger",
      "Docker",
      "一键部署"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "xyxd4zcsy",
    "name": "阿里云 — 2026年 OpenClaw 极速部署教程（更新版）",
    "description": "预置镜像一键部署全流程、多渠道集成方法、高频问题解决方案，适配最新版本",
    "link": "https://developer.aliyun.com/article/1710373",
    "platform": "阿里云开发者社区",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "阿里云",
      "一键部署",
      "最新版"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "nrjbylb8j",
    "name": "阿里云 — OpenClaw 一键秒级部署全攻略指南",
    "description": "轻量应用服务器专属页面直接部署，含实例配置和服务协议说明",
    "link": "https://developer.aliyun.com/article/1710471",
    "platform": "阿里云开发者社区",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "阿里云",
      "秒级部署",
      "轻量服务器"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "dl9htdcwh",
    "name": "阿里云 — OpenClaw 部署保姆级教程：接入微信/飞书/钉钉/QQ",
    "description": "四大通讯平台全覆盖，App Key/Token 获取全流程详解",
    "link": "https://developer.aliyun.com/article/1710679",
    "platform": "阿里云开发者社区",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "阿里云",
      "微信",
      "飞书",
      "钉钉",
      "QQ"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ry2it9epj",
    "name": "Adversa AI — OpenClaw Security 101: CVEs, Moltbook Breach & Hardening",
    "description": "Comprehensive security analysis: known CVEs, supply chain risks, and hardening recommendations",
    "link": "https://adversa.ai/blog/openclaw-security-101-vulnerabilities-hardening-2026/",
    "platform": "Adversa AI",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "安全",
      "CVE",
      "加固指南"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "7akn4lvrd",
    "name": "Snyk — From SKILL.md to Shell Access in Three Lines of Markdown",
    "description": "Snyk threat modeling of agent skills: how malicious SKILL.md files can gain shell access",
    "link": "https://snyk.io/articles/skill-md-shell-access/",
    "platform": "Snyk",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "Snyk",
      "安全",
      "供应链",
      "威胁建模"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "fieaqv4n6",
    "name": "Snyk — ToxicSkills: 1467 Malicious Payloads in ClawHub Study",
    "description": "36% of skills contain prompt injection, comprehensive supply chain compromise analysis",
    "link": "https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/",
    "platform": "Snyk",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Snyk",
      "安全研究",
      "恶意Skill"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "2jm1z3ia6",
    "name": "AuthMind — OpenClaw\\",
    "description": "Identity security perspective on agent supply chain threats and credential exposure risks",
    "link": "https://www.authmind.com/post/openclaw-malicious-skills-agentic-ai-supply-chain",
    "platform": "AuthMind",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "身份安全",
      "供应链",
      "凭证风险"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "qycjqlxse",
    "name": "Substack — Is OpenClaw Worth the Hype? I Spent 10 Days Finding Out",
    "description": "Honest 10-day review with real cost analysis, VPS setup guide, and practical verdict",
    "link": "https://aimaker.substack.com/p/openclaw-review-setup-guide",
    "platform": "Substack",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "评测",
      "成本分析",
      "10天实测"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "0drd90khm",
    "name": "Bright Data — Build a WhatsApp AI Assistant with OpenClaw",
    "description": "Integration guide: OpenClaw + Bright Data for web scraping enabled WhatsApp assistant",
    "link": "https://brightdata.com/blog/ai/openclaw-with-bright-data",
    "platform": "Bright Data",
    "language": "English",
    "type": "Integration",
    "isFeatured": false,
    "topics": [
      "WhatsApp",
      "Web Scraping",
      "Bright Data"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "fnx0uwioq",
    "name": "YouTube — OpenClaw Full Tutorial for Beginners (Comprehensive Course)",
    "description": "Comprehensive beginner course covering installation, configuration, and automation tasks",
    "link": "https://www.youtube.com/watch?v=n1sfrc-RjyM",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "完整课程",
      "入门"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "1eei5j1va",
    "name": "YouTube — OpenClaw Skills Tutorial: Build Local AI Agent Skills + MoltBook",
    "description": "Step-by-step skill development with Ollama and MoltBook integration",
    "link": "https://www.youtube.com/watch?v=CENnPXxVUAc",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "Skill开发",
      "Ollama",
      "MoltBook"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "gm01j0lm6",
    "name": "YouTube — How to Set Up OpenClaw on a Budget VPS (Hetzner)",
    "description": "Budget-friendly setup: fresh Ubuntu Hetzner VPS with firewall rules and full walkthrough",
    "link": "https://www.youtube.com/watch?v=j9Xp5_VNYc8",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "Hetzner",
      "低成本",
      "VPS"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "2eyplrjko",
    "name": "B站 — 本地部署接入微信/飞书/钉钉/QQ 10分钟保姆级教程",
    "description": "10分钟手把手教会，附完整操作文档，四大平台全覆盖",
    "link": "https://www.bilibili.com/video/BV1MfFAz6EnR/",
    "platform": "Bilibili",
    "language": "Chinese",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "B站",
      "微信",
      "飞书",
      "钉钉",
      "QQ"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "jsbllsw97",
    "name": "B站 — 实测 Clawdbot 彻底改变工作方式！WhatsApp 远程控制电脑",
    "description": "一条命令部署，自动编程开发，自我进化+无限记忆实测演示",
    "link": "https://www.bilibili.com/video/BV14z6GB1EAr/",
    "platform": "Bilibili",
    "language": "Chinese",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "B站",
      "WhatsApp",
      "远程控制",
      "自动化"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "9s63572ch",
    "name": "Substack — Cheapest + Most Secure OpenClaw Setup (Hetzner)",
    "description": "Cost-optimized and security-hardened setup guide on cheap Hetzner VPS, 24/7 operation",
    "link": "https://www.learnwithmeai.com/p/clawdbotopenclaw-cheapest-most-secure",
    "platform": "Substack",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Hetzner",
      "低成本",
      "安全加固",
      "24/7"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "gl8zd3w7r",
    "name": "Creator Economy — Master OpenClaw in 30 Minutes",
    "description": "5 real use cases: calendar, documents, personalized briefings, and memory management",
    "link": "https://creatoreconomy.so/p/master-openclaw-in-30-minutes-full-tutorial",
    "platform": "Creator Economy",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "30分钟",
      "实用场景",
      "付费"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "u1jcoz1i3",
    "name": "阿里云 — OpenClaw 常见问题文档",
    "description": "官方 FAQ：版本更新(2026.2.3)、镜像升级、常见错误排查",
    "link": "https://help.aliyun.com/zh/simple-application-server/use-cases/openclaw-faq",
    "platform": "阿里云",
    "language": "Chinese",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "阿里云",
      "FAQ",
      "排错",
      "版本更新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "pc115jut2",
    "name": "Awesome OpenClaw Skills — 社区精选技能合集",
    "description": "VoltAgent 维护的 OpenClaw Skills 精选列表，分类清晰，持续更新",
    "link": "https://github.com/VoltAgent/awesome-openclaw-skills",
    "platform": "GitHub",
    "language": "English",
    "type": "Resource",
    "isFeatured": true,
    "topics": [
      "Awesome",
      "技能合集",
      "社区"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "q17ci96qb",
    "name": "The Hacker News — OpenClaw 集成 VirusTotal 扫描恶意 ClawHub 技能",
    "description": "OpenClaw 与 Google VirusTotal 合作，对 ClawHub 所有上传技能进行自动安全扫描",
    "link": "https://thehackernews.com/2026/02/openclaw-integrates-virustotal-scanning.html",
    "platform": "The Hacker News",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "VirusTotal",
      "安全",
      "ClawHub",
      "里程碑"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "4728833hp",
    "name": "CyberSecurity News — OpenClaw 与 VirusTotal 合作保障 AI Agent 市场安全",
    "description": "ClawHub 技能市场安全升级：自动扫描、威胁情报、安全路线图",
    "link": "https://cybersecuritynews.com/openclaw-and-virustotal/",
    "platform": "CyberSecurity News",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "VirusTotal",
      "安全",
      "市场安全"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "8bfdltg2e",
    "name": "CrowdStrike — 安全团队需要了解的 OpenClaw AI 超级代理",
    "description": "CrowdStrike 安全视角分析 OpenClaw 的风险面与防护建议，附 2/10 红队直播预告",
    "link": "https://www.crowdstrike.com/en-us/blog/what-security-teams-need-to-know-about-openclaw-ai-super-agent/",
    "platform": "CrowdStrike",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "CrowdStrike",
      "安全",
      "红队",
      "企业"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "msknrcxj1",
    "name": "eSecurity Planet — ClawHub 审计发现数百个恶意技能",
    "description": "Koi Security 审计 2,857 个技能发现 341 个恶意条目，ClawHavoc 攻击详解",
    "link": "https://www.esecurityplanet.com/threats/hundreds-of-malicious-skills-found-in-openclaws-clawhub/",
    "platform": "eSecurity Planet",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "安全审计",
      "ClawHavoc",
      "供应链"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "uajvco6g4",
    "name": "Android Headlines — OpenClaw 解析：优势、风险与争议",
    "description": "全面评估 OpenClaw 的功能、ClawHub 生态问题和安全隐患",
    "link": "https://www.androidheadlines.com/2026/02/openclaw-explained-ai-agent-security-risks-moltbot-clawdbot-features.html",
    "platform": "Android Headlines",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "评测",
      "安全",
      "争议"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "cz11p9nv3",
    "name": "Robo Rhythms — OpenClaw 101 Beginner Friendly Guide",
    "description": "From first install to advanced workflows, covers common pitfalls like context loss and memory issues",
    "link": "https://www.roborhythms.com/openclaw-beginner-friendly-guide/",
    "platform": "Robo Rhythms",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "入门",
      "踩坑",
      "进阶工作流"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "yzav1prp2",
    "name": "YouTube — Master OpenClaw in 30 Minutes (Peter Yang)",
    "description": "Calendar, documents, personalized briefings, voice reply, and memory management — 5 real use cases in 30 min",
    "link": "https://www.youtube.com/watch?v=ji_Sd4si7jo",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "30分钟",
      "实用场景",
      "Peter Yang"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "4z3n3q0ef",
    "name": "Snyk — Inside the clawdhub Malicious Campaign: Reverse Shells on OpenClaw",
    "description": "深入分析 ClawHub 恶意技能投放反向 Shell 的完整攻击链，含时间线和 IoC",
    "link": "https://snyk.io/articles/clawdhub-malicious-campaign-ai-agent-skills/",
    "platform": "Snyk",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "Snyk",
      "安全",
      "反向Shell",
      "攻击链"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "pdf4gjg88",
    "name": "DeepWiki — OpenClaw 源码解析：Tools & Skills 架构",
    "description": "AI 自动索引的 OpenClaw 源码 Wiki，深入解析工具和技能系统架构",
    "link": "https://deepwiki.com/openclaw/openclaw/6-tools-and-skills",
    "platform": "DeepWiki",
    "language": "English",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "源码",
      "架构",
      "Wiki",
      "自动索引"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "jca3zwka5",
    "name": "Molt Founders — OpenClaw Mega Cheatsheet 2026",
    "description": "150+ CLI 命令速查、工作区文件、记忆系统、模型配置、多 Agent 设置全覆盖，附可打印 A4 PDF",
    "link": "https://moltfounders.com/openclaw-mega-cheatsheet",
    "platform": "Molt Founders",
    "language": "English",
    "type": "Resource",
    "isFeatured": true,
    "topics": [
      "速查表",
      "CLI",
      "PDF",
      "开发者"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "941u0otmk",
    "name": "Northeastern University — Why OpenClaw AI Assistant is a \"Privacy Nightmare\"",
    "description": "东北大学网络安全教授深度分析 OpenClaw 隐私风险，学术视角审视 Agent 权限与数据流向",
    "link": "https://news.northeastern.edu/2026/02/10/open-claw-ai-assistant/",
    "platform": "Northeastern University",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "学术",
      "隐私",
      "安全",
      "大学"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "tfjrm6s6i",
    "name": "Gadget Pilipinas — OpenClaw on MacBook Pro M5 虚拟环境部署",
    "description": "M5 Mac 虚拟化部署指南，含 Zapier MCP 集成和 MCPorter 沙箱安全配置",
    "link": "https://www.gadgetpilipinas.net/2026/02/openclaw-on-macbook-pro-m5/",
    "platform": "Gadget Pilipinas",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Mac",
      "M5",
      "Zapier",
      "MCP",
      "虚拟化"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ii2rrua1e",
    "name": "YouTube — Install OpenClaw in 30 Seconds & Start Building (Wes Roth)",
    "description": "Local install and VPS full tutorial, from one-liner install to first automation",
    "link": "https://www.youtube.com/watch?v=ZcIqiLLT7Fg",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "Wes Roth",
      "快速安装",
      "VPS"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ia3tc4xr8",
    "name": "Substack — OpenClaw/Moltbot/ClawdBot 101: The Complete Guide",
    "description": "Markdown 配置文件全解析，从 SOUL.md 到 Skills 的系统化入门",
    "link": "https://sidsaladi.substack.com/p/openclawmoltbotclawdbot-101-the-complete",
    "platform": "Substack",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Substack",
      "配置文件",
      "系统化"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "t9pw0k2gk",
    "name": "Adven Boost — OpenClaw Setup: Zero to First Chat in 10 Minutes",
    "description": "2026 最新精简版部署指南，砍掉冗余步骤直奔 10 分钟跑通",
    "link": "https://advenboost.com/en/openclaw-setup-fast-tutorial/",
    "platform": "Adven Boost",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "10分钟",
      "精简",
      "2026"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "9h8oezn05",
    "name": "O-mega — OpenClaw: AI Agent Workforce 终极指南 2026",
    "description": "多 Agent 协作架构深度解析，从单体 AI 到 Agent 编排的趋势分析",
    "link": "https://o-mega.ai/articles/openclaw-creating-the-ai-agent-workforce-ultimate-guide-2026",
    "platform": "O-mega",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Multi-Agent",
      "编排",
      "趋势"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "cjurna0hw",
    "name": "Zilliz — How to Install and Run OpenClaw on Mac",
    "description": "最新 macOS 部署指南：从 Node.js 安装到 onboard 向导全流程，含守护进程配置",
    "link": "https://medium.com/@zilliz_learn/how-to-install-and-run-openclaw-previously-clawdbot-moltbot-on-mac-9cb6adb64eef",
    "platform": "Medium",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "Mac",
      "最新",
      "Zilliz",
      "守护进程"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "3lp8zogpm",
    "name": "YouTube — Install OpenClaw in 10 Minutes (Feb 2026)",
    "description": "VPS 快速部署教程，修复所有常见错误的完整指南",
    "link": "https://www.youtube.com/watch?v=khTA_AfJ01Y",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "10分钟",
      "VPS",
      "最新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "s83rkpw42",
    "name": "YouTube — How To Setup Clawdbot - Step by Step Guide to Openclaw on a VPS (2026)",
    "description": "Linux VPS 上完整的 OpenClaw 部署指南，支持 Opus 4.6",
    "link": "https://www.youtube.com/watch?v=NjchJr1zmvk",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "VPS",
      "Linux",
      "Opus 4.6"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "fb5rlezlv",
    "name": "Skywork AI — Clawdbot (OpenClaw): 2026 Guide to AI Workflows & Risks",
    "description": "2026 年 OpenClaw 崛起分析，安全风险评估和最佳实践清单",
    "link": "https://skywork.ai/blog/ai-agent/clawdbot-openclaw-ai-workflows/",
    "platform": "Skywork AI",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "风险评估",
      "最佳实践",
      "Skywork"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "6yt6xn57o",
    "name": "Skywork AI — OpenClaw (Clawdbot): Agent Communities Guide — 2026",
    "description": "Agent 社区指南，温和的可视化引导教程和 DataCamp 推荐",
    "link": "https://skywork.ai/blog/ai-agent/openclaw-clawdbot-agent-communities/",
    "platform": "Skywork AI",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "社区",
      "可视化教程",
      "DataCamp"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "kjxwr83ea",
    "name": "Substack — The Ultimate Guide to OpenClaw",
    "description": "MidJourney 和 NanoBanana 视角的 OpenClaw 机器人自动化完整指南",
    "link": "https://corpwaters.substack.com/p/the-ultimate-guide-to-openclaw",
    "platform": "Substack",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "自动化",
      "MidJourney",
      "NanoBanana"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "xwrmw875y",
    "name": "WIRED — I Loved My OpenClaw AI Agent—Until It Turned on Me",
    "description": "《连线》杂志深度报道：OpenClaw 的魅力与潜在风险",
    "link": "https://www.wired.com/story/malevolent-ai-agent-openclaw-clawdbot/",
    "platform": "WIRED",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "WIRED",
      "主流媒体",
      "风险"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "pl8ek73e2",
    "name": "dougvos.com — Configuring OpenClaw",
    "description": "最新版本 2026.2.13 安装配置指南，解决安全问题和 100+ 小时研究精华",
    "link": "https://dougvos.com/configuring-openclaw/",
    "platform": "dougvos.com",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "配置",
      "安全",
      "v2026.2.13"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "z3rtu9uz6",
    "name": "SitePoint — How to Set Up OpenClaw (formerly Clawdbot/Moltbot) on a Mac Mini",
    "description": "Mac Mini 本地部署，连接消息平台，作为后台服务运行",
    "link": "https://www.sitepoint.com/how-to-set-up-openclaw-on-a-mac-mini/",
    "platform": "SitePoint",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Mac Mini",
      "SitePoint",
      "后台服务"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "p2g9jd69u",
    "name": "Apidog — How to update OpenClaw (Moltbot/Clawdbot) to the latest version",
    "description": "OpenClaw 版本升级完整指南，Docker/源码/systemd 三种部署方式的升级策略",
    "link": "https://apidog.com/blog/update-openclaw/",
    "platform": "Apidog",
    "language": "English",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "升级",
      "Docker",
      "systemd",
      "版本管理"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "93q495whf",
    "name": "DEV.to — OpenClaw Setup Guide: From Zero to AI Assistant in 10 Minutes",
    "description": "Jetson/Mac Mini/Raspberry Pi/Linux 通用部署指南，面向硬件爱好者",
    "link": "https://dev.to/yankoaleksandrov/openclaw-setup-guide-from-zero-to-ai-assistant-in-10-minutes-1md",
    "platform": "DEV Community",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "硬件",
      "Jetson",
      "Raspberry Pi"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "fn8g0owr9",
    "name": "CSDN — OpenClaw开源汉化发行版：介绍、下载、安装、配置教程",
    "description": "完全汉化版 OpenClaw 部署指南，含阿里云/腾讯云/天翼云一键部署方法",
    "link": "https://blog.csdn.net/qq_44866828/article/details/157876493",
    "platform": "CSDN",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "汉化",
      "阿里云",
      "腾讯云",
      "天翼云"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "d5wglrzte",
    "name": "知乎 — 2026年OpenClaw（Clawdbot）新手部署并使用超详细教程",
    "description": "阿里云生态下的超详细部署教程，含私有化配置和高安全管控场景",
    "link": "https://zhuanlan.zhihu.com/p/2004189250392974456",
    "platform": "知乎",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "阿里云",
      "私有化",
      "安全"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "0utxwpv0c",
    "name": "CSDN — 【保姆级教程】手把手教你安装OpenClaw并接入飞书",
    "description": "Windows 系统保姆级教程，从零开始到飞书机器人完整配置流程",
    "link": "https://damodev.csdn.net/697deb97a16c6648a9866d36.html",
    "platform": "CSDN",
    "language": "Chinese",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Windows",
      "飞书",
      "保姆级"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "4t37i5ovr",
    "name": "YouTube — Install OpenClaw in 10 Minutes (Feb 2026) - VPS Setup",
    "description": "VPS 部署 + 常见问题全解决，2026年2月最新版本适配",
    "link": "https://www.youtube.com/watch?v=khTA_AfJ01Y",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "VPS",
      "常见问题",
      "最新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "vked9dbge",
    "name": "YouTube — Full OpenClaw Tutorial for Beginners",
    "description": "完整入门课程：从安装到配置再到自动化任务演示",
    "link": "https://www.youtube.com/watch?v=ZQOIlQg4CkA",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "完整课程",
      "自动化"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "bzq1s3q52",
    "name": "YouTube — Tutorial OpenClaw Lengkap 2026 (Indonesia)",
    "description": "印尼语教程：36K VPS 部署 + Telegram Bot + 自动黄金价格查询",
    "link": "https://www.youtube.com/watch?v=qgShz6HGZjI",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "印尼语",
      "Telegram",
      "实用案例"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "nz909fpi8",
    "name": "DEV.to — OpenClaw Guide Ch8: Monitoring and Debugging",
    "description": "ELK Stack 日志分析、性能监控、调试技巧的完整指南",
    "link": "https://dev.to/linou518/openclaw-guide-ch8-monitoring-and-debugging-18f1",
    "platform": "DEV Community",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "监控",
      "ELK",
      "调试",
      "运维"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "haqudzt7q",
    "name": "DEV.to — OpenClaw Guide Ch6: Multi-Agent Collaboration",
    "description": "多 Agent 协作架构深度指南，Agent 编排和任务分发策略",
    "link": "https://dev.to/linou518/openclaw-guide-ch6-multi-agent-collaboration-architecture-1hki",
    "platform": "DEV Community",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Multi-Agent",
      "协作",
      "编排"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "pv7nnrhib",
    "name": "GitHub Gist — Running OpenClaw Without Burning Money",
    "description": "预算优化指南：配额管理、成本控制、理智部署的实战技巧",
    "link": "https://gist.github.com/digitalknk/ec360aab27ca47cb4106a183b2c25a98",
    "platform": "GitHub",
    "language": "English",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "成本优化",
      "配额管理",
      "Gist"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "v9lhbxa01",
    "name": "25+ Real OpenClaw Use Cases — From Morning Briefings to Business Automation",
    "description": "41 页免费 PDF，社区真实部署案例集：CEO 仪表盘、多 Agent 编排、视频制作流水线、智能家居控制",
    "link": "https://www.forwardfuture.ai/p/what-people-are-actually-doing-with-openclaw-25-use-cases",
    "platform": "Forward Future",
    "language": "English",
    "type": "Showcase",
    "isFeatured": true,
    "topics": [
      "用例大全",
      "自动化",
      "多场景"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "j01k9srep",
    "name": "OpenClaw Is Going Viral — #1 Use Case and 35 Ways to Automate Work and Life",
    "description": "TechStartups 深度报道：最热门的 35 种自动化玩法，从晨间简报到 DevOps 流水线、浏览器自动化",
    "link": "https://techstartups.com/2026/02/12/openclaw-is-going-viral-the-1-use-case-and-35-ways-people-automate-work-and-life-with-it/",
    "platform": "TechStartups",
    "language": "English",
    "type": "Showcase",
    "isFeatured": true,
    "topics": [
      "35种玩法",
      "自动化",
      "热门"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "azm93rifo",
    "name": "Hostinger — 25 Ways to Automate Work and Life with OpenClaw",
    "description": "主机商视角的实用指南：晨间简报、日历管理、多邮箱管理、智能家居、开发自动化等 25 个场景",
    "link": "https://www.hostinger.com/tutorials/openclaw-use-cases",
    "platform": "Hostinger",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "25场景",
      "生活自动化",
      "实用"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ru6xxz42i",
    "name": "5 OpenClaw Automations That Actually Make Money in 2026",
    "description": "赚钱导向的自动化方案：PR 自动审查、CI/CD 监控、Heartbeat 后台任务、主动式 AI 助手",
    "link": "https://markaicode.com/openclaw-money-making-automations-2026/",
    "platform": "MarkAICode",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "赚钱",
      "DevOps",
      "Heartbeat"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "6r1jlxuml",
    "name": "Running 10 AI Agents to Automate My Life — A Practical Guide",
    "description": "DEV.to 实战：8GB 内存跑 10 个 Agent，每天早上一句\"Good morning\"获取完整日报",
    "link": "https://dev.to/linou518/running-10-ai-agents-to-automate-my-life-a-practical-guide-with-openclaw-ki7",
    "platform": "DEV.to",
    "language": "English",
    "type": "Showcase",
    "isFeatured": true,
    "topics": [
      "10 Agent",
      "多Agent",
      "日报"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "hqz245ku6",
    "name": "Supercharge OpenClaw — 8 Advanced Real-World Use Cases",
    "description": "进阶玩法：晨间简报 cron 配置、GitHub 自动化、Telegram 集成、多 Agent 编排实操",
    "link": "https://jangwook.net/en/blog/en/openclaw-advanced-usage/",
    "platform": "JangWook",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "进阶",
      "Cron",
      "多Agent"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "aja6t93wt",
    "name": "OpenClaw Cron Jobs — Building Proactive AI Automation",
    "description": "从 Zapier 替代到晨间简报，深入 Cron 定时任务配置，让 AI 主动工作而非被动响应",
    "link": "https://zenvanriel.nl/ai-engineer-blog/openclaw-cron-jobs-proactive-ai-guide/",
    "platform": "Zen van Riel",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "Cron",
      "主动式",
      "Zapier替代"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "w7a5infa0",
    "name": "How I Automated My Morning Routine with OpenClaw Cron Jobs",
    "description": "手把手教你配置晨间自动化：天气 + 日历 + 邮件一条消息搞定，附完整 cron 配置",
    "link": "https://openclawready.com/blog/openclaw-cron-jobs-daily-automation/",
    "platform": "OpenClaw Ready",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "晨间简报",
      "Cron",
      "入门"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "6768biq13",
    "name": "OpenClaw for Creative & Design Agencies — 10 AI Workflows",
    "description": "创意团队玩法：项目收件自动化、修订跟踪、交付物协调，设计机构场景定制",
    "link": "https://www.serif.ai/openclaw/creative-design-agencies",
    "platform": "Serif",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "设计",
      "创意团队",
      "工作流"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "0p3u9b62n",
    "name": "OpenClaw for Marketing Agencies — 10 AI-Powered Use Cases",
    "description": "营销团队玩法：广告监控、客户报告、创意工作流自动化",
    "link": "https://www.serif.ai/openclaw/marketing-agencies",
    "platform": "Serif",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "营销",
      "广告",
      "报告"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "wmd7rmqce",
    "name": "Build Your AI Agent Army in 60 Minutes",
    "description": "60 分钟搭建多 Agent 团队：从单 Agent 到团队协作，含每日摘要 cron 配置",
    "link": "https://atalupadhyay.wordpress.com/2026/02/08/openclaw-build-your-ai-agent-army-in-60-minutes/",
    "platform": "Atal Upadhyay",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "60分钟",
      "多Agent",
      "团队"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "f1n91osvd",
    "name": "OpenClaw Use Cases: 15+ Powerful Workflows and Safety Guide",
    "description": "15+ 工作流 + 安全指南：路由分发、三方集成、权限管控的实战经验",
    "link": "https://quantumbyte.ai/articles/openclaw-use-cases",
    "platform": "QuantumByte",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "安全",
      "工作流",
      "权限"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "llrwwum92",
    "name": "12 Practical OpenClaw Use Cases (2026)",
    "description": "12 个实用场景：从代码 Q&A、文档生成到浏览器自动化，含本地模型(Ollama)方案",
    "link": "https://skywork.ai/blog/ai-agent/openclaw-use-cases/",
    "platform": "Skywork",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "12场景",
      "Ollama",
      "本地模型"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "0u704n36h",
    "name": "Proposal for a Multimodal Multi-Agent System Using OpenClaw",
    "description": "多模态多 Agent 架构提案：对比 Auto-GPT/LangChain，分析 OpenClaw 在编排层的优势",
    "link": "https://medium.com/@gwrx2005/proposal-for-a-multimodal-multi-agent-system-using-openclaw-81f5e4488233",
    "platform": "Medium",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "架构",
      "多Agent",
      "对比"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ryhvw8ulc",
    "name": "Contabo — What is OpenClaw: Self-Hosted AI Agent Guide",
    "description": "VPS 提供商出品：OpenClaw vs n8n 对比，有状态记忆 vs 无状态工作流的差异分析",
    "link": "https://contabo.com/blog/what-is-openclaw-self-hosted-ai-agent-guide/",
    "platform": "Contabo",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "vs n8n",
      "自部署",
      "对比"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "142fbki08",
    "name": "YouTube — Install OpenClaw in 10 Minutes (Feb 2026 Guide)",
    "description": "VPS 部署速成指南，修复所有常见错误，2026 年 2 月最新版教程",
    "link": "https://www.youtube.com/watch?v=khTA_AfJ01Y",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "10分钟",
      "2026",
      "VPS",
      "最新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "xxjlsyc9g",
    "name": "YouTube — Don\\",
    "description": "安全优先的部署指南：如何安全安装和配置 OpenClaw，避免系统和 API Key 泄露",
    "link": "https://www.youtube.com/watch?v=J8sBdV4kwU8",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "安全",
      "部署指南",
      "最新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ely9b892a",
    "name": "YouTube — I Built OpenClaw Cloud in 3 Hours (Magic Patterns + Railway)",
    "description": "云端 OpenClaw 搭建教程：Magic Patterns + Lovable + Railway 一键云部署",
    "link": "https://www.youtube.com/watch?v=24kae9iWBlc",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "云部署",
      "Railway",
      "3小时"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "fa4eiw29g",
    "name": "YouTube — How to Install OpenClaw on Azure VM (Secure Guide 2026)",
    "description": "13 分钟 Azure 虚拟机安全部署教程，含防火墙配置和安全最佳实践",
    "link": "https://www.youtube.com/watch?v=1Jjt3DojHtw",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "Azure",
      "安全",
      "13分钟"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "puyvrrfcb",
    "name": "YouTube — The Easiest Way to Install OpenClaw for Beginners",
    "description": "Hostinger VPS 新手友好安装教程，逐步演示配置过程",
    "link": "https://www.youtube.com/watch?v=HFVImm-D1C4",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "Hostinger",
      "新手友好",
      "逐步演示"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "2o23623zo",
    "name": "WiTechPedia — How to Install OpenClaw: Complete Step-by-Step Guide (2026)",
    "description": "Windows/macOS/Linux 全平台安装指南，含 npm 配置、API 设置、消息平台集成和故障排除",
    "link": "https://www.witechpedia.com/guide/how-to-install-openclaw/",
    "platform": "WiTechPedia",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "全平台",
      "npm",
      "故障排除",
      "2026"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "zx1c515qv",
    "name": "Betelgeuse.work — OpenClaw Install Guide (Ubuntu SSH)",
    "description": "Ubuntu SSH 安装指南，修复 Token 不匹配、端口冲突和 UI 资源错误",
    "link": "https://betelgeuse.work/openclaw/",
    "platform": "Betelgeuse",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Ubuntu",
      "SSH",
      "故障排除",
      "端口冲突"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ud6n6n51d",
    "name": "Open-Claw.org — Ultimate Guide to Deploying OpenClaw (2026 Edition)",
    "description": "Docker 和 Node.js 部署指南，含 Telegram 集成和安全最佳实践",
    "link": "https://open-claw.org/posts/openclaw-deploy",
    "platform": "Open-Claw.org",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Docker",
      "Telegram",
      "安全最佳实践",
      "2026"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "2lu3eoukb",
    "name": "Medium — How to Install OpenClaw on Mac (Zilliz)",
    "description": "macOS 完整安装教程：从前置条件到首次对话的全流程指南",
    "link": "https://medium.com/@zilliz_learn/how-to-install-and-run-openclaw-previously-clawdbot-moltbot-on-mac-9cb6adb64eef",
    "platform": "Medium",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "macOS",
      "Medium",
      "Mac安装",
      "完整流程"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "c0oad5jg6",
    "name": "Kaspersky — New OpenClaw AI Agent Found Unsafe for Use",
    "description": "卡巴斯基安全分析：近千个无认证的公开 OpenClaw 实例，漏洞数量超出预期",
    "link": "https://www.kaspersky.com/blog/openclaw-vulnerabilities-exposed/55263/",
    "platform": "Kaspersky",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "安全",
      "漏洞分析",
      "Kaspersky",
      "无认证实例"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "a5ucz4rrw",
    "name": "xCloud — 7 OpenClaw Security Best Practices in 2026",
    "description": "2026 年 7 大安全最佳实践：CVE 防护、恶意软件防范、数据泄露防护完整指南",
    "link": "https://xcloud.host/openclaw-security-best-practices",
    "platform": "xCloud",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "安全最佳实践",
      "CVE",
      "恶意软件",
      "数据保护"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "d08shvxur",
    "name": "Bitsight — OpenClaw Security: Risks of Exposed AI Agents",
    "description": "Bitsight 安全风险分析：暴露的 AI Agent 实例风险评估和缓解策略",
    "link": "https://www.bitsight.com/blog/openclaw-ai-security-risks-exposed-instances",
    "platform": "Bitsight",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "安全风险",
      "暴露实例",
      "风险评估",
      "Bitsight"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "48p7tbl15",
    "name": "AIMaker — How to Harden OpenClaw Security (3-Tier Guide)",
    "description": "三层安全加固指南：基础防护、标准加固、高级纵深防御，适用于自托管 AI Agent",
    "link": "https://aimaker.substack.com/p/openclaw-security-hardening-guide",
    "platform": "AIMaker",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "安全加固",
      "三层防御",
      "纵深防御",
      "Substack"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "z3zjjwoqy",
    "name": "VPN Central — OpenClaw 2026.2.12 Release Patches 40+ Vulnerabilities",
    "description": "2026.2.12 版本发布说明：修复 40+ 安全漏洞，SSRF 防护升级，提示注入风险降低",
    "link": "https://vpncentral.com/openclaw-2026-2-12-release-patches-40-vulnerabilities-in-ai-agents/",
    "platform": "VPN Central",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "版本更新",
      "40漏洞修复",
      "SSRF",
      "提示注入"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "i7awjznlx",
    "name": "Clawbots.com — Setup Guides & Directory",
    "description": "社区维护的 OpenClaw 教程目录和设置检查表，实用的集成指南",
    "link": "https://clawbots.com/",
    "platform": "Clawbots",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "社区",
      "目录",
      "检查表"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "x93bxun5l",
    "name": "Skywork AI — Clawdbot (OpenClaw): 2026 Guide to AI Workflows & Risks",
    "description": "2026 年 AI 工作流和风险指南：安全优先的蓝图、可靠性保障和可重复工作流",
    "link": "https://skywork.ai/blog/ai-agent/clawdbot-openclaw-ai-workflows/",
    "platform": "Skywork AI",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "工作流",
      "风险",
      "2026",
      "安全"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "bn6hz7ed6",
    "name": "WIRED — I Loved My OpenClaw AI Agent—Until It Turned on Me",
    "description": "WIRED 深度报道：OpenClaw 配置复杂性和潜在风险，真实用户体验分析",
    "link": "https://www.wired.com/story/malevolent-ai-agent-openclaw-clawdbot/",
    "platform": "WIRED",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "WIRED",
      "用户体验",
      "风险分析"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ydkeufhfm",
    "name": "Substack — The Swarm Doctrine: How OpenClaw Shattered the Bandwidth Ceiling",
    "description": "群体智能理论：OpenClaw 和 Orgo 如何突破主权带宽天花板的深度分析",
    "link": "https://mxtm.substack.com/p/the-swarm-doctrine-how-openclaw-and",
    "platform": "Substack",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "群体智能",
      "理论",
      "Orgo"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ha40xi5o1",
    "name": "OpenClaw Skills 审计工具（ClawHub 安全检查）",
    "description": "社区开发的技能安全审计工具，2026 年 2 月审计认证的 ClawHub 技能推荐",
    "link": "https://mxtm.substack.com/p/the-swarm-doctrine-how-openclaw-and",
    "platform": "Community",
    "language": "English",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "安全审计",
      "2026审计",
      "ClawHub"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "vdb5t3h2t",
    "name": "Reddit — Everyone talks about Clawdbot, but not many explain how it works",
    "description": "Reddit 社区讨论：OpenClaw 工作原理解析和实际使用经验分享",
    "link": "https://www.reddit.com/r/AI_Agents/comments/1r15ji4/everyone_talks_about_clawdbot_openclaw_but_not/",
    "platform": "Reddit",
    "language": "English",
    "type": "Showcase",
    "isFeatured": false,
    "topics": [
      "Reddit",
      "工作原理",
      "社区讨论"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ugnmwu09x",
    "name": "Reddit — OpenClaw Security: Best Thing to Happen to AI Security This Year",
    "description": "AI 安全视角分析 OpenClaw：从设置到管理关键安全风险的终极指南",
    "link": "https://www.reddit.com/r/ArtificialInteligence/comments/1r0qhq1/openclaw_or_moltbot_or_clawdbot_whatever_its/",
    "platform": "Reddit",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Reddit",
      "AI安全",
      "风险管理"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "x9ami53y2",
    "name": "GitHub Issues — Claude Opus 4.6 Support",
    "description": "OpenClaw GitHub：Claude Opus 4.6 支持请求和默认上下文令牌更新",
    "link": "https://github.com/openclaw/openclaw/issues/12621",
    "platform": "GitHub Issues",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "GitHub",
      "Opus 4.6",
      "版本更新"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "4tvsdxqpx",
    "name": "GitHub Issues — Composable Skills Architecture RFC",
    "description": "OpenClaw 技能架构 RFC：技能依赖、接口和组合的向后兼容扩展提案",
    "link": "https://github.com/openclaw/openclaw/issues/11919",
    "platform": "GitHub Issues",
    "language": "English",
    "type": "Development",
    "isFeatured": false,
    "topics": [
      "架构",
      "RFC",
      "技能组合"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "isml3rdod",
    "name": "Clawbot/OpenClaw Setup Guides & Directory",
    "description": "独立 OpenClaw 设置中心，实用教程、更新链接和故障排除资源",
    "link": "https://clawbots.com/",
    "platform": "Clawbots",
    "language": "English",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "社区",
      "设置中心",
      "故障排除"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "q62lc89wd",
    "name": "Reddit — Best Openclaw Skills You Should Install (From ClawHub\\",
    "description": "Reddit 社区精选：500+ ClawHub 技能中的最佳推荐，含 Linear 集成、GraphQL 管理等实用技能",
    "link": "https://www.reddit.com/r/AI_Agents/comments/1r2u356/best_openclaw_skills_you_should_install_from/",
    "platform": "Reddit",
    "language": "English",
    "type": "Development",
    "isFeatured": true,
    "topics": [
      "Reddit",
      "技能推荐",
      "Linear",
      "GraphQL"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "1vgfqdtee",
    "name": "Gainsight Community — Best OpenClaw Skills 2026: Site Builder\\",
    "description": "站点建设者标准：如何判断 OpenClaw 技能的质量，关注维护信号和版本历史",
    "link": "https://communities.gainsight.com/ideas/best-openclaw-skills-2026-a-site-builder-s-standard-for-what-actually-deserves-the-label-30298",
    "platform": "Gainsight",
    "language": "English",
    "type": "Development",
    "isFeatured": false,
    "topics": [
      "标准",
      "质量评估",
      "维护信号"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "sivxbsqvd",
    "name": "CyberSecurity News — OpenClaw v2026.2.6 发布：支持 Opus 4.6、GPT-5.3-Codex 和安全扫描器",
    "description": "OpenClaw v2026.2.6 版本更新：增强安全性，响应 ClawHub 生态中的恶意技能威胁，内置代码安全扫描器和新模型支持",
    "link": "https://cybersecuritynews.com/openclaw-v2026-2-6-released/",
    "platform": "CyberSecurity News",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "版本更新",
      "安全扫描",
      "Opus 4.6",
      "GPT-5.3"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "kwei9urp5",
    "name": "Reddit — I Scanned Popular OpenClaw Skills - Here\\",
    "description": "Reddit 安全研究：扫描热门 OpenClaw 技能发现的安全问题，NPM/PyPI 供应链攻击的相同套路",
    "link": "https://www.reddit.com/r/hacking/comments/1r30t25/i_scanned_popular_openclaw_skills_heres_what_i/",
    "platform": "Reddit",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "安全研究",
      "供应链攻击",
      "NPM",
      "PyPI"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "e50n3aumi",
    "name": "GitHub Issue — 2026.2.14 更新后权限错误：missing scope operator.read",
    "description": "OpenClaw 2026.2.14 版本更新后出现权限范围错误的解决方案和讨论",
    "link": "https://github.com/openclaw/openclaw/issues/16820",
    "platform": "GitHub",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "版本问题",
      "权限错误",
      "2026.2.14"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "1vpj64u4p",
    "name": "GitHub Issue — Copilot 提供商模型列表更新：Claude Opus 4.6-fast、GPT-5.3-codex",
    "description": "请求更新 Copilot 提供商支持最新模型，保持与 Copilot CLI 和 Proxy 功能同步",
    "link": "https://github.com/openclaw/openclaw/issues/15014",
    "platform": "GitHub",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "Copilot",
      "Claude Opus 4.6",
      "GPT-5.3"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "iy77z8hne",
    "name": "GitHub Issue — Claude Opus 4.6 支持请求",
    "description": "2026年2月5日发布的 Claude Opus 4.6 模型支持请求，需要 SDK 版本升级到 0.73.0+",
    "link": "https://github.com/openclaw/openclaw/issues/12621",
    "platform": "GitHub",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "Claude Opus 4.6",
      "SDK升级",
      "模型支持"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "v8o0fac86",
    "name": "Latenode — What is OpenClaw? Your Open-Source AI Assistant for 2026",
    "description": "2026年 OpenClaw 完整介绍：100+ 技能可用，单 CLI 命令安装，支持自然语言生成新技能",
    "link": "https://latenode.com/blog/ai/ai-agents/what-is-openclaw",
    "platform": "Latenode",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "2026介绍",
      "100+技能",
      "CLI安装"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "5syuqrlgf",
    "name": "WiTechPedia — OpenClaw AI Wiki: 架构、技能和实现",
    "description": "OpenClaw AI 深度解析：ClawHub 市场、MCP 协议、与其他自主 Agent 的对比分析",
    "link": "https://www.witechpedia.com/wiki/openclaw-ai/",
    "platform": "WiTechPedia",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "架构解析",
      "MCP协议",
      "Agent对比"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "mzy6ax4gz",
    "name": "Vercel — OpenClaw (Clawdbot) 官方集成指南",
    "description": "Vercel AI Gateway 集成 OpenClaw：API 密钥创建、安装向导和使用监控",
    "link": "https://vercel.com/docs/ai-gateway/chat-platforms/openclaw",
    "platform": "Vercel",
    "language": "English",
    "type": "Resource",
    "isFeatured": true,
    "topics": [
      "Vercel",
      "AI Gateway",
      "官方集成"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "a2tuinfb7",
    "name": "Apidog — How to Update OpenClaw to Latest Version",
    "description": "工程导向的 OpenClaw 更新指南：Docker/systemd/compose 安全更新，备份、模式迁移和回滚设计",
    "link": "https://apidog.com/blog/update-openclaw/",
    "platform": "Apidog",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "Apidog",
      "更新指南",
      "备份回滚"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "v5doebpbq",
    "name": "Substack — OpenClaw/Moltbot/ClawdBot 101: 完整指南",
    "description": "全面的 OpenClaw 指南：从基础概念到高级用法，涵盖 24/7 运行和消息平台集成",
    "link": "https://sidsaladi.substack.com/p/openclawmoltbotclawdbot-101-the-complete",
    "platform": "Substack",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "完整指南",
      "24/7",
      "消息平台"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "63y71n0lo",
    "name": "YouTube — Ultimate Clawdbot Tutorial: Beginners Setup & Use (OpenClaw)",
    "description": "PAIO by PureVPN 赞助的完整初学者教程，从安装到基本使用全流程",
    "link": "https://www.youtube.com/watch?v=NA8C8jIQNeM",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "初学者",
      "完整教程",
      "PureVPN"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "m1hurb6a8",
    "name": "YouTube — The Easiest Way To Install and Use OpenClaw For Beginners",
    "description": "Hostinger VPS 逐步安装教程，专为初学者设计的易懂指南",
    "link": "https://www.youtube.com/watch?v=HFVImm-D1C4",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "Hostinger",
      "VPS",
      "初学者友好"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "3swe1mko3",
    "name": "TechCrunch — OpenClaw 创始人 Peter Steinberger 加入 OpenAI",
    "description": "重磅新闻：OpenClaw 创始人正式加入 OpenAI，负责\"下一代个人代理\"开发，OpenClaw 将作为开源项目继续由 OpenAI 支持",
    "link": "https://techcrunch.com/2026/02/15/openclaw-creator-peter-steinberger-joins-openai/",
    "platform": "TechCrunch",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "重磅新闻",
      "OpenAI",
      "创始人",
      "里程碑"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "u02bmj0b7",
    "name": "CNBC — OpenClaw 创始人 Peter Steinberger 加入 OpenAI，Sam Altman 确认",
    "description": "CNBC 确认报道：Sam Altman 发推确认 OpenClaw 创始人加入 OpenAI，开源项目将由 OpenAI 基金会继续支持",
    "link": "https://www.cnbc.com/2026/02/15/openclaw-creator-peter-steinberger-joining-openai-altman-says.html",
    "platform": "CNBC",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "CNBC",
      "Sam Altman",
      "官方确认",
      "里程碑"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "v4nawac1e",
    "name": "Archive.is — OpenClaw 2026.2.12 发布：修复 40+ 安全问题",
    "description": "OpenClaw 2026.2.12 重大安全更新：修复 40+ 漏洞，加强 AI Agent 平台保护",
    "link": "https://archive.is/YqEtG",
    "platform": "Archive.is",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "版本更新",
      "安全修复",
      "40漏洞",
      "2026.2.12"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "4d4s3q3yv",
    "name": "Julian Goldie — OpenClaw 工作流自动化：消除 80% 日常繁琐工作",
    "description": "实战案例：OpenClaw 2026.2.6 版本新功能深度体验，从晨间简报到 AI 利润社区自动化的完整工作流",
    "link": "https://juliangoldie.com/openclaw-workflow-automation/",
    "platform": "Julian Goldie",
    "language": "English",
    "type": "Showcase",
    "isFeatured": true,
    "topics": [
      "工作流",
      "自动化",
      "实战案例",
      "v2026.2.6"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "tfv1n8zlc",
    "name": "Unraid 论坛 — OpenClaw AI 个人助手支持页面",
    "description": "Unraid 社区官方支持：自托管 AI 助手，Docker 容器部署，直接在 Unraid 服务器运行",
    "link": "https://forums.unraid.net/topic/196865-support-openclaw-ai-personal-assistant/",
    "platform": "Unraid Forum",
    "language": "English",
    "type": "Resource",
    "isFeatured": false,
    "topics": [
      "Unraid",
      "Docker",
      "自托管",
      "社区支持"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "esu9759rw",
    "name": "Peter Steinberger — OpenClaw, OpenAI and the future（创始人公告）",
    "description": "tl;dr: 我加入 OpenAI 负责个人 Agent，OpenClaw 将移交基金会保持开源独立。创始人第一视角全文声明",
    "link": "https://steipete.me/posts/2026/openclaw",
    "platform": "steipete.me",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "里程碑",
      "创始人声明",
      "OpenAI",
      "基金会"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ojdzhp1i6",
    "name": "Reuters — OpenClaw 创始人加入 OpenAI，项目转为基金会",
    "description": "Sam Altman 确认 Peter Steinberger 加入 OpenAI，OpenClaw 将\"生活在基金会中\"保持开源",
    "link": "https://www.reuters.com/business/openclaw-founder-steinberger-joins-openai-open-source-bot-becomes-foundation-2026-02-15/",
    "platform": "Reuters",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "Reuters",
      "里程碑",
      "OpenAI",
      "基金会"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "cr1sq9cyq",
    "name": "CNET — The Year of the Agent: OpenAI Strikes Deal With OpenClaw Founder",
    "description": "Lex Fridman 播客后 Zuckerberg 与 Altman 均抛出 offer，Steinberger 最终选择 OpenAI 全过程报道",
    "link": "https://www.cnet.com/tech/services-and-software/openai-strikes-deal-with-openclaw-founder/",
    "platform": "CNET",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "CNET",
      "OpenAI",
      "Meta",
      "里程碑"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "09d0vj2qg",
    "name": "Fast Company — 6 quotes from Peter Steinberger on the future of personal computing",
    "description": "Lex Fridman 3 小时播客精华提炼：Steinberger 对个人计算和 AI Agent 未来的洞见",
    "link": "https://www.fastcompany.com/91494326/openclaw-peter-steinberger-openai-meta-lex-fridman",
    "platform": "Fast Company",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "Fast Company",
      "Lex Fridman",
      "播客精华",
      "未来展望"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "a72ul2yo7",
    "name": "Business Insider — OpenAI Hires OpenClaw Creator: Praise, Memes & Rivalry",
    "description": "科技圈的反应：Steinberger 加入 OpenAI 后的赞誉、梗图和竞争话题报道",
    "link": "https://www.businessinsider.com/openais-openclaw-hire-sparks-praise-memes-rivalry-chatter-2026-2",
    "platform": "Business Insider",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "Business Insider",
      "行业动态",
      "OpenAI"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "m21xggwny",
    "name": "Parameter.io — OpenClaw Developer Picks OpenAI After Rejecting Meta",
    "description": "Meta vs OpenAI 争夺战报道，+ Moonshot AI 于同日发布 Kimi Claw（浏览器版 OpenClaw）分析",
    "link": "https://parameter.io/openclaw-developer-picks-openai-after-rejecting-meta-acquisition-deal/",
    "platform": "Parameter.io",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "Meta",
      "OpenAI",
      "Kimi Claw",
      "行业分析"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "w9jzx0i7a",
    "name": "Lex Fridman Podcast #491 — OpenClaw: The Viral AI Agent that Broke the Internet",
    "description": "GitHub 历史上增长最快的项目创始人 Peter Steinberger 接受 Lex Fridman 3 小时深度专访，必听",
    "link": "https://www.youtube.com/watch?v=YFjfBk8HI5o",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "Lex Fridman",
      "播客",
      "创始人",
      "必听"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "8rlqs7ik4",
    "name": "Lex Fridman Podcast — 文字版 + 章节索引（#491）",
    "description": "Lex Fridman 官网版：含完整章节列表和时间戳，方便跳读关键话题",
    "link": "https://lexfridman.com/peter-steinberger/",
    "platform": "Lex Fridman",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "Lex Fridman",
      "播客",
      "文字版",
      "创始人"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "jx8somj8k",
    "name": "YouTube — Kimi Claw: 浏览器内运行 OpenClaw（教程 + 演示）",
    "description": "Moonshot AI 推出 Kimi Claw：无需本地部署或 VPS，在浏览器云端运行 OpenClaw Agent 全教程",
    "link": "https://www.youtube.com/watch?v=72voj6uefLY",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "Kimi Claw",
      "Moonshot AI",
      "浏览器版",
      "无需部署"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "a04adydor",
    "name": "YouTube — Tech With Tim: OpenClaw Full Course (Setup, Skills, Voice, Memory)",
    "description": "Tech With Tim 出品：涵盖安装、技能、语音回复、记忆系统的完整系统课程，Hostinger 赞助",
    "link": "https://www.youtube.com/watch?v=vte-fDoZczE",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "Tech With Tim",
      "完整课程",
      "Skills",
      "Voice",
      "Memory"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "1x32c7qr9",
    "name": "YouTube — OpenClaw Tutorial for Beginners: Crash Course",
    "description": "OpenClaw（前 MoltBot/Clawdbot）速成课程：本地自主运行 + MCP + Zapier 集成演示",
    "link": "https://www.youtube.com/watch?v=u4ydH-QvPeg",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "速成课",
      "MCP",
      "Zapier"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "5elp53cg1",
    "name": "YouTube — OpenClaw Tutorial 2026: Everything You Need to Know",
    "description": "2026 全面入门视频：账户配置、平台导航、主要功能和第一个自动化任务演示",
    "link": "https://www.youtube.com/watch?v=znaJgKDo-oI",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "2026",
      "全面入门"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "pgxxg0lf2",
    "name": "YouTube — OpenClaw Use Cases that Actually Work (mberman84)",
    "description": "Matt Berman 演示真正实用的 OpenClaw 场景，配 Greptile 集成和完整提示词 Gist",
    "link": "https://www.youtube.com/watch?v=Q7r--i9lLck",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "用例演示",
      "Greptile",
      "实用"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "xvnc2lin1",
    "name": "YouTube — OpenClaw Use Cases that are Actually Helpful (Skool 社区版)",
    "description": "结合 Skool 社区平台的 OpenClaw 正确玩法：从安装到真实工作流的完整演示",
    "link": "https://www.youtube.com/watch?v=LV6Juz0xcrY",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "用例演示",
      "Skool",
      "工作流"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "2tpixnqvp",
    "name": "Towards Data Science — Use OpenClaw to Make a Personal AI Assistant",
    "description": "权威数据科学媒体出品：OpenClaw 个人 AI 助手搭建完整指南，从安装到个性化配置",
    "link": "https://towardsdatascience.com/use-openclaw-to-make-a-personal-ai-assistant/",
    "platform": "Towards Data Science",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": true,
    "topics": [
      "TDS",
      "权威",
      "个性化",
      "数据科学"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "xpbjcqm8b",
    "name": "Medium — OpenClaw Tutorial 2026: Setting Up Your 24/7 AI Employee",
    "description": "Travis Nicholson 出品：从 AI 软件到 AI Agent 的认知转变，全流程 24/7 部署配置指南",
    "link": "https://travisnicholson.medium.com/openclaw-tutorial-2026-setting-up-your-24-7-ai-employee-step-by-step-guide-39f52a81707a",
    "platform": "Medium",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Medium",
      "24/7",
      "认知转变",
      "2026"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "o85vj8oq9",
    "name": "The Educationist Hub — How to Install Clawdbot (OpenClaw) on Windows 2026",
    "description": "Windows 平台完整安装指南：含自动化 SEO 和消息任务配置，适合 Windows 用户",
    "link": "https://www.theeducationisthub.com/install-clawdbot-windows/",
    "platform": "The Educationist Hub",
    "language": "English",
    "type": "Tutorial",
    "isFeatured": false,
    "topics": [
      "Windows",
      "2026",
      "自动化SEO"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "xdlp5iqch",
    "name": "Fortune — Why OpenClaw Has Security Experts on Edge",
    "description": "Fortune 科技版深度报道：OpenClaw 赋予 AI 真实自主权带来的新型安全风险，Eye on AI 专栏",
    "link": "https://fortune.com/2026/02/12/openclaw-ai-agents-security-risks-beware/",
    "platform": "Fortune",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "Fortune",
      "安全",
      "主流媒体",
      "自主权风险"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "kd2ai51as",
    "name": "Sophos — The OpenClaw Experiment Is a Warning Shot for Enterprise AI Security",
    "description": "Sophos 研究：3 万+ 暴露实例，威胁者已在讨论如何武器化 Skills，企业必读安全警告",
    "link": "https://www.sophos.com/en-us/blog/the-openclaw-experiment-is-a-warning-shot-for-enterprise-ai-security",
    "platform": "Sophos",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "Sophos",
      "安全",
      "暴露实例",
      "企业"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "vtrlbo4w4",
    "name": "Conscia — The OpenClaw Security Crisis: ClawHavoc 824 恶意技能",
    "description": "2026-02-16 最新统计：ClawHavoc 行动将恶意技能扩展至 824 个，覆盖 10,700+ 技能库的深度分析",
    "link": "https://conscia.com/blog/the-openclaw-security-crisis/",
    "platform": "Conscia",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "安全危机",
      "ClawHavoc",
      "824恶意技能",
      "最新统计"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "0cln3vjk8",
    "name": "Barrack.ai — OpenClaw Is a Security Nightmare: Here\\",
    "description": "Zenity Labs 研究：Google Docs 间接提示注入演示 + 安全运行 OpenClaw 的实用指南",
    "link": "https://blog.barrack.ai/openclaw-security-vulnerabilities-2026/",
    "platform": "Barrack.ai",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Zenity Labs",
      "提示注入",
      "安全指南"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "9ylf3k7e9",
    "name": "Aikido.dev — Why Trying to Secure OpenClaw Is Ridiculous",
    "description": "Aikido 安全团队：ClawHub 恶意软件、暴露实例、加固指南为何治标不治本的犀利分析",
    "link": "https://www.aikido.dev/blog/why-trying-to-secure-openclaw-is-ridiculous",
    "platform": "Aikido",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Aikido",
      "安全批判",
      "ClawHub",
      "深度分析"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "2u0k6jv5f",
    "name": "Security Boulevard — Securing OpenClaw Against ClawHavoc",
    "description": "12% ClawHub 技能被确认恶意，ClawHavoc 供应链攻击完整分析和防护方案",
    "link": "https://securityboulevard.com/2026/02/securing-openclaw-againstclawhavoc/",
    "platform": "Security Boulevard",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Security Boulevard",
      "ClawHavoc",
      "供应链",
      "防护"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "l03zdu589",
    "name": "RNWY Blog — The OpenClaw Ecosystem Is Growing Fast: Who\\",
    "description": "生态图谱报告：OpenClaw Agent 持有钱包、执行支付时，谁在验证其身份？身份安全的深层问题",
    "link": "https://rnwy.com/blog/openclaw-ecosystem-agent-verification",
    "platform": "RNWY",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "生态图谱",
      "Agent身份",
      "支付安全",
      "验证机制"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "1gsma3lif",
    "name": "SitePoint — OpenClaw Production Guide: 4 Weeks of Hard Lessons",
    "description": "30 天自托管 AI Agent 的真实记录：可扩展性、监控、成本与运营指标综合报告",
    "link": "https://www.sitepoint.com/openclaw-production-lessons-4-weeks-self-hosted-ai/",
    "platform": "SitePoint",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "SitePoint",
      "生产环境",
      "4周实测",
      "运营指标"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "hii0zyfvk",
    "name": "Medium — OpenClaw for Product Managers: Building Products in the AI Agent Era 2026",
    "description": "产品经理视角：OpenClaw 如何重新定义\"AI 驱动产品\"，Gateway 架构与产品决策关系分析",
    "link": "https://medium.com/@mohit15856/openclaw-for-product-managers-building-products-in-the-ai-agent-era-2026-guide-71d18641200f",
    "platform": "Medium",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "产品经理",
      "PM视角",
      "AI产品",
      "2026"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "mlkakrb1b",
    "name": "Archive.ph — Run OpenClaw Safely with Docker: Production-Grade Deep Dive",
    "description": "生产级 Ollama + OpenClaw 安全配置：本地 AI 基础设施作为攻击面的深度剖析，附完整 Docker 方案",
    "link": "https://archive.ph/zv0wm",
    "platform": "Towards Dev",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Docker",
      "Ollama",
      "生产级",
      "安全配置"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ad5myxp71",
    "name": "The Register — OpenAI Grabs OpenClaw Creator Peter Steinberger",
    "description": "The Register 报道 Altman 确认 Steinberger 加入 OpenAI，OpenClaw 将\"作为开源项目在基金会中继续生存\"",
    "link": "https://www.theregister.com/2026/02/16/open_ai_grabs_openclaw",
    "platform": "The Register",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "The Register",
      "OpenAI",
      "里程碑",
      "基金会"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "0urach6nx",
    "name": "Tech.eu — Austrian Creator of Viral OpenClaw Joins OpenAI",
    "description": "Steinberger：\"我加入 OpenAI 为所有人带来 Agent。OpenClaw 正在成为基金会：开放、独立、刚刚起步。\"",
    "link": "https://tech.eu/2026/02/16/austrian-creator-of-viral-openclaw-joins-openai/",
    "platform": "Tech.eu",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "Tech.eu",
      "欧洲科技媒体",
      "OpenAI",
      "基金会"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "n8x94zso9",
    "name": "OpenClaw Newsletter — 2026-02-15（v2026.2.14：50+ 安全修复）",
    "description": "官方周刊：v2026.2.14 情人节发布，50+ 安全修复，Telegram Polls、Slack/Discord DM 策略、Matrix 语音消息改进",
    "link": "https://buttondown.com/openclaw-newsletter/archive/openclaw-newsletter-2026-02-15/",
    "platform": "OpenClaw Newsletter",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "官方周刊",
      "版本更新",
      "v2026.2.14",
      "安全修复"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "3ccmv0gx9",
    "name": "gradually.ai — OpenClaw Changelog（2026 年 2 月）",
    "description": "v2026.2.14 ~ v2026.2.17 完整更新日志：Telegram Polls、Slack/Discord DM 策略、新权限系统等功能一览",
    "link": "https://www.gradually.ai/en/changelogs/openclaw/",
    "platform": "gradually.ai",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "更新日志",
      "v2026.2.17",
      "Telegram Polls",
      "版本追踪"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "hxs7bizq3",
    "name": "Reddit — OpenClaw 2026.2.15 更新：重大功能与改进",
    "description": "Reddit 社区 r/aicuriosity 精华帖：2026 年 2 月 16 日新版本发布，AI Agent 平台核心功能升级详解",
    "link": "https://www.reddit.com/r/aicuriosity/comments/1r6536z/openclaw_2026215_update_major_features_and/",
    "platform": "Reddit",
    "language": "English",
    "type": "Official",
    "isFeatured": false,
    "topics": [
      "Reddit",
      "v2026.2.15",
      "版本更新",
      "社区讨论"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "x7f22w1u8",
    "name": "Hacker News — OpenClaw (ClawdBot) joins OpenAI（讨论帖）",
    "description": "HN 社区讨论：OpenClaw 加入 OpenAI 事件，n8n 类比、设置摩擦、小企业自动化的真实用户视角",
    "link": "https://news.ycombinator.com/item?id=47027907",
    "platform": "Hacker News",
    "language": "English",
    "type": "Official",
    "isFeatured": true,
    "topics": [
      "Hacker News",
      "OpenAI",
      "社区讨论",
      "HN"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "kssoc5a2c",
    "name": "Om.co — Sam \"Claws\" Attention Back: Om Malik 分析 OpenAI 收购 Steinberger",
    "description": "知名科技作家 Om Malik 分析：Steinberger 加入 OpenAI 对个人 AI Agent 赛道的深层意义",
    "link": "https://om.co/2026/02/16/sam-claws-attention-back-openai/",
    "platform": "Om.co",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "Om Malik",
      "OpenAI",
      "深度分析",
      "行业影响"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "hq6iukacg",
    "name": "Medium — OpenClaw Just Dropped a Massive Update: Making Paid AI Look Like a Joke",
    "description": "2026 年 2 月多版本连续更新深度体验：DevOps 自动化、智能家居控制、跨平台实时任务执行",
    "link": "https://medium.com/@krupeshraut/openclaw-just-dropped-a-massive-update-and-its-making-paid-ai-assistants-look-like-a-joke-86e12f931dd8",
    "platform": "Medium",
    "language": "English",
    "type": "Article",
    "isFeatured": false,
    "topics": [
      "Medium",
      "版本更新",
      "DevOps",
      "自动化"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "fxpaipljf",
    "name": "Medium — OpenClaw: 190K GitHub Stars in 14 Days and Changed How We Think About Digital Labor",
    "description": "从 190K Stars 到 OpenAI 收购：OpenClaw 如何重新定义数字劳动，并改变个人计算范式的深度分析",
    "link": "https://archive.ph/YSnks",
    "platform": "Medium (archive)",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "190K Stars",
      "数字劳动",
      "范式转变",
      "里程碑"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "81i9f8wgq",
    "name": "Prime Rogue Inc — OpenClaw 安全危机：2026 年 2 月天真部署者须知",
    "description": "CVSS 8.8 漏洞披露、Hudson Rock 发现 Vidar 变体窃取 openclaw.json tokens，项目移交基金会期间仍在活跃利用",
    "link": "https://primerogueinc.com/blog/openclaw-security-crisis-structurally-broken-in-february-2026-what-naive-deployers-need-to-know-before-its-too-late/",
    "platform": "Prime Rogue Inc",
    "language": "English",
    "type": "Article",
    "isFeatured": true,
    "topics": [
      "安全危机",
      "CVSS 8.8",
      "Vidar",
      "Token窃取"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "ocr9rdnnm",
    "name": "DataCamp — 9 OpenClaw Projects to Build in 2026",
    "description": "9 个实战项目：从 Reddit 摘要机器人到自愈服务器，每个项目附配置文件、提示词和社区 Setup 指南",
    "link": "https://www.datacamp.com/blog/openclaw-projects",
    "platform": "DataCamp",
    "language": "English",
    "type": "Showcase",
    "isFeatured": true,
    "topics": [
      "DataCamp",
      "9个项目",
      "实战",
      "Reddit Bot"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "b1fpwy1w7",
    "name": "YouTube — OpenClaw Full Setup Tutorial: EASIEST Way! (Duncan × Hostinger)",
    "description": "Duncan 出品：Hostinger VPS 最简部署指南，从零到运行的完整演示，附 10% 优惠码",
    "link": "https://www.youtube.com/watch?v=HCgHJf9YVAw",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "Hostinger",
      "最简部署",
      "Duncan"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "jv5eubirc",
    "name": "YouTube — OpenClaw Setup on Coolify with VPS（无需 Mac Mini）",
    "description": "Coolify 容器化部署 OpenClaw，适合已有 VPS 用户，无需购买昂贵 Mac Mini 硬件",
    "link": "https://www.youtube.com/watch?v=48fjZWNjwtU",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "Coolify",
      "VPS",
      "无需Mac Mini"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "09gbrq3hu",
    "name": "YouTube — Full OpenClaw/ClawdBot Setup Guide for Beginners（Grey Matter AI）",
    "description": "Grey Matter AI 社区出品：完整入门课程，从安装到配置，Skool 社区免费加入",
    "link": "https://www.youtube.com/watch?v=lRQk5jabSH4",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": false,
    "topics": [
      "YouTube",
      "Grey Matter AI",
      "社区",
      "入门"
    ],
    "addedAt": "2026-02-23"
  },
  {
    "id": "gsp2wda23",
    "name": "YouTube — One-Click OpenClaw on VPS — No Mac Mini Needed ($4/month)",
    "description": "一键云端部署 OpenClaw，每月仅需 $4，彻底告别 Mac Mini 依赖，24/7 稳定运行",
    "link": "https://www.youtube.com/watch?v=-xAFJfvg6FI",
    "platform": "YouTube",
    "language": "English",
    "type": "Video",
    "isFeatured": true,
    "topics": [
      "YouTube",
      "一键部署",
      "$4/月",
      "无需Mac Mini"
    ],
    "addedAt": "2026-02-23"
  }
];
