import type { HumanOrBot } from "@/src/types/visitor";

const BOT_PATTERNS: { pattern: RegExp; label: string }[] = [
  { pattern: /googlebot/i, label: "Googlebot" },
  { pattern: /bingbot/i, label: "Bingbot" },
  { pattern: /gptbot/i, label: "GPTBot" },
  { pattern: /claudebot/i, label: "ClaudeBot" },
  { pattern: /anthropic-ai/i, label: "ClaudeBot" },
  { pattern: /perplexitybot/i, label: "PerplexityBot" },
  { pattern: /facebookexternalhit|facebot/i, label: "Facebook crawler" },
  { pattern: /twitterbot/i, label: "Twitter crawler" },
  { pattern: /linkedinbot/i, label: "LinkedIn crawler" },
  { pattern: /slurp|yahoo/i, label: "Yahoo crawler" },
  { pattern: /duckduckbot/i, label: "DuckDuckBot" },
  { pattern: /baiduspider/i, label: "Baiduspider" },
  { pattern: /yandexbot/i, label: "YandexBot" },
  { pattern: /semrushbot|ahrefsbot|mj12bot|dotbot/i, label: "SEO bot" },
  { pattern: /bot|crawler|spider|scraper/i, label: "Generic bot" },
];

export function detectHumanOrBot(userAgent: string | null | undefined): {
  type: HumanOrBot;
  botName?: string;
} {
  if (!userAgent || userAgent.length < 2) {
    return { type: "Human" };
  }

  for (const { pattern, label } of BOT_PATTERNS) {
    if (pattern.test(userAgent)) {
      return { type: "Bot", botName: label };
    }
  }

  return { type: "Human" };
}
