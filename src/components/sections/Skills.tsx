"use client";

import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

export function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" title={t.skills.title}>
      <div className="space-y-6">
        {t.skills.groups.map((group) => (
          <div
            key={group.label}
            className="glass-panel grid gap-3 rounded-2xl p-4 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:p-5"
          >
            <p className="pt-1 text-sm font-medium text-muted-foreground">
              {group.label}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="surface rounded-full border border-hair px-3 py-1.5 text-sm text-body transition-transform duration-200 hover:-translate-y-0.5"
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
