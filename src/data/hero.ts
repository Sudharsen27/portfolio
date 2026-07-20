import type { HeroData } from "@/src/types";

export const heroData: HeroData = {
  headline: "Sundar Lingam",
  subhead: "Full Stack Software Engineer",
  tagline: "Building Enterprise-Grade Full-Stack Applications",
  techCategories: [
    {
      label: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript"],
    },
    {
      label: "Backend",
      skills: ["FastAPI", "Node.js", "Express.js"],
    },
    {
      label: "Database",
      skills: ["PostgreSQL", "Snowflake"],
    },
    {
      label: "Cloud",
      skills: ["AWS"],
    },
  ],
  description:
    "Building scalable full-stack applications with React, Next.js, FastAPI, Node.js, PostgreSQL, Snowflake, and AWS. Passionate about creating secure, high-performance software for modern business solutions.",
};
