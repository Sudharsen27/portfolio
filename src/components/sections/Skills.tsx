"use client";

import { skillsData } from "@/src/data/skills";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" ref={ref} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Skills"
          subtitle="Technologies I use to build production-grade full-stack applications."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10"
              style={fadeInUpStyle(inView, index * 90)}
            >
              <span
                className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={category.title}>
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block rounded-md bg-zinc-700/80 px-2.5 py-1 text-sm font-medium text-zinc-300 transition-colors group-hover:bg-zinc-600/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
