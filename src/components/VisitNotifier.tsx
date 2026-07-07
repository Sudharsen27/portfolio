"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  bindVisitorTrackEvents,
  createSessionTracker,
  observeSections,
  sendVisitBeacon,
  type SessionTracker,
} from "@/src/utils/tracking/sessionTracker";
import { pathnameToPageLabel } from "@/src/utils/tracking/pageLabels";

const STORAGE_KEY = "portfolio_visit_notified";

/**
 * Collects visitor intelligence during a session and sends one enriched
 * notification when the visitor leaves (preserves single-email-per-session behavior).
 */
export function VisitNotifier() {
  const pathname = usePathname();
  const trackerRef = useRef<SessionTracker | null>(null);
  const sentRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let disposed = false;
    let unbindEvents: (() => void) | undefined;
    let unobserveSections: (() => void) | undefined;
    let pendingSend = false;

    const sendOnce = () => {
      if (sentRef.current || sessionStorage.getItem(STORAGE_KEY)) return;
      const tracker = trackerRef.current;
      if (!tracker) {
        pendingSend = true;
        return;
      }

      sentRef.current = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      sendVisitBeacon(tracker.buildPayload());
    };

    void createSessionTracker().then((tracker) => {
      if (disposed) return;
      trackerRef.current = tracker;
      unbindEvents = bindVisitorTrackEvents(tracker);
      unobserveSections = observeSections(tracker, () => {});
      if (pendingSend) sendOnce();
    });

    const onHide = () => {
      if (document.visibilityState === "hidden") sendOnce();
    };

    const onPageHide = () => sendOnce();

    const fallbackTimer = window.setTimeout(() => sendOnce(), 90_000);

    window.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      disposed = true;
      window.clearTimeout(fallbackTimer);
      unbindEvents?.();
      unobserveSections?.();
      window.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", onPageHide);
      sendOnce();
    };
  }, []);

  useEffect(() => {
    const tracker = trackerRef.current;
    if (!tracker) return;
    tracker.recordPage(pathnameToPageLabel(pathname));
  }, [pathname]);

  return null;
}
