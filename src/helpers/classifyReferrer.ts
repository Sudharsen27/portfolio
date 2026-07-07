import type { ReferrerClass } from "@/src/types/visitor";

function hostFromReferrer(referrer: string | null | undefined): string {
  if (!referrer || referrer.trim() === "") return "";
  try {
    return new URL(referrer).hostname.toLowerCase();
  } catch {
    return referrer.toLowerCase();
  }
}

/** Classify inbound referrer into a known channel label. */
export function classifyReferrer(
  referrer: string | null | undefined
): ReferrerClass {
  const host = hostFromReferrer(referrer);
  if (!host) return "Direct";

  if (host.includes("linkedin.com")) return "LinkedIn";
  if (host.includes("github.com")) return "GitHub";
  if (host.includes("google.")) return "Google";
  if (host.includes("bing.com")) return "Bing";
  if (host.includes("duckduckgo.com")) return "DuckDuckGo";
  if (
    host.includes("chatgpt.com") ||
    host.includes("chat.openai.com") ||
    host.includes("openai.com")
  )
    return "ChatGPT";
  if (host.includes("claude.ai") || host.includes("anthropic.com"))
    return "Claude";
  if (host.includes("gemini.google.com") || host.includes("bard.google.com"))
    return "Gemini";
  if (host.includes("perplexity.ai")) return "Perplexity";
  if (host.includes("twitter.com") || host.includes("x.com")) return "Twitter";
  if (host.includes("facebook.com") || host.includes("fb.com"))
    return "Facebook";
  if (host.includes("instagram.com")) return "Instagram";

  return "Unknown";
}

export function isAiReferrer(referrerClass: ReferrerClass): boolean {
  return (
    referrerClass === "ChatGPT" ||
    referrerClass === "Claude" ||
    referrerClass === "Gemini" ||
    referrerClass === "Perplexity"
  );
}
