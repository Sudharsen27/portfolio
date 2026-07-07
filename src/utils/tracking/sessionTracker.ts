import FingerprintJS from "@fingerprintjs/fingerprintjs";
import type {
  ClientBrowserInfo,
  ClientVisitorPayload,
  VisitorInteractionEvents,
  VisitorTrackEvent,
} from "@/src/types/visitor";
import { parseBrowserFromUserAgent } from "@/src/helpers/parseBrowser";
import { visitorDebug } from "@/src/helpers/visitorDebug";
import {
  pathnameToPageLabel,
  sectionIdToPageLabel,
} from "@/src/utils/tracking/pageLabels";
import { incrementClientVisitCount } from "@/src/utils/tracking/visitorStorage";
import { VISITOR_TRACK_EVENT } from "@/src/utils/tracking/visitorEvents";

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "focus",
  "certifications",
  "contact",
] as const;

const EMPTY_EVENTS: VisitorInteractionEvents = {
  resumeViewed: false,
  resumeDownloaded: false,
  emailClicked: false,
  linkedInClicked: false,
  githubClicked: false,
  phoneClicked: false,
  contactFormOpened: false,
  contactFormSubmitted: false,
};

export function parseBrowserInfo(): ClientBrowserInfo {
  return parseBrowserFromUserAgent(
    typeof navigator !== "undefined" ? navigator.userAgent : null
  );
}

function applyTrackEvent(
  events: VisitorInteractionEvents,
  event: VisitorTrackEvent
): void {
  switch (event) {
    case "resume_viewed":
      events.resumeViewed = true;
      break;
    case "resume_downloaded":
      events.resumeDownloaded = true;
      break;
    case "email_clicked":
      events.emailClicked = true;
      break;
    case "linkedin_clicked":
      events.linkedInClicked = true;
      break;
    case "github_clicked":
      events.githubClicked = true;
      break;
    case "phone_clicked":
      events.phoneClicked = true;
      break;
    case "contact_form_opened":
      events.contactFormOpened = true;
      break;
    case "contact_form_submitted":
      events.contactFormSubmitted = true;
      break;
  }
}

export interface SessionTracker {
  visitorId: string;
  visitNumber: number;
  isReturning: boolean;
  visitStart: Date;
  pagesViewed: Set<string>;
  pageSequence: string[];
  events: VisitorInteractionEvents;
  recordPage: (label: string) => void;
  buildPayload: () => ClientVisitorPayload;
}

export async function createSessionTracker(): Promise<SessionTracker> {
  visitorDebug("fingerprint:loading", undefined, "client");
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  const visitorId = result.visitorId;
  visitorDebug("fingerprint:ready", { visitorId }, "client");

  const { visitNumber, isReturning } = incrementClientVisitCount(visitorId);
  visitorDebug("visit:count", { visitNumber, isReturning }, "client");
  const visitStart = new Date();

  const pagesViewed = new Set<string>();
  const pageSequence: string[] = [];
  const events: VisitorInteractionEvents = { ...EMPTY_EVENTS };

  const recordPage = (label: string) => {
    pagesViewed.add(label);
    pageSequence.push(label);
  };

  recordPage(pathnameToPageLabel(window.location.pathname));

  return {
    visitorId,
    visitNumber,
    isReturning,
    visitStart,
    pagesViewed,
    pageSequence,
    events,
    recordPage,
    buildPayload(): ClientVisitorPayload {
      const visitEnd = new Date();
      const durationSeconds = Math.max(
        0,
        Math.round((visitEnd.getTime() - visitStart.getTime()) / 1000)
      );

      let timezone: string | undefined;
      try {
        timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch {
        // ignore
      }

      const language =
        navigator.language ||
        (navigator as { userLanguage?: string }).userLanguage;

      const screen =
        typeof window.screen !== "undefined"
          ? `${window.screen.width}x${window.screen.height} (inner: ${window.innerWidth}x${window.innerHeight})`
          : undefined;

      return {
        visitorId,
        visitNumber,
        isReturning,
        visitStart: visitStart.toISOString(),
        visitEnd: visitEnd.toISOString(),
        durationSeconds,
        pagesViewed: Array.from(pagesViewed),
        pageSequence: [...pageSequence],
        language,
        screen,
        timezone,
        documentReferrer: document.referrer || undefined,
        browser: parseBrowserInfo(),
        events: { ...events },
      };
    },
  };
}

export function observeSections(
  tracker: SessionTracker,
  onSection: (label: string) => void
): () => void {
  const seen = new Set<string>();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        if (!SECTION_IDS.includes(id as (typeof SECTION_IDS)[number])) continue;
        const label = sectionIdToPageLabel(id);
        if (seen.has(label)) continue;
        seen.add(label);
        tracker.recordPage(label);
        if (id === "contact") {
          applyTrackEvent(tracker.events, "contact_form_opened");
        }
        onSection(label);
      }
    },
    { threshold: 0.35 }
  );

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  }

  return () => observer.disconnect();
}

export function bindVisitorTrackEvents(
  tracker: SessionTracker
): () => void {
  const handler = (e: Event) => {
    const detail = (e as CustomEvent<{ event: VisitorTrackEvent }>).detail;
    if (detail?.event) applyTrackEvent(tracker.events, detail.event);
  };

  window.addEventListener(VISITOR_TRACK_EVENT, handler);
  return () => window.removeEventListener(VISITOR_TRACK_EVENT, handler);
}

export function sendVisitBeacon(payload: ClientVisitorPayload): void {
  const body = JSON.stringify(payload);
  visitorDebug("send:payload", payload, "client");

  void fetch("/api/notify-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  })
    .then(async (res) => {
      const data = await res.json().catch(() => ({}));
      visitorDebug("send:response", { status: res.status, data }, "client");
    })
    .catch((error) => {
      visitorDebug(
        "send:error",
        error instanceof Error ? error.message : error,
        "client"
      );
      try {
        navigator.sendBeacon(
          "/api/notify-visit",
          new Blob([body], { type: "application/json" })
        );
      } catch {
        // ignore
      }
    });
}
