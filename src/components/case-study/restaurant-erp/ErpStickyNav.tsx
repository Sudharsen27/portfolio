"use client";

import { useEffect, useState } from "react";
import { restaurantErpNav } from "@/src/data/restaurant-erp-case-study";

export function ErpStickyNav() {
  const [active, setActive] = useState(restaurantErpNav[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    restaurantErpNav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="sticky top-16 z-30 border-b border-zinc-800/80 bg-zinc-900/80 backdrop-blur-xl"
      aria-label="Case study sections"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 scrollbar-none">
        {restaurantErpNav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
              active === item.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
