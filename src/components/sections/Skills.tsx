"use client";

import {
  featuredTechnologies,
  skillsData,
  skillsSubtitle,
} from "@/src/data/skills";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { FeaturedTechnologies } from "@/src/components/skills/FeaturedTechnologies";
import { SkillCategoryCard } from "@/src/components/skills/SkillCategoryCard";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" ref={ref} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Skills" subtitle={skillsSubtitle} />

        <div className="space-y-10 md:space-y-12">
          <div style={fadeInUpStyle(inView)}>
            <FeaturedTechnologies technologies={featuredTechnologies} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {skillsData.map((category, index) => (
              <SkillCategoryCard
                key={category.title}
                category={category}
                style={fadeInUpStyle(inView, 80 + index * 90)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
