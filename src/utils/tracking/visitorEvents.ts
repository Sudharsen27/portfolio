import type { VisitorTrackEvent } from "@/src/types/visitor";

export const VISITOR_TRACK_EVENT = "portfolio-visitor-track";

/** Dispatch a visitor interaction event consumed by VisitNotifier. */
export function trackVisitorEvent(event: VisitorTrackEvent): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(VISITOR_TRACK_EVENT, { detail: { event } })
  );
}
