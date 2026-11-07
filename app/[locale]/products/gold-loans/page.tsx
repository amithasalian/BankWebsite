import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/config';
import ProductDetailPage from '../[slug]/page';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Gold Loans',
  description: 'Quick liquidity and financial support with gold-backed borrowing options.',
};

export default function GoldLoansPage({ params }: { params: { locale: Locale } }) {
  return <ProductDetailPage params={{ locale: params.locale, slug: 'gold-loans' }} />;
}
