"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "首页", href: "/" },
  { label: "指南库", href: "/guides" },
  { label: "学习路线", href: "#learning-path" },
  { label: "资源总览", href: "#skills" },
  { label: "关于", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 group-hover:border-accent/50 transition-all duration-300">
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
            <div className="absolute inset-0 rounded-lg bg-accent/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground tracking-tight leading-none">
              BotGuide
            </span>
            <span className="text-[10px] text-muted-foreground font-mono tracking-wider">
              {"by 入行 365"}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-accent group-hover:w-3/4 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://ruhang365.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
          >
            <span>{"加入入行 365"}</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-64 border-b border-border" : "max-h-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://ruhang365.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-accent"
          >
            {"加入入行 365"}
          </a>
        </div>
      </div>
    </header>
  );
}
