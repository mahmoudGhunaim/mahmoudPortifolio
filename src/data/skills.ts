import type { Localized } from '../i18n/types';

export interface SkillGroup {
  id: string;
  title: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: { en: 'Front-End', ar: 'الواجهة الأمامية' },
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    id: 'backend',
    title: { en: 'Back-End', ar: 'الواجهة الخلفية' },
    items: ['PHP', 'Supabase', 'REST API', 'SQL', 'WordPress Plugins'],
  },
  {
    id: 'motion',
    title: { en: '3D & Motion', ar: 'ثلاثي الأبعاد والحركة' },
    items: ['Three.js', 'React Three Fiber', 'GSAP', 'Framer Motion'],
  },
  {
    id: 'platforms',
    title: { en: 'Platforms & Tools', ar: 'المنصات والأدوات' },
    items: ['Oracle Fusion Cloud', 'Cloudflare Workers', 'Git', 'GitHub', 'WordPress', 'Shopify', 'Bootstrap'],
  },
];

export const softSkills: Localized<string[]> = {
  en: ['Teamwork', 'Problem-solving', 'Communication', 'Fast learner'],
  ar: ['العمل الجماعي', 'حل المشكلات', 'التواصل', 'سرعة التعلّم'],
};

export interface SpokenLanguage {
  name: Localized;
  level: Localized;
  /** 0–100, used for the progress bar */
  value: number;
}

export const languages: SpokenLanguage[] = [
  { name: { en: 'Arabic', ar: 'العربية' }, level: { en: 'Native', ar: 'اللغة الأم' }, value: 100 },
  { name: { en: 'English', ar: 'الإنجليزية' }, level: { en: 'Intermediate', ar: 'متوسط' }, value: 65 },
];
