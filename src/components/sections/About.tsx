import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

export function About() {
  const { t } = useLang();
  const [lead, ...rest] = t.about.paragraphs;
  return (
    <Section id="about" title={t.about.title}>
      <p className="font-display text-3xl leading-[1.2] text-ink sm:text-4xl">
        {lead}
      </p>
      <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-dim">
        {rest.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <dl className="mt-12 grid gap-px overflow-hidden rounded-sm border border-hair bg-[var(--hair)] sm:grid-cols-2">
        {t.facts.map((f) => (
          <div key={f.label} className="bg-[var(--bg)] p-5">
            <dt className="label">{f.label}</dt>
            <dd className="mt-2 text-sm text-body">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
