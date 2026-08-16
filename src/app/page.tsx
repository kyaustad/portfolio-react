import type { Metadata } from "next";
import { SiteShell } from "@/components/cyber/SiteShell";
import {
  HomeAboutContact,
  HomeCategories,
  HomeHero,
  HomeSkills,
} from "@/components/cyber/HomeSections";
import GitHubStats from "@/components/GithubStats";
import { siteMeta } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Kyle Austad — Full-Stack Engineer · Sales · Digital Creator",
  description:
    "Cybernetic portfolio for Kyle Austad — flagship work across Sales, Software, 3D Art, Game Dev, and side-project snippets.",
  openGraph: {
    title: "Kyle Austad — Portfolio",
    description:
      "Select a category to explore flagship projects in Sales, Software, 3D Art, Game Dev, and Snippets.",
    type: "website",
    images: [
      {
        url: "/Portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Kyle Austad Portfolio",
      },
    ],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMeta.name,
    jobTitle: "Full Stack Engineer & Sales Closer",
    description: siteMeta.tagline,
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://kyleaustad.com",
    image: "/Portfolio.webp",
    sameAs: [
      "https://github.com/kyaustad",
      "https://www.linkedin.com/in/kyle-austad/",
      "https://www.artstation.com/kyaustad",
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "TypeScript",
      "Sales",
      "Door-to-Door Sales",
      "Unreal Engine",
      "Blender",
      "Game Development",
      "3D Rendering",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteShell>
        <HomeHero />
        <HomeCategories />
        <HomeSkills />
        <HomeAboutContact />
        <div id="github" className="px-4 pb-16 md:px-6">
          <GitHubStats />
        </div>
      </SiteShell>
    </>
  );
}
