import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="This policy explains how X Centrix AI collects, uses, stores, and protects information in connection with our platform and services."
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-6 text-sm leading-7 text-zinc-300">
          <section>
            <h2 className="text-lg font-semibold text-white">1. Information we collect</h2>
            <p>
              We collect information you provide directly, usage data related to platform activity, and technical data needed to operate, secure, and improve the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">2. How we use information</h2>
            <p>
              Information is used to deliver services, support customer accounts, maintain security, provide product updates, and improve platform performance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">3. Data sharing and disclosure</h2>
            <p>
              We do not sell personal information. Data may be shared with service providers that support delivery of the platform, subject to contractual safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">4. Data retention and security</h2>
            <p>
              We retain data for as long as necessary to provide services and meet legal obligations. Security controls are applied to protect data from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">5. Contact</h2>
            <p>For privacy-related questions, contact us through the contact page and include “Privacy Request” in your message.</p>
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
}
