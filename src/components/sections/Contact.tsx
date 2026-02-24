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
      className="py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Contact"
          subtitle="Reach out anytime—I'm happy to connect."
        />
        <div
          className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-6 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 md:p-8"
          style={
            inView
              ? {
                  opacity: 0,
                  animation: "fade-in-up 0.6s ease-out forwards",
                }
              : { opacity: 0 }
          }
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-4 transition-all hover:border-blue-500/40 hover:bg-zinc-700/50"
              >
                <span className="text-sm font-medium uppercase tracking-wider text-blue-400">
                  {item.label}
                </span>
                <span className="min-w-0 flex-1 truncate text-right text-sm font-medium text-zinc-200 group-hover:text-white">
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
