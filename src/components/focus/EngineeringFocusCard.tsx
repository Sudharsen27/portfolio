import { EngineeringFocusIcon } from "@/src/components/focus/EngineeringFocusIcon";
import type { EngineeringFocusItem } from "@/src/data/currentFocus";
import type { CSSProperties } from "react";

interface EngineeringFocusCardProps {
  item: EngineeringFocusItem;
  style?: CSSProperties;
}

export function EngineeringFocusCard({
  item,
  style,
}: EngineeringFocusCardProps) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6"
      style={style}
    >
      <span
        className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
        aria-hidden
      />
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700/60 bg-zinc-900/60 text-blue-400 transition-colors duration-300 group-hover:border-blue-500/40 group-hover:text-blue-300">
        <EngineeringFocusIcon name={item.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-sm font-semibold tracking-tight text-white sm:text-[15px]">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {item.description}
      </p>
    </article>
  );
}
