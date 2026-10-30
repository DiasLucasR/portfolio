import { CONTACT } from "@/content/i18n";
import { useLang } from "@/content/language-provider";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="container-page grid items-end gap-12 pb-24 pt-16 sm:pb-32 sm:pt-24 lg:grid-cols-[1.4fr_1fr]"
    >
      <div>
        <p className="label">Available for new roles</p>
        <h1 className="mt-8 font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92] tracking-tight">
          {CONTACT.name}
        </h1>
        <p className="mt-6 font-display text-2xl italic text-body sm:text-3xl">
          {t.hero.role}
        </p>
      </div>

      <div className="lg:pb-3">
        <p className="max-w-md text-pretty text-base leading-relaxed text-body sm:text-lg">
          {t.hero.intro}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-sm bg-[var(--blue)] px-5 py-3 text-sm font-medium text-[color:var(--accent-ink)] hover:bg-[var(--blue-hover)]"
          >
            {t.hero.emailCta}
          </a>
          <SocialLinks className="flex items-center gap-1" iconSize={18} />
        </div>
      </div>
    </section>
  );
}
