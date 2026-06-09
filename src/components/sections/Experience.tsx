"use client";

import { experienceData } from "@/src/data/experience";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" ref={ref} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Experience"
          subtitle="Outcome-driven engineering contributions across enterprise and product teams."
        />
        <div className="space-y-6">
          {experienceData.map((job, index) => (
            <article
              key={`${job.company}-${job.role}`}
              className="group relative overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10"
              style={fadeInUpStyle(inView, index * 100)}
            >
              <span
                className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                <time className="text-sm font-medium text-zinc-500">
                  {job.period}
                </time>
              </div>
              <p className="mt-1 text-sm font-medium text-blue-400">
                {job.company}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
