"use client";

import { contactData } from "@/src/data/contact";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";

const contactItems = [
  {
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
  },
  ...(contactData.github
    ? [
        {
          label: "GitHub",
          value: "Sudharsen27",
          href: contactData.github,
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
  ...(contactData.location
    ? [
        {
          label: "Location",
          value: contactData.location,
          href: undefined as string | undefined,
        },
      ]
    : []),
];

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" ref={ref} className="scroll-mt-24 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact" subtitle={contactData.cta} />
        <div
          className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-4 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6 md:p-8"
          style={fadeInUpStyle(inView)}
        >
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-6">
            {contactItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-h-[44px] flex-col justify-center gap-1 rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-3 transition-all hover:border-blue-500/40 hover:bg-zinc-700/50 sm:min-h-0 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
                    {item.label}
                  </span>
                  <span className="min-w-0 truncate text-left text-sm font-medium text-zinc-200 group-hover:text-white sm:flex-1 sm:text-right">
                    {item.value}
                  </span>
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex min-h-[44px] flex-col justify-center gap-1 rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-3 sm:min-h-0 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
                    {item.label}
                  </span>
                  <span className="min-w-0 text-left text-sm font-medium text-zinc-200 sm:flex-1 sm:text-right">
                    {item.value}
                  </span>
                </div>
              )
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 border-t border-zinc-700/50 pt-6">
            <a
              href={`mailto:${contactData.email}?subject=Opportunity%20%E2%80%94%20Sundar%20Lingam`}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.98]"
            >
              Get in Touch
            </a>
            {contactData.linkedIn && (
              <a
                href={contactData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-600 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-800 active:scale-[0.98]"
              >
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
