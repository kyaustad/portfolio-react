import type { Metadata } from "next";
import { SiteShell } from "@/components/cyber/SiteShell";
import { PageShell, SectionHeader } from "@/components/cyber/SectionHeader";
import { ArtProjectGrid } from "@/components/cyber/ArtProjectGrid";
import { artProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "3D Art",
  description:
    "Blender visualization, Cycles renders, and digital environment art.",
};

export default function ArtPage() {
  return (
    <SiteShell>
      <PageShell>
        <SectionHeader
          showBack
          number="03"
          title="3D ART"
          subtitle="BLENDER · CYCLES · VISUALIZATION"
          accent="purple"
        />
        <ArtProjectGrid projects={artProjects} />
      </PageShell>
    </SiteShell>
  );
}
