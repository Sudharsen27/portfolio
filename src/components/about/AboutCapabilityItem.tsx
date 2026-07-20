import { AboutIcon } from "@/src/components/about/AboutIcon";
import type { AboutCapability } from "@/src/types";

interface AboutCapabilityItemProps {
  capability: AboutCapability;
}

export function AboutCapabilityItem({ capability }: AboutCapabilityItemProps) {
  return (
    <li className="group flex items-start gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/40 px-4 py-3.5 transition-all duration-200 hover:border-blue-500/40 hover:bg-zinc-800/70">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-700/60 bg-zinc-900/60 text-blue-400 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-300">
        <AboutIcon name={capability.icon} className="h-4 w-4" />
      </span>
      <span className="pt-1 text-sm font-medium leading-snug text-zinc-200 sm:text-[15px]">
        {capability.title}
      </span>
    </li>
  );
}
