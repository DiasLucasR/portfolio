"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import perfil from "@/../public/images/perfil.png";
import { CONTACT } from "@/content/i18n";
import { useLang } from "@/content/language-provider";

export function Hero() {
  const { t } = useLang();

  const socials = [
    { href: CONTACT.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: CONTACT.github, icon: FaGithub, label: "GitHub" },
    { href: CONTACT.phoneHref, icon: FaWhatsapp, label: "WhatsApp" },
  ];

  return (
    <section id="top" className="container-page pt-20 pb-24 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-8 flex items-center gap-4">
          <span className="rounded-full p-[2px] [background:linear-gradient(120deg,var(--blue),var(--violet))]">
            <Image
              src={perfil}
              alt="Lucas Dias"
              width={60}
              height={60}
              priority
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

        <h1 className="max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          <span className="brand-gradient">Senior</span> Full-Stack
          <br className="hidden sm:block" /> Software Engineer
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[color:var(--accent-ink)] transition-colors [background:var(--blue)] hover:[background:var(--blue-hover)]"
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
          <div className="ml-1 flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-brand"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
