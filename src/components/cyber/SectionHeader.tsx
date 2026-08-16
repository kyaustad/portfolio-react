"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { AccentColor } from "@/data/types";
import { getAccent } from "@/lib/cyber-theme";
import { cn } from "@/lib/utils";

export function SectionHeader({
  number,
  title,
  subtitle,
  accent = "cyan",
  showBack = false,
  className,
}: {
  number?: string;
  title: string;
  subtitle?: string;
  accent?: AccentColor;
  showBack?: boolean;
  className?: string;
}) {
  const styles = getAccent(accent);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("mb-8 sm:mb-10", className)}
    >
      {showBack && (
        <Link
          href="/"
          className="mb-6 inline-flex font-cyber-mono text-xs tracking-[0.2em] text-cyber-muted transition-colors hover:text-cyber-text"
        >
          ← BACK TO HOME
        </Link>
      )}
      {number && (
        <div className="font-cyber-mono text-sm tracking-[0.3em] text-cyber-muted">
          {number} /
        </div>
      )}
      <h1
        className={cn(
          "mt-2 break-words font-cyber-display text-[clamp(2.5rem,13vw,4.5rem)] font-bold leading-none tracking-normal sm:tracking-wide",
          styles.text,
          styles.glow
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 font-cyber-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-cyber-muted sm:text-xs sm:tracking-[0.22em] md:text-sm">
          {subtitle}
        </p>
      )}
      <div className="mt-8 h-px w-full bg-cyber-line" />
    </motion.div>
  );
}

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("mx-auto max-w-7xl px-4 py-8 sm:py-10 md:px-6 md:py-14", className)}>
      {children}
    </main>
  );
}
