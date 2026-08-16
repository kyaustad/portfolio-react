import { CyberNav } from "@/components/cyber/CyberNav";
import { GridBackground } from "@/components/cyber/GridBackground";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";
import { ExternalLink } from "lucide-react";
import { contactLinks, siteMeta } from "@/data/portfolio";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <GridBackground>
      <CyberNav />
      {children}
      <footer className="border-t border-cyber-line px-4 py-8 text-center">
        <div className="mb-6">
          <p className="mb-3 font-cyber-mono text-[9px] uppercase tracking-[0.24em] text-cyber-muted/70">
            External channels
          </p>
          <div className="flex flex-col items-stretch justify-center gap-2 min-[360px]:flex-row">
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center justify-center gap-2 border border-cyber-line px-4 font-cyber-mono text-[10px] uppercase tracking-[0.16em] text-cyber-muted transition-colors hover:border-cyber-cyan/50 hover:text-cyber-cyan"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
              <ExternalLink className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center justify-center gap-2 border border-cyber-line px-4 font-cyber-mono text-[10px] uppercase tracking-[0.16em] text-cyber-muted transition-colors hover:border-cyber-cyan/50 hover:text-cyber-cyan"
            >
              <GithubIcon className="h-5 w-5" />
              GitHub
              <ExternalLink className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
        </div>
        <p className="font-cyber-mono text-[10px] tracking-[0.2em] text-cyber-muted">
          {siteMeta.stackNote}
        </p>
        <p className="mt-2 font-cyber-mono text-[10px] text-cyber-muted/70">
          © {new Date().getFullYear()} Kyle Austad
        </p>
      </footer>
    </GridBackground>
  );
}
