const CLIENT_FLAG = "portfolio_visitor_debug";

function isServerDebug(): boolean {
  return process.env.VISITOR_DEBUG === "true";
}

function isClientDebug(): boolean {
  if (typeof window === "undefined") return false;
  return (
    process.env.NEXT_PUBLIC_VISITOR_DEBUG === "true" ||
    localStorage.getItem(CLIENT_FLAG) === "1"
  );
}

/** Opt-in debug logging: set VISITOR_DEBUG=true (server) or NEXT_PUBLIC_VISITOR_DEBUG=true (client). */
export function visitorDebug(
  stage: string,
  data?: unknown,
  scope: "server" | "client" | "both" = "both"
): void {
  const onServer = scope === "server" || scope === "both";
  const onClient = scope === "client" || scope === "both";

  if (onServer && typeof window === "undefined" && isServerDebug()) {
    console.log(`[visitor:${stage}]`, data ?? "");
  }

  if (onClient && typeof window !== "undefined" && isClientDebug()) {
    console.log(`[visitor:${stage}]`, data ?? "");
  }
}
