import type { Metadata } from 'next';
import Link from 'next/link';
import { downloadCategories } from '@/data/downloads';
import { locales, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Download service forms, notices, and bank documents.',
};

export default function DownloadsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';

  return (
    <section className="section-shell">
      <div className="container-shell max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bank-teal">
            {locale === 'en' ? 'Forms & notices' : 'ರೂಪಗಳು ಮತ್ತು ಸೂಚನೆಗಳು'}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-bank-navy md:text-5xl">
            {locale === 'en' ? 'Banking downloads' : 'ಬ್ಯಾಂಕಿಂಗ್ ಡೌನ್ಲೋಡ್‌ಗಳು'}
          </h1>
        </div>

        <div className="space-y-8">
          {downloadCategories.map((category) => (
            <div key={category.slug} className="card-surface p-6 md:p-8">
              <h2 className="text-2xl font-bold text-bank-navy">{category.title[locale]}</h2>
              <div className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <div key={item.title[locale]} className="flex flex-col gap-4 rounded-2xl border border-bank-border bg-bank-ivory p-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-bank-navy">{item.title[locale]}</p>
                      <p className="mt-1 text-sm text-bank-muted">{item.description[locale]}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-bank-teal">
                        {item.type}
                      </span>
                      <Link href={item.file} className="btn-secondary !px-4 !py-2 !text-xs">
                        {locale === 'en' ? 'Download' : 'ಡೌನ್‌ಲೋಡ್'}
                      </Link>
                    </div>
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
