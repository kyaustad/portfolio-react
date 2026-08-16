"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon, RefreshCwIcon, AlertTriangleIcon } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cyber-bg px-4 cyber-grid-bg">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <AlertTriangleIcon className="h-12 w-12 text-cyber-orange" />
        </div>
        <h1 className="mb-4 font-cyber-display text-3xl font-bold text-cyber-text">
          SYSTEM FAULT
        </h1>
        <p className="mb-8 font-cyber-mono text-xs tracking-wide text-cyber-muted">
          We encountered an unexpected error. You can retry or return home.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            onClick={reset}
            className="border border-cyber-cyan/40 bg-transparent text-cyber-cyan hover:bg-cyber-cyan/10"
          >
            <RefreshCwIcon className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="border-cyber-line bg-transparent text-cyber-muted"
          >
            <HomeIcon className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </div>
        {process.env.NODE_ENV === "development" && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer font-cyber-mono text-xs text-cyber-muted">
              Error Details
            </summary>
            <pre className="mt-4 overflow-auto border border-cyber-line bg-cyber-elevated p-4 text-xs text-cyber-text">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
