import type { VisitorIntelligence } from "@/src/types/visitor";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function yesNo(value: boolean): string {
  return value ? "Yes" : "No";
}

function card(title: string, rows: [string, string][]): string {
  const body = rows
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding:8px 12px 8px 0;color:#94a3b8;font-size:13px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 0;color:#e2e8f0;font-size:14px;vertical-align:top;">${value}</td>
    </tr>`
    )
    .join("");

  return `
  <div style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:16px 18px;margin-bottom:16px;">
    <h3 style="margin:0 0 12px 0;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#60a5fa;">${escapeHtml(title)}</h3>
    <table role="presentation" style="width:100%;border-collapse:collapse;">${body}</table>
  </div>`;
}

function badge(text: string, color: string): string {
  return `<span style="display:inline-block;padding:4px 10px;border-radius:999px;background:${color};color:#f8fafc;font-size:12px;font-weight:600;">${escapeHtml(text)}</span>`;
}

function interestColor(level: string): string {
  switch (level) {
    case "Very High":
      return "#7c3aed";
    case "High":
      return "#2563eb";
    case "Medium":
      return "#0891b2";
    default:
      return "#475569";
  }
}

function contactClicked(data: VisitorIntelligence): boolean {
  const e = data.events;
  return (
    e.emailClicked ||
    e.linkedInClicked ||
    e.githubClicked ||
    e.phoneClicked
  );
}

export function formatVisitorEmail(data: VisitorIntelligence): {
  subject: string;
  text: string;
  html: string;
} {
  const subject = `🚀 Portfolio Visitor — ${data.visitorCategory} (${data.interestLevel} interest)`;

  const text = [
    "🚀 New Portfolio Visitor",
    "",
    `Visitor Type: ${data.visitorCategory}`,
    `Visitor ID: ${data.visitorId}`,
    `Visit #: ${data.visitNumber}`,
    `Returning Visitor: ${data.isReturning ? "Yes" : "No"}`,
    "",
    `Location: ${data.location}`,
    `Organization: ${data.geo?.organization || "—"}`,
    `ISP: ${data.geo?.isp || "—"}`,
    `Connection: ${data.geo?.connectionType || "—"}`,
    "",
    `Browser: ${data.browser.browser} ${data.browser.browserVersion}`.trim(),
    `OS: ${data.browser.os}`,
    `Device: ${data.browser.deviceType}`,
    `Timezone: ${data.clientTimezone || data.geo?.timezone || "—"}`,
    `Language: ${data.language}`,
    "",
    `Referrer: ${data.referrerClass}`,
    `Bot/Human: ${data.humanOrBot}`,
    `AI Referral: ${data.isAiReferral ? "Yes" : "No"}`,
    "",
    `Pages Viewed: ${data.pagesViewed.join(" → ")}`,
    `Visit Duration: ${data.durationLabel}`,
    "",
    `Resume Viewed: ${yesNo(data.events.resumeViewed)}`,
    `Resume Downloaded: ${yesNo(data.events.resumeDownloaded)}`,
    `Email Clicked: ${yesNo(data.events.emailClicked)}`,
    `LinkedIn Clicked: ${yesNo(data.events.linkedInClicked)}`,
    `GitHub Clicked: ${yesNo(data.events.githubClicked)}`,
    `Phone Clicked: ${yesNo(data.events.phoneClicked)}`,
    `Contact Clicked: ${yesNo(contactClicked(data))}`,
    `Contact Opened: ${yesNo(data.events.contactFormOpened)}`,
  ].join("\n");

  const mapLink =
    data.geo?.latitude != null && data.geo?.longitude != null
      ? `<a href="https://www.google.com/maps?q=${data.geo.latitude},${data.geo.longitude}" style="color:#60a5fa;">View on map</a>`
      : "—";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:24px 12px;background:#0f172a;font-family:Inter,Segoe UI,system-ui,sans-serif;color:#e2e8f0;">
  <div style="max-width:640px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:28px;margin-bottom:8px;">🚀</div>
      <h1 style="margin:0 0 8px 0;font-size:24px;color:#f8fafc;">New Portfolio Visitor</h1>
      <p style="margin:0;color:#94a3b8;font-size:14px;">${escapeHtml(new Date(data.timestamp).toUTCString())}</p>
      <div style="margin-top:14px;display:flex;flex-wrap:wrap;gap:8px;justify-content:center;">
        ${badge(data.visitorCategory, "#1d4ed8")}
        ${badge(data.interestLevel + " Interest", interestColor(data.interestLevel))}
        ${badge(data.humanOrBot, data.humanOrBot === "Bot" ? "#b45309" : "#047857")}
        ${data.isAiReferral ? badge("AI Referral", "#6d28d9") : ""}
      </div>
    </div>

    ${card("Visitor", [
      ["Visitor ID", `<code style="color:#93c5fd;font-size:12px;">${escapeHtml(data.visitorId)}</code>`],
      ["Visit #", String(data.visitNumber)],
      ["Returning", data.isReturning ? "✅ Yes" : "No"],
      ["Interest Score", `${data.interestScore}/10`],
    ])}

    ${card("Location & Network", [
      ["City", escapeHtml(data.geo?.city || "—")],
      ["Region", escapeHtml(data.geo?.region || "—")],
      ["Country", escapeHtml(data.geo?.country || "—")],
      ["Full Location", `<strong>${escapeHtml(data.location)}</strong>`],
      ["Organization", escapeHtml(data.geo?.organization || "—")],
      ["ISP", escapeHtml(data.geo?.isp || "—")],
      ["Connection", escapeHtml(data.geo?.connectionType || "—")],
      ["Map", mapLink],
      ["IP", escapeHtml(data.ip || "Unknown")],
    ])}

    ${card("Device & Browser", [
      ["Browser", escapeHtml(data.browser.browser)],
      ["Browser Version", escapeHtml(data.browser.browserVersion || "—")],
      ["OS", escapeHtml(data.browser.os)],
      ["Device", escapeHtml(data.browser.deviceType)],
      ["CPU", escapeHtml(data.browser.cpuArchitecture || "—")],
      ["Language", escapeHtml(data.language)],
      ["Timezone", escapeHtml(data.clientTimezone || data.geo?.timezone || "—")],
      ["Screen", escapeHtml(data.screen || "—")],
    ])}

    ${card("Traffic Source", [
      ["Referrer", escapeHtml(data.referrerClass)],
      ["Document Referrer", escapeHtml(data.documentReferrer || "Direct")],
      ["Server Referrer", escapeHtml(data.serverReferrer || "—")],
      ["AI Referral", data.isAiReferral ? "Yes" : "No"],
    ])}

    ${card("Session Timeline", [
      ["Started", escapeHtml(new Date(data.visitStart).toUTCString())],
      ["Ended", escapeHtml(new Date(data.visitEnd).toUTCString())],
      ["Duration", escapeHtml(data.durationLabel)],
      ["Pages", escapeHtml(data.pagesViewed.join(", "))],
    ])}

    <div style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:16px 18px;margin-bottom:16px;">
      <h3 style="margin:0 0 12px 0;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#60a5fa;">Page Flow</h3>
      <pre style="margin:0;white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace;font-size:13px;line-height:1.6;color:#cbd5e1;">${escapeHtml(data.pageFlow)}</pre>
    </div>

    ${card("Engagement", [
      ["Resume Viewed", yesNo(data.events.resumeViewed)],
      ["Resume Downloaded", yesNo(data.events.resumeDownloaded)],
      ["Contact Clicked", yesNo(contactClicked(data))],
      ["Email Clicked", yesNo(data.events.emailClicked)],
      ["LinkedIn Clicked", yesNo(data.events.linkedInClicked)],
      ["GitHub Clicked", yesNo(data.events.githubClicked)],
      ["Phone Clicked", yesNo(data.events.phoneClicked)],
      ["Contact Opened", yesNo(data.events.contactFormOpened)],
      ["Contact Submitted", yesNo(data.events.contactFormSubmitted)],
    ])}
  </div>
</body>
</html>`;

  return { subject, text, html };
}
