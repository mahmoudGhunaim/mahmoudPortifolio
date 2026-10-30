import { m as motion } from 'framer-motion';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import LottiePlayer from '../components/LottiePlayer';
import { CheckIcon } from '../components/Icons';
import { useI18n } from '../i18n/I18nProvider';
import { training } from '../data/training';

export default function Training() {
  const { t, l } = useI18n();

  return (
    <Section id="training" eyebrow={t.training.eyebrow} title={t.training.title} titleAccent={t.training.titleAccent}>
      <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
        <div aria-hidden className="pointer-events-none absolute -top-24 end-[-6rem] h-72 w-72 rounded-full bg-[var(--glow-2)] blur-[90px]" />

        {/* Header card */}
        <Reveal className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {training.inProgress && (
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-2/40 bg-accent-2/10 px-3 py-1 text-xs font-semibold text-accent-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
                  </span>
                  {t.training.inProgress}
                </span>
              )}
              {training.period && <span className="text-sm text-muted">{l(training.period)}</span>}
            </div>
            <h3 className="text-2xl font-bold text-text sm:text-3xl">{l(training.title)}</h3>
            {training.provider && <p className="mt-1 font-medium text-accent-2">{l(training.provider)}</p>}
            <p className="mt-4 max-w-2xl text-muted">{l(training.summary)}</p>
          </div>
          <LottiePlayer
            src="/lottie/training.lottie"
            label={t.training.animationAlt}
            className="mx-auto h-40 w-40 sm:h-48 sm:w-48"
          />
        </Reveal>

        {/* Journey steps */}
        <ol className="relative mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {training.modules.map((mod, i) => (
            <li key={mod.title.en}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="glow-hover h-full rounded-2xl border border-border bg-surface p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="bg-accent-gradient grid h-9 w-9 shrink-0 place-items-center rounded-xl font-heading text-sm font-bold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs tracking-wide text-muted uppercase">
                      {t.training.step} {i + 1}
                    </span>
                  </div>
                  <h4 className="mb-3 font-heading text-lg font-semibold text-text">{l(mod.title)}</h4>
                  <ul className="space-y-2">
                    {l(mod.points).map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-muted">
                        <CheckIcon className="mt-0.5 shrink-0 text-accent-2" width={15} height={15} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Progress line */}
        <div aria-hidden className="mt-8 h-1 overflow-hidden rounded-full bg-surface-strong">
          <motion.div
            className="bg-accent-gradient h-full origin-left rtl:origin-right"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: training.inProgress ? 0.6 : 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <Reveal className="mt-8">
          <h4 className="mb-3 text-sm font-semibold tracking-wide text-muted uppercase">{t.training.skills}</h4>
          <ul className="flex flex-wrap gap-2">
            {l(training.skills).map((s) => (
              <li key={s} className="glass rounded-full px-3.5 py-1.5 text-sm font-medium text-text">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
