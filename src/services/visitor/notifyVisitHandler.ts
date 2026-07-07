import { sendVisitorNotification } from "@/src/services/visitor/sendNotification";
import { buildVisitorIntelligence } from "@/src/services/visitor/visitorService";
import {
  mergeVisitorPersistence,
  persistVisitorVisit,
} from "@/src/services/visitor/visitorStorage";
import { formatVisitorEmail } from "@/src/services/email/visitorEmailFormatter";
import { parseRequestBody } from "@/src/helpers/parseRequestBody";
import { visitorDebug } from "@/src/helpers/visitorDebug";
import type { ClientVisitorPayload } from "@/src/types/visitor";

function parseClientPayload(body: unknown): ClientVisitorPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;

  if (typeof b.visitorId !== "string" || !b.visitorId) return null;

  const browser =
    b.browser && typeof b.browser === "object"
      ? (b.browser as ClientVisitorPayload["browser"])
      : {
          browser: "Unknown",
          browserVersion: "",
          os: "Unknown",
          deviceType: "desktop",
        };

  const events =
    b.events && typeof b.events === "object"
      ? (b.events as ClientVisitorPayload["events"])
      : {
          resumeViewed: false,
          resumeDownloaded: false,
          emailClicked: false,
          linkedInClicked: false,
          githubClicked: false,
          phoneClicked: false,
          contactFormOpened: false,
          contactFormSubmitted: false,
        };

  return {
    visitorId: b.visitorId,
    visitNumber: typeof b.visitNumber === "number" ? b.visitNumber : 1,
    isReturning: Boolean(b.isReturning),
    visitStart: typeof b.visitStart === "string" ? b.visitStart : new Date().toISOString(),
    visitEnd: typeof b.visitEnd === "string" ? b.visitEnd : new Date().toISOString(),
    durationSeconds:
      typeof b.durationSeconds === "number" ? b.durationSeconds : 0,
    pagesViewed: Array.isArray(b.pagesViewed)
      ? b.pagesViewed.filter((p): p is string => typeof p === "string")
      : ["Home"],
    pageSequence: Array.isArray(b.pageSequence)
      ? b.pageSequence.filter((p): p is string => typeof p === "string")
      : ["Home"],
    language: typeof b.language === "string" ? b.language : undefined,
    screen: typeof b.screen === "string" ? b.screen : undefined,
    timezone: typeof b.timezone === "string" ? b.timezone : undefined,
    documentReferrer:
      typeof b.documentReferrer === "string" ? b.documentReferrer : undefined,
    browser,
    events,
  };
}

/** Legacy minimal payload support for backward compatibility. */
function legacyPayload(body: unknown): ClientVisitorPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  if (b.visitorId) return null;

  const now = new Date().toISOString();
  return {
    visitorId: "legacy-session",
    visitNumber: 1,
    isReturning: false,
    visitStart: now,
    visitEnd: now,
    durationSeconds: 0,
    pagesViewed: ["Home"],
    pageSequence: ["Home"],
    language: typeof b.language === "string" ? b.language : undefined,
    screen: typeof b.screen === "string" ? b.screen : undefined,
    timezone: typeof b.timezone === "string" ? b.timezone : undefined,
    browser: {
      browser: "Unknown",
      browserVersion: "",
      os: "Unknown",
      deviceType: "desktop",
    },
    events: {
      resumeViewed: false,
      resumeDownloaded: false,
      emailClicked: false,
      linkedInClicked: false,
      githubClicked: false,
      phoneClicked: false,
      contactFormOpened: false,
      contactFormSubmitted: false,
    },
  };
}

export async function processVisitNotification(request: Request) {
  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
  const emailTo = process.env.NOTIFY_EMAIL_TO;
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.NOTIFY_FROM_EMAIL || "onboarding@resend.dev";

  const isConfigured = Boolean(webhookUrl) || Boolean(emailTo && resendKey);
  if (!isConfigured) {
    return {
      status: 200 as const,
      body: {
        ok: false,
        skipped: true,
        error:
          "Missing notification configuration. Set NOTIFY_WEBHOOK_URL or (NOTIFY_EMAIL_TO + RESEND_API_KEY).",
        missing: {
          NOTIFY_WEBHOOK_URL: !webhookUrl,
          NOTIFY_EMAIL_TO: !emailTo,
          RESEND_API_KEY: !resendKey,
        },
      },
    };
  }

  let rawBody: unknown = {};
  try {
    rawBody = await parseRequestBody(request);
  } catch {
    rawBody = {};
  }

  visitorDebug("body:parsed", rawBody, "server");

  let client = parseClientPayload(rawBody) ?? legacyPayload(rawBody);

  visitorDebug(
    "client:resolved",
    client
      ? {
          visitorId: client.visitorId,
          visitNumber: client.visitNumber,
          pages: client.pagesViewed,
          browser: client.browser,
          durationSeconds: client.durationSeconds,
        }
      : null,
    "server"
  );

  if (client && client.visitorId !== "legacy-session") {
    const persisted = await persistVisitorVisit(
      client.visitorId,
      client.visitNumber
    );
    client = mergeVisitorPersistence(client, persisted);
  }

  const intelligence = await buildVisitorIntelligence(request, client);
  visitorDebug(
    "intelligence:built",
    {
      visitorId: intelligence.visitorId,
      category: intelligence.visitorCategory,
      location: intelligence.location,
      org: intelligence.geo?.organization,
      isp: intelligence.geo?.isp,
      browser: intelligence.browser,
      interestScore: intelligence.interestScore,
    },
    "server"
  );

  const email = formatVisitorEmail(intelligence);
  visitorDebug(
    "email:formatted",
    { subject: email.subject, textLines: email.text.split("\n").length },
    "server"
  );

  const result = await sendVisitorNotification({
    webhookUrl,
    emailTo,
    resendKey,
    fromEmail,
    email,
  });

  return {
    status: 200 as const,
    body: result,
  };
}
