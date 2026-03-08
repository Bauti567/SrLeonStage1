import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import es from "@/i18n/es.json";
import en from "@/i18n/en.json";

type Lang = "es" | "en";
type Translations = typeof es;

const translations: Record<Lang, Translations> = { es, en };

interface I18nContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    return saved === "en" ? "en" : "es";
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "es" ? "en" : "es");
  }, [lang, setLang]);

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
