import Section from '../components/Section';
import Reveal from '../components/Reveal';
import LottiePlayer from '../components/LottiePlayer';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '../components/Icons';
import { useI18n } from '../i18n/I18nProvider';
import { profile } from '../data/profile';

export default function Contact() {
  const { t } = useI18n();

  const channels = [
    { icon: MailIcon, label: t.contact.emailLabel, value: profile.contact.email, href: `mailto:${profile.contact.email}` },
    { icon: PhoneIcon, label: t.contact.phoneLabel, value: profile.contact.phoneDisplay, href: `tel:${profile.contact.phone}` },
    { icon: LinkedInIcon, label: t.contact.linkedinLabel, value: 'mahmoud-ghunaim', href: profile.contact.linkedin, external: true },
    { icon: GitHubIcon, label: t.contact.githubLabel, value: 'mahmoudGhunaim', href: profile.contact.github, external: true },
  ];

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title} titleAccent={t.contact.titleAccent}>
      <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="max-w-md text-lg text-muted">{t.contact.intro}</p>
          <LottiePlayer src="/lottie/email.lottie" label={t.contact.animationAlt} className="mt-6 h-36 w-36" />
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, value, href, external }, i) => (
              <li key={label} className={i === 0 || i === channels.length - 1 ? 'sm:col-span-2' : undefined}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass glow-hover flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="bg-accent-gradient grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white">
                    <Icon width={20} height={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block truncate font-medium text-text" dir="ltr">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
