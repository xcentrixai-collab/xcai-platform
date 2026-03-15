import { BillingCard } from '@/components/dashboard/billing-card';
import { SectionWrapper } from '@/components/section-wrapper';

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Billing</h2>
        <p className="mt-2 text-zinc-300">
          Manage plan settings, monitor usage, and prepare subscription upgrades. Stripe or PayFast can be connected later.
        </p>
      </SectionWrapper>

      <BillingCard plan="Growth (placeholder)" usage="Automation events and assistant usage are displayed here." />

      <SectionWrapper>
        <h3 className="text-lg font-semibold text-white">Billing History</h3>
        <p className="mt-2 text-sm text-zinc-300">
          Invoice timeline and payment records will appear here after payment provider integration.
        </p>
      </SectionWrapper>
    </div>
  );
}
