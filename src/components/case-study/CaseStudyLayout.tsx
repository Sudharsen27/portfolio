import Link from "next/link";
import type { CaseStudyData } from "@/src/types";
import { Button } from "@/src/components/ui/Button";

interface CaseStudyLayoutProps {
  data: CaseStudyData;
}

export function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  return (
    <article className="min-h-screen bg-zinc-900 text-zinc-200">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-zinc-800 pt-24 pb-16">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950/20 via-transparent to-transparent"
          aria-hidden
        />
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/projects"
            className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            ← Back to Projects
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Case Study
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {data.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {data.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" href={data.liveUrl} external>
              Live Demo
            </Button>
            {data.repoUrl && (
              <Button variant="secondary" href={data.repoUrl} external>
                GitHub
              </Button>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 ring-1 ring-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Overview */}
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {data.overview}
          </p>
        </section>

        {/* Problem Statement */}
        <section id="problem" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">
            Problem Statement
          </h2>
          <div className="mt-4 rounded-xl border border-red-500/20 bg-red-950/10 p-6">
            <p className="text-base leading-relaxed text-zinc-300">
              {data.problemStatement}
            </p>
          </div>
        </section>

        {/* Solution Architecture */}
        <section id="architecture" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">
            Solution Architecture
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {data.solutionArchitecture}
          </p>
          {data.architectureDiagram && (
            <div
              className="mt-6 rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 font-mono text-sm text-zinc-400"
              aria-label="Architecture diagram"
            >
              <pre className="overflow-x-auto whitespace-pre text-xs leading-relaxed sm:text-sm">
                {data.architectureDiagram}
              </pre>
            </div>
          )}
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {data.techStack.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-300"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                  aria-hidden
                />
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Key Features */}
        <section id="key-features" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">Key Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {data.keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-5 transition-colors hover:border-blue-500/30"
              >
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Sections */}
        {data.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mt-16 scroll-mt-24"
          >
            <h2 className="text-2xl font-semibold text-white">
              {section.title}
            </h2>
            {Array.isArray(section.content) ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-400">
                {section.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                {section.content}
              </p>
            )}
          </section>
        ))}

        {/* Challenges */}
        <section id="challenges" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">
            Challenges Faced
          </h2>
          <ul className="mt-4 space-y-3">
            {data.challenges.map((challenge, i) => (
              <li
                key={challenge}
                className="flex gap-3 rounded-lg border border-zinc-700/50 bg-zinc-800/40 p-4 text-sm leading-relaxed text-zinc-400"
              >
                <span className="shrink-0 font-semibold text-blue-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {challenge}
              </li>
            ))}
          </ul>
        </section>

        {/* Lessons Learned */}
        <section id="lessons" className="mt-16 scroll-mt-24 pb-8">
          <h2 className="text-2xl font-semibold text-white">
            Lessons Learned
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-400">
            {data.lessonsLearned.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
