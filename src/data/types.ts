export type CategoryId =
  | "sales"
  | "software"
  | "3d-art"
  | "game-dev"
  | "snippets";

export type ProjectStatus = "shipped" | "in-progress" | "offline" | "concept";

export type AccentColor =
  | "orange"
  | "cyan"
  | "purple"
  | "yellow"
  | "lime"
  | "cyan-default";

export interface ProjectLink {
  live?: string;
  github?: string;
  linkedin?: string;
  artstation?: string;
  itch?: string;
}

export interface CategoryMeta {
  id: CategoryId;
  number: string;
  label: string;
  href: string;
  tags: string[];
  subtitle: string;
  description: string;
  accent: AccentColor;
  icon: "diamond" | "circles" | "rhombus" | "square" | "snippet";
}

export interface SoftwareProject {
  id: string;
  title: string;
  year: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  images?: string[];
  banner?: string;
  links?: ProjectLink;
  placeholderNote?: string;
}

export interface ArtProject {
  id: string;
  title: string;
  year: string;
  tags: string[];
  featuredImage?: string;
  images?: string[];
  description?: string;
  links?: ProjectLink;
}

export interface GameProject {
  id: string;
  title: string;
  year: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  images?: string[];
  banner?: string;
  links?: ProjectLink;
}

export interface SnippetProject {
  id: string;
  title: string;
  year: string;
  status?: ProjectStatus;
  description: string;
  tech: string[];
  images?: string[];
  banner?: string;
  links?: ProjectLink;
  scope: "gist" | "side-project" | "tool";
}

export interface SalesStat {
  value: string;
  label: string;
}

export interface SalesEntry {
  id: string;
  logo: string;
  title: string;
  tags: string[];
  role: string;
  duration: string;
  description: string;
  stats: SalesStat[];
  skills: string[];
  photos?: string[];
  placeholderNote?: string;
}

export interface Skill {
  id: string;
  label: string;
  icon:
    | "javascript"
    | "typescript"
    | "vue"
    | "nuxt"
    | "nodejs"
    | "html"
    | "css"
    | "tailwind"
    | "express"
    | "supabase"
    | "aws"
    | "python"
    | "react"
    | "rust"
    | "tauri"
    | "svelte"
    | "postgres"
    | "docker"
    | "kubernetes"
    | "mongo"
    | "cpp"
    | "unreal"
    | "blender"
    | "git"
    | "wordpress"
    | "brain";
}
