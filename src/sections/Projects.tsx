import Section from '../components/Section';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import { CheckIcon, ExternalIcon } from '../components/Icons';
import { useI18n } from '../i18n/I18nProvider';
import { projects } from '../data/projects';

export default function Projects() {
  const { t, l } = useI18n();

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title} titleAccent={t.projects.titleAccent}>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const hasLink = project.url && project.url !== '#';
          return (
            <li key={project.id}>
              <Reveal delay={i * 0.1} className="h-full">
                <TiltCard className="group flex flex-col">
                  <article className="flex h-full flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                      <img
                        src={project.image}
                        alt={`${t.projects.imageAlt} ${project.title}`}
                        width={800}
                        height={500}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-medium tracking-wide text-accent-2 uppercase">{l(project.category)}</p>
                      <h3 className="mt-2 text-xl font-semibold text-text">
                        <bdi>{project.title}</bdi>
                      </h3>
                      <p className="mt-3 text-muted">{l(project.description)}</p>

                      <ul className="mt-4 space-y-1.5" aria-label={t.projects.role}>
                        {l(project.highlights).map((h) => (
                          <li key={h} className="flex gap-2 text-sm text-muted">
                            <CheckIcon className="mt-0.5 shrink-0 text-accent-2" width={15} height={15} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6">
                        <ul className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <li
                              key={tech}
                              dir="ltr"
                              className="rounded-lg border border-border bg-surface-strong px-2.5 py-1 text-xs font-medium text-text"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>

                        {hasLink && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-20 mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-2 hover:underline"
                          >
                            {t.projects.visit}
                            <ExternalIcon width={16} height={16} className="rtl:-scale-x-100" />
                            <span className="sr-only">— {project.title}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
