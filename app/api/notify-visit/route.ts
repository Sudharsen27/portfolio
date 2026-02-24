import { NextResponse } from "next/server";

export const runtime = "edge";

const message = (time: string) =>
  `Someone viewed your portfolio!\nTime: ${time}`;

export async function POST() {
  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
  const emailTo = process.env.NOTIFY_EMAIL_TO;
  const resendKey = process.env.RESEND_API_KEY;

  let ok = false;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: "🔔 " + message(new Date().toISOString()),
          text: "🔔 " + message(new Date().toISOString()),
        }),
      });
      if (res.ok) ok = true;
    } catch {
      // ignore
    }
  }

  if (emailTo && resendKey) {
    try {
      const time = new Date().toISOString();
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
          text: message(time),
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
