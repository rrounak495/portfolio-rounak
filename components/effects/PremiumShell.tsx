"use client";

import { MouseGradient } from "@/components/ui/MouseGradient";

export function PremiumShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MouseGradient />
      <div className="relative z-[2]">{children}</div>
    </>
  );
}
