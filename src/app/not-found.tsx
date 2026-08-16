"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon, SearchIcon, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cyber-bg px-4 cyber-grid-bg">
      <div className="w-full max-w-lg text-center">
        <div className="mb-8 flex justify-center">
          <div className="font-cyber-display text-6xl font-bold text-cyber-cyan text-glow-cyan">
            404
          </div>
        </div>
        <h1 className="mb-4 font-cyber-display text-3xl font-bold text-cyber-text">
          SIGNAL LOST
        </h1>
        <p className="mb-8 font-cyber-mono text-xs tracking-wide text-cyber-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            onClick={() => (window.location.href = "/")}
            className="border border-cyber-cyan/40 bg-transparent text-cyber-cyan hover:bg-cyber-cyan/10"
          >
            <HomeIcon className="mr-2 h-4 w-4" />
            Go Home
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-cyber-line bg-transparent text-cyber-muted"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3 border-t border-cyber-line pt-8">
          {[
            ["/sales", "Sales"],
            ["/software", "Software"],
            ["/3d-art", "3D Art"],
            ["/game-dev", "Game Dev"],
            ["/snippets", "Snippets"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="border border-cyber-line px-3 py-2 font-cyber-mono text-[10px] tracking-wider text-cyber-muted hover:border-cyber-cyan/40 hover:text-cyber-cyan"
            >
              {label}
            </Link>
          ))}
        </div>
        <SearchIcon className="mx-auto mt-8 h-5 w-5 text-cyber-muted/40" />
      </div>
    </div>
  );
}
