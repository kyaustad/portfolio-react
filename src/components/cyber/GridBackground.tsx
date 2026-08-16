"use client";

import { cn } from "@/lib/utils";

export function GridBackground({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative min-h-screen cyber-grid-bg", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(61,231,255,0.12), transparent 55%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(192,132,252,0.08), transparent 50%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
