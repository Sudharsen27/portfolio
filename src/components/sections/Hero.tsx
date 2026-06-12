"use client";

import { useEffect } from "react";
import Link from "next/link";
import { heroData } from "@/src/data/hero";
import { contactData } from "@/src/data/contact";

const ctaBase =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900";

const resumeButtonStyles = `${ctaBase} bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500`;

export function Hero() {
  useEffect(() => {
    console.log("Resume URL:", process.env.NEXT_PUBLIC_RESUME_URL);

    if (!process.env.NEXT_PUBLIC_RESUME_URL) {
      console.warn(
        "NEXT_PUBLIC_RESUME_URL is not configured — /api/resume fallback will be used"
      );
    }
  }, []);

  function handleResumeClick() {
    const url = process.env.NEXT_PUBLIC_RESUME_URL;

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    // Production fallback: server reads env at runtime (works after Vercel env is set)
    window.open("/api/resume", "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950/10 via-transparent to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="relative max-w-3xl pl-0 md:pl-4">
          <span
            className="absolute top-0 bottom-0 left-0 hidden w-0.5 rounded-full bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 opacity-60 md:block"
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
          <p
            className="mt-5 animate-fade-in text-sm font-medium tracking-wide text-zinc-300 sm:text-base"
            style={{
              animationDelay: "0.12s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {heroData.techStack}
          </p>
          <p
            className="mt-5 max-w-2xl animate-fade-in text-lg leading-relaxed text-zinc-400"
            style={{
              animationDelay: "0.16s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {heroData.tagline}
          </p>
          <nav
            className="mt-10 flex animate-fade-in flex-wrap gap-3 sm:gap-4"
            style={{
              animationDelay: "0.24s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
            aria-label="Primary actions"
          >
            <button
              type="button"
              onClick={handleResumeClick}
              className={resumeButtonStyles}
            >
              Resume
            </button>
            <Link
              href="/projects"
              className={`${ctaBase} border border-zinc-600 text-zinc-200 hover:bg-zinc-800`}
            >
              View Projects
            </Link>
            {contactData.github && (
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaBase} border border-zinc-600 text-zinc-200 hover:bg-zinc-800`}
              >
                GitHub
              </a>
            )}
            {contactData.linkedIn && (
              <a
                href={contactData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaBase} border border-zinc-600 text-zinc-200 hover:bg-zinc-800`}
              >
                LinkedIn
              </a>
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}
