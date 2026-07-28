"use client";

import { restaurantErpArchitecture } from "@/src/data/restaurant-erp-case-study";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

function FlowNode({
  label,
  sub,
  delay,
  accent = false,
}: {
  label: string;
  sub: string;
  delay: number;
  accent?: boolean;
}) {
  return (
    <div
      className={`erp-arch-node relative w-full max-w-[280px] rounded-xl border p-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        accent
          ? "border-blue-500/40 bg-blue-950/40 shadow-blue-500/10 hover:border-blue-400/60 hover:shadow-blue-500/20"
          : "border-zinc-700/60 bg-zinc-900/70 hover:border-zinc-500/60 hover:shadow-blue-500/10"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span
        className={`absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full ${
          accent ? "bg-blue-400 erp-node-pulse" : "bg-emerald-400/80"
        }`}
        aria-hidden
      />
      <p className="text-sm font-semibold text-white">{label}</p>
      <p className="mt-1 text-xs text-zinc-400">{sub}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <div className="h-6 w-px bg-gradient-to-b from-blue-500/80 to-blue-400/20" />
      <div className="h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-blue-400/70" />
    </div>
  );
}

export function ErpArchitectureDiagram() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const { primaryFlow, lanes, note } = restaurantErpArchitecture;

  return (
    <div ref={ref} style={fadeInUpStyle(inView)}>
      <div className="relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-blue-950/20 p-6 sm:p-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        >
          <div className="erp-grid absolute inset-0" />
          <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                AWS Enterprise Topology
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                Cloud-native request path from edge to data tier
              </p>
            </div>
            <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-300 ring-1 ring-orange-500/30">
              AWS Architecture
            </span>
          </div>

          <div className="flex flex-col items-center">
            {primaryFlow.map((node, i) => (
              <div key={node.id} className="flex w-full flex-col items-center">
                <FlowNode
                  label={node.label}
                  sub={node.sub}
                  delay={i * 80}
                  accent={
                    node.id === "ecs" ||
                    node.id === "fastapi" ||
                    node.id === "rds"
                  }
                />
                {i < primaryFlow.length - 1 && <FlowArrow />}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lanes.map((lane, laneIndex) => (
              <div
                key={lane.title}
                className="rounded-xl border border-zinc-700/50 bg-zinc-950/50 p-4 backdrop-blur-sm transition-colors hover:border-blue-500/30"
                style={fadeInUpStyle(inView, 200 + laneIndex * 70)}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {lane.title}
                </p>
                <div className="mt-3 space-y-2">
                  {lane.nodes.map((node) => (
                    <div
                      key={node.label}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2.5"
                    >
                      <p className="text-sm font-medium text-zinc-100">
                        {node.label}
                      </p>
                      <p className="text-xs text-zinc-500">{node.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
        {note.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
