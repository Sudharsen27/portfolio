import { AboutIcon } from "@/src/components/about/AboutIcon";
import type { AboutHighlight } from "@/src/types";

interface AboutHighlightCardProps {
  highlight: AboutHighlight;
}

export function AboutHighlightCard({ highlight }: AboutHighlightCardProps) {
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/40 px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-zinc-800/70 hover:shadow-lg hover:shadow-blue-500/5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-700/60 bg-zinc-900/60 text-blue-400 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-300">
        <AboutIcon name={highlight.icon} className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium leading-snug text-zinc-200 sm:text-[15px]">
        {highlight.label}
      </span>
    </li>
  );
}
