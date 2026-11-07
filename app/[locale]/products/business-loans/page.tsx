import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/config';
import ProductDetailPage from '../[slug]/page';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Business Loans',
  description: 'Business loans for working capital, expansion, and growth-oriented investment support.',
};

export default function BusinessLoansPage({ params }: { params: { locale: Locale } }) {
  return <ProductDetailPage params={{ locale: params.locale, slug: 'business-loans' }} />;
}
