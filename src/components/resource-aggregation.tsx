"use client";

import Link from "next/link";
import { FadeUp, AnimatedCounter } from "./animated-text";

const sources = [
  "Alibaba Cloud",
  "Tencent Cloud",
  "DigitalOcean",
  "Hostinger",
  "IBM",
  "Codecademy",
  "Bilibili",
  "CSDN",
  "Reddit",
  "freeCodeCamp",
  "YouTube",
  "Medium",
];

export function ResourceAggregation() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <FadeUp>
            <span className="text-sm font-mono text-accent tracking-widest uppercase">
              {"精选收录"}
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              {"全网优质资源聚合"}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              {"从阿里云、腾讯云到 DigitalOcean，从 B站到 Codecademy \u2014\u2014 一站式获取 OpenClaw 最佳教程。"}
            </p>
          </FadeUp>
        </div>

        {/* Security Warning */}
        <FadeUp delay={250}>
          <div className="mb-12 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl shrink-0">{"\u26A0\uFE0F"}</span>
              <div>
                <p className="text-base lg:text-lg text-foreground font-semibold mb-1">
                  {"安全提醒"}
                </p>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {"近期发现有恶意 Skills 通过 ClawHub 分发，窃取用户数据。安装第三方 Skill 前请务必检查源码，优先使用官方或社区审核的 Skills。"}
                  <a
                    href="https://thehackernews.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-accent hover:underline"
                  >
                    {"详情 \u2197"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "篇教程", value: 293, suffix: "+", color: "text-orange-400" },
              { label: "中文资源", value: 46, suffix: "", color: "text-blue-400" },
              { label: "英文资源", value: 247, suffix: "", color: "text-emerald-400" },
              { label: "大分类", value: 9, suffix: "", color: "text-violet-400" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <span className={`text-3xl md:text-4xl font-bold font-mono ${stat.color}`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <p className="mt-1 text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Source badges */}
        <FadeUp delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="text-sm text-muted-foreground mr-2">{"收录来源："}</span>
            {sources.map((source) => (
              <span
                key={source}
                className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground hover:border-accent/30 hover:text-foreground transition-all duration-200 cursor-default"
              >
                {source}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={500}>
          <div className="text-center">
            <Link
              href="/guides"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-10 py-4 text-base font-semibold text-accent-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            >
              <span>{"查看全部 293+ 篇资源"}</span>
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
