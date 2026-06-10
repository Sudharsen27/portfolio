"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

function isElementInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

export function useInView<T extends HTMLElement = HTMLElement>({
  threshold = 0,
  rootMargin = "0px",
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Content already on screen (e.g. /projects on mobile) must not stay hidden
    if (isElementInViewport(el)) {
      setInView(true);
    }

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
