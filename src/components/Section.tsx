import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  children: ReactNode;
  className?: string;
  /** Optional element rendered beside the heading (e.g. a small Lottie icon) */
  aside?: ReactNode;
}

export default function Section({ id, eyebrow, title, titleAccent, children, className = '', aside }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="container-page">
        <Reveal className="mb-12 flex items-end justify-between gap-6 sm:mb-16">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent-2 uppercase">
              <span className="bg-accent-gradient h-px w-8" aria-hidden />
              {eyebrow}
            </p>
            <h2 id={headingId} className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
              {title} {titleAccent && <span className="text-gradient">{titleAccent}</span>}
            </h2>
          </div>
          {aside}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
