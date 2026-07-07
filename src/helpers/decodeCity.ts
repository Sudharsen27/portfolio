/** Decode URL-encoded city names from Vercel headers (e.g. San%20Jose → San Jose). */
export function decodeCity(value: string | undefined | null): string | undefined {
  if (!value) return undefined;
  try {
    return decodeURIComponent(value.replace(/\+/g, " ")).trim() || undefined;
  } catch {
    return value.trim() || undefined;
  }
}
