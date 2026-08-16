import type {
  ArtProject,
  CategoryMeta,
  GameProject,
  SalesEntry,
  SalesStat,
  Skill,
  SnippetProject,
  SoftwareProject,
} from "./types";

export const siteMeta = {
  name: "Kyle Austad",
  brand: "KA :// portfolio",
  version: "PORTFOLIO.v2",
  tagline: "SOFTWARE ENGINEER · TEAM LEADER",
  prompt: "SELECT A CATEGORY TO BEGIN",
  stackNote: "BUILT WITH NEXT.JS + FRAMER MOTION + TAILWIND",
};

export const categories: CategoryMeta[] = [
  {
    id: "sales",
    number: "01",
    label: "SALES",
    href: "/sales",
    tags: ["D2D", "B2B"],
    subtitle: "Closings & Cold Calls.",
    description:
      "Over 2,000 accounts and millions of dollars in revenue individually and as a team leader.",
    accent: "orange",
    icon: "diamond",
  },
  {
    id: "software",
    number: "02",
    label: "SOFTWARE",
    href: "/software",
    tags: ["RUST", "NODE", "TS"],
    subtitle: "Engineering & Dev.",
    description:
      "From React to Rust, frontend to backend, web to native, and everything in between. Solving real business problems with code.",
    accent: "cyan",
    icon: "circles",
  },
  {
    id: "3d-art",
    number: "03",
    label: "3D ART",
    href: "/3d-art",
    tags: ["BLENDER", "CYCLES", "3D"],
    subtitle: "Visualization & Renders.",
    description:
      "Blender work spanning architectural visualization, stylized characters, and environment art.",
    accent: "purple",
    icon: "rhombus",
  },
  {
    id: "game-dev",
    number: "04",
    label: "GAME DEV",
    href: "/game-dev",
    tags: ["UNREAL", "C++", "BLUEPRINTS"],
    subtitle: "Games & Interactive.",
    description:
      "Unreal Engine projects, complete game experiences, and reusable gameplay systems.",
    accent: "yellow",
    icon: "square",
  },
];

export const snippetsCategory: CategoryMeta = {
  id: "snippets",
  number: "05",
  label: "SNIPPETS & SIDE PROJECTS",
  href: "/snippets",
  tags: ["GISTS", "TOOLS", "EXPERIMENTS"],
  subtitle: "Smaller scoped builds.",
  description:
    "Compact tools, PWAs, dashboards, and side experiments that ship fast.",
  accent: "lime",
  icon: "snippet",
};

export const salesAggregateStats: SalesStat[] = [
  { value: "$2M+", label: "TOTAL REVENUE" },
  { value: "2,500+", label: "ACCOUNTS ACTIVATED" },
  { value: "50+", label: "REPS TRAINED" },
  { value: "10", label: "SEASONS SOLD" },
];

export const salesEntries: SalesEntry[] = [
  {
    id: "shrike",
    title: "Shrike Pest Control",
    tags: ["D2D", "Residential"],
    role: "Door-to-Door Sales Rep",
    logo: "/shrike.webp",
    duration: "March 2024 - September 2025",
    description:
      "Sold pest control and managed territory for a startup company. Sold hundreds of accounts and helped bring the company to operating profitably in the first 5 months of operation.",
    stats: [
      { value: "200+", label: "Accounts Activated" },
      { value: "1", label: "LMS Platform Built" },
      { value: "20+", label: "Reps Trained" }
    ],
    skills: [
      "Territory Management",
      "Door-to-Door Sales",
      "Start-up Experience",
      "Agile",
    ],
    photos: ["/shrike/shrike-1.webp"]
  },
  {
    id: "fox",
    title: "Fox Pest Control",
    tags: ["D2D", "Residential"],
    role: "Door-to-Door Sales Manager",
    logo: "/fox.webp",
    duration: "March 2017 - February 2023",
    description:
      "Sold pest control servies to homeowners by going door-to-door. Sold millions of dollars in revenue and led teams that performed at the top of the company.",
    stats: [
      { value: "2200+", label: "Accounts Activated" },
      { value: "40+", label: "Reps Trained" },
      { value: "1.5M+", label: "Revenue Generated" },
      { value: "7 Years", label: "Without a Bagel" },
    ],
    skills: [
      "Door-to-Door Sales",
      "Team Leadership",
      "Sales Training",
      "Sales Management",
    ],
    photos: ["/fox/fox-1.webp", "/fox/fox-2.webp", "/fox/fox-3.webp", "/fox/fox-4.webp", "/fox/fox-5.webp"],
  },
];

export const softwareProjects: SoftwareProject[] = [
  {
    id: "nerevar-rs",
    title: "Nerevar",
    year: "2026",
    status: "in-progress",
    description:
      "A runtime instance and sync manager for The Elder Scrolls III: Morrowind and its multiplayer mod Tes3MP allowing server hosters to easily setup and configure different modlists and sync changes incrementally wiht their friends using manifests, checksums, and hashes.",
    tech: ["Rust", "Tauri", "React", "Git"],
    images: [
      "/nerevar/nerevar (1).webp",
      "/nerevar/nerevar (2).webp",
      "/nerevar/nerevar (3).webp",
      "/nerevar/nerevar (4).webp",
      "/nerevar/nerevar (5).webp",
      "/nerevar/nerevar (6).webp",
      "/nerevar/nerevar (7).webp"
    ],
    banner: "/nerevar/nerevar (1).webp",
    links: {
      github: "https://github.com/kyaustad/nerevar-rs",
    },
  },
  {
    id: "orderapp",
    title: "Order Place",
    year: "2025",
    status: "shipped",
    description:
      "Multi-tenant order management for vendors and customers — catalogues, client invites, and direct Stripe payments without manufacturer markup.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind"],
    images: [
      "/orderapp/orderapp-1.webp",
      "/orderapp/orderapp-2.webp",
      "/orderapp/orderapp-3.webp",
      "/orderapp/orderapp-4.webp",
      "/orderapp/orderapp-5.webp",
      "/orderapp/orderapp-6.webp",
      "/orderapp/orderapp-7.webp",
      "/orderapp/orderapp-8.webp",
      "/orderapp/orderapp-9.webp",
      "/orderapp/orderapp-10.webp",
      "/orderapp/orderapp-11.webp",
      "/orderapp/orderapp-12.webp",
      "/orderapp/orderapp-13.webp",
      "/orderapp/orderapp-14.webp",
      "/orderapp/orderapp-15.webp",
    ],
    banner: "/orderapp/order-banner.webp",
    links: { live: "https://place-an-order.app" },
  },
  {
    id: "voyyance",
    title: "Voyyance",
    year: "2025",
    status: "offline",
    description:
      "Sales ops platform for door-to-door. Led feature work on dynamic emails, earnings projections, and local-first native app architecture.",
    tech: ["React", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker", "Rust"],
    images: [
      "/voyyance/1.png",
      "/voyyance/2.png",
      "/voyyance/3.png",
      "/voyyance/4.png",
      "/voyyance/5.png",
    ],
    banner: "/voyyance/1.png",
    links: {
      live: "https://voyyance.com",
      linkedin:
        "https://lnkd.in/p/g7XnQYnc",
    },
  },
  {
    id: "shrike-lms",
    title: "Shrike LMS",
    year: "2024",
    status: "shipped",
    description:
      "Custom LMS built for speed and flexibility — training without enterprise LMS pricing, with rich content and modern UI.",
    tech: ["TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Supabase", "Docker"],
    images: [
      "/lms/1.png",
      "/lms/2.png",
      "/lms/3.png",
      "/lms/4.png",
      "/lms/5.png",
      "/lms/6.png",
      "/lms/7.png",
      "/lms/8.png",
      "/lms/9.png",
      "/lms/10.png",
      "/lms/11.png",
      "/lms/12.png",
      "/lms/13.png",
      "/lms/14.png",
    ],
    banner: "/lms/lms-banner.png",
    links: {
      linkedin:
        "https://www.linkedin.com/pulse/learning-management-system-lms-vue-nuxt-tailwind-css-kyle-austad-654he/",
    },
  },
  {
    id: "just-canvas",
    title: "Just Canvas",
    year: "2022",
    status: "offline",
    description:
      "Canvassing companion for D2D — MongoDB + Express API with a Vue front-end, self-hosted on Docker/UnRaid.",
    tech: ["TypeScript", "Vue", "Express", "MongoDB", "Docker"],
    images: [
      "/justCanvas/jc-1.png",
      "/justCanvas/jc-2.png",
      "/justCanvas/jc-3.png",
      "/justCanvas/jc-4.png",
    ],
    banner: "/justCanvas/justcanvas-banner.png",
    links: {
      linkedin:
        "https://www.linkedin.com/pulse/justcanvas-app-api-kyle-austad-nsdlc/",
    },
  },
  
];

export const artProjects: ArtProject[] = [
  {
    id: "red-woman",
    title: "Red Woman",
    year: "2022",
    tags: ["Character", "Cycles", "Particles", "Custom Shaders", "Cloth"],
    featuredImage: "/blender/red-woman.webp",
    description: "A character and particle study with entirely custom materials and shaders and hand modeled clothing. View the full gallery on ArtStation.",
    images: ["/blender/red-woman-2.webp", "/blender/red-woman-3.webp", "/blender/red-woman-4.webp"],
    links: { artstation: "https://www.artstation.com/artwork/4NkAG1" },
  },
  {
    id: "tv",
    title: "Widescreen CRT TV",
    year: "2023",
    tags: ["Prop", "Hard Surface", "Lookdev", "Substance Painter", "Texturing"],
    featuredImage: "/blender/tv1.webp",
    description: "Custom modeled and textured using Substance Painter. A widescreen take on a CRT classic.",
    images: ["/blender/tv2.webp", "/blender/tv3.webp", "/blender/tv4.webp"],
    links: { artstation: "https://www.artstation.com/artwork/V2bwEZ" },
  },
  {
    id: "cologne",
    title: "Adidas Cologne",
    year: "2014",
    tags: ["Hard Surface", "Lookdev", "Product Visualization", "Modeling", "Texturing"],
    featuredImage: "/blender/AdidasCologne.webp",
    description: "Hard-surface prop study.",
  },
  {
    id: "saber",
    title: "Exploded Lightsaber",
    year: "2016",
    tags: ["Prop", "Hard Surface", "Stylized", "VFX", "Exploded View"],
    featuredImage: "/blender/Exploded Saber 2.webp",
    images: ["/blender/Exploded Saber.webp"],
    description: "Stylized character lighting and material pass.",
    links: { artstation: "https://www.artstation.com/artwork/qkm6e" },
  },
  {
    id: "foggy-orchard",
    title: "Foggy Orchard",
    year: "2024",
    tags: ["Environment", "Cycles", "Volumetrics", "Lighting"],
    featuredImage: "/blender/foggyorchard.webp",
    description: "Environment lighting and composition for a gloomy and foggy orchard scene.",
  },
  {
    id: "fall-overlook",
    title: "Fall Overlook",
    year: "2022",
    tags: ["Environment", "Character", "Fantasy", "Cycles", "Lighting", "AI Concept"],
    description: "Fantasy environment and character lighting and composition for a fall overlook scene. Used AI in the early days of image generation to create a concept then entirely recreate it in Blender Cycles.",
    featuredImage: "/blender/overlook.webp",
    images: ["/blender/overlook-clay.webp", "/blender/overlook-ai.webp"],
    links: { artstation: "https://www.artstation.com/artwork/8BZA3O" },
  },
  {
    id: "my-spot",
    title: "My Spot",
    year: "2017",
    tags: ["Environment", "Stylized", "Low-Poly", "Landscape"],
    featuredImage: "/blender/myspot.webp",
    description: "Still one of my favorites. A simple low poly scene from my early days of Blender. An attempt to invoke the memory of biking to the nearby resevoir to fish for a day.",
    links: { artstation: "https://www.artstation.com/artwork/akqD2" },
  },
  {
    id: "dwell-kitchen",
    title: "Dwell Kitchen",
    year: "2018",
    tags: ["Environment", "Archviz", "Interior", "Cycles"],
    featuredImage: "/blender/intkitchen.webp",
    description: "Using Dwell Magazine, I recreated an interior kitchen scene with a modern and minimalistic design.",
    links: { artstation: "https://www.artstation.com/artwork/O6eP6" },
  },
  {
    id: "interior-archviz",
    title: "Interior Archviz",
    year: "2018",
    tags: ["Archviz", "Interior", "Cycles", "Product Visualization"],
    featuredImage: "/blender/interiorwine.webp",
    images: ["/blender/interiorstairs.webp"],
    description: "A simple first attempt at Architectural Visualization with Blender Cycles with an accompanying close up of the wine bottle.",
    links: { artstation: "https://www.artstation.com/artwork/eR9O8G" },
  },
  {
    id: "portal",
    title: "Portal",
    year: "2017",
    tags: ["Fantasy", "Interior", "Particles", "Cell Fracture", "Decals", "Cycles"],
    featuredImage: "/blender/Portal1.webp",
    description: "An interior scene with a demonic portal and claws. Something dangerous happened here. Done for a BlenderGuru contest and learned a lot about cell fracture, decal painting and particle systems.",
    links: { artstation: "https://www.artstation.com/artwork/Bl91l" },
  },
  {
    id: "rosa",
    title: "Rosa Marie",
    year: "2024",
    tags: ["Character", "Close-up", "Headshot", "Daz", "Diffeomorphic"],
    featuredImage: "/blender/Rosa Marie.webp",
    description: "A simple headshot of a character from Daz polished and editted in Blender using Diffeomorphic.",
    links: { artstation: "https://www.artstation.com/artwork/Nqo1dq" },
  },
  {
    id: "vvardenfell",
    title: "Vvardenfell",
    year: "2022",
    tags: ["Environment", "Fantasy", "Volumetrics", "Fan Art", "Cycles"],
    featuredImage: "/blender/Vvardenfell.webp",
    description: "A recreation of some art from The Elder Scrolls III: Morrowind with a modern take and volumetrics. Pretty happy with how it turned out.",
    links: { artstation: "https://www.artstation.com/artwork/Ez136v" },
  },
  {
    id: "tarp",
    title: "Road Tarp",
    year: "2018",
    tags: ["Environment", "Cloth Simulation", "Wind Simulation", "Cycles"],
    featuredImage: "/blender/roadtarp.webp",
    description: "Using cloth simulation and wind forces, I created a road tarp billowing across an empty desert road scene.",
    links: { artstation: "https://www.artstation.com/artwork/qkmNe" },
  },
  {
    id: "royal-woman",
    title: "Royal Woman",
    year: "2022",
    tags: ["Character", "Cloth", "Human Generator", "Custom Materials", "Modeling"],
    featuredImage: "/blender/Royal Woman 2.webp",
    description: "Using Human Generator for Blender and custom modeling and materials, I created an elegent and tribally regal dressed woman.",
    images: ["/blender/Royal Woman.webp"],
    links: { artstation: "https://www.artstation.com/artwork/oJy4Nk" },
  },
  {
    id: "vette",
    title: "Vette",
    year: "2021",
    tags: ["Character", "Close-up", "Headshot", "Modeling", "Texturing", "Fan Art"],
    featuredImage: "/blender/Vette Portrait.webp",
    description: "A custom modeled and textured character recreating the character Vette from Star Wars: The Old Republic.",
    images: ["/blender/Vette Reference.webp"],
    links: { artstation: "https://www.artstation.com/artwork/eR9OBw" },
  },
];

export const gameProjects: GameProject[] = [
  {
    id: "metro-island",
    title: "Metro Island",
    year: "2023",
    status: "shipped",
    description:
      "Complete island city-builder focused on cohesive systems and a cozy art style. Manage stats carefully — don’t let any of them tip too far.",
    tech: ["C++", "Unreal Engine", "Blender", "Git"],
    images: [
      "/metro/m-2.jpg",
      "/metro/m-3.jpg",
      "/metro/m-4.jpg",
      "/metro/m-5.jpg",
      "/metro/m-6.jpg",
    ],
    banner: "/metro/metro-banner.jpg",
    links: { itch: "https://thiscketcrab.itch.io/metro-island", live: "https://thiscketcrab.itch.io/metro-island" },
  },
  {
    id: "unreal-assets",
    title: "Unreal Assets",
    year: "2024",
    status: "shipped",
    description:
      "Asset packs for Unreal — quest systems, dialogue, and a Morrowind-inspired spell framework designed for drop-in use.",
    tech: ["C++", "Unreal Engine", "Blueprints", "Blender", "Docker"],
    images: [
      "/fab/fab-1.webp",
      "/fab/fab-2.webp",
      "/fab/fab-3.webp",
      "/fab/fab-4.webp",
      "/fab/fab-5.webp",
    ],
    banner: "/fab/fab-banner.webp",
    links: {
      live: "https://www.fab.com/sellers/Crab%20Interactive",
      github: "https://github.com/kyaustad",
    },
  },
];

export const snippetProjects: SnippetProject[] = [
  {
    id: "audiobooker",
    title: "Audiobooker",
    year: "2026",
    scope: "side-project",
    description:
      "A simple vibe-coded companion app to make adding books via torrent easy to manage for users of an audiobookshelf instance.",
    tech: ["Svelte", "Rust", "Docker"],
    images: ["/audiobooker/1.webp", "/audiobooker/2.webp", "/audiobooker/3.webp"],
    banner: "/audiobooker/3.webp",
    links: {
      github: "https://github.com/kyaustad/audiobooker",
    },
  },
  {
    id: "cardyo",
    title: "Cardyo",
    year: "2025",
    scope: "side-project",
    description:
      "PWA for digital business cards. All data lives in the URL — QR share + VCF export.",
    tech: ["Nuxt", "Vue", "TypeScript", "Tailwind"],
    images: ["/cardyo/cardyo-1.webp", "/cardyo/cardyo-2.webp"],
    banner: "/cardyo/cardyo-banner.webp",
    links: {
      live: "https://cardyo.kyleaustad.com/",
      github: "https://github.com/kyaustad/cardyo",
    },
  },
 
  {
    id: "raidash",
    title: "Raidash",
    year: "2025",
    scope: "tool",
    description:
      "Futuristic homepage dashboard with shortcuts, icons, and quick stats. Nuxt 3 + Tailwind.",
    tech: ["Nuxt", "Vue", "Tailwind", "TypeScript"],
    banner: "/raidash/banner.webp",
    links: { github: "https://github.com/kyaustad/raidash" },
  },
  {
    id: "daz-sailor",
    title: "Daz Sailor",
    year: "2026",
    scope: "tool",
    description:
      "A simple command line tool to process archives, and nested archives of content downloaded from outside the Daz Studio marketplace and correctly place it either in the Daz Install Manager for it to install, or in the content library itself, all hands free.",
    tech: ["Rust"],
    
    links: { github: "https://github.com/kyaustad/daz-sailor" },
  }
];

export const skills: Skill[] = [
  { id: "javascript", label: "Javascript", icon: "javascript" },
  { id: "typescript", label: "Typescript", icon: "typescript" },
  { id: "vue", label: "Vue", icon: "vue" },
  { id: "nuxt", label: "Nuxt", icon: "nuxt" },
  { id: "nodejs", label: "NodeJS", icon: "nodejs" },
  { id: "html", label: "HTML", icon: "html" },
  { id: "css", label: "CSS", icon: "css" },
  { id: "tailwind", label: "Tailwind CSS", icon: "tailwind" },
  { id: "express", label: "ExpressJS", icon: "express" },
  { id: "supabase", label: "Supabase", icon: "supabase" },
  { id: "aws", label: "AWS", icon: "aws" },
  { id: "python", label: "Python", icon: "python" },
  { id: "react", label: "React", icon: "react" },
  { id: "rust", label: "Rust", icon: "rust" },
  { id: "postgres", label: "Postgres", icon: "postgres" },
  { id: "docker", label: "Docker", icon: "docker" },
  { id: "kubernetes", label: "Kubernetes", icon: "kubernetes" },
  { id: "mongo", label: "MongoDB", icon: "mongo" },
  { id: "cpp", label: "C++", icon: "cpp" },
  { id: "unreal", label: "Unreal Engine", icon: "unreal" },
  { id: "blender", label: "Blender", icon: "blender" },
  { id: "git", label: "Git", icon: "git" },
  { id: "wordpress", label: "Wordpress", icon: "wordpress" },
  { id: "brain", label: "A Brain", icon: "brain" },
];

export const contactLinks = {
  email: "mailto:kyle@kyleaustad.com",
  linkedin: "https://www.linkedin.com/in/kyle-austad/",
  github: "https://github.com/kyaustad",
  artstation: "https://www.artstation.com/kyaustad",
  contra:
    "https://contra.com/kyle_austad_n2c7ok30?utm_campaign=HireMeOnContra&utm_medium=fe9676dd-36b2-4d40-be86-0006a71b3400",
  resumeDocx:
    "https://www.dropbox.com/scl/fi/rjpp2hh6l48gsl7qexx1k/KyleAustadResume.docx?rlkey=rd1asccbob2xfp8ydv9tuw51a&dl=0",
  resumePdf:
    "https://www.dropbox.com/scl/fi/ljszja34amisp91qwrqo3/KyleAustadResume.pdf?rlkey=cpf19mirh9mbyv80aee5z9fry&dl=0",
};

export function getCategory(id: string): CategoryMeta | undefined {
  if (id === "snippets") return snippetsCategory;
  return categories.find((c) => c.id === id);
}
