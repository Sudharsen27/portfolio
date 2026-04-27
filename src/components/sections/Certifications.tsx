"use client";

import { useEffect, useRef, useState } from "react";
import { certificationsData } from "@/src/data/certifications";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { Button } from "@/src/components/ui/Button";

function hasLink(link: string | null | undefined): link is string {
  return Boolean(link && link.trim().length > 0);
}

export function Certifications() {
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
    <section id="certifications" ref={sectionRef} className="py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Certifications"
          subtitle="Verified credentials showcasing continuous learning and practical engineering skills."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <article
              key={cert.id}
              className="group relative flex flex-col items-center rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10"
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

              <h3 className="text-lg font-semibold leading-snug text-white">{cert.title}</h3>
              <p className="mt-2 text-sm font-medium text-blue-400">{cert.issuer}</p>
              <p className="mt-1 text-sm text-zinc-400">{cert.year}</p>

              <div className="mt-5 w-full border-t border-zinc-700/50 pt-4">
                {hasLink(cert.link) ? (
                  <Button variant="primary" href={cert.link}>
                    View Certificate
                  </Button>
                ) : (
                  <div className="rounded-lg border border-zinc-700/70 bg-zinc-900/40 px-4 py-3">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-300">
                      <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                      On Request
                    </p>
                    <p className="mt-1 text-sm font-medium text-zinc-300">Certificate Available on Request</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
