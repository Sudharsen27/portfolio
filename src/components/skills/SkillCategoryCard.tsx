import { SkillBadge } from "@/src/components/skills/SkillBadge";
import { SkillIcon } from "@/src/components/skills/SkillIcon";
import type { SkillCategory } from "@/src/types";
import type { CSSProperties } from "react";

interface SkillCategoryCardProps {
  category: SkillCategory;
  style?: CSSProperties;
}

export function SkillCategoryCard({ category, style }: SkillCategoryCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10 sm:p-7"
      style={style}
    >
      <span
        className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
        aria-hidden
      />
      <h3 className="flex items-center gap-2 text-sm font-semibold tracking-tight text-blue-400 sm:text-[15px]">
        <SkillIcon name={category.icon} className="h-4 w-4 shrink-0" />
        {category.title}
      </h3>
      <div className="mt-5">
        <ul className="flex flex-wrap gap-2" aria-label={category.title}>
          {category.items.map((item) => (
            <li key={item}>
              <SkillBadge name={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
