import { AnimatePresence, m as motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';
import { profile } from '../data/profile';
import LottiePlayer from './LottiePlayer';

const SESSION_KEY = 'mg-loaded';
const MIN_MS = 900;
const MAX_MS = 2200;

function alreadyShown() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

/** Short Lottie splash on the first visit of a session. */
export default function LoadingScreen() {
  const { t, l } = useI18n();
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(() => !alreadyShown());

  useEffect(() => {
    if (!visible) return;
    const started = performance.now();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, (reduced ? 200 : MIN_MS) - (performance.now() - started));
      window.setTimeout(() => setVisible(false), wait);
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* ignore */
      }
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    const cap = window.setTimeout(finish, MAX_MS);
    return () => {
      window.removeEventListener('load', finish);
      window.clearTimeout(cap);
    };
  }, [visible, reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-live="polite"
          aria-label={t.meta.loading}
          className="fixed inset-0 z-[100] grid place-items-center bg-bg"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
        >
          <div className="flex flex-col items-center gap-4">
            <LottiePlayer src="/lottie/loading.lottie" label="" className="h-28 w-28" forcePlay={!reduced} />
            <p className="font-heading text-lg font-semibold text-text">{l(profile.name)}</p>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-surface-strong">
              <motion.div
                className="bg-accent-gradient h-full origin-left rtl:origin-right"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: MIN_MS / 1000, ease: 'easeInOut' }}
              />
            </div>
            <span className="sr-only">{t.meta.loading}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
