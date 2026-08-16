import type { Metadata } from "next";
import { SiteShell } from "@/components/cyber/SiteShell";
import { PageShell, SectionHeader } from "@/components/cyber/SectionHeader";
import { SalesEntryCard, SalesStatRow } from "@/components/cyber/ProjectCards";
import { salesAggregateStats, salesEntries } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Sales",
  description:
    "Door-to-door — flagship sales seasons and results.",
};

export default function SalesPage() {
  return (
    <SiteShell>
      <PageShell>
        <SectionHeader
          showBack
          number="01"
          title="SALES"
          subtitle="DOOR-TO-DOOR · TEAM LEADERSHIP"
          accent="orange"
        />
        <SalesStatRow stats={salesAggregateStats} />
        <div>
          {salesEntries.map((entry) => (
            <SalesEntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </PageShell>
    </SiteShell>
  );
}
