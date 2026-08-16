import { cn } from "@/lib/utils";
import type { AccentColor } from "@/data/types";

const accentMap: Record<
  AccentColor,
  {
    text: string;
    border: string;
    glow: string;
    soft: string;
    underline: string;
  }
> = {
  orange: {
    text: "text-cyber-orange",
    border: "border-cyber-orange/50",
    glow: "text-glow-orange",
    soft: "bg-cyber-orange/10",
    underline: "bg-cyber-orange",
  },
  cyan: {
    text: "text-cyber-cyan",
    border: "border-cyber-cyan/50",
    glow: "text-glow-cyan",
    soft: "bg-cyber-cyan/10",
    underline: "bg-cyber-cyan",
  },
  purple: {
    text: "text-cyber-purple",
    border: "border-cyber-purple/50",
    glow: "text-glow-purple",
    soft: "bg-cyber-purple/10",
    underline: "bg-cyber-purple",
  },
  yellow: {
    text: "text-cyber-yellow",
    border: "border-cyber-yellow/50",
    glow: "text-glow-yellow",
    soft: "bg-cyber-yellow/10",
    underline: "bg-cyber-yellow",
  },
  lime: {
    text: "text-cyber-lime",
    border: "border-cyber-lime/50",
    glow: "text-glow-lime",
    soft: "bg-cyber-lime/10",
    underline: "bg-cyber-lime",
  },
  "cyan-default": {
    text: "text-cyber-cyan",
    border: "border-cyber-cyan/50",
    glow: "text-glow-cyan",
    soft: "bg-cyber-cyan/10",
    underline: "bg-cyber-cyan",
  },
};

export function getAccent(accent: AccentColor = "cyan") {
  return accentMap[accent] ?? accentMap.cyan;
}

export function accentClass(
  accent: AccentColor | undefined,
  key: keyof (typeof accentMap)["cyan"],
  className?: string
) {
  return cn(getAccent(accent ?? "cyan")[key], className);
}
