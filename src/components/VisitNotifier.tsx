"use client";

import { useEffect } from "react";

const STORAGE_KEY = "portfolio_visit_notified";

export function VisitNotifier() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    fetch("/api/notify-visit", { method: "POST" })
      .then((r) => {
        if (r.ok) sessionStorage.setItem(STORAGE_KEY, "1");
      })
      .catch(() => {});

    return () => {};
  }, []);

  return null;
}
