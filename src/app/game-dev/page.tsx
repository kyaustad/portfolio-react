import type { Metadata } from "next";
import { SiteShell } from "@/components/cyber/SiteShell";
import { PageShell, SectionHeader } from "@/components/cyber/SectionHeader";
import { GameProjectCard } from "@/components/cyber/ProjectCards";
import { gameProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Game Dev",
  description:
    "Unreal Engine games, interactive experiences, and reusable gameplay systems.",
};

export default function GameDevPage() {
  return (
    <SiteShell>
      <PageShell>
        <SectionHeader
          showBack
          number="04"
          title="GAME DEV"
          subtitle="UNREAL · C++ · INTERACTIVE"
          accent="yellow"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {gameProjects.map((project, index) => (
            <GameProjectCard
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
