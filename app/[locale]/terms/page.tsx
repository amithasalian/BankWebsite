import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Website terms and conditions.',
};

export default function TermsPage() {
  return (
    <section className="section-shell">
      <div className="container-shell max-w-4xl">
        <div className="card-surface p-8 md:p-10">
          <h1 className="text-4xl font-bold text-bank-navy">Terms and Conditions</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-bank-muted">
            <p>
              The content on this website is provided for general informational purposes only. It is not a substitute for professional financial, legal, or tax advice.
            </p>
            <p>
              Product details, interest rates, and service timelines may change based on policy updates or regulatory guidance. Customers should verify current information directly with the bank before making financial decisions.
            </p>
            <p>
              Access to the website does not create a banking relationship or guarantee the availability of any product or service unless formally confirmed by the bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
