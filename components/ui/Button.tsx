"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  download?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  download,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full overflow-hidden group";

  const variants = {
    primary:
      "bg-white text-black hover:bg-zinc-100 shadow-[0_0_40px_-8px_rgba(255,255,255,0.3)]",
    secondary:
      "border border-white/[0.12] bg-white/[0.04] text-white backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/[0.2]",
    ghost:
      "text-zinc-400 hover:text-white hover:bg-white/[0.04]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-violet-400/0 via-violet-400/20 to-violet-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
