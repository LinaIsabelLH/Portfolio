import { useState, createContext, useContext, ReactNode } from "react";
import { locales, LocaleKey, LocaleContent } from "./locales";

interface LocaleContextType {
  locale: LocaleKey;
  setLocale: (locale: LocaleKey) => void;
  t: LocaleContent;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleKey>("fr");

  const value = {
    locale,
    setLocale,
    t: locales[locale],
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
