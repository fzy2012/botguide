"use client";

import { useState, useMemo } from "react";
import { guides, type Guide } from "@/data/guides";
import { getTypeIcon, getTypeColor, guideTypes } from "@/lib/guide-utils";
import { FadeUp } from "./animated-text";

const languages = ["全部", "Chinese", "English"] as const;

export function GuidesClient() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("全部");
  const [selectedLang, setSelectedLang] = useState<string>("全部");

  const filtered = useMemo(() => {
    return guides.filter((g) => {
      const matchSearch =
        !search ||
        g.name.toLowerCase().includes(search.toLowerCase()) ||
        g.description.toLowerCase().includes(search.toLowerCase()) ||
        g.platform.toLowerCase().includes(search.toLowerCase()) ||
        g.topics.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchType = selectedType === "全部" || g.type === selectedType;
      const matchLang = selectedLang === "全部" || g.language === selectedLang;
      return matchSearch && matchType && matchLang;
    });
  }, [search, selectedType, selectedLang]);

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    guides.forEach((g) => {
      counts[g.type] = (counts[g.type] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 grid-bg">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <FadeUp>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
            <span className="text-xs font-mono text-accent tracking-widest">
              GUIDES
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-accent/30 to-transparent" />
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-center tracking-tight mb-4">
            指南库
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-center text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-8">
            {"浏览 " + guides.length + " 篇精选 OpenClaw 学习资源"}
          </p>
        </FadeUp>

        {/* Search */}
        <FadeUp delay={300}>
          <div className="relative max-w-xl mx-auto mb-8">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="搜索指南名称、描述、平台、标签..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/30 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="清除搜索"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </FadeUp>

        {/* Filters */}
        <FadeUp delay={400}>
          <div className="flex flex-col gap-4 mb-2">
            {/* Type Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setSelectedType("全部")}
                className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                  selectedType === "全部"
                    ? "bg-accent text-accent-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                }`}
              >
                全部
                <span className="ml-1.5 text-[10px] opacity-60">
                  {guides.length}
                </span>
              </button>
              {guideTypes.map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    setSelectedType(selectedType === type ? "全部" : type)
                  }
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                    selectedType === type
                      ? "bg-accent text-accent-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                  }`}
                >
                  <span className="font-mono text-[10px]">{getTypeIcon(type)}</span>
                  {type}
                  <span className="text-[10px] opacity-60">
                    {typeCounts[type] || 0}
                  </span>
                </button>
              ))}
            </div>

            {/* Language Filter */}
            <div className="flex items-center justify-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                    selectedLang === lang
                      ? "bg-accent text-accent-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                  }`}
                >
                  {lang === "全部" ? "全部语言" : lang === "Chinese" ? "中文" : "English"}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-muted-foreground font-mono">
            {"共 " + filtered.length + " 条结果"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <p className="text-foreground font-medium mb-1">未找到匹配的指南</p>
            <p className="text-sm text-muted-foreground">
              尝试调整筛选条件或搜索关键词
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((guide, i) => (
              <GuideCard key={guide.id} guide={guide} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GuideCard({ guide, index }: { guide: Guide; index: number }) {
  return (
    <a
      href={guide.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-border bg-card p-6 card-glow transition-all duration-300"
      style={{
        animationDelay: `${Math.min(index * 30, 300)}ms`,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide ${getTypeColor(guide.type)}`}
        >
          <span>{getTypeIcon(guide.type)}</span>
          {guide.type}
        </span>
        <span className="text-[10px] text-muted-foreground/60 font-mono">
          {guide.language === "Chinese" ? "中文" : "EN"}
        </span>
        {guide.isFeatured && (
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-accent font-mono">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            精选
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
        {guide.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1 mb-4">
        {guide.description}
      </p>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {guide.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="inline-flex rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-[10px] text-muted-foreground/50 font-mono">
          {guide.platform}
        </span>
        <svg
          className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </a>
  );
}
