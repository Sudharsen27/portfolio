"use client";

import { useRef, useState, useEffect } from "react";
import { skillsData } from "@/src/data/skills";
import { SectionTitle } from "@/src/components/ui/SectionTitle";

export function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Skills"
          subtitle="Frontend, backend, and tools I work with."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5"
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
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
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
