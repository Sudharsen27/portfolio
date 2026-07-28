import Link from "next/link";
import type { CaseStudyData } from "@/src/types";
import { Button } from "@/src/components/ui/Button";

interface CaseStudyLayoutProps {
  data: CaseStudyData;
}

export function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  const problemTitle = data.problemSectionTitle ?? "Problem Statement";
  const architectureTitle =
    data.architectureSectionTitle ?? "Solution Architecture";
  const challengesTitle = data.challengesSectionTitle ?? "Challenges Faced";
  const lessonsTitle = data.lessonsSectionTitle ?? "Lessons Learned";
  const repoLabel = data.repoButtonLabel ?? "GitHub";
  const showLiveDemo = Boolean(data.liveUrl && !data.hideLiveDemo);

  return (
    <article className="min-h-screen bg-zinc-900 text-zinc-200">
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
            {showLiveDemo && (
              <Button variant="primary" href={data.liveUrl!} external>
                Live Demo
              </Button>
            )}
            {data.repoUrl && (
              <Button
                variant={showLiveDemo ? "secondary" : "primary"}
                href={data.repoUrl}
                external
              >
                {repoLabel}
              </Button>
            )}
            {data.architectureDiagram && (
              <Button variant="secondary" href="#architecture">
                Architecture
              </Button>
            )}
            <Button variant="secondary" href="#overview">
              Case Study
            </Button>
          </div>
          {data.deploymentBadges && data.deploymentBadges.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {data.deploymentBadges.map((badge) => (
                <span
                  key={badge}
                  className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${
                    badge === "Production Live"
                      ? "bg-emerald-500/20 text-emerald-400 ring-emerald-500/30"
                      : "bg-blue-500/10 text-blue-300 ring-blue-500/20"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
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

      <div className="mx-auto max-w-4xl px-4 py-16 pb-24">
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {data.overview}
          </p>
          {data.overviewExtended && (
            <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-400">
              {data.overviewExtended.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          )}
        </section>

        <section id="problem" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">{problemTitle}</h2>
          <div className="mt-4 rounded-xl border border-red-500/20 bg-red-950/10 p-6">
            <p className="text-base leading-relaxed text-zinc-300">
              {data.problemStatement}
            </p>
            {data.problemStatementExtended && (
              <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-300">
                {data.problemStatementExtended.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </section>

        {data.productionDeployment && data.productionDeployment.length > 0 && (
          <section id="production-deployment" className="mt-16 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">
              Production Deployment
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {data.productionDeployment.map((group) => (
                <div
                  key={group.label}
                  className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-5"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    {group.label}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-zinc-300"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {data.hostingStatus && (
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5 sm:col-span-2">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                      {data.hostingStatus.label}
                    </h3>
                    {data.hostingStatus.isLive && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 ring-1 ring-emerald-500/30">
                        <span
                          className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
                          aria-hidden
                        />
                        LIVE
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm font-medium text-zinc-200">
                    {data.hostingStatus.value}
                  </p>
                </div>
              )}
              {data.productionUrl && (
                <div className="rounded-xl border border-zinc-700/50 bg-zinc-950/70 p-5 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Production URL
                  </p>
                  <a
                    href={data.productionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-3 font-mono text-sm text-emerald-400 transition-colors hover:border-emerald-500/40 hover:text-emerald-300"
                  >
                    {data.productionUrl}
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        <section id="architecture" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">
            {architectureTitle}
          </h2>
          {!data.hideSolutionArchitectureText && data.solutionArchitecture && (
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              {data.solutionArchitecture}
            </p>
          )}
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
          {data.architectureNote && (
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              {data.architectureNote}
            </p>
          )}
        </section>

        <section id="tech-stack" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">
            Technology Stack
          </h2>
          {data.techStackCategories ? (
            <div className="mt-6 space-y-6">
              {data.techStackCategories.map((category) => (
                <div key={category.label}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    {category.label}
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {category.items.map((tech) => (
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
                </div>
              ))}
            </div>
          ) : (
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
          )}
        </section>

        <section id="key-features" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">Key Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {data.keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-5 transition-colors hover:border-blue-500/30"
              >
                <h3 className="font-semibold text-white">{feature.title}</h3>
                {feature.items ? (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-400">
                    {feature.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : feature.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

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
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-zinc-400">
                {section.content.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-zinc-700/50 bg-zinc-800/40 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                {section.content}
              </p>
            )}
          </section>
        ))}

        <section id="challenges" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">
            {challengesTitle}
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

        <section id="lessons" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">{lessonsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-400">
            {data.lessonsLearned.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </section>

        {data.projectStatus && data.projectStatus.length > 0 && (
          <section id="project-status" className="mt-16 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">Project Status</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.projectStatus.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/40 px-4 py-3"
                >
                  <span className="text-sm text-zinc-400">{item.label}</span>
                  {item.highlight ? (
                    <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/30">
                      {item.value}
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-zinc-200">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
