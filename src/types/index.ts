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
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
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
}
