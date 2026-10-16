import type { Localized } from '../i18n/types';
import tharwahAcademyImg from '../assets/projects/tharwah-academy.svg';
import tharwahConsultingImg from '../assets/projects/tharwah-consulting.svg';
import ardalathathImg from '../assets/projects/ardalathath.webp';

/**
 * ✏️  EDIT ME — Projects
 * Replace the placeholder images in src/assets/projects/ (use .webp/.avif for
 * screenshots, ~1200×750) and set the real `url` for each project.
 */

export interface Project {
  id: string;
  title: string;
  category: Localized;
  description: Localized;
  highlights: Localized<string[]>;
  tech: string[];
  image: string;
  /** Live URL — use '#' (or leave empty) to hide the link */
  url: string;
}

export const projects: Project[] = [
  {
    id: 'tharwah-academy',
    title: 'Tharwah Academy',
    category: { en: 'E-learning platform · Saudi Arabia', ar: 'منصة تعليمية · السعودية' },
    description: {
      en: 'A high-traffic WordPress platform for selling courses in Saudi Arabia.',
      ar: 'منصة WordPress عالية الزيارات لبيع الدورات التدريبية في السعودية.',
    },
    highlights: {
      en: [
        'Worked directly on the live production environment',
        'Tested every change on staging before release',
        'Developed custom plugins for business needs',
        'Modified the theme through code',
      ],
      ar: [
        'العمل مباشرة على بيئة الإنتاج الحيّة',
        'اختبار كل تعديل على بيئة التجربة قبل النشر',
        'تطوير إضافات مخصّصة لاحتياجات العمل',
        'تعديل القالب برمجيًا',
      ],
    },
    tech: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    image: tharwahAcademyImg,
    url: '#', // no public link
  },
  {
    id: 'tharwah-consulting',
    title: 'Tharwah Consulting',
    category: { en: 'Corporate website', ar: 'موقع شركة استشارات' },
    description: {
      en: 'A consulting company website built with WordPress and the Avada builder, focused on smooth UI/UX.',
      ar: 'موقع شركة استشارات مبني باستخدام WordPress ومنشئ Avada مع تركيز على تجربة استخدام سلسة.',
    },
    highlights: {
      en: ['Built responsive layouts with Avada', 'Polished UI/UX and micro-interactions', 'Optimised pages for speed'],
      ar: ['بناء تخطيطات متجاوبة باستخدام Avada', 'تحسين واجهة وتجربة المستخدم والتفاعلات الدقيقة', 'تحسين سرعة الصفحات'],
    },
    tech: ['WordPress', 'Avada', 'CSS', 'UI/UX'],
    image: tharwahConsultingImg,
    url: '#', // no public link
  },
  {
    id: 'ardalathath',
    title: 'Ard Al-Athath',
    category: { en: 'Furniture showroom · Oman', ar: 'معرض أثاث · عُمان' },
    description: {
      en: 'An Arabic-first website for a luxury furniture showroom in Sohar, Oman — bedrooms, majlis, living & dining, office furniture and commercial fit-outs.',
      ar: 'موقع عربي لمعرض أثاث فاخر في صحار، عُمان — غرف نوم ومجالس وغرف معيشة وطعام وأثاث مكتبي وتجهيز المحلات.',
    },
    highlights: {
      // TODO: adjust to describe exactly what you built on this project
      en: ['Fast single-page app built with React and Vite', 'Full Arabic RTL layout', 'Product categories showcase', 'SEO-optimised for local search in Oman'],
      ar: ['تطبيق صفحة واحدة سريع مبني بـ React وVite', 'تخطيط عربي كامل من اليمين لليسار', 'عرض فئات المنتجات', 'تحسين محركات البحث للبحث المحلي في عُمان'],
    },
    tech: ['React', 'Vite', 'JavaScript', 'Cloudflare'],
    image: ardalathathImg,
    url: 'https://ardalathath.com',
  },
];
