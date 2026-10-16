import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { BriefcaseIcon, CheckIcon } from '../components/Icons';
import { useI18n } from '../i18n/I18nProvider';
import { experience } from '../data/experience';

function formatMonth(value: string, locale: string) {
  const [y, m] = value.split('-').map(Number);
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(new Date(y, m - 1, 1));
}

export default function Experience() {
  const { t, l, lang } = useI18n();
  const locale = lang === 'ar' ? 'ar-JO-u-nu-latn' : 'en-US';

  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title} titleAccent={t.experience.titleAccent}>
      <ol className="relative ms-3 border-s border-border-strong sm:ms-5">
        {experience.map((job, i) => (
          <li key={job.company + job.start} className="relative mb-10 ps-8 last:mb-0 sm:ps-12">
            <span
              aria-hidden
              className="bg-accent-gradient absolute -start-[17px] top-1 grid h-8 w-8 place-items-center rounded-full text-white shadow-[0_0_0_6px_var(--bg),0_0_28px_-4px_var(--glow-1)]"
            >
              <BriefcaseIcon width={16} height={16} />
            </span>

            <Reveal delay={i * 0.1}>
              <article className="glass glow-hover rounded-2xl p-6 sm:p-8">
                <header className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-text sm:text-2xl">{l(job.role)}</h3>
                    <p className="mt-1 font-medium text-accent-2">
                      {job.company}
                      {job.location && <span className="text-muted"> · {l(job.location)}</span>}
                    </p>
                  </div>
                  <p className="rounded-full border border-border px-3 py-1 text-sm text-muted">
                    <time dateTime={job.start}>{formatMonth(job.start, locale)}</time> –{' '}
                    {job.end ? <time dateTime={job.end}>{formatMonth(job.end, locale)}</time> : t.experience.present}
                  </p>
                </header>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {l(job.bullets).map((b) => (
                    <li key={b} className="flex gap-3 text-muted">
                      <CheckIcon className="mt-1 shrink-0 text-accent-2" width={16} height={16} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <li key={tech} className="rounded-lg bg-surface-strong px-2.5 py-1 text-xs font-medium text-text" dir="ltr">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
