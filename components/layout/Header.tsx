'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Locale } from '@/i18n/config';
import { localeLabels } from '@/i18n/config';

const navItems = [
  { href: '/', label: { en: 'Home', kn: 'ಮುಖಪುಟ' } },
  { href: '/about', label: { en: 'About Us', kn: 'ನಮ್ಮ ಬಗ್ಗೆ' } },
  { href: '/products', label: { en: 'Products', kn: 'ಉತ್ಪನ್ನಗಳು' } },
  { href: '/rates', label: { en: 'Rates', kn: 'ದರಗಳು' } },
  { href: '/branches', label: { en: 'Branches', kn: 'ಶಾಖೆಗಳು' } },
  { href: '/downloads', label: { en: 'Downloads', kn: 'ಡೌನ್‌ಲೋಡ್‌ಗಳು' } },
  { href: '/faq', label: { en: 'FAQ', kn: 'ಪ್ರಶ್ನೆಗಳು' } },
  { href: '/contact', label: { en: 'Contact', kn: 'ಸಂಪರ್ಕ' } },
  { href: '/grievance', label: { en: 'Grievance', kn: 'ದುರಿತೋಪ' } },
];

const productLinks = [
  { href: '/products/savings-accounts', label: { en: 'Savings Accounts', kn: 'ಉಳಿತಾಯ ಖಾತೆ' } },
  { href: '/products/current-accounts', label: { en: 'Current Accounts', kn: 'ಪ್ರಸ್ತುತ ಖಾತೆಗಳು' } },
  { href: '/products/fixed-deposits', label: { en: 'Fixed Deposits', kn: 'ಸ್ಥಿರ ಠೇವಣಿ' } },
  { href: '/products/recurring-deposits', label: { en: 'Recurring Deposits', kn: 'ಪುನರಾವರ್ತಿತ ಠೇವಣಿ' } },
  { href: '/products/gold-loans', label: { en: 'Gold Loans', kn: 'ಚಿನ್ನ ಸಾಲ' } },
  { href: '/products/agriculture-loans', label: { en: 'Agriculture Loans', kn: 'ಕೃಷಿ ಸಾಲ' } },
  { href: '/products/business-loans', label: { en: 'Business Loans', kn: 'ವ್ಯಾಪಾರ ಸಾಲ' } },
];

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const getLocalizedPath = (nextLocale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    const rest = segments[0] === locale ? segments.slice(1) : segments;
    return `/${nextLocale}${rest.length ? `/${rest.join('/')}` : ''}`;
  };

  const isActive = (href: string) => {
    const target = `/${locale}${href}`;
    return pathname === target || (href === '/' && pathname === `/${locale}`);
  };

  const isProductsPage = pathname.startsWith(`/${locale}/products`);

  return (
    <>
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation drawer"
          className="fixed inset-0 z-40 bg-bank-navy/30 backdrop-blur-[2px] xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 border-b border-bank-border/80 bg-white/90 backdrop-blur-xl">
        <div className="container-shell flex h-20 items-center justify-between gap-4">
          <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Cooperative Bank home">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-bank-navy text-sm font-bold text-white shadow-sm">
              CB
            </div>
            <div>
              <div className="text-base font-bold text-bank-navy">Cooperative Bank</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bank-slate">
                Community Banking
              </div>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1.5 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  aria-current={active ? 'page' : undefined}
                  className={
                    active
                      ? 'nav-link nav-link--active'
                      : 'nav-link text-bank-muted hover:bg-bank-ivory hover:text-bank-navy'
                  }
                >
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div aria-label="Language selector" className="flex items-center gap-1.5 rounded-full border border-bank-border bg-bank-ivory p-1">
              {(['en', 'kn'] as Locale[]).map((lang) => (
                <Link
                  key={lang}
                  href={getLocalizedPath(lang)}
                  className={
                    locale === lang
                      ? 'rounded-full bg-bank-navy px-3 py-1.5 text-xs font-semibold text-white shadow-sm'
                      : 'rounded-full px-3 py-1.5 text-xs font-medium text-bank-muted transition hover:text-bank-navy'
                  }
                >
                  {localeLabels[lang]}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-bank-border bg-bank-ivory text-bank-navy transition hover:bg-bank-ivory/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bank-gold focus-visible:ring-offset-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 rounded-full bg-bank-navy transition ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-bank-navy transition ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-bank-navy transition ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <aside
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed left-0 top-0 z-50 h-full w-[84%] max-w-sm transform border-r border-bank-border bg-white shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-bank-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-bank-navy text-sm font-bold text-white">CB</div>
            <div>
              <div className="text-base font-bold text-bank-navy">Cooperative Bank</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-bank-slate">Community Banking</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-bank-border text-lg text-bank-navy transition hover:bg-bank-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bank-gold"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="space-y-5 p-4">
          <div className="rounded-2xl border border-bank-border bg-bank-ivory p-2">
            <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-bank-slate">Language</p>
            <div className="grid grid-cols-2 gap-2">
              {(['en', 'kn'] as Locale[]).map((lang) => (
                <Link
                  key={lang}
                  href={getLocalizedPath(lang)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    locale === lang
                      ? 'rounded-xl bg-bank-navy px-3 py-2 text-center text-sm font-semibold text-white'
                      : 'rounded-xl border border-bank-border bg-white px-3 py-2 text-center text-sm font-medium text-bank-muted'
                  }
                >
                  {localeLabels[lang]}
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Mobile primary navigation" className="space-y-1.5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isProducts = item.href === '/products';

              if (isProducts) {
                return (
                  <div key={item.href} className="rounded-2xl border border-bank-border bg-bank-ivory/60">
                    <button
                      type="button"
                      onClick={() => setProductsOpen((value) => !value)}
                      className={`flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition ${
                        isProductsPage ? 'text-bank-navy' : 'text-bank-muted'
                      }`}
                      aria-expanded={productsOpen}
                    >
                      <span>{item.label[locale]}</span>
                      <span className={`text-base transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}>⌄</span>
                    </button>

                    {productsOpen && (
                      <div className="border-t border-bank-border px-2 pb-2 pt-2">
                        {productLinks.map((product) => {
                          const activeProduct = pathname === `/${locale}${product.href}`;
                          return (
                            <Link
                              key={product.href}
                              href={`/${locale}${product.href}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className={
                                activeProduct
                                  ? 'flex items-center justify-between rounded-xl bg-bank-navy px-3 py-2.5 text-sm font-semibold text-white'
                                  : 'flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-bank-muted transition hover:bg-white hover:text-bank-navy'
                              }
                            >
                              <span>{product.label[locale]}</span>
                              <span aria-hidden="true">→</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={
                    active
                      ? 'flex items-center justify-between rounded-2xl bg-bank-navy px-3 py-2.5 text-sm font-semibold text-white'
                      : 'flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium text-bank-muted transition hover:bg-bank-ivory hover:text-bank-navy'
                  }
                >
                  <span>{item.label[locale]}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              );
            })}
          </nav>

          <Link href={`/${locale}/contact`} className="btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
}
