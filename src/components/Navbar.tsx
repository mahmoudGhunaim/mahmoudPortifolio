import { AnimatePresence, m as motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { useActiveSection } from '../hooks/useActiveSection';
import { profile } from '../data/profile';
import { CloseIcon, MenuIcon } from './Icons';
import { LangToggle, ThemeToggle } from './Toggles';

export const NAV_IDS = ['home', 'about', 'experience', 'training', 'projects', 'skills', 'contact'] as const;

export default function Navbar() {
  const { t } = useI18n();
  const active = useActiveSection(NAV_IDS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const links = NAV_IDS.map((id) => ({ id, label: t.nav[id] }));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-bg/90 py-2.5 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.4)] backdrop-blur-xl backdrop-saturate-150' : 'border-b border-transparent py-4'
      }`}
    >
      <nav aria-label={t.nav.primary} className="container-page flex items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-2.5 rounded-lg" aria-label={t.nav.home}>
          <span className="bg-accent-gradient grid h-9 w-9 place-items-center rounded-xl font-heading text-sm font-bold text-white shadow-[0_0_24px_-6px_var(--glow-1)]">
            {profile.initials}
          </span>
          <span className="hidden font-heading font-semibold text-text sm:inline">Mahmoud.dev</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? 'text-text' : 'text-muted hover:text-text'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-surface-strong"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="glass inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-page lg:hidden"
          >
            <ul className="glass mt-3 grid gap-1 rounded-2xl bg-elevated/90 p-2">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`block rounded-xl px-4 py-3 font-medium ${
                      active === link.id ? 'bg-surface-strong text-text' : 'text-muted hover:bg-surface hover:text-text'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
