"use client";

import { useRef, useState, useEffect } from "react";
import { contactData } from "@/src/data/contact";
import { SectionTitle } from "@/src/components/ui/SectionTitle";

const contactItems = [
  {
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
  },
  ...(contactData.phone
    ? [
        {
          label: "Call",
          value: contactData.phone,
          href: `tel:+91${contactData.phone.replace(/\D/g, "")}`,
        },
      ]
    : []),
  ...(contactData.linkedIn
    ? [
        {
          label: "LinkedIn",
          value: "sundar-lingam",
          href: contactData.linkedIn,
        },
      ]
    : []),
  ...(contactData.github
    ? [
        {
          label: "GitHub",
          value: "Sudharsen27",
          href: contactData.github,
        },
      ]
    : []),
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="scroll-mt-20 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact"
          subtitle="Reach out anytime—I'm happy to connect."
        />
        <div
          className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-4 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6 md:p-8"
          style={
            inView
              ? {
                  opacity: 0,
                  animation: "fade-in-up 0.6s ease-out forwards",
                }
              : { opacity: 0 }
          }
        >
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-6">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex min-h-[44px] flex-col justify-center gap-1 rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-3 transition-all hover:border-blue-500/40 hover:bg-zinc-700/50 sm:min-h-0 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
                  {item.label}
                </span>
                <span className="min-w-0 truncate text-left text-sm font-medium text-zinc-200 group-hover:text-white sm:flex-1 sm:text-right">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
