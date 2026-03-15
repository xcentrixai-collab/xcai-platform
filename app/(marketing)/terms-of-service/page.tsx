import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

export default function TermsOfServicePage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="Legal"
          title="Terms of Service"
          description="These terms govern access to and use of X Centrix AI products, services, and platform functionality."
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-6 text-sm leading-7 text-zinc-300">
          <section>
            <h2 className="text-lg font-semibold text-white">1. Service scope</h2>
            <p>
              X Centrix AI provides software and related services for AI assistants, workflow automation, and operational reporting, subject to plan and contract terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">2. Account responsibilities</h2>
            <p>
              Customers are responsible for account credentials, user permissions, and ensuring authorized use of the platform by their team members.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">3. Acceptable use</h2>
            <p>
              You agree not to use the platform for unlawful activity, abuse, or activity that may disrupt service reliability, security, or other users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">4. Billing and subscription terms</h2>
            <p>
              Paid subscriptions and trial use are governed by selected plan terms, renewal conditions, and any service agreement executed between parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">5. Contact and updates</h2>
            <p>
              Terms may be updated as services evolve. For contractual questions, contact X Centrix AI through the contact page.
            </p>
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
}
