import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { productCatalog } from '@/data/products';
import { locales, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return productCatalog.flatMap((product) =>
    locales.map((locale) => ({
      locale,
      slug: product.slug,
    })),
  );
}

export function generateMetadata({ params }: { params: { locale: Locale; slug: string } }): Metadata {
  const product = productCatalog.find((item) => item.slug === params.slug);

  return {
    title: product ? product.title[params.locale] : 'Product',
    description: product ? product.summary[params.locale] : 'Banking product information.',
  };
}

export default function ProductDetailPage({ params }: { params: { locale: Locale; slug: string } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';
  const product = productCatalog.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section-shell">
      <div className="container-shell max-w-6xl space-y-8">
        <Breadcrumbs
          items={[
            { label: locale === 'en' ? 'Home' : 'ಮುಖಪುಟ', href: `/${locale}` },
            { label: locale === 'en' ? 'Products' : 'ಉತ್ಪನ್ನಗಳು', href: `/${locale}/products` },
            { label: product.title[locale] },
          ]}
        />

        <div className="rounded-3xl bg-gradient-to-r from-bank-navy to-bank-teal p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bank-gold">
            {locale === 'en' ? 'Product Overview' : 'ಉತ್ಪನ್ನ概览'}
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">{product.title[locale]}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">{product.hero[locale]}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card-surface p-8">
            <h2 className="text-2xl font-bold text-bank-navy">
              {locale === 'en' ? 'About this product' : 'ಈ ಉತ್ಪನ್ನದ ಬಗ್ಗೆ'}
            </h2>
            <p className="mt-4 text-base leading-7 text-bank-muted">{product.overview[locale]}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-bank-navy">
                  {locale === 'en' ? 'Key benefits' : 'ಮುಖ್ಯ ಪ್ರಯೋಜನಗಳು'}
                </h3>
                <ul className="mt-4 space-y-2 text-bank-muted">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span className="mt-1 text-bank-teal">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-bank-navy">
                  {locale === 'en' ? 'Core features' : 'ಮೂಲ ಲಕ್ಷಣಗಳು'}
                </h3>
                <ul className="mt-4 space-y-2 text-bank-muted">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 text-bank-teal">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="card-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bank-teal">
              {locale === 'en' ? 'At a glance' : 'ಒಂದು ನೋಟದಲ್ಲಿ'}
            </p>
            <div className="mt-6 space-y-5 text-sm text-bank-muted">
              <div>
                <p className="font-semibold text-bank-navy">{locale === 'en' ? 'Indicative rate' : 'ಸೂಚ್ಯ ದರ'}:</p>
                <p className="mt-1">{product.rates[locale]}</p>
              </div>
              <div>
                <p className="font-semibold text-bank-navy">{locale === 'en' ? 'Eligibility' : 'ಅರ್ಹತೆ'}:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {product.eligibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-bank-navy">{locale === 'en' ? 'Documents' : 'ದಾಖಲೆಗಳು'}:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {product.documents.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-8">
            <h3 className="text-2xl font-bold text-bank-navy">
              {locale === 'en' ? 'Frequently asked questions' : 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು'}
            </h3>
            <div className="mt-6 space-y-4">
              {product.faq.map((entry) => (
                <div key={entry.question[locale]} className="rounded-xl border border-bank-border bg-bank-ivory p-4">
                  <p className="font-semibold text-bank-navy">{entry.question[locale]}</p>
                  <p className="mt-2 text-sm leading-6 text-bank-muted">{entry.answer[locale]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <h3 className="text-2xl font-bold text-bank-navy">
              {locale === 'en' ? 'Ready to proceed?' : 'ಪ್ರಕ್ರಿಯೆಗೆ ಸಿದ್ಧವಾಗಿದ್ದೀರಾ?'}
            </h3>
            <p className="mt-4 text-base leading-7 text-bank-muted">
              {locale === 'en'
                ? 'Speak with our team to compare options and choose the right banking support for your goals.'
                : 'ನಿಮ್ಮ ಗುರಿಗಳಿಗೆ ಸೂಕ್ತವಾದ ಬ್ಯಾಂಕಿಂಗ್ ಬೆಂಬಲವನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ನಮ್ಮ ತಂಡದೊಂದಿಗೆ ಮಾತನಾಡಿ.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {locale === 'en' ? 'Contact Us' : 'ಸಂಪರ್ಕಿಸಿ'}
              </Link>
              <Link href={`/${locale}/products`} className="btn-secondary">
                {locale === 'en' ? 'View All Products' : 'ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
