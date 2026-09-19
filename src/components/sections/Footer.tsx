"use client";

import { CONTACT } from "@/content/i18n";
import { useLang } from "@/content/language-provider";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="container-page border-t border-hair py-10 text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {CONTACT.name}. {t.footer}
      </p>
    </footer>
  );
}
