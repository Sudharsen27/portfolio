"use client";

import Link from "next/link";
import { heroData } from "@/src/data/hero";
import { contactData } from "@/src/data/contact";
import { trackVisitorEvent } from "@/src/utils/tracking/visitorEvents";

const ctaBase =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900";

const resumeButtonStyles = `${ctaBase} bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500`;

export function Hero() {
  function handleResumeClick() {
    trackVisitorEvent("resume_viewed");
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  }

  function handleResumeDownload() {
    trackVisitorEvent("resume_downloaded");
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
        <div className="relative max-w-[700px] pl-0 md:pl-4">
          <span
            className="absolute top-0 bottom-0 left-0 hidden w-0.5 rounded-full bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 opacity-60 md:block"
            aria-hidden
          />

          <p
            className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm"
            style={{ opacity: 0, animationFillMode: "forwards" }}
          >
            {heroData.subhead}
          </p>

          <h1
            className="mt-3 animate-fade-in text-4xl font-bold tracking-tight text-white sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              animationDelay: "0.08s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {heroData.headline}
          </h1>

          <p
            className="mt-4 animate-fade-in text-lg font-medium leading-snug text-zinc-300 sm:mt-5 sm:text-xl"
            style={{
              animationDelay: "0.1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {heroData.tagline}
          </p>

          <div
            className="mt-7 space-y-3 animate-fade-in sm:mt-8 sm:space-y-3.5"
            style={{
              animationDelay: "0.12s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
            role="list"
            aria-label="Technology stack"
          >
            {heroData.techCategories.map((category) => (
              <div
                key={category.label}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-x-4"
                role="listitem"
              >
                <span className="text-xs font-medium tracking-wide text-zinc-500">
                  {category.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-700 bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            className="mt-7 max-w-[650px] animate-fade-in text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8"
            style={{
              animationDelay: "0.16s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {heroData.description}
          </p>

          <nav
            className="mt-9 flex animate-fade-in flex-wrap gap-3 sm:mt-10 sm:gap-4"
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
              onContextMenu={handleResumeDownload}
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
                onClick={() => trackVisitorEvent("github_clicked")}
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
                onClick={() => trackVisitorEvent("linkedin_clicked")}
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
