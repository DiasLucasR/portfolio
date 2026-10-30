import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

export function Experience() {
  const { t } = useLang();
  return (
    <Section id="experience" index="02" title={t.experience.title}>
      <ol className="divide-y divide-[var(--hair)]">
        {t.experience.items.map((job) => (
          <li key={job.company} className="py-10 first:pt-0 last:pb-0">
            <p className="label">{job.period}</p>
            <h3 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              {job.company}
            </h3>
            <p className="mt-1 text-sm text-brand">{job.role}</p>
            <ul className="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-dim">
              {job.bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-[var(--hair-strong)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
