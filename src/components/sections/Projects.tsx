"use client";

import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/src/data/projects";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { ProjectCard } from "@/src/components/ui/ProjectCard";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Projects"
          subtitle="Built and delivered—live apps and full-stack products I've released."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
