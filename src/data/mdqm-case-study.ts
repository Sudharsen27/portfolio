import type { CaseStudyData } from "@/src/types";

export const mdqmCaseStudy: CaseStudyData = {
  slug: "mdqm",
  title: "MDQM / MDM Data Governance Platform",
  subtitle:
    "Enterprise master data management for dataset governance, quality validation, and metadata enrichment.",
  liveUrl: "https://mdm-data-governance-platform-fronte.vercel.app/login",
  repoUrl: "https://github.com/Sudharsen27",
  overview:
    "MDQM is a full-stack Master Data Management platform built to help data teams govern, validate, and profile datasets before they enter analytics pipelines. The platform combines a React dashboard with a FastAPI backend, PostgreSQL for operational storage, and Snowflake for analytics workloads — delivering a unified experience for data stewards and engineers.",
  problemStatement:
    "Enterprise teams often struggle with inconsistent master data across systems. Manual validation is error-prone, metadata is scattered, and there's no single place to profile incoming datasets or enforce quality rules before data reaches Snowflake warehouses. MDQM was built to solve this by providing centralized dataset management, automated validation, and AI-assisted metadata enrichment.",
  solutionArchitecture:
    "The platform follows a three-tier architecture: a React + Tailwind CSS frontend for dashboards and dataset workflows, a FastAPI service layer exposing RESTful APIs with JWT authentication, and a dual-database backend — PostgreSQL for transactional operations (users, rules, metadata) and Snowflake for analytics queries and warehouse-scale profiling. Docker containers orchestrate local and deployment environments, with CI/CD via GitHub Actions.",
  architectureDiagram: `┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  React Dashboard │────▶│  FastAPI REST API │────▶│   PostgreSQL    │
│  (Tailwind CSS)  │     │  (JWT Auth)       │     │  (Operational)  │
└─────────────────┘     └────────┬─────────┘     └─────────────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │    Snowflake    │
                        │   (Analytics)   │
                        └─────────────────┘`,
  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Snowflake",
    "JWT",
    "Docker",
    "GitHub Actions",
  ],
  keyFeatures: [
    {
      title: "Dataset Management",
      description:
        "Upload, version, and manage master datasets with quarantine workflows for records that fail validation — preventing bad data from propagating downstream.",
    },
    {
      title: "Data Profiling",
      description:
        "Automatic column-level statistics including null counts, distinct values, data types, and distribution summaries to give data stewards immediate visibility.",
    },
    {
      title: "Metadata Management",
      description:
        "Centralized metadata store for datasets, columns, and business glossary terms — enabling consistent definitions across teams.",
    },
    {
      title: "AI Column Descriptions",
      description:
        "AI-generated column descriptions that accelerate data onboarding by suggesting human-readable explanations based on column names and sample values.",
    },
    {
      title: "FastAPI REST APIs",
      description:
        "Production-grade APIs with Pydantic validation, async endpoints, JWT auth, and OpenAPI documentation for seamless frontend integration.",
    },
    {
      title: "Database Design",
      description:
        "Normalized PostgreSQL schema for governance entities with Snowflake integration for warehouse-scale analytics and cross-database reporting.",
    },
  ],
  sections: [
    {
      id: "dataset-management",
      title: "Dataset Management",
      content:
        "Users can upload CSV and structured datasets, track versions, and route failed records to a quarantine queue. The upload pipeline validates file structure, maps columns, and applies configured rules before committing data to the master store.",
    },
    {
      id: "data-profiling",
      title: "Data Profiling",
      content:
        "Upon upload, the profiling engine computes column-level metrics — completeness, uniqueness, min/max values, and pattern detection. Results render in interactive dashboard cards so stewards can assess data quality at a glance.",
    },
    {
      id: "metadata-management",
      title: "Metadata Management",
      content:
        "A dedicated metadata layer stores dataset descriptions, column definitions, tags, and ownership information. This creates a searchable catalog that bridges technical schemas and business context.",
    },
    {
      id: "ai-column-descriptions",
      title: "AI Column Descriptions",
      content:
        "An AI service analyzes column names and sample data to generate suggested descriptions. Stewards can review, edit, and approve descriptions — reducing the manual effort of documenting large datasets.",
    },
    {
      id: "fastapi-apis",
      title: "FastAPI APIs",
      content: [
        "Authentication endpoints with JWT token issuance and refresh",
        "CRUD APIs for datasets, rules, metadata, and profiling results",
        "Async query endpoints for Snowflake analytics workloads",
        "Webhook-style notifications for quarantine events",
      ],
    },
    {
      id: "database-design",
      title: "Database Design",
      content:
        "PostgreSQL handles users, roles, dataset metadata, validation rules, and audit logs with foreign-key integrity. Snowflake stores profiling aggregates and analytics-ready views, connected via a sync layer that maintains referential consistency without duplicating operational writes.",
    },
  ],
  challenges: [
    "Building a dynamic rules engine that supports configurable validation logic without redeploying backend code",
    "Managing dual-database consistency between PostgreSQL operational data and Snowflake analytics views",
    "Rendering large dataset previews in the browser without blocking the main thread or degrading dashboard responsiveness",
    "Designing JWT auth flows that work across SPA navigation and API middleware without token leakage",
    "Optimizing FastAPI endpoints that aggregate profiling statistics from multiple database sources",
  ],
  lessonsLearned: [
    "Separating operational storage (PostgreSQL) from analytics (Snowflake) early prevents costly refactoring when data volume grows",
    "A flexible rules engine pays dividends — hard-coded validations become unmaintainable as business rules evolve",
    "AI-assisted metadata is most valuable as a suggestion layer; human review remains essential for governance trust",
    "OpenAPI-first API design with FastAPI accelerates frontend development and reduces integration bugs",
    "Docker-based local environments that mirror production eliminate 'works on my machine' deployment issues",
  ],
};
