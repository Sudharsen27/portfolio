import type { SkillCategory } from "@/src/types";

export const skillsSubtitle =
  "Technologies I use to build production-grade full-stack applications.";

export const featuredTechnologies: string[] = [
  "React.js",
  "Next.js",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "Snowflake",
  "AWS",
];

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "Server",
    items: ["FastAPI", "Node.js", "Express.js", "Python"],
  },
  {
    title: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "Snowflake", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    items: ["AWS", "Docker", "GitHub Actions"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    items: ["Git", "Postman", "Jira"],
  },
];
