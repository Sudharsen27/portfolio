"use client";

import { CertificationCard } from "@/src/components/certifications/CertificationCard";
import { CertificationStats } from "@/src/components/certifications/CertificationStats";
import {
  certificationStats,
  certificationsData,
  certificationsSubtitle,
} from "@/src/data/certifications";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

export function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="certifications" ref={ref} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Certifications"
          subtitle={certificationsSubtitle}
        />

        <div style={fadeInUpStyle(inView)}>
          <CertificationStats stats={certificationStats} />
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              style={fadeInUpStyle(inView, 80 + index * 90)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
