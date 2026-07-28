"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";
import {
  RESTAURANT_ERP_LIVE_URL,
  RESTAURANT_ERP_REPO_URL,
  restaurantErpHero,
  restaurantErpOverview,
  restaurantErpProblem,
  restaurantErpSolutions,
  restaurantErpDemo,
  restaurantErpFeatures,
  restaurantErpTechStack,
  restaurantErpChallenges,
  restaurantErpLessons,
  restaurantErpStatus,
  restaurantErpMetrics,
} from "@/src/data/restaurant-erp-case-study";
import { ErpStickyNav } from "./ErpStickyNav";
import { ErpArchitectureDiagram } from "./ErpArchitectureDiagram";

function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });
  return (
    <div ref={ref} className={className} style={fadeInUpStyle(inView, delay)}>
      {children}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-zinc-700/50 bg-zinc-800/30 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:bg-zinc-800/50 ${className}`}
    >
      {children}
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="erp-dashboard relative overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-950/80 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/5" aria-hidden />
      <div className="relative flex items-center gap-2 border-b border-zinc-800 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs font-medium text-zinc-500">
          Executive Dashboard · Multi-location
        </span>
      </div>
      <div className="relative mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {[
          { label: "Revenue", value: "$128K", tone: "text-emerald-400" },
          { label: "Branches", value: "12", tone: "text-blue-400" },
          { label: "Orders", value: "4.2K", tone: "text-cyan-300" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-2.5 sm:p-3"
          >
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
              {kpi.label}
            </p>
            <p className={`mt-1 text-sm font-semibold sm:text-lg ${kpi.tone}`}>
              {kpi.value}
            </p>
          </div>
        ))}
      </div>
      <div className="relative mt-3 grid grid-cols-4 gap-1.5 sm:mt-4 sm:gap-2">
        {[40, 65, 48, 80, 55, 72, 60, 88].map((h, i) => (
          <div
            key={i}
            className="flex h-16 items-end rounded-md bg-zinc-900/60 sm:h-20"
          >
            <div
              className="w-full rounded-sm bg-gradient-to-t from-blue-600/80 to-blue-400/50 erp-bar"
              style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
            />
          </div>
        ))}
      </div>
      <div className="relative mt-3 flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2">
        <span className="text-xs text-zinc-400">Inventory health</span>
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400 ring-1 ring-emerald-500/30">
          Optimal
        </span>
      </div>
    </div>
  );
}

export function RestaurantErpCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-900 text-zinc-200">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-zinc-800 pt-24 pb-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-zinc-900 to-zinc-900" />
          <div className="erp-cloud absolute left-[8%] top-28 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="erp-cloud-slow absolute right-[12%] top-40 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="erp-cloud absolute bottom-10 left-[35%] h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="erp-grid absolute inset-0 opacity-30" />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/projects"
            className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            ← Back to Projects
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300 ring-1 ring-blue-500/25">
                  Enterprise Case Study
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-400 ring-1 ring-emerald-500/30">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Production Ready
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                {restaurantErpHero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {restaurantErpHero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" href={RESTAURANT_ERP_LIVE_URL} external>
                  Live Demo
                </Button>
                <Button
                  variant="secondary"
                  href={RESTAURANT_ERP_REPO_URL}
                  external
                >
                  GitHub Repository
                </Button>
                <Button variant="secondary" href="#architecture">
                  Architecture
                </Button>
                <Button variant="secondary" href="#overview">
                  Case Study
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {restaurantErpHero.floatingBadges.map((badge, i) => (
                  <span
                    key={badge}
                    className="erp-float-badge rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/10 blur-2xl"
                aria-hidden
              />
              <DashboardPreview />

              {/* Floating architecture nodes */}
              <div className="erp-float-badge absolute -left-2 top-8 hidden rounded-lg border border-zinc-700/70 bg-zinc-900/80 px-3 py-2 text-xs text-zinc-300 shadow-xl backdrop-blur-md sm:block">
                <span className="mb-1 block text-[10px] uppercase tracking-wider text-blue-400">
                  Edge
                </span>
                CloudFront
              </div>
              <div
                className="erp-float-badge absolute -right-1 bottom-16 hidden rounded-lg border border-orange-500/30 bg-zinc-900/80 px-3 py-2 text-xs text-zinc-300 shadow-xl backdrop-blur-md sm:block"
                style={{ animationDelay: "1.2s" }}
              >
                <span className="mb-1 block text-[10px] uppercase tracking-wider text-orange-300">
                  Compute
                </span>
                ECS Fargate
              </div>
              <div
                className="erp-float-badge absolute bottom-2 left-6 hidden rounded-lg border border-emerald-500/30 bg-zinc-900/80 px-3 py-2 text-xs text-zinc-300 shadow-xl backdrop-blur-md md:block"
                style={{ animationDelay: "0.7s" }}
              >
                <span className="mb-1 block text-[10px] uppercase tracking-wider text-emerald-400">
                  Data
                </span>
                RDS + Redis
              </div>
            </div>
          </div>
        </div>
      </header>

      <ErpStickyNav />

      <div className="mx-auto max-w-6xl px-4 py-16 pb-28">
        {/* Overview */}
        <section id="overview" className="scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Overview
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Enterprise operations, unified
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
              {restaurantErpOverview.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* Problem */}
        <section id="problem" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              {restaurantErpProblem.title}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Fragmented tools create operational drag
            </h2>
            <div className="mt-6 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-950/20 to-zinc-900/40 p-6 sm:p-8">
              <div className="space-y-4 text-base leading-relaxed text-zinc-300">
                {restaurantErpProblem.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* Solution */}
        <section id="solution" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Solution
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              One platform for every core workflow
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {restaurantErpSolutions.map((item, i) => (
                <GlassCard key={item} className="group">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-xs font-semibold text-blue-400 ring-1 ring-blue-500/25 transition-colors group-hover:bg-blue-500/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium text-zinc-200">{item}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* Live Demonstration */}
        <section id="demo" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              {restaurantErpDemo.title}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Access the public demonstration
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
              {restaurantErpDemo.description}
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-blue-950/20 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Public Demo", value: "Frontend", detail: restaurantErpDemo.frontend },
                  { label: "API Layer", value: "Backend", detail: restaurantErpDemo.backend },
                  { label: "Data Store", value: "Database", detail: restaurantErpDemo.database },
                  { label: "Status", value: restaurantErpDemo.status, detail: "Accessible now" },
                ].map((card) => (
                  <GlassCard key={card.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {card.label}
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">{card.value}</p>
                    <p className="mt-1 text-base font-semibold text-white">
                      {card.detail}
                    </p>
                  </GlassCard>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 ring-1 ring-emerald-500/30">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  LIVE
                </span>
                <Button variant="primary" href={restaurantErpDemo.url} external>
                  Open Live Demo
                </Button>
              </div>

              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Live Demo URL
                </p>
                <a
                  href={restaurantErpDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block overflow-x-auto font-mono text-sm text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  {restaurantErpDemo.url}
                </a>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* Architecture — highlight */}
        <section id="architecture" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Enterprise Cloud Architecture
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Designed for AWS-scale production workloads
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
              The enterprise deployment architecture centers on Dockerized
              services running on Amazon ECS with managed data services,
              secure networking, and Infrastructure as Code.
            </p>
            <div className="mt-8">
              <ErpArchitectureDiagram />
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Architecture Timeline
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-4">
                {[
                  {
                    step: "01",
                    title: "Containerize",
                    detail: "Docker images for FastAPI services",
                  },
                  {
                    step: "02",
                    title: "Provision",
                    detail: "AWS CDK → CloudFormation stacks",
                  },
                  {
                    step: "03",
                    title: "Orchestrate",
                    detail: "ECS Fargate + RDS + Redis",
                  },
                  {
                    step: "04",
                    title: "Demonstrate",
                    detail: "Public live demo environment",
                  },
                ].map((item) => (
                  <div key={item.step} className="relative">
                    <p className="text-xs font-semibold text-blue-400">
                      {item.step}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Technology Stack
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Full-stack cloud-native tooling
            </h2>
            <div className="mt-8 space-y-6">
              {restaurantErpTechStack.map((category) => (
                <div key={category.label}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    {category.label}
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-blue-500/30"
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
          </SectionReveal>
        </section>

        {/* Features */}
        <section id="features" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Key Features
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Built for real restaurant operations
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {restaurantErpFeatures.map((feature) => (
                <GlassCard key={feature} className="min-h-[72px]">
                  <p className="font-medium text-white">{feature}</p>
                </GlassCard>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* Metrics */}
        <section id="metrics" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Project Metrics
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Engineering footprint at a glance
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {restaurantErpMetrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-800/30 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {metric.label}
                  </p>
                  <p
                    className="mt-3 text-lg font-semibold text-white erp-metric"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* Challenges */}
        <section id="challenges" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Technical Challenges
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Hard problems solved end-to-end
            </h2>
            <ul className="mt-8 space-y-3">
              {restaurantErpChallenges.map((challenge, i) => (
                <li
                  key={challenge}
                  className="flex gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-4 text-sm leading-relaxed text-zinc-400 transition-colors hover:border-blue-500/30"
                >
                  <span className="shrink-0 font-semibold text-blue-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </SectionReveal>
        </section>

        {/* Lessons */}
        <section id="lessons" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              What I Learned
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Capabilities sharpened on this build
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {restaurantErpLessons.map((lesson) => (
                <span
                  key={lesson}
                  className="rounded-full border border-zinc-700/60 bg-zinc-800/50 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-blue-500/40 hover:text-white"
                >
                  {lesson}
                </span>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* Status */}
        <section id="status" className="mt-20 scroll-mt-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Project Status
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Delivery readiness
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {restaurantErpStatus.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/40 px-4 py-3.5"
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

            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" href={RESTAURANT_ERP_LIVE_URL} external>
                Live Demo
              </Button>
              <Button
                variant="secondary"
                href={RESTAURANT_ERP_REPO_URL}
                external
              >
                GitHub Repository
              </Button>
              <Button variant="secondary" href="#architecture">
                View Architecture
              </Button>
            </div>
          </SectionReveal>
        </section>
      </div>
    </article>
  );
}
