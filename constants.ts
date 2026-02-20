import { CategoryData, NavItem } from './types';

export const HERO_IMAGE_URL = "https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/69936b55cbc22c30b38b9834_Background-image.png";

export const CATEGORIES: NavItem[] = [
  { label: 'WEBSITES', value: 'websites' },
  { label: 'BRANDING', value: 'branding' },
  { label: 'MARKETING', value: 'marketing' },
  { label: 'CRM', value: 'crm' },
  { label: 'AI AUTOMATION', value: 'ai-automation' },
];

const LOREM_EXCERPT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

// Helper to generate mock articles
const generateArticles = (category: string, count: number, offset: number): any[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${category.toLowerCase().replace(/\s+/g, '-')}-${offset + i}`,
    category,
    title: `${category.toUpperCase()}`,
    excerpt: LOREM_EXCERPT,
    imageUrl: `https://picsum.photos/800/600?random=${offset + i}`,
  }));
};

const GENERIC_DESCRIPTION = "Clear thinking on website strategy, design, performance and platforms. Practical insights to help you build, improve and scale a website that actually supports growth.";

export const SECTIONS_DATA: CategoryData[] = [
  {
    id: 'websites',
    title: 'WEBSITES',
    description: GENERIC_DESCRIPTION,
    articles: generateArticles('Web Design', 34, 10),
    subCategories: [
      'WEBSITE STRATEGY',
      'GROWTH DRIVEN DESIGN',
      'UX & UI',
      'PERFORMANCE & SEO',
      'PLATFORMS'
    ]
  },
  {
    id: 'branding',
    title: 'BRANDING',
    description: GENERIC_DESCRIPTION,
    articles: generateArticles('Branding', 15, 20),
    subCategories: [
      'BRAND STRATEGY',
      'BRAND IDENTITY',
      'BRAND POSITIONING',
      'REBRANDING',
      'BRAND SYSTEMS'
    ]
  },
  {
    id: 'marketing',
    title: 'MARKETING',
    description: GENERIC_DESCRIPTION,
    articles: generateArticles('Marketing', 15, 30),
    subCategories: [
      'SEO',
      'AEO',
      'CONTENT MARKETING',
      'DIGITAL CAMPAIGNS',
      'GROWTH DRIVEN DESIGN'
    ]
  },
  {
    id: 'crm',
    title: 'CRM',
    description: GENERIC_DESCRIPTION,
    articles: generateArticles('CRM', 15, 40),
    subCategories: [
      'CRM STRATEGY',
      'HUBSPOT CRM',
      'MARKETING AUTOMATION',
      'SALES ENABLEMENT',
      'DATA AND REPORTING'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI',
    description: GENERIC_DESCRIPTION,
    articles: generateArticles('AI', 15, 50),
    // Note: The provided design screenshot for 'AI' displays the same subcategories as 'CRM'.
    // We are matching the design exactly as requested.
    subCategories: [
      'CRM STRATEGY',
      'HUBSPOT CRM',
      'MARKETING AUTOMATION',
      'SALES ENABLEMENT',
      'DATA AND REPORTING'
    ]
  },
];

export const FEATURED_ARTICLES = generateArticles('Featured', 4, 1);

export const getArticleById = (id: string) => {
  const allArticles = [
    ...FEATURED_ARTICLES,
    ...SECTIONS_DATA.flatMap(s => s.articles)
  ];
  return allArticles.find(a => a.id === id);
};