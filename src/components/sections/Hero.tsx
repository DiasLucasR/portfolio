"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/content/i18n";
import { useLang } from "@/content/language-provider";
import { SocialLinks } from "@/components/SocialLinks";

const metrics = [
  { value: "5+", label: "years building products" },
  { value: "20%", label: "ops gains delivered" },
  { value: "Full-stack", label: "from UI to infra" },
];

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="container-page relative pt-20 pb-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 w-full max-w-3xl rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.18),transparent_62%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="mb-8 flex items-center gap-4">
          <span className="soft-float block rounded-full p-[2px] [background:linear-gradient(120deg,var(--blue),var(--violet))]">
            <img
              src="/images/perfil.png"
              alt="Lucas Dias"
              width={64}
              height={64}
              className="block rounded-full object-cover"
            />
          </span>
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-ink">{CONTACT.name}</p>
            <p className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" />
              Open to opportunities
            </p>
          </div>
        </div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hair bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-dim">
          <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
          {t.hero.role}
        </div>

        <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="brand-gradient">Senior</span> Full-Stack
          <br className="hidden sm:block" /> Software Engineer
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[color:var(--accent-ink)] transition-all duration-300 [background:var(--blue)] hover:-translate-y-0.5 hover:[background:var(--blue-hover)]"
            style={{ boxShadow: "0 0 28px var(--glow-cyan)" }}
          >
            {t.hero.emailCta}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-hair-strong px-5 py-2.5 text-sm font-medium text-body transition-colors hover:border-brand hover:text-brand"
          >
            {t.hero.resumeCta}
          </a>
          <SocialLinks className="ml-1 flex items-center gap-1" iconSize={18} />
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
              className="glass-panel rounded-2xl p-4"
            >
              <p className="font-display text-2xl text-ink">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
