import type { CaseStudyData } from "@/src/types";
import { mdqmCaseStudy } from "./mdqm-case-study";
import { nexoraCrmCaseStudy } from "./nexora-crm-case-study";
import { shopSphereCaseStudy } from "./shop-sphere-case-study";
import { medilinkCaseStudy } from "./medilink-case-study";
import { restaurantErpCaseStudy } from "./restaurant-erp-case-study";

export const caseStudies: Record<string, CaseStudyData> = {
  "restaurant-erp": restaurantErpCaseStudy,
  mdqm: mdqmCaseStudy,
  "nexora-crm": nexoraCrmCaseStudy,
  "shop-sphere": shopSphereCaseStudy,
  medilink: medilinkCaseStudy,
};

export const caseStudySlugs = Object.keys(caseStudies);

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies[slug];
}
