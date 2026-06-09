"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}

export function fadeInUpStyle(
  inView: boolean,
  delayMs = 0
): CSSProperties {
  return inView
    ? {
        opacity: 0,
        animation: "fade-in-up 0.55s ease-out forwards",
        animationDelay: `${delayMs}ms`,
      }
    : { opacity: 0 };
}
