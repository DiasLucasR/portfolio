"use client";

import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

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
