"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] lg:p-8"
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    stat.gradient,
                  )}
                />
                <div className="relative">
                  <p
                    className={cn(
                      "bg-gradient-to-r bg-clip-text text-3xl font-semibold tracking-tight text-transparent lg:text-4xl",
                      stat.textGradient,
                    )}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-400 lg:text-base">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-zinc-600">{stat.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
}
