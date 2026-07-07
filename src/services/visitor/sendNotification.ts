interface SendNotificationInput {
  webhookUrl?: string;
  emailTo?: string;
  resendKey?: string;
  fromEmail: string;
  email: { subject: string; text: string; html: string };
}

export async function sendVisitorNotification(
  input: SendNotificationInput
): Promise<{ ok: boolean; errors?: string[] }> {
  const { webhookUrl, emailTo, resendKey, fromEmail, email } = input;
  let ok = false;
  const errors: string[] = [];

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: email.subject + "\n\n" + email.text,
          text: email.subject + "\n\n" + email.text,
        }),
      });
      if (res.ok) ok = true;
      else errors.push(`webhook: HTTP ${res.status}`);
    } catch (e) {
      errors.push(
        `webhook: ${e instanceof Error ? e.message : "request failed"}`
      );
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
          from: fromEmail,
          to: [emailTo],
          subject: email.subject,
          text: email.text,
          html: email.html,
        }),
      });
      if (res.ok) ok = true;
      else {
        const body = await res.text().catch(() => "");
        errors.push(
          `resend: HTTP ${res.status}${body ? ` — ${body.slice(0, 200)}` : ""}`
        );
      }
    } catch (e) {
      errors.push(
        `resend: ${e instanceof Error ? e.message : "request failed"}`
      );
    }
  }

  return { ok, ...(errors.length ? { errors } : {}) };
}
