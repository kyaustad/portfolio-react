import type { Metadata } from "next";
import { SiteShell } from "@/components/cyber/SiteShell";
import { PageShell, SectionHeader } from "@/components/cyber/SectionHeader";
import { SoftwareProjectCard } from "@/components/cyber/ProjectCards";
import { softwareProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Software",
  description:
    "Flagship full-stack software — React, TypeScript, Node.js, and production systems.",
};

export default function SoftwarePage() {
  return (
    <SiteShell>
      <PageShell>
        <SectionHeader
          showBack
          number="02"
          title="SOFTWARE"
          subtitle="FULL-STACK · TOOLS · SYSTEMS"
          accent="cyan"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {softwareProjects.map((project, index) => (
            <SoftwareProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </PageShell>
    </SiteShell>
  );
}
