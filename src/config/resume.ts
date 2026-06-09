/**
 * Resume URL is read from an environment variable so the PDF location can
 * change per environment (local, preview, production) without code edits.
 *
 * To update the resume in the future, upload a new PDF with the same
 * filename to Supabase Storage and overwrite the existing file.
 * No code changes are required.
 */
export const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL ?? "";
