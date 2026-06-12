/**
 * Single source of truth for the resume URL.
 *
 * NEXT_PUBLIC_* variables are inlined at build time — set
 * NEXT_PUBLIC_RESUME_URL in Vercel (Production, Preview, Development)
 * and in .env.local for local dev.
 *
 * To update the resume in the future, upload a new PDF with the same
 * filename to Supabase Storage and overwrite the existing file.
 * No code changes are required.
 */
export const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL ?? "";

export function isResumeConfigured(): boolean {
  return Boolean(resumeUrl.trim());
}
