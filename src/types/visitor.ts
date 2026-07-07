export type ReferrerClass =
  | "LinkedIn"
  | "GitHub"
  | "Google"
  | "Bing"
  | "DuckDuckGo"
  | "ChatGPT"
  | "Claude"
  | "Gemini"
  | "Perplexity"
  | "Twitter"
  | "Facebook"
  | "Instagram"
  | "Direct"
  | "Unknown";

export type VisitorCategory =
  | "Likely Recruiter"
  | "Developer"
  | "Search Visitor"
  | "AI Referral"
  | "Direct Visitor"
  | "Bot"
  | "Unknown";

export type HumanOrBot = "Human" | "Bot";

export type InterestLevel = "Low" | "Medium" | "High" | "Very High";

export type VisitorTrackEvent =
  | "resume_viewed"
  | "resume_downloaded"
  | "email_clicked"
  | "linkedin_clicked"
  | "github_clicked"
  | "phone_clicked"
  | "contact_form_opened"
  | "contact_form_submitted";

export interface VisitorInteractionEvents {
  resumeViewed: boolean;
  resumeDownloaded: boolean;
  emailClicked: boolean;
  linkedInClicked: boolean;
  githubClicked: boolean;
  phoneClicked: boolean;
  contactFormOpened: boolean;
  contactFormSubmitted: boolean;
}

export interface ClientBrowserInfo {
  browser: string;
  browserVersion: string;
  os: string;
  deviceType: string;
  cpuArchitecture?: string;
}

export interface ClientVisitorPayload {
  visitorId: string;
  visitNumber: number;
  isReturning: boolean;
  visitStart: string;
  visitEnd: string;
  durationSeconds: number;
  pagesViewed: string[];
  pageSequence: string[];
  language?: string;
  screen?: string;
  timezone?: string;
  documentReferrer?: string;
  browser: ClientBrowserInfo;
  events: VisitorInteractionEvents;
}

export interface GeoInfo {
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
  postal?: string;
  timezone?: string;
  latitude?: number;
  longitude?: number;
  organization?: string;
  isp?: string;
  connectionType?: string;
  source: "ipwhois" | "vercel";
}

export interface VisitorIntelligence {
  timestamp: string;
  visitorId: string;
  visitNumber: number;
  isReturning: boolean;
  visitStart: string;
  visitEnd: string;
  durationSeconds: number;
  durationLabel: string;
  pagesViewed: string[];
  pageSequence: string[];
  pageFlow: string;
  visitorCategory: VisitorCategory;
  referrerClass: ReferrerClass;
  humanOrBot: HumanOrBot;
  isAiReferral: boolean;
  interestScore: number;
  interestLevel: InterestLevel;
  location: string;
  geo: GeoInfo | null;
  ip: string | null;
  browser: ClientBrowserInfo;
  language: string;
  screen?: string;
  clientTimezone?: string;
  serverReferrer: string | null;
  documentReferrer: string | null;
  events: VisitorInteractionEvents;
  userAgent: string | null;
}

export const EMPTY_VISITOR_EVENTS: VisitorInteractionEvents = {
  resumeViewed: false,
  resumeDownloaded: false,
  emailClicked: false,
  linkedInClicked: false,
  githubClicked: false,
  phoneClicked: false,
  contactFormOpened: false,
  contactFormSubmitted: false,
};
