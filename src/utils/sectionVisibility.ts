export const SECTION_ORDER = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "focus",
  "certifications",
  "contact",
] as const;

export type SectionId = (typeof SECTION_ORDER)[number];

/** On section routes (/projects, /about, …) only render that section and below. */
export function shouldShowSection(
  sectionId: SectionId,
  activeSection?: string
): boolean {
  if (!activeSection) return true;
  if (sectionId === "hero") return false;

  const activeIndex = SECTION_ORDER.indexOf(activeSection as SectionId);
  const sectionIndex = SECTION_ORDER.indexOf(sectionId);

  if (activeIndex === -1) return true;
  return sectionIndex >= activeIndex;
}
