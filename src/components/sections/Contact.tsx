import { CONTACT } from "@/content/i18n";
import { useLang } from "@/content/language-provider";
import { SocialLinks } from "@/components/SocialLinks";
import { Section } from "./Section";

export function Contact() {
  const { t } = useLang();
  return (
    <Section id="contact" title={t.contact.title}>
      <p className="max-w-xl text-base leading-relaxed text-dim">
        {t.contact.subtitle}
      </p>
      <a
        href={`mailto:${CONTACT.email}`}
        className="link-underline mt-8 inline-block break-all font-display text-3xl text-brand sm:text-5xl"
      >
        {CONTACT.email}
      </a>
      <p className="mt-6 text-sm text-dim">
        {t.contact.phoneLabel}:{" "}
        <a
          href={CONTACT.phoneHref}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-body"
        >
          {CONTACT.phone}
        </a>
      </p>
      <SocialLinks className="mt-8 -ml-2 flex gap-1" iconSize={20} />
    </Section>
  );
}
