import type { Metadata } from 'next';
import { branchDirectory } from '@/data/branches';
import type { Locale } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Branches',
  description: 'Find the nearest branch and contact details.',
};

const services = {
  en: ['Savings Services', 'Loan Support', 'KYC Assistance', 'Account Help'],
  kn: ['ಉಳಿತಾಯ ಸೇವೆಗಳು', 'ಸಾಲ ಬೆಂಬಲ', 'KYC ಸಹಾಯ', 'ಖಾತೆ ಸಹಾಯ'],
};

export default function BranchesPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';

  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bank-teal">
            {locale === 'en' ? 'Locations' : 'ಸ್ಥಳಗಳು'}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-bank-navy md:text-5xl">
            {locale === 'en' ? 'Visit a branch near you' : 'ನಿಮ್ಮ ಹತ್ತಿರದ ಶಾಖೆಯನ್ನು ಭೇಟಿ ಮಾಡಿ'}
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card-surface p-6">
            <h2 className="text-2xl font-bold text-bank-navy">
              {locale === 'en' ? 'Branch map preview' : 'ಶಾಖೆ ನಕ್ಷೆ ಮುನ್ನೋಟ'}
            </h2>
            <div className="mt-6 rounded-2xl border border-dashed border-bank-border bg-bank-ivory p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-bank-navy text-xl font-bold text-white">
                MAP
              </div>
              <p className="mt-4 text-sm text-bank-muted">
                {locale === 'en' ? 'Location map will be displayed here for the selected branch.' : 'ಆಯ್ದ ಶಾಖೆಗೆ ಸ್ಥಳ ನಕ್ಷೆ ಇಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ.'}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {branchDirectory.map((branch) => (
              <div key={branch.id} className="card-surface p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-bank-navy">{branch.name[locale]}</h2>
                  <span className="rounded-full bg-bank-ivory px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-bank-teal">
                    {branch.city[locale]}
                  </span>
                </div>

                <p className="mt-5 text-base text-bank-muted">{branch.address[locale]}</p>
                <div className="mt-6 space-y-2 text-sm text-bank-muted">
                  <p>
                    <span className="font-semibold text-bank-navy">{locale === 'en' ? 'Phone' : 'ಫೋನ್'}:</span> {branch.phone}
                  </p>
                  <p>
                    <span className="font-semibold text-bank-navy">{locale === 'en' ? 'Hours' : 'ಕಾಲಾವಕಾಶ'}:</span> {branch.hours[locale]}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {services[locale].map((service) => (
                    <span key={service} className="rounded-full border border-bank-border bg-bank-ivory px-2.5 py-1 text-xs font-medium text-bank-muted">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
