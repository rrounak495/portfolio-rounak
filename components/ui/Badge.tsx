import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        variant === "default" &&
          "border-white/[0.08] bg-white/[0.04] text-zinc-300 backdrop-blur-sm",
        variant === "accent" &&
          "border-violet-500/20 bg-violet-500/10 text-violet-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
