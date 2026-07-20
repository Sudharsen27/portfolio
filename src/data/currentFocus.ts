export interface EngineeringFocusItem {
  title: string;
  description: string;
  icon: string;
}

export const currentFocusData = {
  title: "Engineering Focus",
  subtitle:
    "Core engineering domains I actively work in while continuously improving my expertise.",
  items: [
    {
      title: "Enterprise SaaS Development",
      description:
        "Build multi-tenant SaaS products with secure auth and scalable architecture.",
      icon: "Building2",
    },
    {
      title: "Backend Architecture",
      description:
        "Design scalable REST APIs and modular backend services.",
      icon: "Server",
    },
    {
      title: "Distributed Systems",
      description:
        "Architect resilient systems across services and data stores.",
      icon: "Network",
    },
    {
      title: "Cloud Engineering",
      description:
        "Deploy secure, scalable cloud-native applications.",
      icon: "Cloud",
    },
    {
      title: "Data Platforms",
      description:
        "Build reliable data pipelines and relational database solutions.",
      icon: "Database",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize APIs, queries, and frontend delivery for production scale.",
      icon: "Gauge",
    },
    {
      title: "API Design",
      description:
        "Design clear, secure, and maintainable REST API contracts.",
      icon: "Workflow",
    },
    {
      title: "System Design",
      description:
        "Model end-to-end systems with clear boundaries and trade-offs.",
      icon: "Boxes",
    },
  ] satisfies EngineeringFocusItem[],
};
