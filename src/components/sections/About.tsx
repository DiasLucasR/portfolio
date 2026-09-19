"use client";

import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

export function About() {
  const { t } = useLang();
  return (
    <Section id="about" title={t.about.title}>
      <div className="glass-panel rounded-3xl p-6 sm:p-8">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
