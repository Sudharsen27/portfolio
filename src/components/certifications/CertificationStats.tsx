import { CertificationIcon } from "@/src/components/certifications/CertificationIcon";

interface CertificationStat {
  label: string;
  icon: string;
}

interface CertificationStatsProps {
  stats: readonly CertificationStat[];
}

export function CertificationStats({ stats }: CertificationStatsProps) {
  return (
    <ul
      className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4"
      aria-label="Certification highlights"
    >
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="flex items-center gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/40 px-4 py-3.5 transition-all duration-200 hover:border-blue-500/40 hover:bg-zinc-800/70"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-700/60 bg-zinc-900/60 text-blue-400">
            <CertificationIcon name={stat.icon} className="h-4 w-4" />
          </span>
          <span className="text-sm font-medium leading-snug text-zinc-200">
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
