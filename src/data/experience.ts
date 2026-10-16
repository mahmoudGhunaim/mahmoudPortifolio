import type { Localized } from '../i18n/types';

export interface ExperienceItem {
  role: Localized;
  company: string;
  /** ISO-like "YYYY-MM"; leave `end` undefined for a current position */
  start: string;
  end?: string;
  location?: Localized;
  bullets: Localized<string[]>;
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: { en: 'Full-Stack Developer', ar: 'مطوّر Full-Stack' },
    company: 'Softylus',
    start: '2023-07',
    end: '2026-05',
    location: { en: 'Jordan', ar: 'الأردن' },
    bullets: {
      en: [
        'Built responsive, dynamic user interfaces with React.',
        'Integrated REST APIs between the front-end and back-end.',
        'Improved website performance and loading times.',
        'Worked within an Agile team, collaborating across design and back-end.',
        'Used React, PHP and JavaScript across multiple client projects.',
        'Used AI tools to speed up development and problem-solving.',
      ],
      ar: [
        'بناء واجهات مستخدم متجاوبة وديناميكية باستخدام React.',
        'ربط واجهات REST API بين الواجهة الأمامية والخلفية.',
        'تحسين أداء المواقع وتقليل أوقات التحميل.',
        'العمل ضمن فريق Agile بالتعاون مع فرق التصميم والتطوير الخلفي.',
        'استخدام React وPHP وJavaScript في مشاريع متعددة للعملاء.',
        'توظيف أدوات الذكاء الاصطناعي لتسريع التطوير وحل المشكلات.',
      ],
    },
    tech: ['React', 'JavaScript', 'PHP', 'WordPress', 'REST API', 'Git'],
  },
];
