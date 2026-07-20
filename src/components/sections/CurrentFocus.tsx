"use client";

import { currentFocusData } from "@/src/data/currentFocus";
import { EngineeringFocusCard } from "@/src/components/focus/EngineeringFocusCard";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

export function CurrentFocus() {
  const { ref, inView } = useInView();

  return (
    <section
      id="focus"
      ref={ref}
      className="scroll-mt-24 py-20"
      aria-label="Engineering focus"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title={currentFocusData.title}
          subtitle={currentFocusData.subtitle}
        />
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {currentFocusData.items.map((item, index) => (
            <EngineeringFocusCard
              key={item.title}
              item={item}
              style={fadeInUpStyle(inView, index * 80)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
