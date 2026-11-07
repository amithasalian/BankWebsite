import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'kn'];
  const productSlugs = [
    'savings-accounts',
    'current-accounts',
    'fixed-deposits',
    'recurring-deposits',
    'gold-loans',
    'agriculture-loans',
    'business-loans',
  ];
  const routes = [
    '',
    '/about',
    '/products',
    ...productSlugs.map((slug) => `/products/${slug}`),
    '/rates',
    '/branches',
    '/downloads',
    '/faq',
    '/contact',
    '/grievance',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `https://www.cooperativebank.in/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
  );
}
