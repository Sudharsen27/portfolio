import type { ExperienceItem } from "@/src/types";

export const experienceData: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Analytix-Hub Technologies Pvt. Ltd. · Chennai, TN",
    period: "Apr 2026 – Present",
    highlights: [
      "Architected and shipped full-stack features for an MDM Data Governance Platform — FastAPI REST APIs, PostgreSQL data models, and a React dashboard used for dataset management and quality monitoring.",
      "Built data profiling and metadata management modules that surface column-level statistics, validation rules, and AI-generated column descriptions to accelerate data onboarding.",
      "Designed Snowflake integration pipelines for analytics workloads, enabling cross-database reporting without duplicating operational data in PostgreSQL.",
      "Improved API response times through query optimization, connection pooling, and selective caching on high-traffic dashboard endpoints.",
      "Collaborated with product and data teams to deliver production-ready releases on sprint deadlines with Docker-based deployment workflows.",
    ],
  },
  {
    role: "Software Development Engineer (SDE I)",
    company: "Wraptron Apptech LLP · Chennai, TN",
    period: "Mar 2024 – Mar 2026",
    highlights: [
      "Delivered 5+ full-stack web applications end-to-end — React/Next.js frontends, Node.js/FastAPI backends, and PostgreSQL or Snowflake databases deployed to production.",
      "Developed secure REST APIs with JWT authentication, role-based access control, and input validation for e-commerce, healthcare, and job portal products.",
      "Built interactive analytics dashboards with search, sort, filter, and CRUD operations backed by Snowflake and PostgreSQL, improving data visibility for stakeholders.",
      "Reduced frontend bundle size and improved Lighthouse performance scores through code splitting, lazy loading, and image optimization on client-facing apps.",
      "Established testing and code review practices that reduced post-release defects and improved team delivery velocity across concurrent client projects.",
    ],
  },
  {
    role: "Junior Executive",
    company: "Shriram Finance · Theni, TN",
    period: "Dec 2021 – Dec 2022",
    highlights: [
      "Managed customer records, loan documentation, and compliance workflows — building attention to detail and process discipline that carries into software engineering.",
      "Prepared operational reports on loan applications and disbursements, gaining early exposure to data accuracy and reporting requirements.",
    ],
  },
];
