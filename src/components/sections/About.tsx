"use client";

import { useRef, useState, useEffect } from "react";
import { aboutData } from "@/src/data/about";
import { SectionTitle } from "@/src/components/ui/SectionTitle";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="About"
          subtitle="What I bring to your team—delivery-focused and quality-minded."
        />
        <div
          className="group relative overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-8 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10 md:p-10"
          style={
            inView
              ? {
                  opacity: 0,
                  animation: "fade-in-up 0.6s ease-out forwards",
                }
              : { opacity: 0 }
          }
        >
          <span
            className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
            aria-hidden
          />
          <div className="max-w-3xl space-y-5 text-base leading-[1.7] text-zinc-300 md:text-lg md:leading-[1.75]">
            {aboutData.summary.split(/\n\n+/).map((paragraph, i) => (
              <p key={i} className="antialiased">
                {paragraph}
              </p>
            ))}
          </div>
          {aboutData.highlights && aboutData.highlights.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-700/50 pt-6">
              {aboutData.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-zinc-700/80 px-3 py-1.5 text-sm font-medium text-zinc-300 ring-1 ring-zinc-600/50 transition-colors group-hover:bg-zinc-600/80 group-hover:ring-blue-500/30"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
