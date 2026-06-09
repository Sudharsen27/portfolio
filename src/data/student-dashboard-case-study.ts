import type { CaseStudyData } from "@/src/types";

export const studentDashboardCaseStudy: CaseStudyData = {
  slug: "student-dashboard",
  title: "Student Dashboard",
  subtitle:
    "Interactive analytics dashboard for managing and visualizing student academic performance with Snowflake.",
  liveUrl: "https://student-dashboard-snowflake-fronten.vercel.app/",
  repoUrl: "https://github.com/Sudharsen27",
  overview:
    "Student Dashboard is a full-stack data application that gives educational administrators a single interface to search, manage, and analyze student marks stored in Snowflake. The Next.js frontend provides interactive tables with search, sort, and filter capabilities, while a Node.js API layer translates UI actions into optimized Snowflake SQL queries.",
  problemStatement:
    "Educational institutions often store student performance data in spreadsheets or disconnected systems, making it difficult to search records, update marks, or generate insights at scale. Administrators needed a cloud-connected dashboard that could handle large datasets with real-time interactivity backed by a modern data warehouse.",
  solutionArchitecture:
    "The application uses Next.js for the dashboard UI with server-side rendering for fast initial loads. A Node.js/Express API sits between the frontend and Snowflake, executing parameterized SQL queries for CRUD operations and analytics aggregations. Snowflake serves as the single source of truth for student records and marks data.",
  architectureDiagram: `┌──────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Next.js Dashboard│────▶│  Node.js REST API │────▶│    Snowflake    │
│  (Data Tables)   │     │  (Query Builder)  │     │ Student Marks   │
└──────────────────┘     └──────────────────┘     └─────────────────┘
         │                        │
         ▼                        ▼
   Search/Sort/Filter      Parameterized SQL
   CRUD Operations         Pagination Layer`,
  techStack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "Snowflake",
    "REST API",
    "Data Visualization",
  ],
  keyFeatures: [
    {
      title: "Interactive Data Tables",
      description:
        "Searchable, sortable, and filterable student records with responsive table layouts for desktop and mobile viewing.",
    },
    {
      title: "CRUD Operations",
      description:
        "Add, edit, and delete student marks through API endpoints that execute validated Snowflake INSERT, UPDATE, and DELETE statements.",
    },
    {
      title: "Snowflake Integration",
      description:
        "Direct warehouse queries for analytics-grade data storage with support for large datasets and complex aggregations.",
    },
    {
      title: "Pagination & Performance",
      description:
        "Server-side pagination and optimized queries to keep dashboard interactions fast even with thousands of student records.",
    },
    {
      title: "Summary Analytics",
      description:
        "Aggregate views showing class averages, top performers, and distribution summaries computed via Snowflake SQL.",
    },
    {
      title: "Responsive Dashboard",
      description:
        "Adaptive layout that reflows data tables and summary cards for administrators on any screen size.",
    },
  ],
  sections: [
    {
      id: "dashboard-ui",
      title: "Dashboard UI",
      content:
        "The Next.js frontend renders student data in interactive tables with column sorting, text search, and filter dropdowns. State management handles pagination controls, loading states, and optimistic UI updates during CRUD operations.",
    },
    {
      id: "snowflake-queries",
      title: "Snowflake Query Layer",
      content:
        "The Node.js API uses the Snowflake SDK to execute parameterized queries. SELECT statements power search and listing with LIMIT/OFFSET pagination. Aggregations like AVG and COUNT run directly in Snowflake for summary dashboard cards.",
    },
    {
      id: "crud-operations",
      title: "CRUD Operations",
      content:
        "Create operations INSERT new student mark records with validation. Updates modify existing rows by primary key. Deletes remove records with confirmation prompts in the UI. All mutations go through the API layer to prevent direct warehouse access from the client.",
    },
    {
      id: "api-endpoints",
      title: "API Endpoints",
      content: [
        "GET /api/students — paginated student listing with search and sort params",
        "GET /api/students/:id — single student record with marks detail",
        "POST /api/students — add new student marks record",
        "PUT /api/students/:id — update existing marks",
        "DELETE /api/students/:id — remove student record",
        "GET /api/analytics/summary — aggregate performance statistics",
      ],
    },
    {
      id: "performance",
      title: "Performance Optimization",
      content:
        "Snowflake queries use indexed columns for search filters, LIMIT/OFFSET for pagination, and connection pooling on the API side to reduce warehouse connection overhead. The frontend debounces search input and caches recent result pages for snappy navigation.",
    },
  ],
  challenges: [
    "Optimizing Snowflake query performance for real-time dashboard interactions with sub-second response times",
    "Building a Node.js API abstraction that hides warehouse SQL complexity from the frontend team",
    "Handling pagination and large result sets without transferring excessive data to the client",
    "Managing Snowflake connection lifecycle and credentials securely in a serverless deployment environment",
  ],
  lessonsLearned: [
    "Snowflake excels as an analytics backend but needs a dedicated API layer — exposing warehouse queries directly to the client is unsafe",
    "Server-side pagination is essential for warehouse-backed dashboards; client-side filtering does not scale",
    "Parameterized queries prevent SQL injection and improve Snowflake query plan caching",
    "Debounced search and loading states dramatically improve perceived performance for data-heavy UIs",
  ],
};
