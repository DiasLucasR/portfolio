"use client";

import { CONTACT } from "@/content/i18n";
import { useLang } from "@/content/language-provider";
import { SocialLinks } from "@/components/SocialLinks";
import { Section } from "./Section";

export function Contact() {
  const { t } = useLang();
  return (
    <Section id="contact" title={t.contact.title}>
      <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
        {t.contact.subtitle}
      </p>
      <dl className="mt-8 space-y-4">
        <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <dt className="text-sm text-muted-foreground">{t.contact.emailLabel}</dt>
          <dd>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-underline text-brand"
            >
              {CONTACT.email}
            </a>
          </dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <dt className="text-sm text-muted-foreground">{t.contact.phoneLabel}</dt>
          <dd>
            <a href={CONTACT.phoneHref} target="_blank" rel="noopener noreferrer" className="link-underline">
              {CONTACT.phone}
            </a>
          </dd>
        </div>
      </dl>
      <SocialLinks className="mt-8 flex gap-1" iconSize={20} />
    </Section>
  );
}
