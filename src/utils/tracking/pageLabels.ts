/** Map routes and section IDs to human-readable page labels for visitor emails. */
export function pathnameToPageLabel(pathname: string): string {
  if (pathname === "/") return "Home";
  if (pathname === "/about") return "About";
  if (pathname === "/skills") return "Skills";
  if (pathname === "/experience") return "Experience";
  if (pathname === "/projects") return "Projects";
  if (pathname === "/certifications") return "Certifications";
  if (pathname === "/contact") return "Contact";

  const caseStudy = pathname.match(/^\/projects\/([^/]+)$/);
  if (caseStudy) {
    const slug = caseStudy[1]
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return `Case Study: ${slug}`;
  }

  return pathname.replace(/^\//, "") || "Home";
}

export function sectionIdToPageLabel(sectionId: string): string {
  const map: Record<string, string> = {
    hero: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    focus: "Current Focus",
    certifications: "Certifications",
    contact: "Contact",
  };
  return map[sectionId] ?? sectionId;
}
