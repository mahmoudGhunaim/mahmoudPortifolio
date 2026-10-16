import Section from '../components/Section';
import Reveal from '../components/Reveal';
import LottiePlayer from '../components/LottiePlayer';
import { CapIcon, MapPinIcon, TargetIcon } from '../components/Icons';
import { useI18n } from '../i18n/I18nProvider';
import { profile } from '../data/profile';

export default function About() {
  const { t, l } = useI18n();

  const facts = [
    { icon: MapPinIcon, label: t.about.location, value: l(profile.location) },
    { icon: CapIcon, label: t.about.education, value: l(profile.education) },
    { icon: TargetIcon, label: t.about.focus, value: l(profile.focus) },
  ];

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title} titleAccent={t.about.titleAccent}>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal className="glass relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl p-6 lg:max-w-none">
          <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,var(--glow-1),transparent_60%)]" />
          <LottiePlayer src="/lottie/coding.lottie" label={t.about.animationAlt} className="h-full w-full" />
        </Reveal>

        <div>
          {l(profile.about).map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="mb-5 text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass glow-hover rounded-2xl p-4">
                  <dt className="mb-2 flex items-center gap-2 text-sm font-medium text-accent-2">
                    <Icon width={18} height={18} />
                    {label}
                  </dt>
                  <dd className="text-sm leading-snug text-text">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
