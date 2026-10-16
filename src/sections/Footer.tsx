import { useI18n } from '../i18n/I18nProvider';
import { profile } from '../data/profile';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons';

export default function Footer() {
  const { t, l } = useI18n();
  const year = new Date().getFullYear();

  const socials = [
    { icon: MailIcon, label: t.contact.emailLabel, href: `mailto:${profile.contact.email}` },
    { icon: LinkedInIcon, label: t.contact.linkedinLabel, href: profile.contact.linkedin },
    { icon: GitHubIcon, label: t.contact.githubLabel, href: profile.contact.github },
  ];

  return (
    <footer className="relative border-t border-border">
      <div aria-hidden className="bg-accent-gradient absolute inset-x-0 top-0 h-px opacity-60" />
      <div className="container-page flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-start">
          <p className="font-heading text-xl font-semibold text-text">{l(profile.name)}</p>
          <p className="mt-1 text-sm text-muted">{l(profile.role)}</p>
        </div>

        <a
          href={profile.cvUrl}
          download
          className="bg-accent-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-[0_10px_40px_-12px_var(--glow-1)] transition-transform hover:-translate-y-0.5"
        >
          <DownloadIcon width={18} height={18} />
          {t.footer.downloadCv}
        </a>

        <ul className="flex items-center gap-2">
          {socials.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="glass glow-hover grid h-11 w-11 place-items-center rounded-xl text-muted hover:text-text"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page flex flex-col items-center justify-between gap-2 border-t border-border py-6 text-sm text-muted sm:flex-row">
        <p>
          © {year} {l(profile.name)}. {t.footer.rights}
        </p>
        <p className="flex items-center gap-4">
          <span>{t.footer.builtWith}</span>
          <a href="#home" className="text-accent-2 hover:underline">
            {t.footer.backToTop} ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
