"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type {
  ArtProject,
  GameProject,
  ProjectLink,
  SalesEntry,
  SalesStat,
  SnippetProject,
  SoftwareProject,
} from "@/data/types";
import { getAccent } from "@/lib/cyber-theme";
import { cn } from "@/lib/utils";
import { SalesBadge, TechBadge } from "@/components/cyber/TechBadge";
import {
  CyberImageGallery,
  CyberImageLightbox,
} from "@/components/cyber/CyberImageGallery";
import { useEffect, useMemo, useState } from "react";

function ExternalLinks({ links, accentClass }: { links?: ProjectLink; accentClass: string }) {
  if (!links) return null;
  const items: { label: string; href: string }[] = [];
  if (links.live) items.push({ label: "LIVE ↗", href: links.live });
  if (links.github) items.push({ label: "GITHUB ↗", href: links.github });
  if (links.linkedin) items.push({ label: "LINKEDIN ↗", href: links.linkedin });
  if (links.artstation) items.push({ label: "ARTSTATION ↗", href: links.artstation });
  if (links.itch) items.push({ label: "ITCH ↗", href: links.itch });
  if (!items.length) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {items.map((item) => (
        <a
          key={item.href + item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("font-cyber-mono text-xs tracking-[0.16em] border border-cyber-line rounded-md p-2", accentClass)}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: SoftwareProject["status"] }) {
  const label =
    status === "shipped"
      ? "SHIPPED"
      : status === "in-progress"
        ? "IN PROGRESS"
        : status === "offline"
          ? "OFFLINE"
          : "CONCEPT";

  const color =
    status === "shipped"
      ? "text-cyber-green"
      : status === "in-progress"
        ? "text-cyber-orange"
        : status === "offline"
          ? "text-cyber-muted"
          : "text-cyber-yellow";

  return (
    <span
      className={cn(
        "font-cyber-mono text-[10px] tracking-[0.18em] uppercase",
        color
      )}
    >
      • {label}
    </span>
  );
}

export function SoftwareProjectCard({
  project,
  index,
}: {
  project: SoftwareProject;
  index: number;
}) {
  const styles = getAccent("cyan");
  const reduceMotion = useReducedMotion();
  const galleryImages = (() => {
    const images = project.images ?? [];
    if (project.banner && !images.includes(project.banner)) {
      return [project.banner, ...images];
    }
    if (images.length) return images;
    return project.banner ? [project.banner] : [];
  })();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={cn("cyber-panel p-4 sm:p-5 md:p-6", styles.border)}
    >
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <h3 className="break-words font-cyber-display text-xl font-semibold text-white">
            <span className="mr-3 font-cyber-mono text-sm text-cyber-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            {project.title}
          </h3>
          <p className="mt-1 font-cyber-mono text-xs text-cyber-muted">{project.year}</p>
        </div>
        <div className="shrink-0 sm:pt-1">
          <StatusBadge status={project.status} />
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-cyber-text/80">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechBadge
            key={t}
            label={t}
            className={cn(styles.border, styles.text)}
          />
        ))}
      </div>
      {project.placeholderNote && (
        <div className="mt-4 border border-dashed border-cyber-cyan/30 px-3 py-2 font-cyber-mono text-[10px] tracking-wider text-cyber-muted">
          ⊕ {project.placeholderNote}
        </div>
      )}
      {galleryImages.length > 0 && (
        <div className="mt-5">
          <CyberImageGallery
            images={galleryImages}
            featuredImage={project.banner}
            title={project.title}
            variant="featured"
            accentClass={styles.border}
            accentTextClass={styles.text}
          />
        </div>
      )}
      <ExternalLinks links={project.links} accentClass={styles.text} />
    </motion.article>
  );
}

export function SalesStatRow({ stats }: { stats: SalesStat[] }) {
  const styles = getAccent("orange");
  return (
    <div className="mb-10 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className={cn("cyber-panel p-4 text-center", styles.border)}>
          <div className={cn("font-cyber-display text-2xl font-bold md:text-3xl", styles.text, styles.glow)}>
            {stat.value}
          </div>
          <div className="mt-2 font-cyber-mono text-[10px] tracking-[0.18em] text-cyber-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SalesEntryCard({ entry }: { entry: SalesEntry }) {
  const styles = getAccent("orange");
  return (
    <article className={cn("cyber-panel mb-8 p-4 sm:p-5 md:p-8", styles.border)}>
      <div className="flex flex-wrap items-start justify-between gap-3">

        <div className="w-full">
          <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className={cn("break-words font-cyber-display text-2xl font-bold", styles.text)}>
            {entry.title}
            
          </h3>
          <Image src={entry.logo} alt={entry.title} width={200} height={200} className={cn("h-16 max-w-full shrink-0 rounded-lg border border-cyber-line object-contain p-1 sm:h-20 sm:w-fit", styles.border)} />

          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <TechBadge
                key={tag}
                label={tag}
                className={cn(styles.border, styles.text)}
              />
            ))}
          </div>
          <p className="mt-3 font-cyber-mono text-xs tracking-wide text-cyber-muted">
            {entry.role} · {entry.duration}
          </p>
        </div>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cyber-text/80">
        {entry.description}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 md:grid-cols-4">
        {entry.stats.map((stat) => (
          <div key={stat.label} className={cn("border p-3", styles.border)}>
            <div className={cn("font-cyber-display text-lg font-semibold", styles.text)}>
              {stat.value}
            </div>
            <div className="mt-1 font-cyber-mono text-[10px] tracking-wider text-cyber-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {entry.skills.map((skill) => (
          <SalesBadge
            key={skill}
            label={skill}
            className="border-cyber-line px-3 py-1.5 text-cyber-text/80"
          />
        ))}
      </div>
      {entry.photos && entry.photos.length > 0 && (
        <div className="mt-6">
          <div className="mb-3 font-cyber-mono text-[10px] tracking-[0.2em] text-cyber-muted">
            PHOTOS · CLICK TO EXPAND
          </div>
          <CyberImageGallery
            images={entry.photos}
            title={entry.title}
            accentClass={styles.border}
          />
        </div>
      )}
      {entry.placeholderNote && (
        <p className="mt-4 font-cyber-mono text-[10px] tracking-wider text-cyber-muted">
          {entry.placeholderNote}
        </p>
      )}
    </article>
  );
}

export function ArtProjectCard({ project }: { project: ArtProject }) {
  const styles = getAccent("purple");
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const galleryImages = useMemo(() => {
    const images = project.images ?? [];
    if (project.featuredImage && !images.includes(project.featuredImage)) {
      return [project.featuredImage, ...images];
    }
    if (images.length) return images;
    return project.featuredImage ? [project.featuredImage] : [];
  }, [project.featuredImage, project.images]);

  useEffect(() => {
    if (
      reduceMotion ||
      !isHovering ||
      open ||
      galleryImages.length < 2
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setHoverIndex((current) =>
        current === galleryImages.length - 1 ? 0 : current + 1
      );
    }, 1750);

    return () => window.clearInterval(timer);
  }, [galleryImages.length, isHovering, open, reduceMotion]);

  const previewImage = galleryImages[hoverIndex] ?? galleryImages[0];

  const openGallery = (index = hoverIndex) => {
    if (!galleryImages.length) return;
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <article
      className={cn(
        "cyber-panel group overflow-hidden transition-shadow duration-300",
        styles.border,
        "hover:shadow-[0_0_28px_rgba(192,132,252,0.18)]"
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setHoverIndex(0);
      }}
    >
      <button
        type="button"
        onClick={() => openGallery(hoverIndex)}
        disabled={!galleryImages.length}
        className={cn(
          "relative block w-full overflow-hidden bg-gradient-to-br from-purple-950/40 via-cyber-elevated to-emerald-950/20 text-left",
          "aspect-[4/5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-purple",
          !galleryImages.length && "cursor-default"
        )}
        aria-label={
          galleryImages.length
            ? `Open ${project.title} gallery`
            : `${project.title} has no images yet`
        }
      >
        {previewImage ? (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={previewImage}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={previewImage}
                alt={project.title}
                fill
                unoptimized
                quality={100}
                className="object-cover"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 40vw"
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex h-full items-center justify-center font-cyber-mono text-xs tracking-wider text-cyber-muted">
            [ add featuredImage ]
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

        {galleryImages.length > 1 && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
            <div className="flex min-w-0 gap-1 overflow-hidden">
              {galleryImages.map((src, index) => (
                <span
                  key={src}
                  className={cn(
                    "h-1 w-4 rounded-full transition-colors",
                    index === hoverIndex ? "bg-cyber-purple" : "bg-white/30"
                  )}
                />
              ))}
            </div>
            <span className="border border-cyber-purple/40 bg-black/55 px-2 py-1 font-cyber-mono text-[9px] tracking-[0.16em] text-cyber-purple backdrop-blur">
              <span className="hidden sm:inline">{isHovering ? "SLIDESHOW" : "HOVER · CLICK"}</span>
              <span className="sm:hidden">TAP TO VIEW</span>
            </span>
          </div>
        )}

        {galleryImages.length === 1 && (
          <span className="absolute bottom-3 right-3 border border-white/20 bg-black/55 px-2 py-1 font-cyber-mono text-[9px] tracking-[0.16em] text-white/80 backdrop-blur">
            CLICK TO EXPAND
          </span>
        )}
      </button>

      <div className="p-4">
        <div className="flex flex-col items-start gap-1 min-[380px]:flex-row min-[380px]:justify-between min-[380px]:gap-2">
          <h3 className="break-words font-cyber-display text-lg font-semibold text-white">
            {project.title}
          </h3>
          <span className="shrink-0 font-cyber-mono text-xs text-cyber-muted">
            {project.year}
          </span>
        </div>
        {project.description && (
          <p className="mt-2 text-sm leading-relaxed text-cyber-text/75">
            {project.description}
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge
              key={tag}
              label={tag}
              className={cn(styles.border, styles.text)}
            />
          ))}
        </div>
        {project.links?.artstation && (
          <a
            href={project.links.artstation}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-3 inline-block rounded-md border border-cyber-line p-2 font-cyber-mono text-xs",
              styles.text
            )}
          >
            ARTSTATION ↗
          </a>
        )}
      </div>

      {galleryImages.length > 0 && (
        <CyberImageLightbox
          images={galleryImages}
          title={project.title}
          open={open}
          onOpenChange={setOpen}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
          accentClass={styles.border}
          accentTextClass={styles.text}
        />
      )}
    </article>
  );
}

export function GameProjectCard({
  project,
  index,
}: {
  project: GameProject;
  index: number;
}) {
  const styles = getAccent("yellow");
  return (
    <article className={cn("cyber-panel overflow-hidden", styles.border)}>
      {project.banner && (
        <div className="relative aspect-video">
          <Image
            src={project.banner}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-5 md:p-6">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-3">
          <h3 className="break-words font-cyber-display text-xl font-semibold text-white">
            <span className="mr-2 font-cyber-mono text-sm text-cyber-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            {project.title}
          </h3>
          <div className="shrink-0 sm:pt-1">
            <StatusBadge status={project.status} />
          </div>
        </div>
        <p className="mt-1 font-cyber-mono text-xs text-cyber-muted">{project.year}</p>
        <p className="mt-4 text-sm leading-relaxed text-cyber-text/80">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge
              key={t}
              label={t}
              className={cn(styles.border, styles.text)}
            />
          ))}
        </div>
        <ExternalLinks links={project.links} accentClass={styles.text} />
      </div>
    </article>
  );
}

export function SnippetProjectCard({ project }: { project: SnippetProject }) {
  const styles = getAccent("lime");
  return (
    <article className={cn("cyber-panel p-5", styles.border)}>
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between">
        <h3 className="break-words font-cyber-display text-lg font-semibold text-white">{project.title}</h3>
        <div className="flex shrink-0 flex-row items-center gap-2 sm:flex-col sm:items-end sm:gap-1">
          {project.status && <StatusBadge status={project.status} />}
          <span className="font-cyber-mono text-[10px] uppercase tracking-wider text-cyber-lime">
            {project.scope}
          </span>
        </div>
      </div>
      <p className="mt-1 font-cyber-mono text-xs text-cyber-muted">{project.year}</p>
      <p className="mt-3 text-sm text-cyber-text/80">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechBadge
            key={t}
            label={t}
            className={cn(styles.border, styles.text)}
          />
        ))}
      </div>
      {project.banner && (
        <div className="relative mt-4 aspect-video overflow-hidden border border-cyber-line">
          <Image
            src={project.banner}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </div>
      )}
      <ExternalLinks links={project.links} accentClass={styles.text} />
    </article>
  );
}

export function SnippetsBannerLink() {
  const styles = getAccent("lime");
  return (
    <Link
      href="/snippets"
      className={cn(
        "cyber-panel group flex w-full items-center justify-center gap-3 px-4 py-5 text-center transition-colors sm:px-6",
        styles.border,
        styles.text
      )}
    >
      <span className={cn("font-cyber-mono text-[10px] leading-relaxed tracking-[0.14em] sm:text-xs sm:tracking-[0.25em] md:text-sm", styles.glow)}>
        {`◇ SNIPPETS & SIDE PROJECTS ◇`}
      </span>
    </Link>
  );
}
