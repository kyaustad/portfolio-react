"use client";

import {
  AwsIcon,
  BlenderIcon,
  BrainIcon,
  CppIcon,
  CssIcon,
  DockerIcon,
  ExpressjsIconDark,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  KubernetesIcon,
  MongoIcon,
  NodejsIconDark,
  NuxtIconDark,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SupabaseIcon,
  SvelteIcon,
  TailwindcssIconDark,
  TauriIcon,
  TypescriptIcon,
  UnrealEngineIcon,
  VueIconDark,
  WordpressIcon,
} from "@/components/Icons";
import type { Skill } from "@/data/types";

const iconMap: Record<Skill["icon"], React.ComponentType<{ className?: string }>> = {
  javascript: JavascriptIcon,
  typescript: TypescriptIcon,
  vue: VueIconDark,
  nuxt: NuxtIconDark,
  nodejs: NodejsIconDark,
  html: HtmlIcon,
  css: CssIcon,
  tailwind: TailwindcssIconDark,
  express: ExpressjsIconDark,
  supabase: SupabaseIcon,
  aws: AwsIcon,
  python: PythonIcon,
  react: ReactIcon,
  rust: RustIcon,
  tauri: TauriIcon,
  svelte: SvelteIcon,
  postgres: PostgresIcon,
  docker: DockerIcon,
  kubernetes: KubernetesIcon,
  mongo: MongoIcon,
  cpp: CppIcon,
  unreal: UnrealEngineIcon,
  blender: BlenderIcon,
  git: GitIcon,
  wordpress: WordpressIcon,
  brain: BrainIcon,
};

export function SkillIcon({
  icon,
  className = "w-14 h-14",
}: {
  icon: Skill["icon"];
  className?: string;
}) {
  const Comp = iconMap[icon];
  return <Comp className={className} />;
}
