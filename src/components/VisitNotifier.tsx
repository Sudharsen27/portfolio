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
import { visitorDebug } from "@/src/helpers/visitorDebug";

const STORAGE_KEY = "portfolio_visit_notified";

/**
 * Collects visitor intelligence during a session and sends one enriched
 * notification when the visitor leaves (preserves single-email-per-session behavior).
 */
export function VisitNotifier() {
  const pathname = usePathname();
  const trackerRef = useRef<SessionTracker | null>(null);
  const sentRef = useRef(false);
  const pendingSendRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) {
      visitorDebug("session:skipped", "already notified this session", "client");
      return;
    }

    let disposed = false;
    let unbindEvents: (() => void) | undefined;
    let unobserveSections: (() => void) | undefined;

    const sendOnce = (tracker?: SessionTracker | null) => {
      if (sentRef.current || sessionStorage.getItem(STORAGE_KEY)) return;

      const activeTracker = tracker ?? trackerRef.current;
      if (!activeTracker) {
        pendingSendRef.current = true;
        visitorDebug("send:deferred", "tracker not ready yet", "client");
        return;
      }

      sentRef.current = true;
      pendingSendRef.current = false;
      sessionStorage.setItem(STORAGE_KEY, "1");

      const payload = activeTracker.buildPayload();
      visitorDebug("send:dispatch", payload, "client");
      sendVisitBeacon(payload);
    };

    void createSessionTracker()
      .then((tracker) => {
        trackerRef.current = tracker;
        visitorDebug("tracker:ready", { visitorId: tracker.visitorId }, "client");

        if (!disposed) {
          unbindEvents = bindVisitorTrackEvents(tracker);
          unobserveSections = observeSections(tracker, () => {});
        }

        if (pendingSendRef.current || disposed) {
          sendOnce(tracker);
        }
      })
      .catch((error) => {
        visitorDebug(
          "tracker:error",
          error instanceof Error ? error.message : error,
          "client"
        );
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
    const label = pathnameToPageLabel(pathname);
    tracker.recordPage(label);
    visitorDebug("page:recorded", label, "client");
  }, [pathname]);

  return null;
}
