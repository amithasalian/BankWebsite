import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import type { Locale } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our cooperative bank and its values.',
};

const content = {
  en: {
    heading: 'Built around trust, service, and community growth',
    body:
      'Our cooperative bank exists to support families, entrepreneurs, and rural communities with dependable financial services. We focus on transparent relationships, practical advice, and inclusive access to banking products that help members take confident steps forward.',
    values: [
      'Customer-first service and clear communication',
      'Responsible lending and transparent processes',
      'Strong local presence with community understanding',
    ],
  },
  kn: {
    heading: 'ವಿಶ್ವಾಸ, ಸೇವೆ ಮತ್ತು ಸಮುದಾಯ ಬೆಳವಣಿಗೆಯ ಮೇಲೆ ನಿರ್ಮಿಸಲಾದ ಬ್ಯಾಂಕ್',
    body:
      'ನಮ್ಮ ಸಹಕಾರಿ ಬ್ಯಾಂಕ್ ಕುಟುಂಬಗಳು, ಉದ್ಯಮಸ್ಥರು ಮತ್ತು ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಹಣಕಾಸು సేవಗಳನ್ನು ನೀಡಲು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಸ್ಪಷ್ಟ ಸಂಬಂಧ, ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸದಸ್ಯರ ಅಭಿವೃದ್ಧಿಗೆ ಸೂಕ್ತವಾದ ಸೌಲಭ್ಯಗಳನ್ನು ನೀಡುವಲ್ಲಿ ನಾವು ನಮ್ಮ ಗಮನವನ್ನು keskize ಮಾಡಿದ್ದೇವೆ.',
    values: [
      'ಗ್ರಾಹಕ ಆಧಾರಿತ ಸೇವೆ ಮತ್ತು ಸ್ಪಷ್ಟ ಸಂವಹನ',
      'ಜವಾಬ್ದಾರಿಯುತ ಸಾಲ ನೀಡಿಕೆ ಮತ್ತು ಪಾರದರ್ಶಕ ಪ್ರಕ್ರಿಯೆಗಳು',
      'ಸಮುದಾಯದ ಅಗತ್ಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಸ್ಥಳೀಯ ಉಪಸ್ಥಿತಿ',
    ],
  },
};

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';
  const t = content[locale];

  return (
    <section className="section-shell">
      <div className="container-shell max-w-5xl">
        <Breadcrumbs
          items={[
            { label: locale === 'en' ? 'Home' : 'ಮುಖಪುಟ', href: `/${locale}` },
            { label: locale === 'en' ? 'About Us' : 'ನಮ್ಮ ಬಗ್ಗೆ' },
          ]}
        />

        <div className="card-surface p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bank-teal">
            {locale === 'en' ? 'Our Story' : 'ನಮ್ಮ ಕಥೆ'}
          </p>
          <h1 className="mt-4 text-4xl font-bold text-bank-navy md:text-5xl">{t.heading}</h1>
          <p className="mt-6 text-lg leading-8 text-bank-muted">{t.body}</p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.values.map((value) => (
              <div key={value} className="rounded-xl border border-bank-border bg-bank-ivory p-5">
                <div className="mb-3 h-2 w-12 rounded-full bg-bank-gold" />
                <p className="text-base font-medium text-bank-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
