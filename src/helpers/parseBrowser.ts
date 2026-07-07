import { UAParser } from "ua-parser-js";
import type { ClientBrowserInfo } from "@/src/types/visitor";

export const DEFAULT_BROWSER_INFO: ClientBrowserInfo = {
  browser: "Unknown",
  browserVersion: "",
  os: "Unknown",
  deviceType: "desktop",
};

/** Parse browser/OS/device from a User-Agent string (client or server fallback). */
export function parseBrowserFromUserAgent(
  userAgent: string | null | undefined
): ClientBrowserInfo {
  if (!userAgent || userAgent.length < 2) return { ...DEFAULT_BROWSER_INFO };

  const parser = new UAParser(userAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();
  const cpu = parser.getCPU();

  let deviceType = device.type ?? "desktop";
  if (
    deviceType !== "mobile" &&
    deviceType !== "tablet" &&
    /mobile|android|iphone|ipad/i.test(userAgent)
  ) {
    deviceType = "mobile";
  }

  return {
    browser: browser.name ?? "Unknown",
    browserVersion: browser.version ?? "",
    os: [os.name, os.version].filter(Boolean).join(" ") || "Unknown",
    deviceType,
    cpuArchitecture: cpu.architecture,
  };
}

export function isBrowserInfoMissing(info: ClientBrowserInfo | undefined): boolean {
  if (!info) return true;
  return info.browser === "Unknown" && info.os === "Unknown";
}
