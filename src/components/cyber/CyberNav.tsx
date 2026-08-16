"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, MenuIcon } from "lucide-react";
import { useState } from "react";
import { categories, contactLinks, siteMeta, snippetsCategory } from "@/data/portfolio";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";
import { getAccent } from "@/lib/cyber-theme";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { AccentColor, CategoryId } from "@/data/types";

const navItems = [
  { id: "home" as const, label: "HOME", href: "/" },
  ...categories.map((c) => ({
    id: c.id,
    label: c.label,
    href: c.href,
    accent: c.accent,
  })),
  {
    id: snippetsCategory.id,
    label: "SNIPPETS",
    href: snippetsCategory.href,
    accent: snippetsCategory.accent,
  },
];

function accentForPath(pathname: string): AccentColor {
  if (pathname.startsWith("/sales")) return "orange";
  if (pathname.startsWith("/software")) return "cyan";
  if (pathname.startsWith("/3d-art")) return "purple";
  if (pathname.startsWith("/game-dev")) return "yellow";
  if (pathname.startsWith("/snippets")) return "lime";
  return "cyan";
}

function NavLink({
  href,
  label,
  active,
  accent,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  accent: AccentColor;
  onClick?: () => void;
}) {
  const styles = getAccent(accent);
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-2 py-2.5 font-cyber-mono text-xs uppercase tracking-[0.2em] transition-colors md:px-1.5 md:py-1 md:text-[10px] md:tracking-[0.12em] lg:px-2 lg:text-xs lg:tracking-[0.2em]",
        active ? styles.text : "text-cyber-muted hover:text-cyber-text"
      )}
    >
      {label}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className={cn("absolute -bottom-1 left-0 right-0 h-0.5", styles.underline)}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function CyberNav() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const brandAccent = accentForPath(pathname);
  const brandStyles = getAccent(brandAccent);

  const isActive = (href: string, id: string) => {
    if (id === "home") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-cyber-line bg-cyber-bg/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="/"
          className={cn(
            "min-w-0 truncate font-cyber-mono text-xs tracking-[0.1em] min-[380px]:text-sm min-[380px]:tracking-[0.12em]",
            brandStyles.text,
            brandStyles.glow
          )}
        >
          {siteMeta.brand}
        </Link>

        <nav className="hidden flex-wrap items-center justify-end gap-1 md:flex lg:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                label={item.label}
                active={isActive(item.href, item.id)}
                accent={
                  ("accent" in item && item.accent
                    ? item.accent
                    : brandAccent) as AccentColor
                }
              />
            ))}
            <div className="ml-1 flex items-center gap-1 border-l border-cyber-line pl-2 lg:ml-2 lg:pl-3">
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn — external link"
                className="relative flex h-9 w-9 items-center justify-center rounded-sm border border-cyber-line text-cyber-muted transition-colors hover:border-cyber-cyan/50 hover:text-cyber-cyan"
              >
                <LinkedInIcon className="h-4 w-4" />
                <ExternalLink className="absolute right-0.5 top-0.5 h-2.5 w-2.5" />
              </a>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
                title="GitHub — external link"
                className="relative flex h-9 w-9 items-center justify-center rounded-sm border border-cyber-line text-cyber-muted transition-colors hover:border-cyber-cyan/50 hover:text-cyber-cyan"
              >
                <GithubIcon className="h-4 w-4" />
                <ExternalLink className="absolute right-0.5 top-0.5 h-2.5 w-2.5" />
              </a>
            </div>
        </nav>

        <div className="shrink-0 md:hidden">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="icon"
              className="h-11 w-11 border-cyber-line bg-transparent text-cyber-text"
              aria-label="Open navigation menu"
              >
                <MenuIcon className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-[min(18rem,calc(100vw-2rem))] border-cyber-line bg-cyber-elevated p-3"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    href={item.href}
                    label={item.label}
                    active={isActive(item.href, item.id)}
                    accent={
                      ("accent" in item && item.accent
                        ? item.accent
                        : brandAccent) as AccentColor
                    }
                    onClick={() => setOpen(false)}
                  />
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-cyber-line pt-3">
                  <a
                    href={contactLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center gap-2 border border-cyber-line px-3 font-cyber-mono text-[10px] uppercase tracking-[0.14em] text-cyber-muted transition-colors hover:border-cyber-cyan/50 hover:text-cyber-cyan"
                  >
                    <LinkedInIcon className="h-4 w-4 shrink-0" />
                    LinkedIn
                    <ExternalLink className="ml-auto h-3 w-3 shrink-0" />
                  </a>
                  <a
                    href={contactLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center gap-2 border border-cyber-line px-3 font-cyber-mono text-[10px] uppercase tracking-[0.14em] text-cyber-muted transition-colors hover:border-cyber-cyan/50 hover:text-cyber-cyan"
                  >
                    <GithubIcon className="h-4 w-4 shrink-0" />
                    GitHub
                    <ExternalLink className="ml-auto h-3 w-3 shrink-0" />
                  </a>
                </div>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </motion.header>
  );
}

export function categoryAccent(id: CategoryId): AccentColor {
  if (id === "sales") return "orange";
  if (id === "software") return "cyan";
  if (id === "3d-art") return "purple";
  if (id === "game-dev") return "yellow";
  return "lime";
}
