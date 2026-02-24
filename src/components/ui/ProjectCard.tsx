import type { Project } from "@/src/types";
import { Button } from "./Button";

function isRealUrl(url: string | undefined): boolean {
  return !!url && url !== "#" && (url.startsWith("http") || url.startsWith("//") || url.startsWith("/"));
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  inView?: boolean;
}

export function ProjectCard({ project, index = 0, inView = false }: ProjectCardProps) {
  const showLive = isRealUrl(project.href);
  const showRepo = isRealUrl(project.repo);

  return (
    <article
      className="project-card group relative flex flex-col overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
      style={
        inView
          ? { opacity: 0, animation: "fade-in-up 0.55s ease-out forwards", animationDelay: `${index * 90}ms` }
          : { opacity: 0 }
      }
    >
      <span className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full" aria-hidden />
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        {showLive && (
          <span className="shrink-0 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/30">
            Live
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-700/80 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors group-hover:bg-zinc-600/80"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3 border-t border-zinc-700/50 pt-4">
        {showLive && (
          <Button variant="primary" href={project.href!}>
            View project
          </Button>
        )}
        {showRepo && (
          <Button variant="secondary" href={project.repo!}>
            Code
          </Button>
        )}
      </div>
    </article>
  );
}
