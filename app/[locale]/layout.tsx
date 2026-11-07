import '../globals.css';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { locales, type Locale } from '@/i18n/config';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return buildMetadata(params.locale, 'Home');
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bank-ivory text-bank-text">
      <Header locale={locale} />
      <main id="main-content">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
