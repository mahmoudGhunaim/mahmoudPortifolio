import type { Localized } from '../i18n/types';
import ardalathathImg from '../assets/projects/ardalathath.webp';
import voltImg from '../assets/projects/volt.webp';
import velaImg from '../assets/projects/vela.webp';
import adelErpImg from '../assets/projects/adel-erp.webp';

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
  {
    id: 'adel-erp',
    title: 'Adel ERP',
    category: { en: 'Business ERP · Jordan', ar: 'نظام ERP · الأردن' },
    description: {
      en: 'A fully Arabic, right-to-left ERP for a business importing and parting out used American hybrid cars, replacing a paper-and-spreadsheet workflow with one connected system.',
      ar: 'نظام ERP عربي بالكامل من اليمين لليسار لشركة تستورد السيارات الهجينة الأمريكية المستعملة وتبيع قطعها، يستبدل الورق والجداول بنظام واحد مترابط.',
    },
    highlights: {
      en: [
        'Inventory for whole cars and parts, with container tracking and full stock-movement history',
        'Container, sales and repair invoices with draft / posted / void lifecycle and automatic stock sync',
        'Debts, receipt and payment vouchers, and full account statements across every module',
        'Printable, customer-ready documents; money never silently converted between currencies',
      ],
      ar: [
        'مخزون للسيارات الكاملة وقطع الغيار مع تتبّع الحاويات وسجل كامل لحركة المخزون',
        'فواتير حاويات ومبيعات وتصليح بدورة مسودّة / مُرحّلة / ملغاة ومزامنة تلقائية للمخزون',
        'الديون وسندات القبض والصرف وكشوف حساب كاملة عبر جميع الوحدات',
        'مستندات جاهزة للطباعة والتسليم للعميل؛ ولا تحويل خفي للعملات أبدًا',
      ],
    },
    tech: ['Next.js', 'Supabase', 'Cloudflare Workers', 'Arabic RTL'],
    image: adelErpImg,
    url: '#', // private business system — no public link
  },
];
