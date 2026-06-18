import { personalInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.1] bg-white/[0.05] text-[10px] font-bold text-white">
            RR
          </span>
          <p className="text-sm text-zinc-500">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <p className="text-sm text-zinc-600">
          Crafted with precision · Mumbai, India
        </p>
      </div>
    </footer>
  );
}
