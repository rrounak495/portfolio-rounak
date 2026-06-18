"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Network, Sparkles } from "lucide-react";

const nodes = [
  { icon: Brain, label: "ML", angle: 0, color: "text-violet-400", bg: "bg-violet-500/15 border-violet-500/25" },
  { icon: Sparkles, label: "GenAI", angle: 90, color: "text-fuchsia-400", bg: "bg-fuchsia-500/15 border-fuchsia-500/25" },
  { icon: Network, label: "CV", angle: 180, color: "text-cyan-400", bg: "bg-cyan-500/15 border-cyan-500/25" },
  { icon: Cpu, label: "Deploy", angle: 270, color: "text-emerald-400", bg: "bg-emerald-500/15 border-emerald-500/25" },
];

export function AIOrbitalVisual() {
  const radius = 120;

  return (
    <div className="relative hidden h-[320px] w-[320px] shrink-0 lg:block">
      {/* Outer rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-white/[0.04]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-dashed border-violet-500/10"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 rounded-full border border-white/[0.06]"
      />

      {/* Center core */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 shadow-[0_0_60px_-10px_rgba(139,92,246,0.5)] backdrop-blur-xl"
        >
          <Brain className="h-9 w-9 text-violet-300" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -z-10 rounded-2xl bg-violet-500/20 blur-xl"
        />
      </div>

      {/* Orbiting nodes */}
      {nodes.map((node, i) => {
        const Icon = node.icon;
        const rad = (node.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <motion.div
            key={node.label}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
            className="absolute left-1/2 top-1/2 h-0 w-0"
            style={{ transformOrigin: "0 0" }}
          >
            <motion.div
              className="absolute flex flex-col items-center gap-1"
              style={{
                left: x - 24,
                top: y - 24,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-md ${node.bg}`}
              >
                <Icon className={`h-5 w-5 ${node.color}`} />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                {node.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20"
          animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
