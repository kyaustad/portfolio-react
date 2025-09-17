import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import GitHubStats from "@/components/GithubStats";
import type { Metadata } from "next";

// Force dynamic server side rendering
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kyle Austad - Full Stack Developer & Software Engineer",
  description:
    "Full-stack developer specializing in React, Node.js, Vue.js, and modern web technologies. Portfolio showcasing projects including Order Place, Voyyance, Shrike LMS, and game development with Unreal Engine.",
  openGraph: {
    title: "Kyle Austad - Full Stack Developer & Software Engineer",
    description:
      "Full-stack developer specializing in React, Node.js, Vue.js, and modern web technologies. Portfolio showcasing projects including Order Place, Voyyance, Shrike LMS, and game development with Unreal Engine.",
    type: "website",
    images: [
      {
        url: "/Portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Kyle Austad - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Austad - Full Stack Developer & Software Engineer",
    description:
      "Full-stack developer specializing in React, Node.js, Vue.js, and modern web technologies. Portfolio showcasing projects including Order Place, Voyyance, Shrike LMS, and game development with Unreal Engine.",
    images: ["/Portfolio.webp"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kyle Austad",
    jobTitle: "Full Stack Developer & Software Engineer",
    description:
      "Full-stack developer specializing in React, Node.js, Vue.js, and modern web technologies. Portfolio showcasing projects including Order Place, Voyyance, Shrike LMS, and game development with Unreal Engine.",
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
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Rust",
      "C++",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Unreal Engine",
      "Blender",
      "Full Stack Development",
      "Web Development",
      "Game Development",
      "3D Rendering",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      description:
        "Develops web applications using modern technologies including React, Node.js, Vue.js, and various databases",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Software Engineering",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-gray-900">
        <HeroSection />
        <Header />
        <div id="about">
          <AboutSection />
        </div>
        <div id="work">
          <WorkSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <div id="github" className="mt-2 p-16">
          <GitHubStats />
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
