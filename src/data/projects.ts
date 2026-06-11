import type { Project } from "@/src/types";

export const featuredProjects: Project[] = [
  {
    id: "9",
    slug: "mdqm",
    title: "MDQM / MDM Data Governance Platform",
    description:
      "Enterprise master data management platform for dataset governance, quality validation, and metadata enrichment.",
    problem:
      "Organizations lacked a centralized system to manage master datasets, enforce data quality rules, and profile incoming data before it reached downstream analytics pipelines.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Snowflake",
      "Tailwind CSS",
      "JWT",
      "Python",
    ],
    keyFeatures: [
      "Dataset upload, versioning, and quarantine workflows",
      "Dynamic rules engine with configurable validation",
      "Data profiling with column-level statistics",
      "AI-powered column description generation",
      "Metadata management and governance dashboard",
    ],
    challenges: [
      "Designing a flexible rules engine that supports dynamic validation without hard-coding business logic",
      "Synchronizing operational data between PostgreSQL and Snowflake while maintaining consistency",
      "Building responsive dashboards that handle large dataset previews without degrading UX",
    ],
    businessImpact:
      "Reduced manual data validation effort and gave data teams a single platform to govern, profile, and trust their master datasets before analytics consumption.",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "Snowflake",
      "React",
      "Data Governance",
      "ETL",
    ],
    href: "https://mdm-data-governance-platform-fronte.vercel.app/login",
    repo: "https://github.com/Sudharsen27",
    caseStudyHref: "/projects/mdqm",
    featured: true,
  },
  {
    id: "7",
    slug: "shop-sphere",
    title: "Shop Sphere",
    description:
      "Full-stack e-commerce platform with secure checkout, product catalog, and payment integration.",
    problem:
      "Small businesses needed a production-ready online store with secure authentication, inventory management, and seamless payment processing.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "JWT-based authentication and protected routes",
      "Product catalog with search and filtering",
      "Shopping cart with persistent state",
      "Razorpay payment gateway integration",
      "RESTful API with role-based access",
    ],
    challenges: [
      "Handling payment webhook reliability and order state consistency",
      "Designing a cart system that syncs across sessions and devices",
      "Optimizing product listing pages for mobile-first performance",
    ],
    businessImpact:
      "Delivered a deployable e-commerce solution enabling merchants to accept online orders with secure payments and a polished shopping experience.",
    tags: ["Next.js", "Node.js", "MongoDB", "Razorpay", "JWT"],
    href: "https://shopsphere-frontend-self.vercel.app/",
    repo: "https://github.com/Sudharsen27",
    caseStudyHref: "/projects/shop-sphere",
    featured: true,
  },
  {
    id: "6",
    slug: "medilink",
    title: "MediLink",
    description:
      "Healthcare appointment booking platform with secure patient–provider workflows.",
    problem:
      "Healthcare providers needed a reliable way for patients to book appointments online while keeping sensitive data protected behind authenticated APIs.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "REST API",
    ],
    keyFeatures: [
      "Patient registration and JWT-secured login",
      "Appointment scheduling with availability checks",
      "Protected REST APIs with input validation",
      "Responsive UI optimized for mobile patients",
      "PostgreSQL-backed persistence with relational schema",
    ],
    challenges: [
      "Modeling appointment conflicts and provider availability in PostgreSQL",
      "Implementing secure session handling without exposing patient data",
      "Building accessible forms for diverse user demographics",
    ],
    businessImpact:
      "Streamlined appointment booking for healthcare providers, reducing phone-based scheduling overhead and improving patient access.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT", "Healthcare"],
    href: "https://medilink-frontend-ml45.vercel.app/",
    repo: "https://github.com/Sudharsen27",
    caseStudyHref: "/projects/medilink",
    featured: true,
  },
  {
    id: "8",
    slug: "student-dashboard",
    title: "Student Dashboard",
    description:
      "Analytics dashboard for managing and visualizing student academic performance data.",
    problem:
      "Educational administrators needed an interactive tool to search, analyze, and manage student marks stored in a cloud data warehouse.",
    technologies: [
      "Next.js",
      "Node.js",
      "Snowflake",
      "REST API",
      "Data Visualization",
    ],
    keyFeatures: [
      "Search, sort, and filter student records",
      "CRUD operations for marks management",
      "Snowflake-backed queries for analytics",
      "Interactive data tables and summary views",
      "Responsive dashboard layout",
    ],
    challenges: [
      "Optimizing Snowflake query performance for real-time dashboard interactions",
      "Building a Node.js API layer that abstracts warehouse complexity from the frontend",
      "Handling pagination and large result sets without UI lag",
    ],
    businessImpact:
      "Gave administrators a single dashboard to manage student performance data, replacing manual spreadsheet workflows with a live analytics interface.",
    tags: ["Next.js", "Snowflake", "Node.js", "Dashboard"],
    href: "https://student-dashboard-snowflake-fronten.vercel.app/",
    repo: "https://github.com/Sudharsen27",
    caseStudyHref: "/projects/student-dashboard",
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    id: "4",
    slug: "job-board",
    title: "Job Board Platform",
    description:
      "Full-stack job portal with role-based access and secure user registration.",
    problem:
      "Job seekers and employers needed a platform to post listings and manage applications with proper access controls.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    keyFeatures: [
      "JWT authentication with RBAC",
      "Job listing search and filters",
      "Employer job posting workflow",
      "RESTful API integration",
    ],
    challenges: [
      "Implementing role-based permissions across employer and candidate flows",
      "Designing scalable job listing queries with MongoDB indexing",
    ],
    businessImpact:
      "Enabled structured job discovery and application management in a single deployable web application.",
    tags: ["MERN", "JWT", "REST API", "RBAC"],
    href: "https://jobboardapplication.pages.dev/",
    repo: "https://github.com/Sudharsen27",
  },
  {
    id: "2",
    slug: "energy-lab",
    title: "Energy Lab",
    description:
      "Modern component-based frontend with mobile-first responsive design.",
    problem:
      "An energy research organization needed a fast, engaging web presence optimized for mobile visitors.",
    technologies: ["React", "Astro", "Responsive Design"],
    keyFeatures: [
      "Component-based architecture",
      "Mobile-first responsive layout",
      "Performance-optimized asset delivery",
    ],
    challenges: [
      "Balancing rich visual content with fast page load on mobile networks",
    ],
    businessImpact:
      "Improved user engagement through a polished, performant frontend deployed globally.",
    tags: ["React", "Responsive", "Performance"],
    href: "https://energ-astro-home.pages.dev/",
    repo: "https://github.com/Sudharsen27",
  },
  {
    id: "3",
    slug: "galaxy-power",
    title: "Galaxy Power",
    description:
      "Structured corporate website with intuitive navigation and responsive layout.",
    problem:
      "A corporate client needed a professional web presence with clear information architecture and cross-device compatibility.",
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
    keyFeatures: [
      "Structured page hierarchy",
      "Responsive corporate layout",
      "SEO-friendly routing",
    ],
    challenges: [
      "Designing navigation that scales across desktop and mobile viewports",
    ],
    businessImpact:
      "Delivered a professional corporate site that improved brand visibility and user navigation.",
    tags: ["Next.js", "Responsive", "Corporate"],
    href: "https://galaxypower-home.pages.dev/",
    repo: "https://github.com/Sudharsen27",
  },
  {
    id: "5",
    slug: "web-applications",
    title: "Web Applications",
    description:
      "Multi-feature web application with reusable components and form processing.",
    problem:
      "A business needed a flexible web app with contact forms, email sync, and modular UI components.",
    technologies: ["Next.js", "Tailwind CSS", "Web3Forms"],
    keyFeatures: [
      "Reusable component library",
      "Web3Forms integration",
      "Email synchronization",
      "Responsive multi-page layout",
    ],
    challenges: [
      "Integrating third-party form services while maintaining consistent UX",
    ],
    businessImpact:
      "Provided a maintainable web application foundation that could be extended with new features quickly.",
    tags: ["Next.js", "Tailwind CSS", "Web3Forms"],
    href: "https://webapplicationss.netlify.app/",
    repo: "https://github.com/Sudharsen27",
  },
  {
    id: "1",
    slug: "school-of-sustainability",
    title: "School of Sustainability",
    description:
      "SEO-optimized educational website with reusable UI components.",
    problem:
      "An educational institution needed a globally delivered, search-engine-friendly website.",
    technologies: ["Next.js", "Astro", "Cloudflare Pages", "SEO"],
    keyFeatures: [
      "SEO-optimized pages",
      "Reusable UI components",
      "Cloudflare Pages deployment",
    ],
    challenges: [
      "Achieving strong SEO scores while maintaining a modern component architecture",
    ],
    businessImpact:
      "Increased online visibility for the institution with fast global content delivery.",
    tags: ["Next.js", "Cloudflare Pages", "SEO"],
    href: "https://schoolofsustainability-astro-home.pages.dev/",
    repo: "https://github.com/Sudharsen27",
  },
];

/** @deprecated Use featuredProjects + otherProjects */
export const projectsData: Project[] = [
  ...featuredProjects,
  ...otherProjects,
];
