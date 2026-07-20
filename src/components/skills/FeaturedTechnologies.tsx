import { SkillBadge } from "@/src/components/skills/SkillBadge";

interface FeaturedTechnologiesProps {
  technologies: string[];
}

export function FeaturedTechnologies({
  technologies,
}: FeaturedTechnologiesProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
        Featured Technologies
      </h3>
      <ul
        className="mt-5 flex flex-wrap gap-2.5 sm:gap-3"
        aria-label="Featured technologies"
      >
        {technologies.map((name) => (
          <li key={name}>
            <SkillBadge name={name} featured />
          </li>
        ))}
      </ul>
    </div>
  );
}
