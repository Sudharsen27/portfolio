import type { CaseStudyData } from "@/src/types";

export const restaurantErpCaseStudy: CaseStudyData = {
  slug: "restaurant-erp",
  title: "Restaurant ERP",
  subtitle:
    "Full-stack Restaurant ERP with authentication, inventory, orders, billing, reporting, and AWS cloud deployment.",
  hideLiveDemo: true,
  repoUrl: "https://github.com/Sudharsen27",
  repoButtonLabel: "GitHub Repository",
  overview:
    "Developed a full-stack Restaurant ERP system to streamline restaurant operations, including authentication, inventory management, order processing, billing, and reporting. The application was containerized with Docker and deployed on AWS using Amazon ECS (Fargate), Amazon RDS PostgreSQL, and Amazon ElastiCache (Redis). Infrastructure was provisioned using AWS CDK and CloudFormation.",
  problemSectionTitle: "Problem Solved",
  problemStatement:
    "Restaurants often rely on multiple disconnected systems for inventory, orders, and billing, resulting in inefficient workflows and inconsistent reporting.",
  problemStatementExtended:
    "This ERP centralizes restaurant operations into a single platform, improving operational efficiency and providing a unified source of business data.",
  solutionArchitecture: "",
  hideSolutionArchitectureText: true,
  architectureSectionTitle: "AWS Architecture",
  architectureDiagram: `Docker
        │
        ▼
   Amazon ECR
        │
        ▼
Amazon ECS (Fargate)
        │
        ▼
  FastAPI Backend
        │
   ┌────┴────┐
   ▼         ▼
Amazon RDS   Amazon ElastiCache
PostgreSQL        Redis`,
  techStack: [
    "React.js",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Amazon ECS (Fargate)",
    "Amazon ECR",
    "Amazon RDS",
    "Amazon ElastiCache",
    "Amazon VPC",
    "AWS IAM",
    "AWS Secrets Manager",
    "AWS CloudFormation",
    "AWS CDK",
    "AWS CLI",
  ],
  techStackCategories: [
    {
      label: "Frontend",
      items: ["React.js", "Tailwind CSS"],
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
      label: "Cloud & DevOps",
      items: [
        "Docker",
        "Amazon ECS (Fargate)",
        "Amazon ECR",
        "Amazon RDS (PostgreSQL)",
        "Amazon ElastiCache (Redis)",
        "Amazon VPC",
        "AWS IAM",
        "AWS Secrets Manager",
        "AWS CloudFormation",
        "AWS Cloud Development Kit (AWS CDK)",
        "AWS CLI",
      ],
    },
  ],
  keyFeatures: [
    {
      title: "Restaurant Management",
      items: [
        "Secure Authentication",
        "Inventory Management",
        "Order Management",
        "Billing & Invoice Processing",
        "Reporting Dashboard",
      ],
    },
    {
      title: "Cloud Deployment",
      items: [
        "Containerized the application using Docker.",
        "Published Docker images to Amazon ECR.",
        "Deployed containers using Amazon ECS (Fargate).",
        "Configured Amazon RDS PostgreSQL as the primary database.",
        "Integrated Amazon ElastiCache (Redis) for caching.",
        "Managed secrets securely using AWS Secrets Manager.",
        "Provisioned infrastructure using AWS CDK and CloudFormation.",
      ],
    },
  ],
  sections: [
    {
      id: "deployment-status",
      title: "Deployment Status",
      content: [
        "✅ Successfully deployed on AWS for development and testing.",
        "After validating the deployment, the cloud infrastructure was intentionally decommissioned to avoid ongoing AWS infrastructure costs.",
        "The complete application source code, Docker configuration, and AWS CDK infrastructure are maintained and can be redeployed whenever required.",
      ],
    },
  ],
  challengesSectionTitle: "Technical Challenges",
  challenges: [
    "Designing a scalable containerized deployment architecture.",
    "Configuring secure IAM permissions between AWS services.",
    "Managing application secrets securely with AWS Secrets Manager.",
    "Provisioning cloud infrastructure using Infrastructure as Code with AWS CDK.",
    "Understanding Amazon VPC networking, security groups, and service connectivity.",
    "Managing AWS resources efficiently to avoid unnecessary cloud costs.",
  ],
  lessonsSectionTitle: "What I Learned",
  lessonsLearned: [
    "Docker containerization",
    "Amazon ECS (Fargate)",
    "Amazon ECR",
    "Amazon RDS PostgreSQL",
    "Amazon ElastiCache (Redis)",
    "Amazon VPC fundamentals",
    "AWS IAM",
    "AWS Secrets Manager",
    "Infrastructure as Code using AWS CDK",
    "AWS CloudFormation",
    "AWS CLI",
    "AWS cost management and cloud resource lifecycle",
  ],
};
