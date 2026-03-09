"use client";

import { useEffect } from "react";

const STORAGE_KEY = "portfolio_visit_notified";

function getClientPayload(): { language?: string; screen?: string; timezone?: string } {
  if (typeof window === "undefined") return {};
  const language = navigator.language || (navigator as { userLanguage?: string }).userLanguage;
  const screen =
    typeof window.screen !== "undefined"
      ? `${window.screen.width}x${window.screen.height} (inner: ${window.innerWidth}x${window.innerHeight})`
      : undefined;
  let timezone: string | undefined;
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    // ignore
  }
  return { language, screen, timezone };
}

export function VisitNotifier() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const body = getClientPayload();
    fetch("/api/notify-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((r) => {
        if (r.ok) sessionStorage.setItem(STORAGE_KEY, "1");
      })
      .catch(() => {});

    return () => {};
  }, []);

  return null;
}
