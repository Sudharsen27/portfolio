import {
  Cloud,
  Code2,
  Database,
  Monitor,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
};

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className = "h-4 w-4" }: SkillIconProps) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon className={className} aria-hidden />;
}
