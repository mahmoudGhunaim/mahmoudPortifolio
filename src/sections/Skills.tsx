import { m as motion } from 'framer-motion';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import LottiePlayer from '../components/LottiePlayer';
import { useI18n } from '../i18n/I18nProvider';
import { skillGroups } from '../data/skills';

export default function Skills() {
  const { t, l } = useI18n();
  const all = skillGroups.flatMap((g) => g.items);

  return (
    <Section
      id="skills"
      eyebrow={t.skills.eyebrow}
      title={t.skills.title}
      titleAccent={t.skills.titleAccent}
      aside={<LottiePlayer src="/lottie/skills.lottie" label={t.skills.animationAlt} className="hidden h-20 w-20 shrink-0 sm:block" />}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.id} delay={gi * 0.08} className="h-full">
            <div className="glass glow-hover h-full rounded-2xl p-6">
              <h3 className="mb-5 flex items-center gap-2 font-heading text-lg font-semibold text-text">
                <span aria-hidden className="bg-accent-gradient h-2 w-2 rounded-full" />
                {l(group.title)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <motion.li
                    key={skill}
                    dir="ltr"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
                    whileHover={{ y: -3 }}
                    className="cursor-default rounded-xl border border-border bg-surface-strong px-3 py-1.5 text-sm font-medium text-text transition-colors hover:border-accent-1/60 hover:text-accent-2"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Infinite marquee (decorative; the lists above are the accessible content) */}
      <div
        aria-hidden
        dir="ltr"
        className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
          {[...all, ...all].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="glass rounded-full px-5 py-2.5 font-heading text-base font-semibold whitespace-nowrap text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
