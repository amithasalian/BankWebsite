import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cooperativebank.in'),
  title: {
    default: 'Cooperative Bank',
    template: '%s | Cooperative Bank',
  },
  description:
    'Trusted cooperative banking services, savings plans, business loans, branch support, and customer-first financial guidance.',
  keywords: [
    'cooperative bank',
    'savings accounts',
    'business loans',
    'fixed deposits',
    'agriculture loans',
    'bank branches',
    'customer support',
  ],
  applicationName: 'Cooperative Bank',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cooperative Bank',
    description:
      'Trusted cooperative banking services, savings plans, business loans, branch support, and customer-first financial guidance.',
    url: 'https://www.cooperativebank.in',
    siteName: 'Cooperative Bank',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooperative Bank',
    description:
      'Trusted cooperative banking services, savings plans, business loans, branch support, and customer-first financial guidance.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F2B46',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-bank-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
