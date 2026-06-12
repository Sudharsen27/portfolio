import { NextResponse } from "next/server";

/**
 * Server-side resume redirect — reads env at request time (not build time).
 * Use when NEXT_PUBLIC_RESUME_URL was not set during the Vercel build.
 */
export async function GET() {
  const url =
    process.env.NEXT_PUBLIC_RESUME_URL?.trim() ||
    process.env.RESUME_URL?.trim() ||
    "";

  if (!url) {
    console.warn("NEXT_PUBLIC_RESUME_URL is not configured");
    return NextResponse.json(
      { error: "Resume URL is not configured" },
      { status: 503 }
    );
  }

  return NextResponse.redirect(url, 302);
}
