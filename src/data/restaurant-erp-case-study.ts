import type { CaseStudyData } from "@/src/types";

export const RESTAURANT_ERP_LIVE_URL =
  "https://restaurant-resource-planning-system.vercel.app";

export const RESTAURANT_ERP_REPO_URL = "https://github.com/Sudharsen27";

export const restaurantErpSeo = {
  title: "Restaurant ERP Platform | Sundar Digital",
  description:
    "Enterprise-grade Restaurant ERP Platform built with React, FastAPI, PostgreSQL, Docker, AWS CDK, and cloud-native architecture.",
  keywords: [
    "Restaurant ERP",
    "Enterprise Software",
    "FastAPI",
    "React",
    "Docker",
    "AWS",
    "AWS ECS",
    "AWS CDK",
    "Amazon RDS",
    "PostgreSQL",
    "Redis",
    "Inventory Management",
    "Restaurant Management",
    "Cloud Native",
  ],
};

export const restaurantErpHero = {
  title: "Restaurant ERP Platform",
  subtitle:
    "Enterprise-grade Restaurant ERP platform designed for multi-location restaurants with authentication, procurement, inventory management, supplier management, executive dashboards, reporting, POS foundation, and cloud-native architecture.",
  floatingBadges: [
    "AWS",
    "Docker",
    "FastAPI",
    "React",
    "PostgreSQL",
    "Redis",
    "CDK",
  ],
};

export const restaurantErpOverview = [
  "Restaurant ERP Platform is an enterprise-grade business management solution developed to centralize restaurant operations across multiple branches.",
  "The platform provides secure authentication, restaurant management, branch administration, inventory tracking, procurement workflows, supplier management, executive dashboards, analytics, billing foundation, and reporting inside one scalable application.",
  "The system was engineered following cloud-native architecture principles using Docker and Infrastructure as Code with AWS CDK.",
  "A lightweight public deployment is provided for demonstration while preserving the enterprise AWS deployment architecture.",
];

export const restaurantErpProblem = {
  title: "Business Problem",
  paragraphs: [
    "Restaurants often depend on multiple disconnected applications for inventory, procurement, billing, reporting, branch management, and operational analytics.",
    "These disconnected systems create duplicate work, inconsistent data, poor visibility, and operational inefficiencies.",
    "Restaurant ERP centralizes every major business workflow into one unified enterprise platform.",
  ],
};

export const restaurantErpSolutions = [
  "Centralized authentication",
  "Multi-location restaurant management",
  "Inventory management",
  "Supplier management",
  "Procurement",
  "Executive dashboard",
  "Business analytics",
  "Reporting",
  "Cloud-ready architecture",
  "Scalable backend APIs",
];

export const restaurantErpDemo = {
  title: "Live Demonstration",
  description:
    "Explore the public demonstration environment — a production-accessible preview of the Restaurant ERP Platform.",
  frontend: "Vercel",
  backend: "Render",
  database: "PostgreSQL",
  status: "Production Live",
  url: RESTAURANT_ERP_LIVE_URL,
};

export const restaurantErpArchitecture = {
  title: "Enterprise Cloud Architecture",
  note: "The application architecture was designed using Docker and AWS Infrastructure as Code with AWS CDK.\n\nFor portfolio accessibility and cloud cost optimization, the public demonstration environment is hosted separately while maintaining the complete AWS deployment configuration.",
  primaryFlow: [
    { id: "browser", label: "Browser", sub: "React Client" },
    { id: "cloudfront", label: "CloudFront", sub: "CDN Edge" },
    { id: "alb", label: "Application Load Balancer", sub: "Traffic Routing" },
    { id: "ecs", label: "Amazon ECS (Fargate)", sub: "Container Runtime" },
    { id: "fastapi", label: "FastAPI Backend", sub: "REST APIs" },
    { id: "rds", label: "Amazon RDS PostgreSQL", sub: "Primary Database" },
    { id: "redis", label: "Amazon ElastiCache Redis", sub: "Caching Layer" },
  ],
  lanes: [
    {
      title: "Docker Images",
      nodes: [{ label: "Amazon ECR", sub: "Container Registry" }],
    },
    {
      title: "Infrastructure",
      nodes: [
        { label: "AWS CDK", sub: "Infrastructure as Code" },
        { label: "CloudFormation", sub: "Provisioned Stacks" },
      ],
    },
    {
      title: "Secrets",
      nodes: [{ label: "AWS Secrets Manager", sub: "Credential Vault" }],
    },
    {
      title: "Networking",
      nodes: [{ label: "Amazon VPC", sub: "Isolated Network" }],
    },
    {
      title: "IAM Security",
      nodes: [{ label: "AWS IAM", sub: "Least-Privilege Access" }],
    },
  ],
};

export const restaurantErpTechStack = [
  {
    label: "Frontend",
    items: ["React", "Vite", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Python"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "Redis"],
  },
  {
    label: "Cloud",
    items: [
      "Docker",
      "Amazon ECS (Fargate)",
      "Amazon ECR",
      "Amazon RDS",
      "Amazon ElastiCache",
      "Amazon VPC",
      "AWS IAM",
      "AWS Secrets Manager",
      "AWS CDK",
      "CloudFormation",
      "AWS CLI",
    ],
  },
  {
    label: "Deployment",
    items: ["Vercel", "Render"],
  },
];

export const restaurantErpFeatures = [
  "Secure Authentication",
  "Restaurant Management",
  "Branch Management",
  "Department Management",
  "Dining Areas",
  "Tables",
  "Inventory Management",
  "Procurement",
  "Supplier Management",
  "Order Processing",
  "Billing Foundation",
  "Executive Dashboard",
  "Reporting",
  "Analytics",
  "Role Based Access Control",
  "Responsive UI",
  "Cloud Native Architecture",
];

export const restaurantErpChallenges = [
  "Designing scalable enterprise architecture",
  "Creating reusable FastAPI modules",
  "Database schema design",
  "JWT authentication",
  "Enterprise React architecture",
  "Docker containerization",
  "AWS Infrastructure as Code",
  "Cloud networking",
  "IAM permissions",
  "Secrets management",
  "PostgreSQL optimization",
  "Redis integration",
  "Cloud cost optimization",
];

export const restaurantErpLessons = [
  "Enterprise Software Architecture",
  "React Application Design",
  "FastAPI Development",
  "JWT Authentication",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Amazon ECS",
  "Amazon ECR",
  "Amazon RDS",
  "Amazon ElastiCache",
  "Amazon VPC",
  "AWS IAM",
  "AWS Secrets Manager",
  "Infrastructure as Code",
  "AWS CDK",
  "CloudFormation",
  "Production Deployment",
  "Cloud Cost Optimization",
];

export const restaurantErpStatus = [
  { label: "Status", value: "Production Ready", highlight: true },
  { label: "Public Demo", value: "Live", highlight: true },
  { label: "Enterprise Architecture", value: "Completed" },
  { label: "AWS Infrastructure", value: "Implemented" },
  { label: "Docker", value: "Completed" },
  { label: "Infrastructure as Code", value: "Completed" },
  { label: "Cloud Ready", value: "Yes", highlight: true },
];

export const restaurantErpMetrics = [
  { label: "Frontend", value: "React + Vite" },
  { label: "Backend", value: "FastAPI" },
  { label: "Database", value: "PostgreSQL" },
  { label: "Caching", value: "Redis" },
  { label: "Infrastructure", value: "Docker" },
  { label: "Cloud", value: "AWS" },
  { label: "Deployment", value: "Production Ready" },
];

export const restaurantErpNav = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "demo", label: "Live Demo" },
  { id: "architecture", label: "Architecture" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "features", label: "Features" },
  { id: "metrics", label: "Metrics" },
  { id: "challenges", label: "Challenges" },
  { id: "lessons", label: "Learned" },
  { id: "status", label: "Status" },
];

/** Compatible shape for shared case-study registry / SEO */
export const restaurantErpCaseStudy: CaseStudyData = {
  slug: "restaurant-erp",
  title: restaurantErpHero.title,
  subtitle: restaurantErpHero.subtitle,
  liveUrl: RESTAURANT_ERP_LIVE_URL,
  repoUrl: RESTAURANT_ERP_REPO_URL,
  repoButtonLabel: "GitHub Repository",
  seoTitle: restaurantErpSeo.title,
  seoDescription: restaurantErpSeo.description,
  seoKeywords: restaurantErpSeo.keywords,
  overview: restaurantErpOverview[0],
  overviewExtended: restaurantErpOverview.slice(1).join("\n\n"),
  problemSectionTitle: restaurantErpProblem.title,
  problemStatement: restaurantErpProblem.paragraphs[0],
  problemStatementExtended: restaurantErpProblem.paragraphs.slice(1).join("\n\n"),
  solutionArchitecture: "",
  hideSolutionArchitectureText: true,
  architectureSectionTitle: restaurantErpArchitecture.title,
  architectureNote: restaurantErpArchitecture.note,
  techStack: restaurantErpTechStack.flatMap((c) => c.items),
  techStackCategories: restaurantErpTechStack,
  keyFeatures: restaurantErpFeatures.map((title) => ({ title })),
  sections: [],
  challengesSectionTitle: "Technical Challenges",
  challenges: restaurantErpChallenges,
  lessonsSectionTitle: "What I Learned",
  lessonsLearned: restaurantErpLessons,
  productionUrl: RESTAURANT_ERP_LIVE_URL,
  projectStatus: restaurantErpStatus,
};
