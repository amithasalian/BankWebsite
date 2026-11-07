import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/config';
import ProductDetailPage from '../[slug]/page';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Recurring Deposits',
  description: 'Recurring deposit plans that encourage disciplined monthly savings and future planning.',
};

export default function RecurringDepositsPage({ params }: { params: { locale: Locale } }) {
  return <ProductDetailPage params={{ locale: params.locale, slug: 'recurring-deposits' }} />;
}
