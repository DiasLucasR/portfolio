"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/content/i18n";
import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

export function About() {
  const { t } = useLang();
  return (
    <Section id="about" title={t.about.title}>
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  const { t } = useLang();
  return (
    <Section id="experience" title={t.experience.title}>
      <ol className="space-y-12">
        {t.experience.items.map((job) => (
          <li key={job.company} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <p className="pt-0.5 text-sm text-muted-foreground">{job.period}</p>
            <div>
              <h3 className="font-medium">
                {job.role} · <span className="text-brand">{job.company}</span>
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {job.bullets.map((b, i) => (
                  <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" title={t.skills.title}>
      <div className="space-y-8">
        {t.skills.groups.map((group) => (
          <div key={group.label} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <p className="pt-1 text-sm text-muted-foreground">{group.label}</p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="surface rounded-full border border-hair px-3 py-1 text-sm text-body"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  const { t } = useLang();
  return (
    <Section id="education" title={t.education.title}>
      <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
        <p className="pt-0.5 text-sm text-muted-foreground">{t.education.degreeLabel}</p>
        <div>
          <h3 className="font-medium">{t.education.degree}</h3>
          <p className="text-sm text-muted-foreground">{t.education.school}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
        <p className="pt-0.5 text-sm text-muted-foreground">{t.education.languagesTitle}</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {t.education.languages.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Contact() {
  const { t } = useLang();
  const socials = [
    { href: CONTACT.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: CONTACT.github, icon: FaGithub, label: "GitHub" },
    { href: CONTACT.phoneHref, icon: FaWhatsapp, label: "WhatsApp" },
  ];
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
      <div className="mt-8 flex gap-1">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-brand"
          >
            <s.icon size={20} />
          </a>
        ))}
      </div>
    </Section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="container-page border-t border-border py-10 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} {CONTACT.name}. {t.footer}</p>
    </footer>
  );
}
