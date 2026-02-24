import { NextResponse } from "next/server";

export const runtime = "edge";

function buildVisitorInfo(
  time: string,
  referer: string | null,
  ip: string | null,
  geo: { city?: string; country?: string; org?: string } | null
): string {
  const lines = [
    "Someone viewed your portfolio!",
    "",
    `Time: ${time}`,
    `From (referrer): ${referer || "Direct visit"}`,
  ];
  if (ip) lines.push(`IP: ${ip}`);
  if (geo) {
    if (geo.city || geo.country) {
      lines.push(`Location: ${[geo.city, geo.country].filter(Boolean).join(", ") || "Unknown"}`);
    }
    if (geo.org) lines.push(`Org/Network: ${geo.org}`);
  }
  return lines.join("\n");
}

export async function POST(request: Request) {
  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
  const emailTo = process.env.NOTIFY_EMAIL_TO;
  const resendKey = process.env.RESEND_API_KEY;

  const time = new Date().toISOString();
  const referer = request.headers.get("referer") || null;
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = (forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || null) as string | null;

  let geo: { city?: string; country?: string; org?: string } | null = null;
  if (ip && ip !== "127.0.0.1" && !ip.startsWith("192.168.")) {
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`);
      if (res.ok) {
        const data = await res.json();
        geo = {
          city: data.city,
          country: data.country_name,
          org: data.org || data.asn,
        };
      }
    } catch {
      // ignore
    }
  }

  const message = buildVisitorInfo(time, referer, ip, geo);
  let ok = false;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: "🔔 " + message.replace(/\n/g, "\n"), text: "🔔 " + message }),
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
        }),
      });
      if (res.ok) ok = true;
    } catch {
      // ignore
    }
  }

  if (!webhookUrl && !emailTo) {
    return NextResponse.json({ ok: false }, { status: 501 });
  }

  return NextResponse.json({ ok });
}
