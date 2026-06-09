export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
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
  href?: string;
  repo?: string;
  caseStudyHref?: string;
  featured?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link?: string | null;
}

export interface HeroData {
  headline: string;
  subhead: string;
  techStack: string;
  tagline: string;
}

export interface AboutData {
  summary: string;
  highlights?: string[];
}

export interface ContactData {
  email: string;
  phone?: string;
  linkedIn?: string;
  github?: string;
  location?: string;
  cta: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string | string[];
}

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  liveUrl: string;
  repoUrl?: string;
  overview: string;
  problemStatement: string;
  solutionArchitecture: string;
  architectureDiagram?: string;
  techStack: string[];
  keyFeatures: { title: string; description: string }[];
  sections: CaseStudySection[];
  challenges: string[];
  lessonsLearned: string[];
}
