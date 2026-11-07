import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/config';
import ProductDetailPage from '../[slug]/page';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Agriculture Loans',
  description: 'Agriculture loans that support cultivation, irrigation, and farm productivity.',
};

export default function AgricultureLoansPage({ params }: { params: { locale: Locale } }) {
  return <ProductDetailPage params={{ locale: params.locale, slug: 'agriculture-loans' }} />;
}
