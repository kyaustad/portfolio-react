"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  categories,
  contactLinks,
  siteMeta,
  skills,
} from "@/data/portfolio";
import { CategoryCard } from "@/components/cyber/CategoryCard";
import { SnippetsBannerLink } from "@/components/cyber/ProjectCards";
import { MotionSection } from "@/components/cyber/Motion";
import { SkillIcon } from "@/components/cyber/SkillIcon";
import { SkillCard } from "@/components/SkillCard";
import {
  DocumentIcon,
  GithubIcon,
  GmailIcon,
  LinkedInIcon,
  PDFIcon,
} from "@/components/Icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-12 text-center sm:pt-16 md:px-6 md:pt-24">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <p className="font-cyber-mono text-[10px] tracking-[0.25em] text-cyber-cyan/80 sm:text-xs sm:tracking-[0.35em]">
          [ {siteMeta.version} ]
        </p>
        <h1 className="mt-4 break-words font-cyber-display text-[clamp(2.35rem,12vw,5rem)] font-bold leading-[0.95] tracking-normal text-cyber-cyan text-glow-cyan sm:tracking-wide md:text-7xl lg:text-8xl">
          {siteMeta.name.toUpperCase()}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-cyber-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-cyber-muted sm:text-xs sm:tracking-[0.22em] md:text-sm">
          {siteMeta.tagline}
        </p>
        <p className="mt-8 font-cyber-mono text-[10px] leading-relaxed tracking-[0.18em] text-cyber-text/70 sm:text-[11px] sm:tracking-[0.28em]">
          {siteMeta.prompt}
        </p>
      </motion.div>
    </section>
  );
}

export function HomeCategories() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
      <div className="mt-6">
        <SnippetsBannerLink />
      </div>
    </MotionSection>
  );
}

export function HomeSkills() {
  return (
    <MotionSection id="skills" className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-6">
      <div className="mb-10 text-center">
        <h2 className="font-cyber-display text-4xl font-bold text-cyber-cyan text-glow-cyan md:text-5xl">
          SKILLS
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-cyber-cyan/60" />
        <p className="mt-4 font-cyber-mono text-xs tracking-[0.2em] text-cyber-muted">
          TOOLING · STACK · CRAFT
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            icon={<SkillIcon icon={skill.icon} className="h-10 w-10 sm:h-14 sm:w-14" />}
            text={skill.label}
            className="border-cyber-cyan/30 bg-cyber-elevated/80"
          />
        ))}
      </div>
    </MotionSection>
  );
}

export function HomeAboutContact() {
  return (
    <MotionSection id="contact" className="mx-auto max-w-4xl px-4 py-12 sm:py-16 md:px-6">
      <div className="mb-10 text-center">
        <h2 className="font-cyber-display text-4xl font-bold text-cyber-cyan text-glow-cyan md:text-5xl">
          CONTACT
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-cyber-cyan/60" />
      </div>

      <div className="cyber-panel mb-6 border-cyber-cyan/40 p-4 sm:p-6 md:p-8">
        <div className="mb-6 flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-3xl border border-cyber-cyan/40 sm:h-48 sm:w-48">
            <Image
              src="/Portfolio.webp"
              alt="Kyle Austad"
              fill
              className="object-cover aspect-square  w-full h-full"
              sizes="224px"
            />
          </div>
          <p className="text-sm leading-relaxed text-cyber-text/85 md:text-base">
            {`Software engineer and team leader with experience building full-stack and native applications, managing business technology infrastructure, and deploying serverless and containerized applications. Hands-on experience with Docker, Kubernetes, Git, REST, PostgreSQL and MongoDB, Linux, AWS and other cloud-hosted infrastructure. Brings additional experience leading teams and taking ownership over individual growth`}
          </p>
        </div>
      </div>

      <div className="cyber-panel mb-6 border-cyber-cyan/40 p-4 text-center sm:p-6 md:p-8">
        <p className="mb-6 text-lg text-cyber-text">
          Check out my <span className="text-cyber-cyan">resume</span>.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={contactLinks.resumeDocx}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 border border-cyber-line px-5 py-3 transition-colors hover:border-cyber-cyan/50 sm:w-auto"
          >
            <DocumentIcon className="min-h-6 min-w-6" />
            <span className="font-cyber-mono text-xs tracking-wider">Resume (docx)</span>
          </a>
          <a
            href={contactLinks.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 border border-cyber-line px-5 py-3 transition-colors hover:border-cyber-cyan/50 sm:w-auto"
          >
            <PDFIcon className="min-h-6 min-w-6" />
            <span className="font-cyber-mono text-xs tracking-wider">Resume (pdf)</span>
          </a>
        </div>
      </div>

      <div className="cyber-panel border-cyber-cyan/40 p-4 text-center sm:p-6 md:p-8">
        <p className="mb-6 text-lg text-cyber-text">
          Ready to <span className="text-cyber-cyan">work together?</span> Let&apos;s
          discuss your next project.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={contactLinks.email}
            className={cn(
              "flex w-full items-center justify-center gap-3 border border-cyber-line px-5 py-3 sm:w-auto",
              "transition-colors hover:border-cyber-cyan/50"
            )}
          >
            <GmailIcon className="min-h-6 min-w-6" />
            <span className="font-cyber-mono text-xs tracking-wider">Email Me</span>
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 border border-cyber-line px-5 py-3 transition-colors hover:border-cyber-cyan/50 sm:w-auto"
          >
            <LinkedInIcon className="min-h-6 min-w-6" />
            <span className="font-cyber-mono text-xs tracking-wider">LinkedIn</span>
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 border border-cyber-line px-5 py-3 transition-colors hover:border-cyber-cyan/50 sm:w-auto"
          >
            <GithubIcon className="min-h-6 min-w-6" />
            <span className="font-cyber-mono text-xs tracking-wider">GitHub</span>
          </a>
          {/* <a
            href={contactLinks.contra}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-cyber-line px-5 py-3 transition-colors hover:border-cyber-cyan/50"
          >
            <Image
              src="/contra.webp"
              alt="Contra"
              width={24}
              height={24}
              className="min-h-6 min-w-6"
            />
            <span className="font-cyber-mono text-xs tracking-wider">Hire on Contra</span>
          </a> */}
        </div>
      </div>
    </MotionSection>
  );
}
