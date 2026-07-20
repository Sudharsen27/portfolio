import { ExperiencePrimaryProject } from "@/src/components/experience/ExperiencePrimaryProject";
import { ExperienceTechStack } from "@/src/components/experience/ExperienceTechStack";
import type { ExperienceItem } from "@/src/types";
import { BriefcaseBusiness, Calendar, MapPin } from "lucide-react";
import type { CSSProperties } from "react";

interface ExperienceCardProps {
  job: ExperienceItem;
  style?: CSSProperties;
}

export function ExperienceCard({ job, style }: ExperienceCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10 sm:p-7"
      style={style}
    >
      <span
        className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
        aria-hidden
      />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="flex items-start gap-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
            <BriefcaseBusiness
              className="mt-1 h-4 w-4 shrink-0 text-blue-400"
              aria-hidden
            />
            <span>{job.role}</span>
          </h3>
          <p className="mt-2 text-sm font-medium text-blue-400 sm:text-[15px]">
            {job.company}
          </p>
        </div>
        <time className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500">
          <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {job.period}
        </time>
      </div>

      <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-zinc-400">
        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {job.location}
      </p>

      {job.technologies && job.technologies.length > 0 && (
        <ExperienceTechStack technologies={job.technologies} />
      )}

      {job.primaryProject && (
        <ExperiencePrimaryProject name={job.primaryProject} />
      )}

      <ul className="mt-5 space-y-3 border-t border-zinc-700/50 pt-5">
        {job.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-7">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/80"
              aria-hidden
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
