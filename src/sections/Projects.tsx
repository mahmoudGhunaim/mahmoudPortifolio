import { m as motion } from 'framer-motion';
import { Fragment, type CSSProperties } from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { ArrowIcon, LockIcon } from '../components/Icons';
import { useI18n } from '../i18n/I18nProvider';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';
import { projects, type Project } from '../data/projects';

const ease = [0.22, 1, 0.36, 1] as const;

function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/** Screenshot inside a minimal browser frame, lit by the project's own brand colour. */
function Frame({ project, href, label }: { project: Project; href?: string; label: string }) {
  const reduced = usePrefersReducedMotion();
  const { t } = useI18n();

  const shot = (
    <img
      src={project.image}
      alt={label}
      width={1280}
      height={800}
      loading="lazy"
      decoding="async"
      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
    />
  );

  return (
    <motion.div
      className="group relative"
      initial={reduced ? false : { opacity: 0, clipPath: 'inset(10% 6% 10% 6% round 24px)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(-20% -20% -20% -20% round 0px)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.1, ease }}
    >
      {/* Light spill in the project's colour */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 rounded-[3rem] opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-90 light:opacity-35 light:group-hover:opacity-55"
        style={{ background: `radial-gradient(65% 65% at 50% 60%, color-mix(in srgb, ${project.tint} 70%, transparent), transparent 72%)` }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-elevated shadow-[0_30px_80px_-30px_rgb(0_0_0/0.6)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 light:shadow-[0_30px_70px_-35px_rgb(15_23_42/0.35)]">
        <div dir="ltr" className="flex h-9 items-center gap-3 border-b border-border px-3.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          </span>
          <span className="mx-auto flex min-w-0 items-center gap-1.5 rounded-md bg-surface-strong px-3 py-0.5 text-[11px] font-medium text-muted">
            <LockIcon width={11} height={11} className="shrink-0" />
            <span className="truncate">{href ? hostOf(href) : t.projects.private}</span>
          </span>
          <span className="w-[42px]" aria-hidden />
        </div>

        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden className="block overflow-hidden">
            {shot}
          </a>
        ) : (
          <div className="overflow-hidden">{shot}</div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t, l } = useI18n();

  return (
    <Section id="projects" className="overflow-x-clip" eyebrow={t.projects.eyebrow} title={t.projects.title} titleAccent={t.projects.titleAccent}>
      <ol className="flex flex-col gap-24 sm:gap-32">
        {projects.map((project, i) => {
          const href = project.url && project.url !== '#' ? project.url : undefined;
          const flip = i % 2 === 1;
          const isClient = project.kind === 'client';

          return (
            <li
              key={project.id}
              className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14"
              style={{ '--tint': project.tint } as CSSProperties}
            >
              <div className={`min-w-0 lg:sticky lg:top-28 lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
                <Frame project={project} href={href} label={`${t.projects.imageAlt} ${project.title}`} />
              </div>

              <Reveal delay={0.15} className="min-w-0 lg:col-span-5 lg:pt-4">
                <article aria-labelledby={`project-${project.id}`}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        isClient ? 'bg-success/12 text-success' : 'bg-surface-strong text-muted'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${isClient ? 'bg-success' : 'bg-muted'}`} aria-hidden />
                      {isClient ? t.projects.client : t.projects.personal}
                    </span>
                    <span className="text-muted">{l(project.category)}</span>
                  </div>

                  <h3
                    id={`project-${project.id}`}
                    className="mt-4 text-3xl font-bold text-balance text-text sm:text-4xl"
                  >
                    <bdi>{project.title}</bdi>
                  </h3>
                  <p className="mt-4 max-w-[60ch] text-base text-pretty text-muted sm:text-lg">{l(project.description)}</p>

                  <ul className="mt-6 divide-y divide-border border-y border-border" aria-label={t.projects.role}>
                    {l(project.highlights).map((h) => (
                      <li key={h} className="flex gap-3 py-3 text-sm leading-relaxed text-text/85">
                        <span
                          aria-hidden
                          className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--tint)] shadow-[0_0_10px_var(--tint)]"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
                    <span className="text-muted">{t.projects.stack}</span>
                    {project.tech.map((tech, j) => (
                      <Fragment key={tech}>
                        {j > 0 && (
                          <span className="text-border-strong" aria-hidden>
                            /
                          </span>
                        )}
                        <span dir="ltr" className="font-medium text-text">
                          {tech}
                        </span>
                      </Fragment>
                    ))}
                  </p>

                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta mt-7 inline-flex items-center gap-3 rounded-xl border border-border-strong bg-surface-strong py-2.5 ps-5 pe-2.5 font-semibold text-text transition-colors hover:border-[color-mix(in_srgb,var(--tint)_60%,transparent)]"
                    >
                      {t.projects.visit}
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-text text-bg transition-transform duration-300 group-hover/cta:-rotate-45 rtl:group-hover/cta:rotate-45">
                        <ArrowIcon width={16} height={16} className="rtl:-scale-x-100" />
                      </span>
                      <span className="sr-only">— {project.title}</span>
                    </a>
                  ) : (
                    <p className="mt-7 inline-flex items-center gap-2 text-sm text-muted">
                      <LockIcon width={15} height={15} />
                      {t.projects.private} · {t.projects.privateNote}
                    </p>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
