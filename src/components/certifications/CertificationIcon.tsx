import {
  Award,
  Bot,
  Brain,
  Bug,
  Cloud,
  Code2,
  Database,
  Server,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Bot,
  Brain,
  Bug,
  Cloud,
  Code2,
  Database,
  Server,
};

interface CertificationIconProps {
  name: string;
  className?: string;
}

export function CertificationIcon({
  name,
  className = "h-5 w-5",
}: CertificationIconProps) {
  const Icon = iconMap[name] ?? Award;
  return <Icon className={className} aria-hidden />;
}
