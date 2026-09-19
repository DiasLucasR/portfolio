"use client";

import { createContext, useContext, type ReactNode } from "react";
import { dictionary } from "./i18n";

const LanguageContext = createContext(dictionary);

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext.Provider value={dictionary}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * The site is English-only. This hook keeps a stable shape so section
 * components don't need to know that.
 */
export function useLang() {
  return { t: useContext(LanguageContext) };
}
