"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUp, Shuffle } from "lucide-react";
import { ArtProjectCard } from "@/components/cyber/ProjectCards";
import type { ArtProject } from "@/data/types";
import { cn } from "@/lib/utils";

type SortMode = "random" | "newest" | "oldest";

function shuffleProjects(projects: ArtProject[]) {
  const shuffled = [...projects];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

const sortOptions: Array<{
  id: SortMode;
  label: string;
  icon: typeof Shuffle;
}> = [
  { id: "random", label: "RANDOM", icon: Shuffle },
  { id: "newest", label: "NEWEST", icon: ArrowDown },
  { id: "oldest", label: "OLDEST", icon: ArrowUp },
];

export function ArtProjectGrid({ projects }: { projects: ArtProject[] }) {
  const [sortMode, setSortMode] = useState<SortMode>("random");
  const [randomOrder, setRandomOrder] = useState<ArtProject[]>(projects);
  const reduceMotion = useReducedMotion();

  // Shuffle after hydration so server and client markup remain consistent.
  useEffect(() => {
    setRandomOrder(shuffleProjects(projects));
  }, [projects]);

  const visibleProjects = useMemo(() => {
    if (sortMode === "random") return randomOrder;

    return [...projects].sort((left, right) => {
      const yearDifference = Number(right.year) - Number(left.year);
      const orderedDifference =
        sortMode === "newest" ? yearDifference : -yearDifference;

      return orderedDifference || left.title.localeCompare(right.title);
    });
  }, [projects, randomOrder, sortMode]);

  const selectSort = (mode: SortMode) => {
    if (mode === "random") {
      setRandomOrder(shuffleProjects(projects));
    }
    setSortMode(mode);
  };

  return (
    <section>
      <div className="mb-6 flex flex-col gap-3 border-y border-cyber-purple/20 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-cyber-mono text-[10px] tracking-[0.22em] text-cyber-muted">
            GALLERY ORDER
          </p>
          <p className="mt-1 font-cyber-mono text-xs tracking-[0.14em] text-cyber-purple">
            {sortMode === "random"
              ? "SHUFFLED ON LOAD"
              : sortMode === "newest"
                ? "YEAR · NEWEST FIRST"
                : "YEAR · OLDEST FIRST"}
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Sort art projects"
        >
          {sortOptions.map((option) => {
            const Icon = option.icon;
            const active = sortMode === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => selectSort(option.id)}
                aria-pressed={active}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 border px-3 py-2 font-cyber-mono text-[10px] tracking-[0.16em] transition sm:min-h-9",
                  active
                    ? "border-cyber-purple bg-cyber-purple/10 text-cyber-purple shadow-[0_0_16px_rgba(192,132,252,0.15)]"
                    : "border-cyber-line text-cyber-muted hover:border-cyber-purple/60 hover:text-cyber-text"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        layout={!reduceMotion}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {visibleProjects.map((project) => (
          <motion.div
            layout={!reduceMotion}
            key={project.id}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <ArtProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
