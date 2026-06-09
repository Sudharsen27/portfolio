import type { CaseStudyData } from "@/src/types";
import { mdqmCaseStudy } from "./mdqm-case-study";
import { shopSphereCaseStudy } from "./shop-sphere-case-study";
import { medilinkCaseStudy } from "./medilink-case-study";
import { studentDashboardCaseStudy } from "./student-dashboard-case-study";

export const caseStudies: Record<string, CaseStudyData> = {
  mdqm: mdqmCaseStudy,
  "shop-sphere": shopSphereCaseStudy,
  medilink: medilinkCaseStudy,
  "student-dashboard": studentDashboardCaseStudy,
};

export const caseStudySlugs = Object.keys(caseStudies);

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies[slug];
}
