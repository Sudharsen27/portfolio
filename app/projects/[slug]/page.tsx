import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/src/components/layout/Navbar";
import { CaseStudyLayout } from "@/src/components/case-study/CaseStudyLayout";
import {
  caseStudySlugs,
  getCaseStudy,
} from "@/src/data/case-studies";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case Study Not Found | Sundar Lingam" };
  }

  return {
    title: `${study.title} Case Study | Sundar Lingam`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyLayout data={study} />
      </main>
    </>
  );
}
