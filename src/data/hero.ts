import type { HeroData } from "@/src/types";

export const heroData: HeroData = {
  headline: "Sundar Lingam",
  subhead: "Software Engineer | Full-Stack Developer | Cloud & DevOps",
  tagline: "",
  highlightBadges: [
    "React",
    "Next.js",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
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
    "I build modern, scalable web applications and cloud-native solutions using React, Next.js, Node.js, FastAPI, PostgreSQL, Docker, and AWS. Passionate about building high-performance, enterprise-grade software with clean architecture and great user experiences.",
};
