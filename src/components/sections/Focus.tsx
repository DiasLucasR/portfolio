import { useLang } from "@/content/language-provider";
import { Section } from "./Section";

export function Focus() {
  const { t } = useLang();
  return (
    <Section id="focus" title={t.focus.title}>
      <ol className="divide-y divide-[var(--hair)]">
        {t.focus.items.map((item) => (
          <li
            key={item.title}
            className="grid gap-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[1fr_1.4fr] sm:gap-8"
          >
            <h3 className="font-display text-2xl text-ink">{item.title}</h3>
            <p className="text-sm leading-relaxed text-dim">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
