import type { CaseStudyData } from "@/src/types";

export const medilinkCaseStudy: CaseStudyData = {
  slug: "medilink",
  title: "MediLink",
  subtitle:
    "Secure healthcare appointment booking platform with JWT authentication and PostgreSQL-backed scheduling.",
  liveUrl: "https://medilink-frontend-ml45.vercel.app/",
  repoUrl: "https://github.com/Sudharsen27",
  overview:
    "MediLink is a full-stack healthcare appointment booking application that connects patients with providers through a secure, responsive web interface. Built with React on the frontend and Node.js/Express on the backend, it uses PostgreSQL for relational data storage and JWT for authenticated access to sensitive patient and appointment records.",
  problemStatement:
    "Healthcare providers still rely heavily on phone-based appointment scheduling, which is time-consuming for staff and inconvenient for patients. An online booking system must handle appointment conflicts, protect patient data, and work reliably on mobile devices — while meeting the security expectations of healthcare workflows.",
  solutionArchitecture:
    "MediLink follows a classic three-tier pattern: a React SPA handles patient registration, login, and appointment booking UI. An Express API layer enforces JWT authentication, input validation, and business logic for scheduling conflicts. PostgreSQL stores users, providers, time slots, and appointments in a normalized relational schema with foreign-key constraints.",
  architectureDiagram: `┌──────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│    React SPA     │────▶│  Express REST API │────▶│   PostgreSQL    │
│  (Responsive UI) │     │  (JWT + Validation)│    │ Users/Appts     │
└──────────────────┘     └──────────────────┘     └─────────────────┘
         │                        │
         ▼                        ▼
   Protected Routes         Conflict Detection
   Mobile-First Forms       Availability Checks`,
  techStack: [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "JWT",
    "REST API",
  ],
  keyFeatures: [
    {
      title: "Patient Registration & Login",
      description:
        "Secure account creation with password hashing and JWT-issued sessions for authenticated access to booking features.",
    },
    {
      title: "Appointment Scheduling",
      description:
        "Patients select providers, choose available time slots, and book appointments with real-time conflict detection.",
    },
    {
      title: "Provider Availability",
      description:
        "Backend logic checks provider schedules and existing bookings to prevent double-booking and invalid time slots.",
    },
    {
      title: "Protected REST APIs",
      description:
        "All sensitive endpoints require valid JWT tokens with server-side validation and sanitized input handling.",
    },
    {
      title: "Responsive Mobile UI",
      description:
        "Touch-friendly forms and navigation designed for patients booking appointments on phones and tablets.",
    },
    {
      title: "Relational Data Model",
      description:
        "PostgreSQL schema with users, providers, appointments, and availability tables linked by foreign keys.",
    },
  ],
  sections: [
    {
      id: "patient-auth",
      title: "Patient Authentication",
      content:
        "Patients register with personal details and credentials. Passwords are hashed with bcrypt before storage. Login returns a JWT containing the user ID and role, which the React app stores and attaches to subsequent API requests via Authorization headers.",
    },
    {
      id: "appointment-booking",
      title: "Appointment Booking",
      content:
        "The booking flow guides patients through provider selection, date picking, and time slot selection. Before confirming, the API runs a conflict check query against existing appointments for the selected provider and time window.",
    },
    {
      id: "availability-logic",
      title: "Availability & Conflict Detection",
      content:
        "Provider availability is defined as recurring weekly schedules plus exception dates. When a booking request arrives, the API queries overlapping appointments and rejects slots that conflict — returning clear error messages to the frontend.",
    },
    {
      id: "api-endpoints",
      title: "API Endpoints",
      content: [
        "POST /api/auth/register, /api/auth/login — patient authentication",
        "GET /api/providers — list available healthcare providers",
        "GET /api/appointments/availability — fetch open time slots",
        "POST /api/appointments — create a new appointment",
        "GET /api/appointments — retrieve patient's appointment history",
      ],
    },
    {
      id: "database-schema",
      title: "Database Schema",
      content:
        "PostgreSQL tables for users (patients), providers, provider_schedules, appointments, and appointment_status. Indexes on provider_id and appointment_datetime accelerate conflict detection queries. Foreign keys enforce referential integrity between patients, providers, and bookings.",
    },
  ],
  challenges: [
    "Modeling appointment conflicts and provider availability with edge cases like overlapping slots and timezone handling",
    "Implementing secure JWT session management without exposing patient data in client-side storage",
    "Building accessible, mobile-friendly forms for patients with varying technical comfort levels",
    "Ensuring API input validation prevents SQL injection and invalid booking states",
  ],
  lessonsLearned: [
    "Healthcare scheduling demands strict conflict detection at the database query level, not just the UI",
    "JWT expiration and secure storage patterns are critical when handling sensitive patient workflows",
    "Mobile-first form design significantly improves adoption for patient-facing healthcare apps",
    "Normalized PostgreSQL schemas make appointment auditing and reporting straightforward as requirements grow",
  ],
};
