import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

export function About() {
  const { t } = useLang();
  const [lead, ...rest] = t.about.paragraphs;
  return (
    <Section id="about" index="01" title={t.about.title}>
      <p className="font-display text-3xl leading-[1.2] text-ink sm:text-4xl">
        {lead}
      </p>
      <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-dim">
        {rest.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
