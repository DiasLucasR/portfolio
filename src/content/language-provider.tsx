"use client";

import { dictionaries } from "./i18n";

/**
 * The site is English-only. This hook keeps a stable shape so section
 * components don't need to know that.
 */
export function useLang() {
  return { t: dictionaries.en };
}
