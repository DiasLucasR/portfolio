import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

export function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" title={t.skills.title}>
      <dl className="divide-y divide-[var(--hair)]">
        {t.skills.groups.map((group) => (
          <div
            key={group.label}
            className="grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <dt className="label pt-1">{group.label}</dt>
            <dd className="leading-relaxed text-body">
              {group.items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
