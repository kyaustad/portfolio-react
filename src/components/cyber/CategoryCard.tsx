"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { CategoryMeta } from "@/data/types";
import { getAccent } from "@/lib/cyber-theme";
import { cn } from "@/lib/utils";

function CategoryIcon({
  icon,
  className,
}: {
  icon: CategoryMeta["icon"];
  className?: string;
}) {
  if (icon === "diamond") {
    return (
      <span
        className={cn(
          "inline-block h-8 w-8 rotate-45 rounded-[2px] bg-current/20 border border-current",
          className
        )}
      />
    );
  }
  if (icon === "circles") {
    return (
      <span className={cn("relative inline-flex h-12 w-12 items-center justify-center bg-current/20 rounded-full", className)}>
        <span className="absolute inset-0 rounded-full border-2 border-current opacity-40" />
        <span className="absolute inset-2 rounded-full border-2 border-current opacity-70" />
        <span className="absolute inset-4 rounded-full border-2 border-current" />
      </span>
    );
  }
  if (icon === "rhombus") {
    return (
      <span
        className={cn(
          "inline-block h-10 w-10 rotate-[20deg] rounded-sm border-2 border-current bg-current/20",
          className
        )}
      >
        <span className="absolute inset-1 rounded-sm rotate-[20deg] border-2 border-current opacity-40" />
      </span>
    );
  }
  if (icon === "square") {
    return (
      <span
        className={cn("inline-block h-10 w-10 border-2 border-current bg-current/20", className)}
      />
    );
  }
  return (
    <span className={cn("font-cyber-mono text-2xl", className)}>◇</span>
  );
}

export function CategoryCard({
  category,
  index = 0,
}: {
  category: CategoryMeta;
  index?: number;
}) {
  const styles = getAccent(category.accent);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="h-full"
    >
      <Link
        href={category.href}
        className={cn(
          "group cyber-panel flex h-full min-h-[300px] flex-col p-4 transition-colors sm:min-h-[340px] sm:p-5",
          "hover:border-current",
          styles.border,
          styles.text
        )}
      >
        <div className="mb-6 flex items-start justify-between gap-3">
          <div>
            <div className="font-cyber-mono text-xs tracking-[0.25em] opacity-70">
              {category.number}
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {category.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn("cyber-tag", styles.border)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <CategoryIcon
            icon={category.icon}
            className={cn(styles.text, "shrink-0 opacity-90")}
          />
        </div>

        <h3
          className={cn(
            "font-cyber-display text-2xl font-bold tracking-wide",
            styles.glow
          )}
        >
          {category.label}
        </h3>
        <p className="mt-2 font-cyber-mono text-xs uppercase tracking-[0.16em] text-cyber-muted">
          {category.subtitle}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-cyber-text/80">
          {category.description}
        </p>

        <div
          className={cn(
            "mt-6 font-cyber-mono text-xs md:text-sm tracking-[0.2em] transition-transform group-hover:translate-x-1 border border-cyber-line rounded-md p-2",
            styles.text
          )}
        >
          {`ENTER ->`}
        </div>
      </Link>
    </motion.div>
  );
}
