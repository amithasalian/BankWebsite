import Link from 'next/link';
import type { Locale } from '@/i18n/config';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-16 bg-bank-navy text-white">
      <div className="container-shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sm font-bold text-white">
                CB
              </div>
              <div>
                <div className="text-xl font-bold">Cooperative Bank</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">Community Banking</div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/80">
              Trusted community banking, practical financial support, and dependable service for every stage of life.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href={`/${locale}/about`} className="footer-link">About Us</Link></li>
              <li><Link href={`/${locale}/products`} className="footer-link">Products</Link></li>
              <li><Link href={`/${locale}/rates`} className="footer-link">Rates</Link></li>
              <li><Link href={`/${locale}/downloads`} className="footer-link">Downloads</Link></li>
              <li><Link href={`/${locale}/faq`} className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Products</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href={`/${locale}/products/savings-accounts`} className="footer-link">Savings</Link></li>
              <li><Link href={`/${locale}/products/fixed-deposits`} className="footer-link">Deposits</Link></li>
              <li><Link href={`/${locale}/products/gold-loans`} className="footer-link">Gold Loans</Link></li>
              <li><Link href={`/${locale}/products/business-loans`} className="footer-link">Business Loans</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>123 Civic Center Road, Bengaluru, Karnataka 560001</li>
              <li>+91 98765 43210</li>
              <li>care@cooperativebank.in</li>
              <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
              <li><Link href={`/${locale}/grievance`} className="footer-link">Grievance Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Cooperative Bank. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${locale}/privacy-policy`} className="footer-link">Privacy Policy</Link>
            <Link href={`/${locale}/terms`} className="footer-link">Terms</Link>
            <Link href={`/${locale}/disclaimer`} className="footer-link">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
