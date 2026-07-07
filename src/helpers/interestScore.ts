import type { InterestLevel, VisitorInteractionEvents } from "@/src/types/visitor";

const SCORE_CAP = 10;

interface InterestInput {
  pagesViewed: string[];
  durationSeconds: number;
  events: VisitorInteractionEvents;
}

function hasPage(pages: string[], matchers: string[]): boolean {
  const normalized = pages.map((p) => p.toLowerCase());
  return matchers.some((m) =>
    normalized.some((p) => p.includes(m.toLowerCase()))
  );
}

/** Score visitor engagement from page views, actions, and time on site. */
export function calculateInterestScore(input: InterestInput): number {
  let score = 0;
  const { pagesViewed, durationSeconds, events } = input;

  if (hasPage(pagesViewed, ["home"])) score += 1;
  if (hasPage(pagesViewed, ["projects", "case study"])) score += 2;
  if (hasPage(pagesViewed, ["experience"])) score += 2;
  if (hasPage(pagesViewed, ["contact"])) score += 4;
  if (events.resumeViewed) score += 3;
  if (events.resumeDownloaded) score += 5;
  if (events.contactFormSubmitted) score += 5;
  if (durationSeconds > 120) score += 2;

  return Math.min(score, SCORE_CAP);
}

export function interestLevelFromScore(score: number): InterestLevel {
  if (score >= 9) return "Very High";
  if (score >= 6) return "High";
  if (score >= 3) return "Medium";
  return "Low";
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins < 60) return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
  const hours = Math.floor(mins / 60);
  const remainMins = mins % 60;
  return `${hours}h ${remainMins}m`;
}
