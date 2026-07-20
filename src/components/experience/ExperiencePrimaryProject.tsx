interface ExperiencePrimaryProjectProps {
  name: string;
}

export function ExperiencePrimaryProject({
  name,
}: ExperiencePrimaryProjectProps) {
  return (
    <div className="mt-4">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
        Primary Project
      </p>
      <span className="inline-flex items-center rounded-lg border border-blue-500/35 bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-200">
        {name}
      </span>
    </div>
  );
}
