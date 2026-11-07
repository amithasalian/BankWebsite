import type { Metadata } from 'next';
import { siteMetadata } from '@/data/seo';
import type { Locale } from '@/i18n/config';

export function buildMetadata(locale: Locale, pageTitle?: string): Metadata {
  const title = pageTitle ? `${pageTitle} | ${siteMetadata.title[locale]}` : siteMetadata.title[locale];

  return {
    title,
    description: siteMetadata.description[locale],
    openGraph: {
      title,
      description: siteMetadata.description[locale],
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}`,
    },
  };
}
