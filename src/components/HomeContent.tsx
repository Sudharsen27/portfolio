"use client";

import { useEffect } from "react";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { Skills } from "@/src/components/sections/Skills";
import { Experience } from "@/src/components/sections/Experience";
import { Projects } from "@/src/components/sections/Projects";
import { Contact } from "@/src/components/sections/Contact";

interface HomeContentProps {
  scrollTo?: string;
}

export function HomeContent({ scrollTo }: HomeContentProps) {
  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-900 text-zinc-200">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
