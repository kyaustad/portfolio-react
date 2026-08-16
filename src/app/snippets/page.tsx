import type { Metadata } from "next";
import { SiteShell } from "@/components/cyber/SiteShell";
import { PageShell, SectionHeader } from "@/components/cyber/SectionHeader";
import { SnippetProjectCard } from "@/components/cyber/ProjectCards";
import { snippetProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Snippets & Side Projects",
  description:
    "Smaller scoped tools, PWAs, gists, and experiments outside the flagship lanes.",
};

export default function SnippetsPage() {
  return (
    <SiteShell>
      <PageShell>
        <SectionHeader
          showBack
          number="05"
          title="SNIPPETS"
          subtitle="SIDE PROJECTS · TOOLS · GISTS"
          accent="lime"
        />
        <p className="mb-8 max-w-2xl font-cyber-mono text-xs leading-relaxed tracking-wide text-cyber-muted">
          Flagship work lives in Sales, Software, 3D Art, and Game Dev. This lane
          is for tinier-scoped builds — useful tools, experiments, and side
          projects that still ship.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {snippetProjects.map((project) => (
            <SnippetProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PageShell>
    </SiteShell>
  );
}
