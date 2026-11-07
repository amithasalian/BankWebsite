import type { Metadata } from 'next';
import Link from 'next/link';
import { productCatalog } from '@/data/products';
import { rateCategories } from '@/data/rates';
import { branchDirectory } from '@/data/branches';
import { downloadCategories } from '@/data/downloads';
import { faqCategories } from '@/data/faqs';
import type { Locale } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Trusted cooperative banking services, savings options, business loans, branch support, and member-first financial guidance.',
};

const serviceIcons = ['💰', '🏦', '📈', '🌾', '🏢', '💬'];
const productIcons = ['💰', '📈', '🏦', '💳', '🥇', '🌾', '🏢'];

const content = {
  en: {
    eyebrow: 'Modern Cooperative Banking',
    title: 'Financial confidence for every stage of life',
    description:
      'From everyday savings to business expansion, we help families, members, and entrepreneurs build stability with practical, transparent banking support.',
    primary: 'Explore Products',
    secondary: 'Visit a Branch',
    trust: 'Trusted by 240,000+ members',
    heroStats: [
      { label: 'Years of Service', value: '35+' },
      { label: 'Members Served', value: '2.4L+' },
      { label: 'Branches', value: '48' },
    ],
    services: [
      { title: 'Savings', description: 'Secure everyday savings for homes and families.', icon: '💰' },
      { title: 'Deposits', description: 'Flexible fixed and recurring deposit options.', icon: '🏦' },
      { title: 'Loans', description: 'Support for urgent and long-term growth needs.', icon: '📈' },
      { title: 'Agriculture', description: 'Community-first support for farmers and rural growth.', icon: '🌾' },
      { title: 'Business Banking', description: 'Working capital and expansion financing.', icon: '🏢' },
      { title: 'Customer Support', description: 'Friendly guidance from our branch and support teams.', icon: '💬' },
    ],
    community: [
      { title: 'Farmers', text: 'Agricultural support and seasonal resilience.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80' },
      { title: 'Small Businesses', text: 'Flexible working capital and growth financing.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
      { title: 'Families', text: 'Savings, safety, and confidence for every household.', image: 'https://images.unsplash.com/photo-1517486800579-88f0f1d57f0e?auto=format&fit=crop&w=900&q=80' },
    ],
    trustCards: [
      { title: 'Secure Banking', text: 'Protected systems and member-friendly operating practices.' },
      { title: 'Trusted Community Institution', text: 'A local institution built for long-term member trust.' },
      { title: 'Transparent Processes', text: 'Clear guidance, expectations, and responsible decision-making.' },
      { title: 'Member-Focused Services', text: 'Support designed around everyday financial needs.' },
    ],
  },
  kn: {
    eyebrow: 'ಆಧುನಿಕ ಸಹಕಾರಿ ಬ್ಯಾಂಕಿಂಗ್',
    title: 'ಪ್ರತಿ ಜೀವನ ಹಂತಕ್ಕೂ ಹಣಕಾಸು ವಿಶ್ವಾಸ',
    description:
      'ದಿನನಿತ್ಯದ ಉಳಿತಾಯದಿಂದ ವ್ಯಾಪಾರ ವಿಸ್ತರಣೆಗಳವರೆಗೆ, ನಮ್ಮ ಬ್ಯಾಂಕ್ ಕುಟುಂಬಗಳು, ಸದಸ್ಯರು ಮತ್ತು ಉದ್ಯಮಸ್ಥರಿಗೆ praktiಕ ಮತ್ತು ಪಾರದರ್ಶಕ ಸಹಾಯ ನೀಡುತ್ತದೆ.',
    primary: 'ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ',
    secondary: 'ಶಾಖೆ ಕ್ಕೆ ಭೇಟಿ ನೀಡಿ',
    trust: '240,000+ ಸದಸ್ಯರಿಂದ ನಂಬಿಕೆ',
    heroStats: [
      { label: 'ಸೇವೆಯ ವರ್ಷಗಳು', value: '35+' },
      { label: 'ಸೇವಿಸಿದ ಸದಸ್ಯರು', value: '2.4L+' },
      { label: 'ಶಾಖೆಗಳು', value: '48' },
    ],
    services: [
      { title: 'ಉಳಿತಾಯ', description: 'ಮನೆ ಮತ್ತು ಕುಟುಂಬಗಳಿಗೆ ಸುರಕ್ಷಿತ ದೈನಂದಿನ ಉಳಿತಾಯ.', icon: '💰' },
      { title: 'ಠೇವಣಿಗಳು', description: 'ಮೆ Flexibile ಸ್ಥಿರ ಮತ್ತು ಪುನರಾವರ್ತಿತ ಠೇವಣಿ ಆಯ್ಕೆಗಳು.', icon: '🏦' },
      { title: 'ಸಾಲಗಳು', description: 'ತುರ್ತು ಮತ್ತು ದೀರ್ಘಾವಧಿಯ ಬೆಳವಣಿಗೆ ಅಗತ್ಯಗಳಿಗೆ ಬೆಂಬಲ.', icon: '📈' },
      { title: 'ಕೃಷಿ', description: 'ರೈತರಿಗೆ ಮತ್ತು ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿಗೆ ಸಮುದಾಯಮಟ್ಟದ ಬೆಂಬಲ.', icon: '🌾' },
      { title: 'ವ್ಯಾಪಾರ ಬ್ಯಾಂಕಿಂಗ್', description: 'ಕಾರ್ಯಕಾರಿ ನಿಧಿ ಮತ್ತು ವಿಸ್ತರಣೆ ಹಣಕಾಸು.', icon: '🏢' },
      { title: 'ಗ್ರಾಹಕ ಸಹಾಯ', description: 'ನಮ್ಮ ಶಾಖೆ ಮತ್ತು ಸಹಾಯ ತಂಡದಿಂದ ಸ್ನೇಹಪೂರ್ವಕ ಮಾರ್ಗದರ್ಶನ.', icon: '💬' },
    ],
    community: [
      { title: 'ರೈತರು', text: 'ಕೃಷಿ ಬೆಂಬಲ ಮತ್ತು ಋತುಮಾನದ ಸ್ಥಿತಿಸ್ಥಾಪನೆ.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80' },
      { title: 'ಚಿಕ್ಕ ವ್ಯಾಪಾರಗಳು', text: 'ಮೃದು ಕಾರ್ಯಕಾರಿ ನಿಧಿ ಮತ್ತು ವಿಸ್ತರಣೆ ಹಣಕಾಸು.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
      { title: 'ಕುಟುಂಬಗಳು', text: 'ಉಳಿತಾಯ, ಭದ್ರತೆ ಮತ್ತು ಪ್ರತಿ ಮನೆಯ ವಿಶ್ವಾಸ.', image: 'https://images.unsplash.com/photo-1517486800579-88f0f1d57f0e?auto=format&fit=crop&w=900&q=80' },
    ],
    trustCards: [
      { title: 'ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕಿಂಗ್', text: 'ಸುರಕ್ಷಿತ ವ್ಯವಸ್ಥೆಗಳು ಮತ್ತು ಸದಸ್ಯ-ಮೂಲ ಸೇವಾ ನಡವಳಿಕೆ.' },
      { title: 'ವಿಶ್ವಾಸಾರ್ಹ ಸಮುದಾಯ ಸಂಸ್ಥೆ', text: 'ದೀರ್ಘಾವಧಿಯ ಸದಸ್ಯ ವಿಶ್ವಾಸಕ್ಕೆ ಆಧಾರಿತ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆ.' },
      { title: 'ಪಾರದರ್ಶಕ ಪ್ರಕ್ರಿಯೆಗಳು', text: 'ಸ್ಪಷ್ಟ ಮಾರ್ಗದರ್ಶನ, ನಿರೀಕ್ಷೆಗಳು ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ನಿರ್ಧಾರಗಳು.' },
      { title: 'ಸದಸ್ಯ-ಆಧಾರಿತ ಸೇವೆ', text: 'ದೈನಂದಿನ ಹಣಕಾಸು ಅಗತ್ಯಗಳಿಗೆ ಸರಿಹೊಂದುವ ಸಹಾಯ.' },
    ],
  },
} as const;

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';
  const t = content[locale];
  const featuredProducts = productCatalog.slice(0, 4);
  const ratesPreview = rateCategories.slice(0, 3);
  const featuredDownloads = downloadCategories.slice(0, 2);
  const featuredFaq = faqCategories.slice(0, 2);

  return (
    <>
      <section className="section-shell pb-6 md:pb-8 lg:pb-10">
        <div className="container-shell">
          <div
            className="premium-hero rounded-[28px] border border-bank-border shadow-soft"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(15,43,70,0.86), rgba(15,43,70,0.72) 38%, rgba(14,107,107,0.18)), url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="grid gap-8 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-16">
              <div className="flex flex-col justify-center">
                <p className="section-label !text-bank-gold">{t.eyebrow}</p>
                <h1 className="mt-4 max-w-xl text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  {t.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/85 md:text-lg">
                  {t.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href={`/${locale}/products`} className="btn-primary bg-white !text-bank-navy hover:!bg-bank-ivory">
                    {t.primary}
                  </Link>
                  <Link href={`/${locale}/branches`} className="btn-secondary !bg-white/10 !text-white hover:!bg-white/20">
                    {t.secondary}
                  </Link>
                </div>

                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-bank-success" aria-hidden="true" />
                  {t.trust}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {t.heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="mt-2 text-sm text-white/75">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-bank-gold">Featured</span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/85">
                      Member-first
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {productCatalog.slice(0,3).map((product, index) => (
                      <div key={product.slug} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{productIcons[index]}</span>
                          <span className="text-sm font-medium text-white/90">{product.title[locale]}</span>
                        </div>
                        <span className="text-xs text-white/70">{product.rates[locale]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-shell">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-label">{locale === 'en' ? 'Our strengths' : 'ನಮ್ಮ ಬಲಗಳು'}</p>
              <h2 className="mt-3 text-3xl font-bold text-bank-navy md:text-4xl">
                {locale === 'en' ? 'Banking built around your goals' : 'ನಿಮ್ಮ ಗುರಿಗಳ ಸುತ್ತ ಬ್ಯಾಂಕಿಂಗ್'}
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.heroStats.map((stat) => (
              <div key={stat.label} className="stat-card !p-6">
                <div className="text-3xl font-bold text-bank-navy">{stat.value}</div>
                <div className="mt-3 text-sm font-medium text-bank-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl">
            <p className="section-label">{locale === 'en' ? 'Services' : 'ಸೇವೆಗಳು'}</p>
            <h2 className="mt-3 text-3xl font-bold text-bank-navy md:text-4xl">
              {locale === 'en' ? 'Essential banking services for everyday life' : 'ದೈನಂದಿನ ಜೀವನಕ್ಕೆ ಅಗತ್ಯ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು'}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.services.map((service, index) => (
              <div key={service.title} className="card-surface group p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-bank-ivory text-2xl shadow-sm transition group-hover:scale-105">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-bank-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-bank-muted">{service.description}</p>
                <div className="mt-5 text-sm font-semibold text-bank-teal">0{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl">
            <p className="section-label">{locale === 'en' ? 'Community banking' : 'ಸಮುದಾಯ ಬ್ಯಾಂಕಿಂಗ್'}</p>
            <h2 className="mt-3 text-3xl font-bold text-bank-navy md:text-4xl">
              {locale === 'en' ? 'Support that grows with the community' : 'ಸಮುದಾಯದೊಂದಿಗೆ ಬೆಳೆಯುವ ಬೆಂಬಲ'}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {t.community.map((item) => (
              <div key={item.title} className="card-surface overflow-hidden">
                <div className="h-52 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-bank-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-bank-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl">
            <p className="section-label">{locale === 'en' ? 'Trust & credibility' : 'ವಿಶ್ವಾಸ ಮತ್ತು ನಂಬಿಕೆ'}</p>
            <h2 className="mt-3 text-3xl font-bold text-bank-navy md:text-4xl">
              {locale === 'en' ? 'Built on trust, transparency, and responsibility' : 'ವಿಶ್ವಾಸ, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಜವಾಬ್ದಾರಿಯ ಮೇಲೆ ನಿರ್ಮಿಸಲಾಗಿದೆ'}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.trustCards.map((card, index) => (
              <div key={card.title} className="card-surface p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-bank-navy text-lg font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-bank-navy">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-bank-muted">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-shell">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-label">{locale === 'en' ? 'Products' : 'ಉತ್ಪನ್ನಗಳು'}</p>
              <h2 className="mt-3 text-3xl font-bold text-bank-navy md:text-4xl">
                {locale === 'en' ? 'Financial products designed for real life' : 'ನಿಜ ಜೀವನಕ್ಕೆ ಸೂಕ್ತವಾದ ಹಣಕಾಸು ಉತ್ಪನ್ನಗಳು'}
              </h2>
            </div>
            <Link href={`/${locale}/products`} className="hidden text-sm font-semibold text-bank-teal hover:text-bank-navy md:inline-flex">
              {locale === 'en' ? 'View all products' : 'ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ'} →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <div key={product.slug} className="card-surface group flex h-full flex-col p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-bank-ivory text-2xl shadow-sm transition group-hover:scale-105">
                  {productIcons[index]}
                </div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-bank-teal">
                  {locale === 'en' ? 'Product' : 'ಉತ್ಪನ್ನ'}
                </div>
                <h3 className="text-2xl font-bold text-bank-navy">{product.title[locale]}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-bank-muted">{product.summary[locale]}</p>
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

      <section className="section-shell pt-0">
        <div className="container-shell">
          <div className="card-surface p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">{locale === 'en' ? 'Interest rates' : 'ಬಡ್ಡಿ ದರಗಳು'}</p>
                <h2 className="mt-3 text-3xl font-bold text-bank-navy md:text-4xl">
                  {locale === 'en' ? 'Indicative rates for core products' : 'ಮೂಲ ಉತ್ಪನ್ನಗಳ ಸೂಚ್ಯ ದರಗಳು'}
                </h2>
              </div>
              <Link href={`/${locale}/rates`} className="text-sm font-semibold text-bank-teal hover:text-bank-navy">
                {locale === 'en' ? 'View full rate table' : 'ಸಂಪೂರ್ಣ ದರಪಟ್ಟಿ'} →
              </Link>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-bank-border">
              <table className="min-w-full divide-y divide-bank-border text-left">
                <thead className="bg-bank-ivory">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-bank-navy">{locale === 'en' ? 'Product' : 'ಉತ್ಪನ್ನ'}</th>
                    <th className="px-4 py-3 text-sm font-semibold text-bank-navy">{locale === 'en' ? 'Rate' : 'ದರ'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-bank-border bg-white">
                  {ratesPreview.map((rate) => (
                    <tr key={rate.slug}>
                      <td className="px-4 py-3 text-sm font-medium text-bank-navy">{rate.title[locale]}</td>
                      <td className="px-4 py-3 text-sm text-bank-muted">{rate.rows[0].rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="mb-8">
                <p className="section-label">{locale === 'en' ? 'Branches' : 'ಶಾಖೆಗಳು'}</p>
                <h2 className="mt-3 text-3xl font-bold text-bank-navy md:text-4xl">
                  {locale === 'en' ? 'Find the branch that fits your needs' : 'ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ಹೊಂದುವ ಶಾಖೆ ಹುಡುಕಿ'}
                </h2>
              </div>

              <div className="space-y-4">
                {branchDirectory.slice(0, 2).map((branch) => (
                  <div key={branch.id} className="card-surface p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-bank-navy">{branch.name[locale]}</h3>
                        <p className="mt-2 text-sm text-bank-muted">{branch.address[locale]}</p>
                      </div>
                      <span className="rounded-full bg-bank-ivory px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-bank-teal">
                        {branch.city[locale]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8">
                <p className="section-label">{locale === 'en' ? 'Downloads' : 'ಡೌನ್ಲೋಡ್‌ಗಳು'}</p>
                <h2 className="mt-3 text-3xl font-bold text-bank-navy md:text-4xl">
                  {locale === 'en' ? 'Forms and notices you may need' : 'ನಿಮಗೆ ಬೇಕಾಗುವ ರೂಪಗಳು ಮತ್ತು ಸೂಚನೆಗಳು'}
                </h2>
              </div>

              <div className="space-y-4">
                {featuredDownloads.map((category) => (
                  <div key={category.slug} className="card-surface p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-bank-teal">{category.title[locale]}</p>
                    <div className="mt-3 space-y-2 text-sm text-bank-muted">
                      {category.items.slice(0, 2).map((item) => (
                        <div key={item.title[locale]} className="flex items-center justify-between gap-4 rounded-xl bg-bank-ivory px-3 py-2">
                          <span>{item.title[locale]}</span>
                          <span className="font-medium text-bank-navy">{item.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl">
            <p className="section-label">{locale === 'en' ? 'FAQ' : 'ಪ್ರಶ್ನೆಗಳು'}</p>
            <h2 className="mt-3 text-3xl font-bold text-bank-navy md:text-4xl">
              {locale === 'en' ? 'Answers for common banking questions' : 'ಸಾಮಾನ್ಯ ಬ್ಯಾಂಕಿಂಗ್ ಪ್ರಶ್ನೆಗಳ ಉತ್ತರಗಳು'}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredFaq.map((group) => (
              <div key={group.slug} className="card-surface p-6">
                <h3 className="text-xl font-bold text-bank-navy">{group.title[locale]}</h3>
                <div className="mt-4 space-y-3">
                  {group.items.slice(0, 2).map((item) => (
                    <div key={item.question[locale]} className="rounded-xl border border-bank-border bg-bank-ivory p-3">
                      <p className="text-sm font-semibold text-bank-navy">{item.question[locale]}</p>
                      <p className="mt-2 text-sm leading-6 text-bank-muted">{item.answer[locale]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-shell">
          <div className="card-surface bg-bank-navy p-8 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="section-label !text-bank-gold">{locale === 'en' ? 'Need support?' : 'ಸಹಾಯ ಬೇಕೇ?'}</p>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  {locale === 'en' ? 'Talk to our team about the right banking solution' : 'ಸರಿಯಾದ ಬ್ಯಾಂಕಿಂಗ್ ಪರಿಹಾರಕ್ಕೆ ನಮ್ಮ ತಂಡದೊಂದಿಗೆ ಮಾತನಾಡಿ'}
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href={`/${locale}/contact`} className="btn-primary bg-white !text-bank-navy hover:!bg-bank-ivory">
                  {locale === 'en' ? 'Contact Us' : 'ಸಂಪರ್ಕಿಸಿ'}
                </Link>
                <Link href={`/${locale}/grievance`} className="btn-secondary !bg-white/10 !text-white hover:!bg-white/20">
                  {locale === 'en' ? 'Grievance Support' : 'ದುರುಭಿತೆ ಸಹಾಯ'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
