import { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/data/blogPosts';

const BASE_URL = 'https://dadcafe.vercel.app';

const SITUATION_SLUGS = [
  'morning-sickness', 'hospital-bag', 'baby-crying', 'postpartum-depression',
  'first-fever', 'sleep-deprivation', 'fetal-movement', 'braxton-hicks',
  'prenatal-test-result', 'pregnancy-mood-swings', 'pregnancy-weight',
  'workplace-pregnancy', 'pregnancy-insomnia', 'birth-prep-rush',
  'family-interference', 'dad-feeling-excluded', 'labor-signs', 'water-break',
  'delivery-room-role', 'emergency-csection', 'newborn-jaundice',
  'hospital-discharge', 'birth-registration', 'hospital-bill',
  'newborn-screening', 'breastfeeding-struggle', 'night-fussing',
  'umbilical-cord', 'stool-color', 'eye-discharge', 'sleeping-too-much',
  'newborn-weight-loss', 'hiccups', 'head-control', 'stuffy-nose',
  'bottle-refusal', 'growing-distant', 'parenting-style-clash',
  'relying-on-grandma', 'childcare-budget', 'wife-does-everything',
  'dad-excluded', 'inlaw-conflict', 'no-couple-time', 'dad-burnout',
  'dad-confidence', 'solid-food-refusal', 'night-waking', 'separation-anxiety',
  'developmental-concern', 'aggressive-behavior', 'speech-delay', 'picky-eating',
  'daycare-separation', 'late-walking', 'daycare-decision',
  'pregnancy-unexpected-feelings', 'ultrasound-confusion', 'pregnancy-caffeine',
  'pregnancy-activity-fear', 'pregnancy-dental', 'wife-relies-on-mom',
  'pregnancy-pets', 'pregnancy-work-drinking', 'pregnancy-no-appetite',
  'dad-prenatal-class', 'epidural-request', 'choosing-hospital', 'baby-blues',
  'cord-blood-banking', 'work-on-due-date', 'nicu-admission',
  'postpartum-care-cost', 'newborn-not-cute', 'breastfeeding-switch',
  'carseat-check', 'no-burp', 'blue-hands-feet', 'spitting-up', 'skin-rash',
  'flat-head', 'day-night-reversal', 'cries-with-dad', 'neck-fold-smell',
  'falls-asleep-feeding', 'pacifier-refusal', 'not-dad-enough',
  'wife-ignores-husband', 'more-fights-after-leave', 'inlaw-not-defended',
  'effort-not-recognized', 'wife-vents-at-door', 'fight-in-front-of-kid',
  'breadwinner-pressure', 'no-intimacy', 'inlaw-parenting-clash',
  'runs-during-meal', 'phone-tantrum', 'no-more-nap', 'dad-i-hate-you',
  'hitting-at-daycare', 'food-fixation', 'only-mom-for-sleep',
  'why-why-why', 'stranger-anxiety', 'eats-for-grandma',
];

const TIP_SLUGS = [
  'ovulation-calc', 'folic-acid-tip', 'lifestyle-prep', 'stress-manage',
  'morning-sickness-tip', 'hospital-timing', 'wife-emotion', 'nutrition-pregnancy',
  'hospital-bag-tip', 'delivery-signs', 'delivery-room', 'paternity-leave-tip',
  'newborn-sleep', 'baby-crying-tip', 'feeding-basics', 'diaper-change',
];

const GOV_SUPPORT_SLUGS = [
  'folic-acid', 'iron-supplement', 'prenatal-voucher', 'prenatal-checkup',
  'first-welcome-voucher', 'parental-benefit', 'child-allowance', 'paternity-leave',
  'parental-leave', 'newborn-checkup', 'infertility-support', 'vaccination',
];

// [stage, topic] pairs
const GUIDE_TOPICS: [string, string][] = [
  ['pre-pregnancy', 'health-prep'],
  ['pre-pregnancy', 'financial-prep'],
  ['pre-pregnancy', 'communication'],
  ['pregnant', 'trimester-1'],
  ['pregnant', 'trimester-2'],
  ['pregnant', 'trimester-3'],
  ['pregnant', 'maternity-leave'],
  ['newborn', 'emergency-guide'],
  ['newborn', 'postpartum-center'],
  ['newborn', 'first-week'],
  ['newborn', 'feeding'],
  ['newborn', 'baby-bath'],
  ['newborn', 'postpartum'],
  ['toddler', 'development'],
  ['toddler', 'play'],
  ['toddler', 'sleep'],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                  lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/guide`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/blog`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/situations`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tips`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/gov-support`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/checklist`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/dad-level`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/fertility`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/community`,   lastModified: now, changeFrequency: 'daily',   priority: 0.6 },
    { url: `${BASE_URL}/diary`,       lastModified: now, changeFrequency: 'daily',   priority: 0.5 },
    { url: `${BASE_URL}/privacy`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms`,          lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/data-deletion`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
  ];

  const guideStageRoutes: MetadataRoute.Sitemap = [
    'pre-pregnancy', 'pregnant', 'newborn', 'toddler',
  ].map((stage) => ({
    url: `${BASE_URL}/guide/${stage}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const guideTopicRoutes: MetadataRoute.Sitemap = GUIDE_TOPICS.map(([stage, topic]) => ({
    url: `${BASE_URL}/guide/${stage}/${topic}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const situationRoutes: MetadataRoute.Sitemap = SITUATION_SLUGS.map((slug) => ({
    url: `${BASE_URL}/situations/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const tipRoutes: MetadataRoute.Sitemap = TIP_SLUGS.map((slug) => ({
    url: `${BASE_URL}/tips/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const govSupportRoutes: MetadataRoute.Sitemap = GOV_SUPPORT_SLUGS.map((slug) => ({
    url: `${BASE_URL}/gov-support/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...guideStageRoutes,
    ...guideTopicRoutes,
    ...situationRoutes,
    ...tipRoutes,
    ...govSupportRoutes,
    ...blogRoutes,
  ];
}
