import { classifyReferrer, isAiReferrer } from "@/src/helpers/classifyReferrer";
import { detectHumanOrBot } from "@/src/helpers/humanOrBot";
import type { ReferrerClass, VisitorCategory } from "@/src/types/visitor";

/** Infer visitor intent category from referrer and user-agent signals. */
export function classifyVisitor(
  referrer: string | null | undefined,
  userAgent: string | null | undefined
): VisitorCategory {
  const { type: humanOrBot } = detectHumanOrBot(userAgent);
  if (humanOrBot === "Bot") return "Bot";

  const referrerClass = classifyReferrer(referrer);

  if (referrerClass === "LinkedIn") return "Likely Recruiter";
  if (referrerClass === "GitHub") return "Developer";
  if (referrerClass === "Google" || referrerClass === "Bing" || referrerClass === "DuckDuckGo")
    return "Search Visitor";
  if (isAiReferrer(referrerClass)) return "AI Referral";
  if (referrerClass === "Direct") return "Direct Visitor";

  return "Unknown";
}

export function getReferrerClass(
  referrer: string | null | undefined
): ReferrerClass {
  return classifyReferrer(referrer);
}
