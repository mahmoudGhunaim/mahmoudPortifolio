import type { Localized } from '../i18n/types';
import ardalathathImg from '../assets/projects/ardalathath.webp';
import voltImg from '../assets/projects/volt.webp';
import velaImg from '../assets/projects/vela.webp';

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
  {
    id: 'vela',
    title: 'VELA Meridian',
    category: { en: 'Automotive launch site', ar: 'موقع إطلاق سيارة' },
    description: {
      en: 'A cinematic launch site for an all-electric grand tourer, built around a real-time 3D car rendered in the browser.',
      ar: 'موقع إطلاق سينمائي لسيارة كهربائية فاخرة، يتمحور حول نموذج سيارة ثلاثي الأبعاد يُعرض مباشرة في المتصفح.',
    },
    highlights: {
      // TODO: adjust to describe exactly what you built on this project
      en: ['Real-time 3D car with React Three Fiber', 'Scroll-driven animation with GSAP ScrollTrigger', 'Smooth scrolling with Lenis', 'Design, energy, interior, gallery and reservation sections'],
      ar: ['سيارة ثلاثية الأبعاد بالوقت الحقيقي باستخدام React Three Fiber', 'حركة مرتبطة بالتمرير باستخدام GSAP ScrollTrigger', 'تمرير سلس باستخدام Lenis', 'أقسام التصميم والطاقة والمقصورة والمعرض والحجز'],
    },
    tech: ['Next.js', 'React Three Fiber', 'GSAP', 'Lenis'],
    image: velaImg,
    url: 'https://vela.mahmoudghunaim132.workers.dev/',
  },
  {
    id: 'volt-shop',
    title: 'VOLT Shop',
    category: { en: 'E-commerce store', ar: 'متجر إلكتروني' },
    description: {
      en: 'A Next.js demo store for premium tech and lifestyle accessories: headphones, watches, bags, desk setup and sneakers.',
      ar: 'متجر تجريبي مبني بـ Next.js لإكسسوارات التقنية ونمط الحياة: سماعات وساعات وحقائب وأدوات مكتب وأحذية رياضية.',
    },
    highlights: {
      // TODO: adjust to describe exactly what you built on this project
      en: ['Category browsing and trending products', 'English / Arabic language switch', 'Dark and light themes', 'Wishlist and shopping cart'],
      ar: ['تصفّح الفئات والمنتجات الرائجة', 'التبديل بين العربية والإنجليزية', 'وضعان داكن وفاتح', 'قائمة المفضّلة وسلة التسوّق'],
    },
    tech: ['Next.js', 'React', 'Cloudflare Workers'],
    image: voltImg,
    url: 'https://volt-shop.mahmoudghunaim132.workers.dev/',
  },
];
