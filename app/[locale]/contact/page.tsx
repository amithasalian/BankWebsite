import type { Metadata } from 'next';
import { bankContact } from '@/data/contact';
import type { Locale } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the cooperative bank.',
};

const supportPanels = {
  en: [
    { title: 'Response Expectation', text: 'General inquiries are typically responded to within 1 business day.' },
    { title: 'Branch Assistance', text: 'Visit your nearest branch for document support and account guidance.' },
    { title: 'Emergency Contact', text: 'For urgent account-related concerns, call the main support line.' },
  ],
  kn: [
    { title: 'ಪ್ರತಿಕ್ರಿಯೆ ನಿರೀಕ್ಷೆ', text: 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ 1 ವ್ಯವಹಾರದ ದಿನದೊಳಗೆ ಉತ್ತರ ನೀಡಲಾಗುತ್ತದೆ.' },
    { title: 'ಶಾಖೆ ಸಹಾಯ', text: 'ಡಾಕ್ಯುಮೆಂಟ್ ಸಹಾಯ ಮತ್ತು ಖಾತೆ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಹತ್ತಿರದ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ.' },
    { title: 'ಅತ್ಯಾವಶ್ಯಕ ಸಂಪರ್ಕ', text: 'ತುರ್ತು ಖಾತೆ ಸಂಬಂಧಿತ ಸಮಸ್ಯೆಗಳಿಗೆ ಮುಖ್ಯ ಸಹಾಯ ಲೈನ್ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ.' },
  ],
};

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';

  return (
    <section className="section-shell">
      <div className="container-shell space-y-8">
        <nav aria-label="Breadcrumb" className="mb-2 flex flex-wrap items-center gap-2 text-sm text-bank-muted">
          <a href={`/${locale}`} className="transition hover:text-bank-navy">
            {locale === 'en' ? 'Home' : 'ಮುಖಪುಟ'}
          </a>
          <span>/</span>
          <span className="font-medium text-bank-navy">{locale === 'en' ? 'Contact' : 'ಸಂಪರ್ಕ'}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bank-teal">
              {locale === 'en' ? 'Get in touch' : 'ಸಂಪರ್ಕಿಸಿ'}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-bank-navy md:text-5xl">
              {locale === 'en' ? 'We are here to help' : 'ನಾವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವಿದ್ದೇವೆ'}
            </h1>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-lg font-semibold text-bank-navy">{bankContact.office.name[locale]}</p>
                <p className="mt-2 text-bank-muted">{bankContact.office.address[locale]}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-bank-border p-4">
                  <p className="text-sm text-bank-muted">{locale === 'en' ? 'Phone' : 'ಫೋನ್'}</p>
                  <p className="mt-2 font-semibold text-bank-navy">{bankContact.office.phone}</p>
                </div>
                <div className="rounded-xl border border-bank-border p-4">
                  <p className="text-sm text-bank-muted">Email</p>
                  <p className="mt-2 font-semibold text-bank-navy">{bankContact.office.email}</p>
                </div>
              </div>
              <p className="text-sm text-bank-muted">
                {locale === 'en' ? 'Working Hours' : 'ಕೆಲಸದ ಸಮಯ'}: {bankContact.office.hours[locale]}
              </p>
            </div>
          </div>

          <div className="card-surface p-8">
            <h2 className="text-2xl font-bold text-bank-navy">
              {locale === 'en' ? 'Quick support' : 'ತ್ವರಿತ ಸಹಾಯ'}
            </h2>
            <div className="mt-6 space-y-4 text-bank-muted">
              <p>
                <span className="font-semibold text-bank-navy">{locale === 'en' ? 'Support line' : 'ಸಹಾಯ ಸಂಖ್ಯೆ'}:</span> {bankContact.support.phone}
              </p>
              <p>
                <span className="font-semibold text-bank-navy">Email:</span> {bankContact.support.email}
              </p>
            </div>
            <div className="mt-8 rounded-xl bg-bank-ivory p-4">
              <p className="text-sm font-medium text-bank-muted">
                {locale === 'en'
                  ? 'For account queries, product guidance, or appointment requests, our team is ready to help.'
                  : 'ಖಾತೆ ಸಮೀಕ್ಷೆಗಳು, ಉತ್ಪನ್ನ ಮಾರ್ಗದರ್ಶಿ, ಅಥವಾ ನಿಗದಿಪಡಿಸುವ ವಿನಂತಿಗಳಿಗೆ ನಮ್ಮ ತಂಡ ಸಿದ್ಧವಾಗಿದೆ.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {supportPanels[locale].map((panel) => (
            <div key={panel.title} className="card-surface p-6">
              <h3 className="text-xl font-bold text-bank-navy">{panel.title}</h3>
              <p className="mt-3 text-base leading-7 text-bank-muted">{panel.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
