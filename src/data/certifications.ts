import type { CertificationItem } from "@/src/types";

export const certificationsSubtitle =
  "Professional certifications and continuous learning that strengthen my full-stack engineering expertise.";

export const certificationStats = [
  { label: "6 Professional Certifications", icon: "Award" },
  { label: "Cloud & Data Engineering", icon: "Cloud" },
  { label: "Frontend & Backend", icon: "Code2" },
  { label: "Continuous Learning", icon: "Brain" },
] as const;

export const certificationsData: CertificationItem[] = [
  {
    id: "snowpro-associate",
    title: "SnowPro Associate",
    issuer: "Snowflake",
    year: "2026",
    category: "Cloud & Data Engineering",
    icon: "Cloud",
    verifyUrl:
      "https://achieve.snowflake.com/4543d63f-ee2d-439e-81c1-6cea5efa6318#acc.iPjvQuEc",
    certificateUrl:
      "https://achieve.snowflake.com/4543d63f-ee2d-439e-81c1-6cea5efa6318#acc.iPjvQuEc",
  },
  {
    id: "nodejs-getting-started",
    title: "Getting Started with Node.js",
    issuer: "Simplilearn",
    year: "2025",
    category: "Backend",
    icon: "Server",
    certificateUrl:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQ2IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODM3NDc4OV82MTkyMDM5MTc0NzkwNzY5ODE3Ny5wbmciLCJ1c2VybmFtZSI6IlN1bmRhciBMaW5nYW0gUiJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4236%2FGetting-started-with-NodeJS%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1454037430375842131&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVL8osME4tqXCrCkmyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAHoRcypBAAAA",
  },
  {
    id: "hackerrank-problem-solving",
    title: "Problem Solving",
    issuer: "HackerRank",
    year: "2025",
    category: "Problem Solving",
    icon: "Brain",
    verifyUrl: "https://www.hackerrank.com/certificates/bd373b45faba",
    certificateUrl: "https://www.hackerrank.com/certificates/bd373b45faba",
  },
  {
    id: "react-js-development",
    title: "React JS Development",
    issuer: "Great Learning",
    year: "2024",
    category: "Frontend",
    icon: "Code2",
    certificateUrl: "https://www.mygreatlearning.com/certificate/DEHTHUSG",
  },
  {
    id: "software-testing",
    title: "Software Testing",
    issuer: "Learn and Deployment",
    year: "2023",
    category: "Testing",
    icon: "Bug",
    certificateUrl: "/certificates/software-testing-course-2023.png",
  },
  {
    id: "selenium-python",
    title: "Selenium with Python",
    issuer: "Great Learning",
    year: "2023",
    category: "Automation Testing",
    icon: "Bot",
    certificateUrl: "https://www.mygreatlearning.com/certificate/VGUYYSKL",
  },
];
