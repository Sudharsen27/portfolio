"use client";

import { currentFocusData } from "@/src/data/currentFocus";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

export function CurrentFocus() {
  const { ref, inView } = useInView();

  return (
    <section id="focus" ref={ref} className="scroll-mt-24 py-20" aria-label="Currently exploring">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title={currentFocusData.title}
          subtitle={currentFocusData.subtitle}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {currentFocusData.items.map((item, index) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10"
              style={fadeInUpStyle(inView, index * 80)}
            >
              <span
                className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
              <p className="text-sm font-medium text-zinc-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
