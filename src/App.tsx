import { useEffect } from 'react';
import { LazyMotion, MotionConfig } from 'framer-motion';
import { I18nProvider, useI18n } from './i18n/I18nProvider';
import { ThemeProvider } from './hooks/useTheme';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Training from './sections/Training';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import SoftSkills from './sections/SoftSkills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const loadMotionFeatures = () => import('./components/motionFeatures').then((mod) => mod.default);

function Page() {
  const { t } = useI18n();

  // Sections render after the browser's initial anchor jump, so honour
  // deep links like /#contact once the page is mounted.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-elevated px-4 py-2 text-text focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
      >
        {t.meta.skip}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Training />
        <Projects />
        <Skills />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        {/* Honour the OS "reduce motion" setting for every Framer animation */}
        <MotionConfig reducedMotion="user">
          <LazyMotion features={loadMotionFeatures} strict>
            <LoadingScreen />
            <Page />
          </LazyMotion>
        </MotionConfig>
      </I18nProvider>
    </ThemeProvider>
  );
}
