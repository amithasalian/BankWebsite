import type { Metadata } from 'next';
import { faqCategories } from '@/data/faqs';
import { locales, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about banking services, products, and branch support.',
};

export default function FaqPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';

  return (
    <section className="section-shell">
      <div className="container-shell max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bank-teal">
            {locale === 'en' ? 'Support center' : 'ಸಹಾಯ ಕೇಂದ್ರ'}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-bank-navy md:text-5xl">
            {locale === 'en' ? 'Frequently asked questions' : 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು'}
          </h1>
        </div>

        <div className="space-y-8">
          {faqCategories.map((group) => (
            <div key={group.slug} className="card-surface p-6 md:p-8">
              <h2 className="text-2xl font-bold text-bank-navy">{group.title[locale]}</h2>
              <div className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <div key={item.question[locale]} className="rounded-2xl border border-bank-border bg-bank-ivory p-4">
                    <p className="text-base font-semibold text-bank-navy">{item.question[locale]}</p>
                    <p className="mt-2 text-sm leading-7 text-bank-muted">{item.answer[locale]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
