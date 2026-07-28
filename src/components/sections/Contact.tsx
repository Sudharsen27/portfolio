"use client";

import { ContactInfoCard } from "@/src/components/contact/ContactInfoCard";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { contactData } from "@/src/data/contact";
import { useInView, fadeInUpStyle } from "@/src/hooks/useInView";
import { trackVisitorEvent } from "@/src/utils/tracking/visitorEvents";

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  const infoCards = [
    {
      label: "Email",
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      icon: "Mail",
      onClick: () => trackVisitorEvent("email_clicked"),
    },
    ...(contactData.phone
      ? [
          {
            label: "Phone",
            value: contactData.phone,
            href: `tel:${contactData.phone.replace(/\s+/g, "")}`,
            icon: "Phone",
          },
        ]
      : []),
    ...(contactData.location
      ? [
          {
            label: "Location",
            value: contactData.location,
            icon: "MapPin",
          },
        ]
      : []),
    ...(contactData.portfolioUrl
      ? [
          {
            label: "Portfolio Website",
            value: contactData.portfolioUrl.replace(/^https?:\/\//, ""),
            href: contactData.portfolioUrl,
            icon: "Globe",
          },
        ]
      : []),
    ...(contactData.github
      ? [
          {
            label: "GitHub",
            value: "Sudharsen27",
            href: contactData.github,
            icon: "Github",
            onClick: () => trackVisitorEvent("github_clicked"),
          },
        ]
      : []),
    ...(contactData.linkedIn
      ? [
          {
            label: "LinkedIn",
            value: "sundar-lingam",
            href: contactData.linkedIn,
            icon: "Linkedin",
            onClick: () => trackVisitorEvent("linkedin_clicked"),
          },
        ]
      : []),
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="scroll-mt-24 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact" subtitle={contactData.subtitle} />

        <div className="max-w-3xl space-y-8" style={fadeInUpStyle(inView)}>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {contactData.introTitle}
            </h3>
            <div className="mt-3 space-y-3">
              {contactData.introParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-zinc-400 sm:leading-7"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {infoCards.map((item) => (
              <ContactInfoCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
