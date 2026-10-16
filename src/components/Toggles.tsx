import { AnimatePresence, m as motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { useTheme } from '../hooks/useTheme';
import { MoonIcon, SunIcon } from './Icons';

const btn =
  'glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-text transition-colors hover:border-border-strong hover:text-accent-2 cursor-pointer';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const label = theme === 'dark' ? t.toggles.toLight : t.toggles.toDark;
  return (
    <button type="button" onClick={toggleTheme} className={btn} aria-label={label} title={label}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function LangToggle() {
  const { t, toggleLang, lang } = useI18n();
  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`${btn} text-sm font-semibold`}
      aria-label={t.toggles.language}
      title={t.toggles.language}
      lang={lang === 'en' ? 'ar' : 'en'}
    >
      {t.toggles.languageShort}
    </button>
  );
}
