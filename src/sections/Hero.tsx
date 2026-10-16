import { m as motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { useTheme } from '../hooks/useTheme';
import { useInView } from '../hooks/useInView';
import { useMediaQuery, usePrefersReducedMotion } from '../hooks/useMediaQuery';
import { profile } from '../data/profile';
import { ArrowIcon } from '../components/Icons';

const HeroScene = lazy(() => import('../three/HeroScene'));

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

/** Lightweight static stand-in for the 3D scene (mobile, reduced motion, no WebGL). */
function StaticOrb() {
  return (
    <div className="relative grid h-full w-full place-items-center" aria-hidden>
      <svg viewBox="0 0 300 300" className="animate-float-slow h-[78%] max-h-80 w-auto">
        <defs>
          <radialGradient id="orb" cx="35%" cy="30%" r="75%">
            <stop offset="0" stopColor="var(--accent-2)" />
            <stop offset="0.55" stopColor="var(--accent-1)" />
            <stop offset="1" stopColor="var(--accent-1)" stopOpacity="0.15" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="78" fill="url(#orb)" />
        <g fill="none" stroke="var(--accent-1)" strokeOpacity="0.55" strokeWidth="1.2">
          <polygon points="150,30 254,90 254,210 150,270 46,210 46,90" />
          <path d="M150 30V150L254 210M150 150L46 210" />
          <polygon points="150,70 219,110 219,190 150,230 81,190 81,110" strokeOpacity="0.35" />
          <line x1="46" y1="90" x2="150" y2="150" />
          <line x1="254" y1="90" x2="150" y2="150" />
          <line x1="150" y1="150" x2="150" y2="270" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  const { t, l } = useI18n();
  const { theme } = useTheme();
  const reduced = usePrefersReducedMotion();
  const wide = useMediaQuery('(min-width: 768px)');
  const [sceneRef, inView] = useInView<HTMLDivElement>('0px');
  const [ready, setReady] = useState(false);

  const use3D = wide && !reduced && ready;

  // Defer the heavy 3D chunk until the browser is idle (keeps LCP fast).
  useEffect(() => {
    if (!supportsWebGL()) return;
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(() => setReady(true), { timeout: 1500 });
    else window.setTimeout(() => setReady(true), 600);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:min-h-[100svh] lg:pb-24">
      {/* Background glows + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-32 start-[-10%] h-[28rem] w-[28rem] rounded-full bg-[var(--glow-1)] blur-[120px]" />
        <div className="absolute top-1/3 end-[-8%] h-[24rem] w-[24rem] rounded-full bg-[var(--glow-2)] blur-[120px]" />
      </div>

      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.p
            variants={item}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {t.hero.available}
          </motion.p>

          <motion.p variants={item} className="mb-2 text-lg text-muted">
            {t.hero.greeting}
          </motion.p>
          <motion.h1 variants={item} id="hero-title" className="text-5xl font-bold sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{l(profile.name)}</span>
          </motion.h1>
          <motion.p variants={item} className="mt-4 font-heading text-2xl font-semibold text-text sm:text-3xl">
            {l(profile.role)}
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            {l(profile.tagline)}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-accent-gradient group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-[0_10px_40px_-10px_var(--glow-1)] transition-transform hover:-translate-y-0.5"
            >
              {t.hero.viewProjects}
              <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass glow-hover inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-text"
            >
              {t.hero.contact}
            </a>
          </motion.div>
        </motion.div>

        <div
          ref={sceneRef}
          className="relative h-[300px] sm:h-[380px] lg:h-[560px]"
          role="img"
          aria-label={t.hero.sceneLabel}
        >
          {use3D ? (
            <Suspense fallback={<StaticOrb />}>
              <HeroScene theme={theme} active={inView} />
            </Suspense>
          ) : (
            <StaticOrb />
          )}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted hover:text-text lg:flex"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-border-strong pt-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-accent-2"
            animate={reduced ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        {t.hero.scroll}
      </a>
    </section>
  );
}
