"use client";

import { motion } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <ParticleField />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 10%, transparent 75%)",
        }}
      />

      {/* Ambient orbs */}
      <motion.div
        animate={{ x: [0, 40, -30, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.92, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[15%] top-[5%] h-[550px] w-[550px] rounded-full bg-violet-600/25 blur-[130px]"
      />
      <motion.div
        animate={{ x: [0, -50, 40, 0], y: [0, 40, -40, 0], scale: [1, 0.88, 1.1, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[8%] top-[15%] h-[650px] w-[650px] rounded-full bg-blue-600/18 blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, 25, -35, 0], y: [0, -25, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] left-[25%] h-[450px] w-[450px] rounded-full bg-fuchsia-600/12 blur-[110px]"
      />

      {/* Top spotlight */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.15),transparent)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_75%)]" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
