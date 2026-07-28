import { SkillBadge } from "@/src/components/skills/SkillBadge";
import { SkillIcon } from "@/src/components/skills/SkillIcon";
import type { SkillCategory } from "@/src/types";
import type { CSSProperties } from "react";

interface SkillCategoryCardProps {
  category: SkillCategory;
  style?: CSSProperties;
  className?: string;
}

const cloudGroups: Array<{ title: string; items: string[] }> = [
  {
    title: "Containerization",
    items: ["Docker", "Amazon ECS (Fargate)", "Amazon ECR"],
  },
  {
    title: "Data Services",
    items: ["Amazon RDS (PostgreSQL)", "Amazon ElastiCache (Redis)"],
  },
  {
    title: "Networking & Security",
    items: ["Amazon VPC", "AWS IAM", "AWS Secrets Manager"],
  },
  {
    title: "Infrastructure",
    items: ["AWS CloudFormation", "AWS CDK", "AWS CLI"],
  },
];

export function SkillCategoryCard({
  category,
  style,
  className = "",
}: SkillCategoryCardProps) {
  const isCloudCard = category.title === "Cloud & DevOps";

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] sm:p-8 ${className}`.trim()}
      style={style}
    >
      <span
        className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
        aria-hidden
      />
      <h3 className="flex items-center gap-2 text-sm font-semibold tracking-tight text-blue-400 sm:text-[15px]">
        <SkillIcon name={category.icon} className="h-4 w-4 shrink-0" />
        {category.title}
      </h3>

      {isCloudCard ? (
        <div className="mt-5 space-y-5">
          {cloudGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {group.title}
              </p>
              <ul className="flex flex-wrap gap-3" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item}>
                    <SkillBadge name={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <ul className="flex flex-wrap gap-3" aria-label={category.title}>
            {category.items.map((item) => (
              <li key={item}>
                <SkillBadge name={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
