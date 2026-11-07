import type { Metadata } from 'next';
import { grievanceData } from '@/data/grievance';
import type { Locale } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Grievance',
  description: 'Customer grievance support and escalation information.',
};

export default function GrievancePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale === 'kn' ? 'kn' : 'en';

  return (
    <section className="section-shell">
      <div className="container-shell max-w-5xl">
        <div className="card-surface p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bank-teal">
            {locale === 'en' ? 'Customer support' : 'ಗ್ರಾಹಕ ಸಹಾಯ'}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-bank-navy md:text-5xl">
            {locale === 'en' ? 'Grievance redressal' : 'ದುರಿತೋಪ remedial'}
          </h1>

          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-bold text-bank-navy">
                {locale === 'en' ? 'How we respond' : 'ನಾವು ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತೇವೆ'}
              </h2>
              <ol className="mt-5 space-y-4 text-bank-muted">
                {grievanceData.steps.map((step, index) => (
                  <li key={step[locale]} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bank-navy text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="leading-7">{step[locale]}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl bg-bank-ivory p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-bank-teal">
                {locale === 'en' ? 'Officer contact' : 'ಅಧಿಕಾರಿ ಸಂಪರ್ಕ'}
              </p>
              <h3 className="mt-4 text-2xl font-bold text-bank-navy">{grievanceData.officer.name[locale]}</h3>
              <p className="mt-2 text-bank-muted">{grievanceData.officer.designation[locale]}</p>
              <div className="mt-6 space-y-2 text-sm text-bank-muted">
                <p>Phone: {grievanceData.officer.phone}</p>
                <p>Email: {grievanceData.officer.email}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-bank-border bg-bank-ivory p-5">
              <h3 className="text-lg font-bold text-bank-navy">{locale === 'en' ? 'Level 1' : 'ಲೇವೆಲ್ 1'}</h3>
              <p className="mt-2 text-sm leading-6 text-bank-muted">
                {locale === 'en' ? 'Branch or support response and acknowledgment.' : 'ಶಾಖೆ ಅಥವಾ ಸಹಾಯ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ಸ್ವೀಕಾರ.'}
              </p>
            </div>
            <div className="rounded-2xl border border-bank-border bg-bank-ivory p-5">
              <h3 className="text-lg font-bold text-bank-navy">{locale === 'en' ? 'Level 2' : 'ಲೇವೆಲ್ 2'}</h3>
              <p className="mt-2 text-sm leading-6 text-bank-muted">
                {locale === 'en' ? 'Escalation through the grievance officer.' : 'ದುರುಭಿತೆ ಅಧಿಕಾರಿಯ ಮೂಲಕ ಮುಂದಿನ ಸ್ಥಾಯಿ.'}
              </p>
            </div>
            <div className="rounded-2xl border border-bank-border bg-bank-ivory p-5">
              <h3 className="text-lg font-bold text-bank-navy">{locale === 'en' ? 'Emergency support' : 'ತುರ್ತು ಸಹಾಯ'}</h3>
              <p className="mt-2 text-sm leading-6 text-bank-muted">
                {locale === 'en' ? 'Urgent concerns can be routed via the support helpline.' : 'ತುರ್ತು ಸಮಸ್ಯೆಗಳಿಗೆ ಸಹಾಯ ಹಾಟ್‌ಲೈನ್ ಮೂಲಕ ರೈಟ್‌ಗೊಳ್ಳಬಹುದು.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
