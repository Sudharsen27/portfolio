"use client";

import { featuredProjects, otherProjects } from "@/src/data/projects";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { useInView } from "@/src/hooks/useInView";

interface ProjectsProps {
  /** Less top padding when this is the first section on a section route */
  isLeadSection?: boolean;
}

export function Projects({ isLeadSection = false }: ProjectsProps) {
  const { ref: featuredTriggerRef, inView: featuredInView } =
    useInView<HTMLDivElement>();
  const { ref: otherTriggerRef, inView: otherInView } =
    useInView<HTMLDivElement>();

  return (
    <section
      id="projects"
      className={`scroll-mt-24 ${isLeadSection ? "pb-20 pt-0" : "py-20"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Featured Projects"
          subtitle="Production systems I've designed and built — full-stack applications with measurable engineering impact."
        />
        <div ref={featuredTriggerRef} className="h-px" aria-hidden />
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={featuredInView}
            />
          ))}
        </div>

        <div className="mt-20">
          <SectionTitle
            title="Other Projects"
            subtitle="Additional web applications and client deliverables."
          />
          <div ref={otherTriggerRef} className="h-px" aria-hidden />
          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={otherInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
