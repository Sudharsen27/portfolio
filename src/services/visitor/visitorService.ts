import {
  calculateInterestScore,
  formatDuration,
  interestLevelFromScore,
} from "@/src/helpers/interestScore";
import { classifyReferrer, isAiReferrer } from "@/src/helpers/classifyReferrer";
import { classifyVisitor } from "@/src/helpers/classifyVisitor";
import { detectHumanOrBot } from "@/src/helpers/humanOrBot";
import {
  isBrowserInfoMissing,
  parseBrowserFromUserAgent,
} from "@/src/helpers/parseBrowser";
import { visitorDebug } from "@/src/helpers/visitorDebug";
import { formatLocation, resolveGeo } from "@/src/services/geo/ipwho";
import type {
  ClientVisitorPayload,
  VisitorIntelligence,
} from "@/src/types/visitor";

function buildPageFlow(sequence: string[]): string {
  const unique: string[] = [];
  for (const page of sequence) {
    if (unique[unique.length - 1] !== page) unique.push(page);
  }
  return unique.join("\n↓\n") || "—";
}

export async function buildVisitorIntelligence(
  request: Request,
  client: ClientVisitorPayload | null
): Promise<VisitorIntelligence> {
  const timestamp = new Date().toISOString();
  const serverReferrer = request.headers.get("referer");
  const documentReferrer = client?.documentReferrer ?? null;
  const primaryReferrer = documentReferrer || serverReferrer;

  const forwarded = request.headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    null;

  const userAgent = request.headers.get("user-agent");
  const acceptLanguage = request.headers.get("accept-language");

  const geo = await resolveGeo(ip, request.headers);
  visitorDebug(
    "geo:resolved",
    geo
      ? {
          city: geo.city,
          region: geo.region,
          country: geo.country,
          org: geo.organization,
          isp: geo.isp,
          source: geo.source,
        }
      : null,
    "server"
  );

  const referrerClass = classifyReferrer(primaryReferrer);
  const visitorCategory = classifyVisitor(primaryReferrer, userAgent);
  const { type: humanOrBot } = detectHumanOrBot(userAgent);

  const pagesViewed = client?.pagesViewed ?? ["Home"];
  const pageSequence = client?.pageSequence ?? pagesViewed;
  const events = client?.events ?? {
    resumeViewed: false,
    resumeDownloaded: false,
    emailClicked: false,
    linkedInClicked: false,
    githubClicked: false,
    phoneClicked: false,
    contactFormOpened: false,
    contactFormSubmitted: false,
  };

  const durationSeconds = client?.durationSeconds ?? 0;
  const interestScore = calculateInterestScore({
    pagesViewed,
    durationSeconds,
    events,
  });

  let browser = client?.browser ?? parseBrowserFromUserAgent(userAgent);
  if (isBrowserInfoMissing(browser)) {
    browser = parseBrowserFromUserAgent(userAgent);
  }

  return {
    timestamp,
    visitorId: client?.visitorId ?? "unknown",
    visitNumber: client?.visitNumber ?? 1,
    isReturning: client?.isReturning ?? false,
    visitStart: client?.visitStart ?? timestamp,
    visitEnd: client?.visitEnd ?? timestamp,
    durationSeconds,
    durationLabel: formatDuration(durationSeconds),
    pagesViewed,
    pageSequence,
    pageFlow: buildPageFlow(pageSequence),
    visitorCategory,
    referrerClass,
    humanOrBot,
    isAiReferral: isAiReferrer(referrerClass),
    interestScore,
    interestLevel: interestLevelFromScore(interestScore),
    location: formatLocation(geo),
    geo,
    ip,
    browser,
    language:
      client?.language || acceptLanguage?.split(",")[0]?.trim() || "—",
    screen: client?.screen,
    clientTimezone: client?.timezone,
    serverReferrer,
    documentReferrer,
    events,
    userAgent,
  };
}
