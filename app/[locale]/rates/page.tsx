import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { rateCategories, rateDisclaimer } from '@/data/rates';
import { locales, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Rates',
  description: 'Cooperative bank interest rate information for savings, deposits, and loans.',
};

export default function RatesPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';

  return (
    <section className="section-shell">
      <div className="container-shell max-w-6xl">
        <Breadcrumbs
          items={[
            { label: locale === 'en' ? 'Home' : 'ಮುಖಪುಟ', href: `/${locale}` },
            { label: locale === 'en' ? 'Rates' : 'ದರಗಳು' },
          ]}
        />

        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bank-teal">
            {locale === 'en' ? 'Current rates' : 'ಪ್ರಸ್ತುತ ದರಗಳು'}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-bank-navy md:text-5xl">
            {locale === 'en' ? 'Indicative rate information' : 'ಸೂಚ್ಯ ದರ ಮಾಹಿತ'}
          </h1>
        </div>

        <div className="space-y-8">
          {rateCategories.map((category) => (
            <div key={category.slug} className="card-surface p-6 md:p-8">
              <h2 className="text-2xl font-bold text-bank-navy">{category.title[locale]}</h2>
              <p className="mt-3 text-base text-bank-muted">{category.description[locale]}</p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-bank-border">
                <table className="min-w-full divide-y divide-bank-border text-left">
                  <thead className="bg-bank-ivory">
                    <tr>
                      <th className="px-4 py-3 text-sm font-semibold text-bank-navy">
                        {locale === 'en' ? 'Plan' : 'ಯೋಜನೆ'}
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-bank-navy">
                        {locale === 'en' ? 'Rate' : 'ದರ'}
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-bank-navy">
                        {locale === 'en' ? 'Note' : 'ಟಿಪ್ಪಣಿ'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-bank-border bg-white">
                    {category.rows.map((row) => (
                      <tr key={row.label[locale]}>
                        <td className="px-4 py-3 text-sm font-medium text-bank-navy">{row.label[locale]}</td>
                        <td className="px-4 py-3 text-sm text-bank-muted">{row.rate}</td>
                        <td className="px-4 py-3 text-sm text-bank-muted">{row.note[locale]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-bank-border bg-bank-ivory p-5 text-sm leading-7 text-bank-muted">
          {rateDisclaimer[locale]}
        </div>
      </div>
    </section>
  );
}
