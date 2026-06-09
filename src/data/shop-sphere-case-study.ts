import type { CaseStudyData } from "@/src/types";

export const shopSphereCaseStudy: CaseStudyData = {
  slug: "shop-sphere",
  title: "Shop Sphere",
  subtitle:
    "Full-stack e-commerce platform with secure authentication, product catalog, cart, and Razorpay payments.",
  liveUrl: "https://shopsphere-frontend-self.vercel.app/",
  repoUrl: "https://github.com/Sudharsen27",
  overview:
    "Shop Sphere is a production-ready e-commerce web application built for merchants who need a complete online store — from product browsing and cart management to secure checkout with Razorpay. The frontend is built with Next.js and Tailwind CSS, backed by a Node.js/Express REST API and MongoDB for flexible product and order storage.",
  problemStatement:
    "Small businesses launching online stores often rely on fragmented tools or rigid SaaS platforms that limit customization. They need secure user accounts, a manageable product catalog, persistent shopping carts, and reliable payment processing — all in a deployable full-stack application they can own and extend.",
  solutionArchitecture:
    "Shop Sphere uses a decoupled architecture: a Next.js frontend handles SSR, routing, and client-side cart state, communicating with an Express REST API over HTTPS. MongoDB stores users, products, orders, and cart sessions. JWT middleware protects authenticated routes, while Razorpay handles payment initiation and webhook-based order confirmation on the backend.",
  architectureDiagram: `┌──────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Next.js Store  │────▶│  Express REST API │────▶│     MongoDB     │
│  (Tailwind CSS)  │     │  (JWT Middleware) │     │ Products/Orders │
└────────┬─────────┘     └────────┬─────────┘     └─────────────────┘
         │                        │
         │                        ▼
         │               ┌─────────────────┐
         └──────────────▶│     Razorpay    │
                         │ Payment Gateway │
                         └─────────────────┘`,
  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Razorpay",
  ],
  keyFeatures: [
    {
      title: "Authentication & Authorization",
      description:
        "JWT-based login and registration with protected routes for cart, checkout, and order history — keeping user sessions secure across page navigations.",
    },
    {
      title: "Product Catalog",
      description:
        "Searchable, filterable product listings with category navigation, detail pages, and inventory-aware availability display.",
    },
    {
      title: "Shopping Cart",
      description:
        "Persistent cart state tied to authenticated users, supporting add/remove/update quantity with real-time total calculations.",
    },
    {
      title: "Razorpay Integration",
      description:
        "End-to-end payment flow with order creation, Razorpay checkout, and server-side webhook verification for payment confirmation.",
    },
    {
      title: "Order Management",
      description:
        "Order lifecycle tracking from placement through payment confirmation, with status updates stored in MongoDB.",
    },
    {
      title: "Responsive UI",
      description:
        "Mobile-first storefront design optimized for touch interactions, fast product discovery, and seamless checkout on all devices.",
    },
  ],
  sections: [
    {
      id: "authentication",
      title: "Authentication Flow",
      content:
        "Users register with email and password; credentials are hashed server-side before storage in MongoDB. On login, the API issues a signed JWT stored in the client. Protected API routes validate the token on every request, and the Next.js frontend redirects unauthenticated users away from cart and checkout pages.",
    },
    {
      id: "product-catalog",
      title: "Product Catalog",
      content:
        "Products are stored as MongoDB documents with fields for name, description, price, category, images, and stock count. The frontend fetches paginated listings via REST endpoints and supports client-side search and category filtering for fast browsing.",
    },
    {
      id: "cart-checkout",
      title: "Cart & Checkout",
      content:
        "Cart items are persisted per user in the database, surviving session restarts. Checkout creates a pending order, initiates a Razorpay payment session, and updates order status upon successful webhook callback — ensuring payment and inventory stay in sync.",
    },
    {
      id: "api-design",
      title: "REST API Design",
      content: [
        "POST /auth/register, /auth/login — user authentication",
        "GET /products, /products/:id — catalog browsing",
        "GET/POST/PUT/DELETE /cart — cart CRUD operations",
        "POST /orders, GET /orders — order placement and history",
        "POST /payments/webhook — Razorpay payment verification",
      ],
    },
    {
      id: "database-design",
      title: "Database Design",
      content:
        "MongoDB collections for users, products, carts, and orders with indexed fields on email, product category, and order status. Embedded cart line items reference product IDs, and orders snapshot product prices at purchase time to preserve historical accuracy.",
    },
  ],
  challenges: [
    "Ensuring Razorpay webhook reliability and idempotent order updates when payment callbacks arrive out of order",
    "Designing a cart system that stays consistent when users add items across multiple browser tabs",
    "Optimizing product listing queries and image loading for fast mobile-first page loads",
    "Handling edge cases in checkout — expired sessions, insufficient stock, and failed payments gracefully",
  ],
  lessonsLearned: [
    "Payment integrations require server-side verification — never trust client-side payment success alone",
    "Snapshotting product prices on orders prevents data inconsistencies when catalog prices change",
    "JWT expiry and refresh strategies matter for e-commerce sessions that span long browsing periods",
    "MongoDB's flexible schema works well for product catalogs but needs disciplined indexing for search performance",
  ],
};
