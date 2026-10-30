import { motion } from "framer-motion";
import { CONTACT } from "@/content/i18n";
import { useLang } from "@/content/language-provider";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="container-page pt-16 pb-24 sm:pt-24 sm:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid items-end gap-12 lg:grid-cols-[1fr_16rem]"
      >
        <div>
          <p className="label mb-8 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" />
            Open to opportunities
          </p>

          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] tracking-tight">
            {CONTACT.name}
          </h1>
          <p className="mt-6 font-display text-2xl italic text-brand sm:text-3xl">
            {t.hero.role}
          </p>

          <p className="mt-10 max-w-xl text-pretty text-base leading-relaxed text-dim sm:text-lg">
            {t.hero.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-full bg-[var(--blue)] px-6 py-3 text-sm font-medium text-[color:var(--accent-ink)] transition-colors hover:bg-[var(--blue-hover)]"
            >
              {t.hero.emailCta}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-hair-strong px-6 py-3 text-sm font-medium text-body transition-colors hover:border-brand hover:text-brand"
            >
              {t.hero.resumeCta}
            </a>
            <SocialLinks className="flex items-center gap-1" iconSize={18} />
          </div>
        </div>

        <img
          src="/images/perfil.png"
          alt={CONTACT.name}
          width={256}
          height={320}
          className="order-first aspect-[4/5] w-40 rounded-md object-cover grayscale sm:w-48 lg:order-none lg:w-full"
        />
      </motion.div>
    </section>
  );
}
