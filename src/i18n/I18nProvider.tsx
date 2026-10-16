import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en } from './en';
import { ar } from './ar';
import type { Lang, Localized, Translations } from './types';

const dictionaries: Record<Lang, Translations> = { en, ar };

interface I18nContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  /** UI strings for the active language */
  t: Translations;
  /** Pick the active-language value of a Localized field from src/data */
  l: <T>(value: Localized<T>) => T;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function initialLang(): Lang {
  if (typeof document === 'undefined') return 'en';
  return document.documentElement.lang === 'ar' ? 'ar' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang, dir]);

  const toggleLang = useCallback(() => setLang((prev) => (prev === 'en' ? 'ar' : 'en')), []);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      dir,
      t: dictionaries[lang],
      l: (v) => v[lang],
      setLang,
      toggleLang,
    }),
    [lang, dir, toggleLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
