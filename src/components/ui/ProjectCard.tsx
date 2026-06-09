import type { Project } from "@/src/types";
import { Button } from "./Button";

function isRealUrl(url: string | undefined): boolean {
  return (
    !!url &&
    url !== "#" &&
    (url.startsWith("http") || url.startsWith("//") || url.startsWith("/"))
  );
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  inView?: boolean;
}

function DetailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
        {label}
      </h4>
      <div className="mt-1.5 text-sm leading-relaxed text-zinc-400">
        {children}
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  index = 0,
  inView = false,
}: ProjectCardProps) {
  const showLive = isRealUrl(project.href);
  const showRepo = isRealUrl(project.repo);
  const showCaseStudy = isRealUrl(project.caseStudyHref);

  return (
    <article
      className="project-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10"
      style={
        inView
          ? {
              opacity: 0,
              animation: "fade-in-up 0.55s ease-out forwards",
              animationDelay: `${index * 90}ms`,
            }
          : { opacity: 0 }
      }
    >
      <span
        className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
        aria-hidden
      />
      <div className="flex flex-1 flex-col">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        {showLive && (
          <span className="shrink-0 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/30">
            Live
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
        {project.description}
      </p>

      <div className="mt-4 flex-1 space-y-3">
        <DetailBlock label="Problem Solved">{project.problem}</DetailBlock>
        <DetailBlock label="Technologies">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-zinc-700/80 px-2 py-0.5 text-xs font-medium text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </DetailBlock>
        <DetailBlock label="Key Features">
          <ul className="list-inside list-disc space-y-0.5">
            {project.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </DetailBlock>
        <DetailBlock label="Engineering Challenges">
          <ul className="list-inside list-disc space-y-0.5">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </DetailBlock>
        <DetailBlock label="Business Impact">
          {project.businessImpact}
        </DetailBlock>
      </div>
      </div>

      <div className="mt-6 flex shrink-0 flex-wrap items-center gap-3 border-t border-zinc-700/50 pt-4">
        {showLive && (
          <Button variant="primary" href={project.href!} external>
            Live Demo
          </Button>
        )}
        {showRepo && (
          <Button variant="secondary" href={project.repo!} external>
            GitHub
          </Button>
        )}
        {showCaseStudy && (
          <Button variant="secondary" href={project.caseStudyHref!}>
            Case Study
          </Button>
        )}
      </div>
    </article>
  );
}
