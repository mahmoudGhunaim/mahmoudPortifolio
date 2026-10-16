import type { Localized } from '../i18n/types';

/**
 * ✏️  EDIT ME — Software Consultancy & Oracle Fusion Training
 *
 * The bullet points below are PLACEHOLDERS. Adjust provider, dates, modules
 * and skills to match your actual programme. Set `inProgress: false` once done.
 */

export interface TrainingModule {
  title: Localized;
  points: Localized<string[]>;
}

export interface Training {
  title: Localized;
  provider: Localized;
  period: Localized;
  inProgress: boolean;
  summary: Localized;
  modules: TrainingModule[];
  skills: Localized<string[]>;
}

export const training: Training = {
  title: {
    en: 'Software Consultancy & Oracle Fusion Training',
    ar: 'تدريب الاستشارات البرمجية وOracle Fusion',
  },
  // TODO: replace with the training provider / company name
  provider: { en: 'Training provider (placeholder)', ar: 'الجهة المدرّبة (نص مؤقت)' },
  // TODO: replace with real dates
  period: { en: '2026 — Present', ar: '2026 — حتى الآن' },
  inProgress: true,
  summary: {
    en: 'A structured programme bridging software development with business consulting — learning how ERP systems like Oracle Fusion Cloud support real organisations, and how consultants translate business needs into working solutions.',
    ar: 'برنامج منظّم يربط تطوير البرمجيات بالاستشارات التجارية — للتعرّف على كيفية دعم أنظمة تخطيط الموارد مثل Oracle Fusion Cloud للمؤسسات، وكيف يحوّل المستشارون احتياجات العمل إلى حلول عملية.',
  },
  modules: [
    {
      title: { en: 'Software Consultancy Foundations', ar: 'أساسيات الاستشارات البرمجية' },
      points: {
        en: [
          'Consulting lifecycle: discovery, analysis, delivery, support',
          'Requirement gathering & stakeholder workshops',
          'Writing functional specifications and user stories',
        ],
        ar: [
          'دورة حياة الاستشارة: الاكتشاف، التحليل، التنفيذ، الدعم',
          'جمع المتطلبات وورش العمل مع أصحاب المصلحة',
          'كتابة المواصفات الوظيفية وقصص المستخدم',
        ],
      },
    },
    {
      title: { en: 'Business Analysis', ar: 'تحليل الأعمال' },
      points: {
        en: [
          'Process mapping (as-is / to-be) and gap analysis',
          'Translating business needs into system requirements',
          'Documentation and presenting solutions to clients',
        ],
        ar: [
          'رسم العمليات (الوضع الحالي / المستهدف) وتحليل الفجوات',
          'تحويل احتياجات العمل إلى متطلبات نظام',
          'التوثيق وعرض الحلول على العملاء',
        ],
      },
    },
    {
      title: { en: 'Oracle Fusion Cloud & ERP Concepts', ar: 'Oracle Fusion Cloud ومفاهيم ERP' },
      points: {
        en: [
          'ERP fundamentals and how business modules connect',
          'Oracle Fusion navigation, setup and configuration basics',
          'Overview of Financials, Procurement and HCM modules',
        ],
        ar: [
          'أساسيات أنظمة ERP وكيفية ترابط وحدات العمل',
          'التنقل في Oracle Fusion وأساسيات الإعداد والتهيئة',
          'نظرة عامة على وحدات المالية والمشتريات والموارد البشرية',
        ],
      },
    },
    {
      title: { en: 'SQL & Database Fundamentals', ar: 'أساسيات SQL وقواعد البيانات' },
      points: {
        en: [
          'Relational data modelling and normalisation',
          'Writing SQL queries, joins and reports',
          'Data validation and migration concepts',
        ],
        ar: [
          'نمذجة البيانات العلائقية والتطبيع',
          'كتابة استعلامات SQL والربط والتقارير',
          'مفاهيم التحقق من البيانات وترحيلها',
        ],
      },
    },
  ],
  skills: {
    en: ['Business Analysis', 'ERP Concepts', 'Oracle Fusion', 'SQL', 'Requirements Gathering', 'Client Communication'],
    ar: ['تحليل الأعمال', 'مفاهيم ERP', 'Oracle Fusion', 'SQL', 'جمع المتطلبات', 'التواصل مع العملاء'],
  },
};
