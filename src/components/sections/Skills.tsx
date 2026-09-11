"use client";

import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

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
