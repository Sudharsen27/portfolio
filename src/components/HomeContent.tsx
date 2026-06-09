"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { Skills } from "@/src/components/sections/Skills";
import { Experience } from "@/src/components/sections/Experience";
import { Projects } from "@/src/components/sections/Projects";
import { CurrentFocus } from "@/src/components/sections/CurrentFocus";
import { Certifications } from "@/src/components/sections/Certifications";
import { Contact } from "@/src/components/sections/Contact";
import {
  shouldShowSection,
  type SectionId,
} from "@/src/utils/sectionVisibility";

interface HomeContentProps {
  scrollTo?: SectionId;
}

export function HomeContent({ scrollTo }: HomeContentProps) {
  const pathname = usePathname();
  const isSectionRoute = Boolean(scrollTo);
  const show = (sectionId: SectionId) =>
    shouldShowSection(sectionId, scrollTo);

  // Section routes render content from the target downward — reset to top on navigate
  useEffect(() => {
    if (!scrollTo) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [scrollTo, pathname]);

  return (
    <>
      <Navbar />
      <main
        className={`min-h-screen bg-zinc-900 text-zinc-200 ${
          isSectionRoute ? "pt-24" : ""
        }`}
      >
        {show("hero") && <Hero />}
        {show("about") && <About />}
        {show("skills") && <Skills />}
        {show("experience") && <Experience />}
        {show("projects") && (
          <Projects isLeadSection={scrollTo === "projects"} />
        )}
        {show("focus") && <CurrentFocus />}
        {show("certifications") && <Certifications />}
        {show("contact") && <Contact />}
      </main>
    </>
  );
}
