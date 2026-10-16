import type { Localized } from '../i18n/types';

/**
 * Personal info used across the site.
 * Edit freely — every field is shown in English or Arabic based on the language toggle.
 */
export const profile = {
  name: { en: 'Mahmoud Ghunaim', ar: 'محمود غنيم' } satisfies Localized,
  initials: 'MG',
  role: { en: 'Full-Stack Developer', ar: 'مطوّر Full-Stack' } satisfies Localized,
  tagline: {
    en: 'I craft fast, responsive and accessible web experiences with React, JavaScript and PHP — and I use AI tools to ship them faster.',
    ar: 'أصمّم تجارب ويب سريعة ومتجاوبة وسهلة الوصول باستخدام React وJavaScript وPHP — وأستعين بأدوات الذكاء الاصطناعي لإنجازها بشكل أسرع.',
  } satisfies Localized,

  about: {
    en: [
      'I am a motivated, fast-learning Full-Stack Developer with hands-on experience in React, PHP and JavaScript. I enjoy turning designs into smooth, dynamic interfaces and wiring them to real data through REST APIs.',
      'I care about performance optimization and clean collaboration in Agile teams, and I am passionate about using AI tools to improve development efficiency and problem-solving.',
    ],
    ar: [
      'مطوّر Full-Stack متحمّس وسريع التعلّم، أمتلك خبرة عملية في React وPHP وJavaScript. أستمتع بتحويل التصاميم إلى واجهات سلسة وديناميكية وربطها بالبيانات الحقيقية عبر واجهات REST API.',
      'أهتم بتحسين الأداء والعمل الجماعي ضمن فرق Agile، وشغوف باستخدام أدوات الذكاء الاصطناعي لرفع كفاءة التطوير وحل المشكلات.',
    ],
  } satisfies Localized<string[]>,

  location: { en: 'Zarqa, Jordan', ar: 'الزرقاء، الأردن' } satisfies Localized,
  education: {
    en: 'B.Sc. Computer Science — Zarqa University (expected 2027)',
    ar: 'بكالوريوس علم الحاسوب — جامعة الزرقاء (التخرّج المتوقع 2027)',
  } satisfies Localized,
  focus: {
    en: 'React · REST APIs · Performance',
    ar: 'React · واجهات REST · الأداء',
  } satisfies Localized,

  contact: {
    email: 'mahmoudghunaim132@gmail.com',
    phone: '+962789995755',
    phoneDisplay: '+962 78 999 5755',
    linkedin: 'https://www.linkedin.com/in/mahmoud-ghunaim-01b658335/',
    github: 'https://github.com/mahmoudGhunaim',
  },

  // CV file served from /public/cv
  cvUrl: '/cv/Mahmoud_Ghunaim_CV.pdf',
};
