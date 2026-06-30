import type { CaseStudyData } from "@/src/types";

export const nexoraCrmCaseStudy: CaseStudyData = {
  slug: "nexora-crm",
  title: "Nexora CRM",
  subtitle:
    "Production-grade multi-tenant SaaS CRM with lead management, sales pipelines, RBAC, and analytics dashboards.",
  liveUrl: "https://nexora-crm-iota.vercel.app",
  overview:
    "Nexora CRM is a full-stack, multi-tenant SaaS platform for sales teams to manage leads, move deals through customizable pipelines, and monitor performance via analytics dashboards. A Next.js frontend pairs with a FastAPI backend and PostgreSQL, using JWT authentication and tenant-scoped APIs to keep each organization's data isolated.",
  problemStatement:
    "Growing sales teams often outgrow spreadsheets and siloed tools. They need a single CRM that supports multiple organizations on one platform, enforces role-based permissions, and surfaces pipeline health — without one tenant ever accessing another's data.",
  solutionArchitecture:
    "Nexora CRM uses a decoupled architecture: a Next.js (TypeScript) frontend for dashboards, lead views, and pipeline boards communicates with a FastAPI REST API over HTTPS. PostgreSQL stores tenants, users, leads, pipeline stages, and activity records with tenant_id scoping on every query. JWT middleware authenticates requests and encodes role claims used by RBAC guards on both client routes and API endpoints.",
  architectureDiagram: `┌──────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Next.js CRM    │────▶│  FastAPI REST API │────▶│   PostgreSQL    │
│  (TypeScript)    │     │  (JWT + RBAC)     │     │ (Tenant-scoped) │
└──────────────────┘     └──────────────────┘     └─────────────────┘`,
  techStack: [
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "JWT",
  ],
  keyFeatures: [
    {
      title: "Multi-Tenant Architecture",
      description:
        "Each organization operates in an isolated data boundary — users, leads, pipelines, and analytics are scoped by tenant_id at the database and API layers.",
    },
    {
      title: "JWT Authentication & RBAC",
      description:
        "Signed JWTs carry user identity and role claims. Admin, manager, and rep roles control access to settings, team views, and lead assignment workflows.",
    },
    {
      title: "Lead & Pipeline Management",
      description:
        "Capture and qualify leads, assign owners, and move deals through customizable pipeline stages with activity tracking at each step.",
    },
    {
      title: "Analytics Dashboards",
      description:
        "Pipeline conversion, lead source breakdown, and rep performance metrics aggregated server-side for fast dashboard rendering.",
    },
    {
      title: "RESTful API Design",
      description:
        "Tenant-aware endpoints for leads, pipelines, users, and analytics — validated with Pydantic schemas and protected by middleware on every route.",
    },
    {
      title: "Responsive UI",
      description:
        "Mobile-friendly CRM interface with accessible forms, focus states, and layouts that adapt from pipeline boards on desktop to stacked views on smaller screens.",
    },
  ],
  sections: [
    {
      id: "my-role",
      title: "My Role",
      content:
        "End-to-end ownership: designed the multi-tenant data model, built the FastAPI backend with JWT auth and RBAC middleware, implemented the Next.js frontend (lead lists, pipeline boards, analytics views), and deployed the live demo on Vercel.",
    },
    {
      id: "tech-decisions",
      title: "Tech Decisions",
      content: [
        "PostgreSQL over MongoDB — relational schema fits tenant/user/lead/pipeline relationships and supports efficient aggregations for analytics",
        "FastAPI + Pydantic — type-safe request validation and auto-generated OpenAPI docs for rapid API iteration",
        "JWT with role claims — stateless auth that scales across serverless frontend and API deployments without session stores",
        "Tenant_id column scoping — simpler than schema-per-tenant while keeping queries predictable with composite indexes",
      ],
    },
    {
      id: "multi-tenancy",
      title: "Multi-Tenancy & Data Isolation",
      content:
        "Every table carries a tenant_id foreign key. API middleware extracts the tenant from the JWT and injects it into query filters, preventing cross-tenant reads or writes even if a client sends another organization's ID.",
    },
    {
      id: "pipeline-workflows",
      title: "Pipeline Workflows",
      content:
        "Pipeline stages are configurable per tenant. Leads transition through stages with timestamped activity logs, enabling conversion-rate analytics and rep-level performance tracking without external BI tools.",
    },
    {
      id: "outcome",
      title: "Outcome",
      content:
        "Shipped a production-ready multi-tenant SaaS CRM end-to-end — live demo with lead management, pipeline tracking, RBAC, and analytics dashboards. The platform demonstrates full-stack SaaS patterns: tenant isolation, secure auth, and data-driven sales workflows in a single deployable application.",
    },
  ],
  challenges: [
    "Enforcing tenant isolation on every API path without repetitive boilerplate in route handlers",
    "Balancing RBAC granularity (admin vs manager vs rep) with a maintainable permission model",
    "Keeping analytics queries performant as lead and activity volume grows per tenant",
    "Designing pipeline stage transitions that preserve audit history for conversion reporting",
  ],
  lessonsLearned: [
    "Tenant scoping belongs in middleware — centralizing it prevents accidental data leaks as new endpoints are added",
    "Role claims in JWTs simplify frontend route guards but require careful token refresh when roles change",
    "Pre-aggregating pipeline metrics on write reduces dashboard load compared to full-table scans at read time",
    "Starting with a single shared schema and tenant_id is faster to ship than schema-per-tenant for early-stage SaaS",
  ],
};
