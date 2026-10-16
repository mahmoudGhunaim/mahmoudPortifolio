import type { Localized } from '../i18n/types';

export interface SkillGroup {
  id: string;
  title: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { id: 'frontend', title: { en: 'Front-End', ar: 'الواجهة الأمامية' }, items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  {
    id: 'backend',
    title: { en: 'Back-End', ar: 'الواجهة الخلفية' },
    items: ['PHP', 'REST API', 'SQL', 'WordPress Plugins'],
  },
  {
    id: 'tools',
    title: { en: 'Tools', ar: 'الأدوات' },
    items: ['Git', 'GitHub', 'Bootstrap', 'Tailwind'],
  },
  { id: 'cms', title: { en: 'CMS', ar: 'أنظمة إدارة المحتوى' }, items: ['WordPress', 'Shopify'] },
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
