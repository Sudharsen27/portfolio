"use client";

import { aboutData } from "@/src/data/about";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { AboutCapabilityItem } from "@/src/components/about/AboutCapabilityItem";
import { AboutHighlightCard } from "@/src/components/about/AboutHighlightCard";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

export function About() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="About" subtitle={aboutData.subtitle} />

        <div className="space-y-12 md:space-y-14">
          <p
            className="max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-8"
            style={fadeInUpStyle(inView)}
          >
            {aboutData.summary}
          </p>

          <div style={fadeInUpStyle(inView, 80)}>
            <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              What I Do
            </h3>
            <ul
              className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4"
              aria-label="What I do"
            >
              {aboutData.capabilities.map((capability) => (
                <AboutCapabilityItem
                  key={capability.title}
                  capability={capability}
                />
              ))}
            </ul>
          </div>

          <div style={fadeInUpStyle(inView, 160)}>
            <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              Core Highlights
            </h3>
            <ul
              className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4"
              aria-label="Core highlights"
            >
              {aboutData.highlights.map((highlight) => (
                <AboutHighlightCard
                  key={highlight.label}
                  highlight={highlight}
                />
              ))}
            </ul>
          </div>

          <p
            className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-zinc-500 sm:text-base sm:leading-7"
            style={fadeInUpStyle(inView, 240)}
          >
            {aboutData.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
