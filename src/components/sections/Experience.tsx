"use client";

import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

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
