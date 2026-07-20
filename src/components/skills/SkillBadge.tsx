interface SkillBadgeProps {
  name: string;
  featured?: boolean;
}

export function SkillBadge({ name, featured = false }: SkillBadgeProps) {
  if (featured) {
    return (
      <span className="inline-flex items-center rounded-lg border border-blue-500/40 bg-blue-500/10 px-3.5 py-2 text-sm font-semibold text-blue-100 shadow-sm shadow-blue-500/10 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-500/15 hover:shadow-md hover:shadow-blue-500/15">
        {name}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-md border border-zinc-700/60 bg-zinc-700/50 px-2.5 py-1.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-600/60 hover:text-white">
      {name}
    </span>
  );
}
