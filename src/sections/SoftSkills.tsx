import { m as motion } from 'framer-motion';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { useI18n } from '../i18n/I18nProvider';
import { languages, softSkills } from '../data/skills';

export default function SoftSkills() {
  const { t, l } = useI18n();

  return (
    <Section id="soft-skills" eyebrow={t.soft.eyebrow} title={t.soft.title} titleAccent={t.soft.titleAccent} className="pt-0 sm:pt-0">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="glass rounded-2xl p-6 sm:p-8">
          <h3 className="mb-6 font-heading text-xl font-semibold text-text">{t.soft.softTitle}</h3>
          <ul className="grid grid-cols-2 gap-3">
            {l(softSkills).map((skill, i) => (
              <li
                key={skill}
                className="glow-hover flex items-center gap-3 rounded-xl border border-border bg-surface-strong p-4 font-medium text-text"
              >
                <span className="bg-accent-gradient grid h-8 w-8 shrink-0 place-items-center rounded-lg font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-2xl p-6 sm:p-8">
          <h3 className="mb-6 font-heading text-xl font-semibold text-text">{t.soft.langTitle}</h3>
          <ul className="space-y-6">
            {languages.map((lang) => (
              <li key={lang.name.en}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="font-medium text-text">{l(lang.name)}</span>
                  <span className="text-sm text-muted">{l(lang.level)}</span>
                </div>
                <div
                  className="h-2.5 overflow-hidden rounded-full bg-surface-strong"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={lang.value}
                  aria-label={`${l(lang.name)} — ${l(lang.level)}`}
                >
                  <motion.div
                    className="bg-accent-gradient h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
