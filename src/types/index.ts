export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  technologies?: string[];
  primaryProject?: string;
  highlights: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem: string;
  technologies: string[];
  keyFeatures: string[];
  challenges: string[];
  businessImpact: string;
  tags: string[];
  badges?: string[];
  href?: string;
  repo?: string;
  caseStudyHref?: string;
  featured?: boolean;
  liveStatusLabel?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  icon: string;
  verifyUrl?: string | null;
  certificateUrl?: string | null;
  /** @deprecated Prefer certificateUrl */
  link?: string | null;
}

export interface HeroTechCategory {
  label: string;
  skills: string[];
}

export interface HeroData {
  headline: string;
  subhead: string;
  tagline: string;
  highlightBadges?: string[];
  techCategories: HeroTechCategory[];
  description: string;
}

export interface AboutCapability {
  title: string;
  icon: string;
}

export interface AboutHighlight {
  label: string;
  icon: string;
}

export interface AboutData {
  subtitle: string;
  summary: string;
  closing: string;
  capabilities: AboutCapability[];
  highlights: AboutHighlight[];
}

export interface ContactData {
  email: string;
  phone?: string;
  linkedIn?: string;
  github?: string;
  location?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  subtitle: string;
  introTitle: string;
  introParagraphs: string[];
  cta: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string | string[];
}

export interface CaseStudyKeyFeature {
  title: string;
  description?: string;
  items?: string[];
}

export interface CaseStudyTechCategory {
  label: string;
  items: string[];
}

export interface CaseStudyDeploymentInfo {
  label: string;
  items: string[];
}

export interface CaseStudyStatusItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  liveUrl?: string;
  repoUrl?: string;
  overview: string;
  overviewExtended?: string;
  problemStatement: string;
  problemStatementExtended?: string;
  solutionArchitecture: string;
  architectureDiagram?: string;
  architectureNote?: string;
  architectureSectionTitle?: string;
  problemSectionTitle?: string;
  challengesSectionTitle?: string;
  lessonsSectionTitle?: string;
  hideSolutionArchitectureText?: boolean;
  techStack: string[];
  techStackCategories?: CaseStudyTechCategory[];
  keyFeatures: CaseStudyKeyFeature[];
  sections: CaseStudySection[];
  challenges: string[];
  lessonsLearned: string[];
  hideLiveDemo?: boolean;
  repoButtonLabel?: string;
  deploymentBadges?: string[];
  productionUrl?: string;
  productionDeployment?: CaseStudyDeploymentInfo[];
  hostingStatus?: { label: string; value: string; isLive?: boolean };
  projectStatus?: CaseStudyStatusItem[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}
