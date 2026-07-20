import {
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Database,
  FolderKanban,
  Laptop,
  Layers3,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Laptop,
  Server,
  Database,
  Cloud,
  Code2,
  Layers3,
  Workflow,
  ShieldCheck,
  Briefcase,
  FolderKanban,
  Building2,
};

interface AboutIconProps {
  name: string;
  className?: string;
}

export function AboutIcon({ name, className = "h-4 w-4" }: AboutIconProps) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon className={className} aria-hidden />;
}
