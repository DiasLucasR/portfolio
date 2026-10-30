import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

export function Education() {
  const { t } = useLang();
  return (
    <Section id="education" index="04" title={t.education.title}>
      <h3 className="font-display text-3xl text-ink sm:text-4xl">
        {t.education.degree}
      </h3>
      <p className="mt-1 text-sm text-dim">{t.education.school}</p>
      <p className="label mt-10">{t.education.languagesTitle}</p>
      <ul className="mt-3 space-y-1 text-sm text-body">
        {t.education.languages.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </Section>
  );
}
