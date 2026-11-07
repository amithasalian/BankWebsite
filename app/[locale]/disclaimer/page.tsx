import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Website disclaimer and informational notice.',
};

export default function DisclaimerPage() {
  return (
    <section className="section-shell">
      <div className="container-shell max-w-4xl">
        <div className="card-surface p-8 md:p-10">
          <h1 className="text-4xl font-bold text-bank-navy">Disclaimer</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-bank-muted">
            <p>
              The website is intended to provide general information about the bank and its services. While reasonable care has been taken to ensure accuracy, the bank does not guarantee that all details are current or error-free.
            </p>
            <p>
              Certain product information is subject to eligibility, documentation, and regulatory conditions. Final decisions on applications, approvals, and transactions remain with the bank as per official policies.
            </p>
            <p>
              This site may contain links to external resources for convenience. The bank is not responsible for the content, privacy practices, or accuracy of third-party websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
