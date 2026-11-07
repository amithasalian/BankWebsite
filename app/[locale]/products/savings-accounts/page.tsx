import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/config';
import ProductDetailPage from '../[slug]/page';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Savings Accounts',
  description: 'Simple and secure savings solutions designed for everyday member needs.',
};

export default function SavingsAccountsPage({ params }: { params: { locale: Locale } }) {
  return <ProductDetailPage params={{ locale: params.locale, slug: 'savings-accounts' }} />;
}
