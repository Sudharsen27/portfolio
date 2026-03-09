import { NextResponse } from "next/server";

export const runtime = "edge";

/** Rich geo from ipapi.co / ipwho.is / Vercel headers */
type GeoInfo = {
  city?: string;
  region?: string;
  regionCode?: string;
  country?: string;
  countryCode?: string;
  postal?: string;
  timezone?: string;
  latitude?: number;
  longitude?: number;
  org?: string;
  isp?: string;
  source?: "ipapi" | "ipwhois" | "vercel";
};

/** Parse User-Agent for a short browser/device label */
function parseUserAgent(ua: string | null): string {
  if (!ua || ua.length < 2) return "Unknown";
  const s = ua.toLowerCase();
  let browser = "Unknown";
  let os = "Unknown";
  if (s.includes("edg/")) browser = "Edge";
  else if (s.includes("chrome/") && !s.includes("chromium")) browser = "Chrome";
  else if (s.includes("firefox/")) browser = "Firefox";
  else if (s.includes("safari/") && !s.includes("chrome")) browser = "Safari";
  else if (s.includes("opr/") || s.includes("opera")) browser = "Opera";
  if (s.includes("windows")) os = "Windows";
  else if (s.includes("mac os")) os = "macOS";
  else if (s.includes("linux")) os = "Linux";
  else if (s.includes("android")) os = "Android";
  else if (s.includes("iphone") || s.includes("ipad")) os = "iOS";
  const mobile = /mobile|android|iphone|ipad|ipod|webos|blackberry|iemobile/i.test(ua);
  return `${browser} on ${os}${mobile ? " (mobile)" : ""}`;
}

/** Try ipapi.co first, then ipwho.is (HTTPS) as fallback */
async function getGeoFromIp(ip: string): Promise<GeoInfo | null> {
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      const d = await res.json();
      if (d.error !== true) {
        return {
          city: d.city,
          region: d.region,
          regionCode: d.region_code,
          country: d.country_name,
          countryCode: d.country_code,
          postal: d.postal,
          timezone: d.timezone,
          latitude: d.latitude,
          longitude: d.longitude,
          org: d.org || (d.asn ? `AS${d.asn}` : undefined),
          source: "ipapi",
        };
      }
    }
  } catch {
    // fallback
  }
  try {
    const res = await fetch(`https://ipwho.is/${ip}`, {
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      const d = await res.json();
      if (d.success === true) {
        const tz = d.timezone;
        return {
          city: d.city,
          region: d.region,
          regionCode: d.region_code,
          country: d.country,
          countryCode: d.country_code,
          postal: d.postal,
          timezone: typeof tz === "object" && tz?.id ? tz.id : d.timezone,
          latitude: d.latitude,
          longitude: d.longitude,
          org: d.connection?.org || d.connection?.isp,
          isp: d.connection?.isp,
          source: "ipwhois",
        };
      }
    }
  } catch {
    // ignore
  }
  return null;
}

/** Build location string for display */
function formatLocation(geo: GeoInfo | null): string {
  if (!geo) return "Unknown";
  const parts = [geo.city, geo.region || geo.regionCode, geo.country].filter(Boolean);
  if (parts.length) return parts.join(", ");
  return "Unknown";
}

/** Optional client payload */
type ClientPayload = {
  language?: string;
  screen?: string;
  timezone?: string;
};

function buildVisitorInfo(
  time: string,
  referer: string | null,
  ip: string | null,
  geo: GeoInfo | null,
  userAgent: string | null,
  acceptLanguage: string | null,
  client: ClientPayload | null
): { text: string; html: string } {
  const uaLabel = parseUserAgent(userAgent);
  const location = formatLocation(geo);
  const lines: string[] = [
    "Someone viewed your portfolio!",
    "",
    "——— When & From ———",
    `Time (UTC): ${time}`,
    `Referrer: ${referer || "Direct visit"}`,
    "",
    "——— Location (who & where) ———",
    `Location: ${location}`,
  ];
  if (geo) {
    if (geo.timezone) lines.push(`Timezone: ${geo.timezone}`);
    if (geo.postal) lines.push(`Postal: ${geo.postal}`);
    if (geo.latitude != null && geo.longitude != null) {
      lines.push(`Coordinates: ${geo.latitude.toFixed(4)}, ${geo.longitude.toFixed(4)}`);
      lines.push(`Map: https://www.google.com/maps?q=${geo.latitude},${geo.longitude}`);
    }
    if (geo.org) lines.push(`Org/ISP: ${geo.org}`);
    if (geo.isp && geo.isp !== geo.org) lines.push(`ISP: ${geo.isp}`);
    if (geo.source) lines.push(`(Geo source: ${geo.source})`);
  }
  lines.push("", "——— Device & Language ———");
  lines.push(`Browser/Device: ${uaLabel}`);
  const lang = client?.language || acceptLanguage?.split(",")[0]?.trim() || "—";
  lines.push(`Language: ${lang}`);
  if (client?.screen) lines.push(`Screen: ${client.screen}`);
  if (client?.timezone) lines.push(`Client timezone: ${client.timezone}`);
  lines.push("", "——— Network ———");
  lines.push(`IP: ${ip || "Unknown"}`);

  const text = lines.join("\n");

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:20px;color:#333;">
  <h2 style="margin-top:0;">🔔 Someone viewed your portfolio</h2>
  <section style="margin:16px 0;">
    <h3 style="margin:0 0 8px 0;font-size:14px;color:#666;">When & From</h3>
    <p style="margin:4px 0;">Time (UTC): ${escapeHtml(time)}</p>
    <p style="margin:4px 0;">Referrer: ${escapeHtml(referer || "Direct visit")}</p>
  </section>
  <section style="margin:16px 0;">
    <h3 style="margin:0 0 8px 0;font-size:14px;color:#666;">📍 Location (who & where)</h3>
    <p style="margin:4px 0;"><strong>${escapeHtml(location)}</strong></p>
    ${geo?.timezone ? `<p style="margin:4px 0;">Timezone: ${escapeHtml(geo.timezone)}</p>` : ""}
    ${geo?.postal ? `<p style="margin:4px 0;">Postal: ${escapeHtml(geo.postal)}</p>` : ""}
    ${geo?.latitude != null && geo?.longitude != null ? `<p style="margin:4px 0;"><a href="https://www.google.com/maps?q=${geo.latitude},${geo.longitude}">View on map</a> (${geo.latitude.toFixed(4)}, ${geo.longitude.toFixed(4)})</p>` : ""}
    ${geo?.org ? `<p style="margin:4px 0;">Org/ISP: ${escapeHtml(geo.org)}</p>` : ""}
    ${geo?.isp && geo.isp !== geo.org ? `<p style="margin:4px 0;">ISP: ${escapeHtml(geo.isp)}</p>` : ""}
  </section>
  <section style="margin:16px 0;">
    <h3 style="margin:0 0 8px 0;font-size:14px;color:#666;">Device & Language</h3>
    <p style="margin:4px 0;">Browser/Device: ${escapeHtml(uaLabel)}</p>
    <p style="margin:4px 0;">Language: ${escapeHtml(client?.language || acceptLanguage?.split(",")[0]?.trim() || "—")}</p>
    ${client?.screen ? `<p style="margin:4px 0;">Screen: ${escapeHtml(client.screen)}</p>` : ""}
    ${client?.timezone ? `<p style="margin:4px 0;">Client timezone: ${escapeHtml(client.timezone)}</p>` : ""}
  </section>
  <section style="margin:16px 0;">
    <h3 style="margin:0 0 8px 0;font-size:14px;color:#666;">Network</h3>
    <p style="margin:4px 0;">IP: ${escapeHtml(ip || "Unknown")}</p>
  </section>
</body>
</html>`.trim();

  return { text, html };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
  const emailTo = process.env.NOTIFY_EMAIL_TO;
  const resendKey = process.env.RESEND_API_KEY;

  const isConfigured = Boolean(webhookUrl) || Boolean(emailTo && resendKey);
  if (!isConfigured) {
    const missing = {
      NOTIFY_WEBHOOK_URL: !webhookUrl,
      NOTIFY_EMAIL_TO: !emailTo,
      RESEND_API_KEY: !resendKey,
    };
    return NextResponse.json(
      {
        ok: false,
        error: "Missing notification configuration. Set NOTIFY_WEBHOOK_URL or (NOTIFY_EMAIL_TO + RESEND_API_KEY).",
        missing,
      },
      { status: 501 }
    );
  }

  const time = new Date().toISOString();
  const referer = request.headers.get("referer") || null;
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = (forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || null) as string | null;
  const userAgent = request.headers.get("user-agent") || null;
  const acceptLanguage = request.headers.get("accept-language") || null;

  let client: ClientPayload | null = null;
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    try {
      const body = await request.json().catch(() => ({}));
      if (body && typeof body === "object") {
        client = {
          language: typeof body.language === "string" ? body.language : undefined,
          screen: typeof body.screen === "string" ? body.screen : undefined,
          timezone: typeof body.timezone === "string" ? body.timezone : undefined,
        };
      }
    } catch {
      // no body or invalid JSON
    }
  }

  let geo: GeoInfo | null = null;

  const vercelCity = request.headers.get("x-vercel-ip-city");
  const vercelCountry = request.headers.get("x-vercel-ip-country");
  const vercelRegion = request.headers.get("x-vercel-ip-country-region");
  if (vercelCity || vercelCountry) {
    geo = {
      city: vercelCity || undefined,
      region: vercelRegion || undefined,
      country: vercelCountry || undefined,
      countryCode: vercelCountry || undefined,
      source: "vercel",
    };
  }

  if (!geo && ip && ip !== "127.0.0.1" && !ip.startsWith("192.168.") && !ip.startsWith("10.")) {
    geo = await getGeoFromIp(ip);
  }

  const { text: message, html } = buildVisitorInfo(
    time,
    referer,
    ip,
    geo,
    userAgent,
    acceptLanguage,
    client
  );
  let ok = false;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: "🔔 " + message.replace(/\n/g, "\n"),
          text: "🔔 " + message,
        }),
      });
      if (res.ok) ok = true;
    } catch {
      // ignore
    }
  }

  if (emailTo && resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: [emailTo],
          subject: "🔔 Someone viewed your portfolio",
          text: message,
          html,
        }),
      });
      if (res.ok) ok = true;
    } catch {
      // ignore
    }
  }

  return NextResponse.json({ ok });
}
