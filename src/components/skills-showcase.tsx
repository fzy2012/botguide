"use client";

import { FadeUp, AnimatedCounter } from "./animated-text";
import { guides } from "@/data/guides";

const totalGuides = guides.length;
const types = new Set(guides.map((g) => g.type)).size;
const platforms = new Set(guides.map((g) => g.platform)).size;
const featuredCount = guides.filter((g) => g.isFeatured).length;

const categories = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "官方文档",
    desc: "第一手权威资料",
    tag: "Official",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "教程指南",
    desc: "循序渐进学习",
    tag: "Tutorial",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "深度文章",
    desc: "案例与深度分析",
    tag: "Article",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "视频课程",
    desc: "可视化学习体验",
    tag: "Video",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "资源合集",
    desc: "工具链与开源项目",
    tag: "Resource",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "实战部署",
    desc: "从开发到上线",
    tag: "Deploy",
  },
];

const stats = [
  { label: "精选资源", value: totalGuides, suffix: "+", color: "text-orange-400" },
  { label: "内容分类", value: types, suffix: " 个", color: "text-blue-400" },
  { label: "来源平台", value: platforms, suffix: "+", color: "text-emerald-400" },
  { label: "编辑精选", value: featuredCount, suffix: "", color: "text-violet-400" },
];

export function SkillsShowcase() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-sm font-mono text-accent tracking-widest uppercase">
              {"资源总览"}
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              {"涵盖你需要的一切"}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              {"BotGuide 按内容类型精心分类，从官方文档到社区教程，从视频课程到实战部署，满足不同学习偏好。"}
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/15 transition-colors duration-300">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg font-semibold text-foreground">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{cat.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-mono text-muted-foreground border border-border">
                    {cat.tag}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-accent/5 px-2.5 py-1 text-xs font-mono text-accent border border-accent/20">
                    {guides.filter((g) => g.type === cat.tag || cat.tag === "Deploy" && g.type === "Tool" || cat.tag === "Resource" && g.type === "Resource Collection").length || "N/A"}
                    {" 篇"}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Stats row */}
        <FadeUp delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl border border-border bg-card p-8 lg:p-10">
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
      </div>
    </section>
  );
}
