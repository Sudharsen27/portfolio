/**
 * Public Supabase resume URL — used when NEXT_PUBLIC_RESUME_URL is not set
 * (e.g. production builds where .env is not deployed).
 *
 * Env var still takes precedence so you can override per environment.
 *
 * To update the resume in the future, upload a new PDF with the same
 * filename to Supabase Storage and overwrite the existing file.
 * No code changes are required.
 */
export const DEFAULT_RESUME_URL =
  "https://ukkhbrdxrfgxqivqyakn.supabase.co/storage/v1/object/public/assets/Sundar_Lingam_Resume.pdf";

export const resumeUrl =
  process.env.NEXT_PUBLIC_RESUME_URL?.trim() || DEFAULT_RESUME_URL;
