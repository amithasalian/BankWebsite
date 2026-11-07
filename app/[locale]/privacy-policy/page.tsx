import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Bank privacy policy and information handling notice.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-shell">
      <div className="container-shell max-w-4xl">
        <div className="card-surface p-8 md:p-10">
          <h1 className="text-4xl font-bold text-bank-navy">Privacy Policy</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-bank-muted">
            <p>
              We respect the privacy of every visitor and member. Personal information collected through our website is used only to provide banking information, respond to enquiries, and improve our service quality.
            </p>
            <p>
              Information such as contact details, service requests, and account correspondence may be stored for business communication and compliance purposes. We do not sell or share personal data with third parties except where required by law or for secure service delivery.
            </p>
            <p>
              Users are encouraged to review the details they share and communicate directly with the bank for any sensitive or account-specific updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
