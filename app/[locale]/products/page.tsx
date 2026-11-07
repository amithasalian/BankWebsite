import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { productCatalog } from '@/data/products';
import type { Locale } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore our savings, deposit, and loan products.',
};

const productIcons = ['💰', '🏦', '📈', '💳', '🥇', '🌾', '🏢'];

export default function ProductsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';

  return (
    <section className="section-shell">
      <div className="container-shell">
        <Breadcrumbs
          items={[
            { label: locale === 'en' ? 'Home' : 'ಮುಖಪುಟ', href: `/${locale}` },
            { label: locale === 'en' ? 'Products' : 'ಉತ್ಪನ್ನಗಳು' },
          ]}
        />

        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bank-teal">
            {locale === 'en' ? 'Our Products' : 'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು'}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-bank-navy md:text-5xl">
            {locale === 'en' ? 'Financial products designed for real life' : 'ನಿಜ ಜೀವನಕ್ಕೆ ಸೂಕ್ತವಾದ ಹಣಕಾಸು ಉತ್ಪನ್ನಗಳು'}
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCatalog.map((product, index) => (
            <div key={product.slug} className="card-surface group flex h-full flex-col p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-bank-ivory text-2xl shadow-sm transition group-hover:scale-105">
                {productIcons[index]}
              </div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-bank-teal">
                {locale === 'en' ? 'Product' : 'ಉತ್ಪನ್ನ'}
              </div>
              <h2 className="text-2xl font-bold text-bank-navy">{product.title[locale]}</h2>
              <p className="mt-4 flex-1 text-base leading-7 text-bank-muted">{product.summary[locale]}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-bank-teal">{product.rates[locale]}</span>
                <Link href={`/${locale}/products/${product.slug}`} className="text-sm font-semibold text-bank-navy hover:text-bank-teal">
                  {locale === 'en' ? 'Learn more' : 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ'} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
