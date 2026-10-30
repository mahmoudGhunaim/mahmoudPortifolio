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
    category: { en: 'Website + ERP · Oman', ar: 'موقع ونظام إدارة · عُمان' },
    description: {
      en: 'The website and private management system for Furniture Land in Sohar, Oman. One admin at erp.ardalathath.com runs the website, branches and accounts, in Arabic and English, on desktop and mobile, with role-based access for each user.',
      ar: 'الموقع ونظام الإدارة الخاص بأرض الأثاث في صحار، عُمان. لوحة تحكم واحدة على erp.ardalathath.com تدير الموقع والفروع والحسابات، بالعربي والإنجليزي، على الكمبيوتر والجوال، ولكل مستخدم صلاحيات حسب دوره.',
    },
    highlights: {
      en: [
        'Dashboard with income, expenses and invoice totals, charts, alerts, and a counter of visitors who got in touch by WhatsApp, phone or email',
        'Four business units (contracting company, Al-Waqiba and Tareef showrooms, factory), each with staff, salaries and advances, purchases, sales, inventory, projects and assets, plus a branch comparison page',
        'Quotations and invoices in Omani rial, ready to print, and expenses tracked by category and payment method',
        'Products, categories and the work gallery managed without a developer; uploads auto-converted to compressed WebP in one shared media library',
        'Five roles (Owner, Branch manager, Accountant, Sales, View only), sign-in required, database-level data protection, admin hidden from search engines',
      ],
      ar: [
        'لوحة رئيسية بملخص الدخل والمصاريف والفواتير، ورسوم بيانية وتنبيهات، وعداد للزوار الذين تواصلوا عبر واتساب والهاتف والبريد',
        'أربعة أقسام (شركة المقاولات، معرض الوقيبة، معرض طريف، المصنع)، لكل منها الموظفون والرواتب والسلف والمشتريات والمبيعات والمخزون والمشاريع والأصول، مع صفحة لمقارنة أداء الفروع',
        'عروض أسعار وفواتير بالريال العماني جاهزة للطباعة، وتسجيل المصاريف حسب الفئة وطريقة الدفع',
        'إدارة المنتجات والفئات ومعرض الأعمال بدون مبرمج؛ والصور تتحول تلقائيًا إلى WebP مضغوطة في مكتبة وسائط واحدة',
        'خمسة أدوار (مالك، مدير فرع، محاسب، مبيعات، مشاهدة فقط)، تسجيل دخول إلزامي، حماية البيانات على مستوى قاعدة البيانات، واللوحة مخفية عن محركات البحث',
      ],
    },
    tech: ['React', 'Vite', 'Cloudflare', 'Role-based access'],
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
