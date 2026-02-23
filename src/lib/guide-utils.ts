export function getTypeIcon(type: string): string {
  const icons: Record<string, string> = {
    Official: "//",
    Resource: "~",
    Tutorial: ">_",
    Integration: "<>",
    Development: "{}",
    Video: ">>",
    Article: "#",
    Showcase: "*",
  };
  return icons[type] || "o";
}

export function getTypeColor(type: string): string {
  const colors: Record<string, string> = {
    Official: "bg-accent/10 text-accent border border-accent/20",
    Resource: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    Tutorial: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    Integration: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    Development: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    Video: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    Article: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    Showcase: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  };
  return colors[type] || "bg-muted text-muted-foreground border border-border";
}

export const guideTypes = [
  "Official",
  "Tutorial",
  "Article",
  "Resource",
  "Video",
  "Integration",
  "Development",
  "Showcase",
] as const;

export const guidePlatforms = [
  "OpenClaw",
  "GitHub",
  "阿里云",
  "腾讯云",
  "Bilibili",
  "YouTube",
  "CSDN",
  "掘金",
  "Reddit",
  "Discord",
] as const;
