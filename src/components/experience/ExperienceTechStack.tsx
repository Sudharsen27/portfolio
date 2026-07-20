import { SkillBadge } from "@/src/components/skills/SkillBadge";
import { Code2 } from "lucide-react";

interface ExperienceTechStackProps {
  technologies: string[];
}

export function ExperienceTechStack({ technologies }: ExperienceTechStackProps) {
  return (
    <div className="mt-4">
      <div className="mb-2.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
        <Code2 className="h-3.5 w-3.5" aria-hidden />
        Technologies
      </div>
      <ul
        className="flex flex-wrap gap-2"
        aria-label="Technologies used"
      >
        {technologies.map((tech) => (
          <li key={tech}>
            <SkillBadge name={tech} />
          </li>
        ))}
      </ul>
    </div>
  );
}
