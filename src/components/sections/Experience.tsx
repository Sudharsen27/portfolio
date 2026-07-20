"use client";

import {
  experienceData,
  experienceSubtitle,
} from "@/src/data/experience";
import { ExperienceCard } from "@/src/components/experience/ExperienceCard";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" ref={ref} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Experience" subtitle={experienceSubtitle} />
        <div className="space-y-6">
          {experienceData.map((job, index) => (
            <ExperienceCard
              key={`${job.company}-${job.role}`}
              job={job}
              style={fadeInUpStyle(inView, index * 100)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
