import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { VisitNotifier } from "@/src/components/VisitNotifier";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sundar Lingam | Software Engineer",
  description:
    "Software Engineer specializing in React.js, Next.js, TypeScript, FastAPI, PostgreSQL, Snowflake, AWS, and Docker.",
  icons: {
    icon: "/log.png",
    apple: "/log.png",
  },
  openGraph: {
    title: "Sundar Lingam | Software Engineer",
    description:
      "Software Engineer specializing in React.js, Next.js, TypeScript, FastAPI, PostgreSQL, Snowflake, AWS, and Docker.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakarta.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen font-sans antialiased">
        {children}
        <Analytics />
        <VisitNotifier />
      </body>
    </html>
  );
}
