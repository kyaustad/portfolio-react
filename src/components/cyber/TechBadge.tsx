"use client";

import {
  Aperture,
  Armchair,
  Atom,
  BarChart3,
  Box,
  BrainCircuit,
  Braces,
  Building2,
  CheckCircle2,
  CircleUserRound,
  Clock3,
  CloudFog,
  Code2,
  Database,
  DraftingCompass,
  Gamepad2,
  ImageIcon,
  Layers3,
  Lightbulb,
  Map,
  MessageCircle,
  MessageSquare,
  Mountain,
  Paintbrush,
  Palette,
  ScanLine,
  Shapes,
  Shirt,
  ShieldCheck,
  Sparkles,
  Split,
  Tag,
  Target,
  TrendingUp,
  Users,
  WandSparkles,
  Wind,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SkillIcon } from "@/components/cyber/SkillIcon";
import type { Skill } from "@/data/types";
import { cn } from "@/lib/utils";

const skillIconByLabel: Record<string, Skill["icon"]> = {
  javascript: "javascript",
  typescript: "typescript",
  vue: "vue",
  nuxt: "nuxt",
  node: "nodejs",
  "node.js": "nodejs",
  nodejs: "nodejs",
  html: "html",
  css: "css",
  tailwind: "tailwind",
  "tailwind css": "tailwind",
  express: "express",
  expressjs: "express",
  supabase: "supabase",
  aws: "aws",
  python: "python",
  react: "react",
  rust: "rust",
  tauri: "tauri",
  svelte: "svelte",
  postgres: "postgres",
  postgresql: "postgres",
  docker: "docker",
  kubernetes: "kubernetes",
  k8s: "kubernetes",
  mongodb: "mongo",
  mongo: "mongo",
  "c++": "cpp",
  "unreal engine": "unreal",
  unreal: "unreal",
  blender: "blender",
  "blender api": "blender",
  git: "git",
  wordpress: "wordpress",
};

const fallbackIconByLabel: Record<string, LucideIcon> = {
  "next.js": Code2,
  nextjs: Code2,
  drizzle: Database,
  sqlite: Database,
  recharts: BarChart3,
  openai: BrainCircuit,
  zod: ShieldCheck,
  "mapbox gl": Map,
  "discord.js": MessageCircle,
  cron: Clock3,
  json: Braces,
  blueprints: Workflow,
  "territory management": Map,
  "cold prospecting": Target,
  "objection handling": MessageSquare,
  "same-day close": CheckCircle2,
  "consultative selling": Users,
  upselling: TrendingUp,
  "trust building": ShieldCheck,
  "homeowner psychology": BrainCircuit,
  d2d: Target,
  residential: Users,
  "smart home": ShieldCheck,
  architectural: Building2,
  archviz: Building2,
  cyberpunk: Layers3,
  "hard surface": Box,
  "sci-fi": Layers3,
  prop: Box,
  modeling: DraftingCompass,
  character: CircleUserRound,
  "close-up": CircleUserRound,
  headshot: CircleUserRound,
  daz: CircleUserRound,
  diffeomorphic: Workflow,
  "human generator": CircleUserRound,
  stylized: Sparkles,
  environment: Mountain,
  landscape: Mountain,
  interior: Armchair,
  cycles: Aperture,
  particles: Atom,
  volumetrics: CloudFog,
  lighting: Lightbulb,
  fantasy: WandSparkles,
  vfx: WandSparkles,
  "low-poly": Shapes,
  cloth: Shirt,
  "cloth simulation": Shirt,
  "wind simulation": Wind,
  "custom shaders": Paintbrush,
  "custom materials": Paintbrush,
  texturing: Paintbrush,
  "substance painter": Palette,
  "product visualization": ScanLine,
  "exploded view": Split,
  "cell fracture": Split,
  decals: Layers3,
  "ai concept": ImageIcon,
  "fan art": Gamepad2,
  procedural: Workflow,
  lookdev: Palette,
};

export function TechBadge({
  label,
  className,
  iconClassName,
}: {
  label: string;
  className?: string;
  iconClassName?: string;
}) {
  const normalized = label.trim().toLowerCase();
  const skillIcon = skillIconByLabel[normalized];
  const FallbackIcon = fallbackIconByLabel[normalized] ?? Tag;

  return (
    <span
      className={cn(
        "cyber-tag inline-flex min-h-6 max-w-full items-center gap-1.5 whitespace-normal text-left",
        className
      )}
    >
      {skillIcon ? (
        <SkillIcon
          icon={skillIcon}
          className={cn("h-3.5 w-3.5 shrink-0", iconClassName)}
        />
      ) : (
        <FallbackIcon
          aria-hidden
          className={cn("h-3.5 w-3.5 shrink-0", iconClassName)}
        />
      )}
      <span className="min-w-0 break-words">{label}</span>
    </span>
  );
}

export function SalesBadge({
  label,
  className,
  iconClassName,
}: {
  label: string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      className={cn(
        "cyber-tag inline-flex min-h-6 max-w-full items-center gap-1.5 whitespace-normal text-left",
        className
      )}
    >
      <Users
        aria-hidden
        className={cn("h-3.5 w-3.5 shrink-0", iconClassName)}
      />
      <span className="min-w-0 break-words">{label}</span>
    </span>
  );
}
