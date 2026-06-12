import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Server-side resume redirect — reads NEXT_PUBLIC_RESUME_URL at request time.
 * Hero button always opens /api/resume so production works without
 * client-side env inlining at build time.
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

  // Bust CDN/browser cache so updated Supabase PDFs show immediately
  const redirectUrl = url.includes("?")
    ? `${url}&t=${Date.now()}`
    : `${url}?t=${Date.now()}`;

  return NextResponse.redirect(redirectUrl, 302);
}
