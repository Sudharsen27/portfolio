import {
  Boxes,
  Building2,
  Cloud,
  Code2,
  Database,
  Gauge,
  Network,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Server,
  Network,
  Cloud,
  Database,
  Gauge,
  Workflow,
  Boxes,
};

interface EngineeringFocusIconProps {
  name: string;
  className?: string;
}

export function EngineeringFocusIcon({
  name,
  className = "h-5 w-5",
}: EngineeringFocusIconProps) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon className={className} aria-hidden />;
}
