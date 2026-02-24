"use client";

import Link from "next/link";
import { heroData } from "@/src/data/hero";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950/10 via-transparent to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="relative max-w-3xl pl-0 md:pl-4">
          <span
            className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 opacity-60 md:block hidden"
            aria-hidden
          />
          <p
            className="animate-fade-in text-sm font-semibold uppercase tracking-widest text-blue-400"
            style={{ opacity: 0, animationFillMode: "forwards" }}
          >
            {heroData.subhead}
          </p>
          <h1
            className="mt-4 animate-fade-in text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              animationDelay: "0.08s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {heroData.headline}
          </h1>
          <div
            className="mt-5 max-w-2xl animate-fade-in space-y-4 text-lg leading-relaxed text-zinc-400"
            style={{
              animationDelay: "0.16s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {heroData.tagline.split(/\n\n+/).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in"
            style={{
              animationDelay: "0.24s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.98]"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-600 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-800 active:scale-[0.98]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
