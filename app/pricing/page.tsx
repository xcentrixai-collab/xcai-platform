import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

const plans = [
  {
    name: 'Starter',
    audience: 'Small teams beginning AI automation',
    details: ['Core assistant deployment', 'Basic workflow automations', 'Foundational dashboard reporting'],
    cta: 'Start Trial'
  },
  {
    name: 'Growth',
    audience: 'Scaling teams with cross-functional workflows',
    details: ['Multiple assistant workspaces', 'Advanced automation orchestration', 'Operational reporting and performance views'],
    cta: 'Choose Growth'
  },
  {
    name: 'Custom',
    audience: 'Organizations with specialized AI requirements',
    details: ['Tailored solution architecture', 'Integration and deployment planning', 'Dedicated implementation support'],
    cta: 'Contact Sales'
  }
];

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="Pricing"
          title="Plans designed for practical AI adoption"
          description="Choose a starting point based on your team size, workflow complexity, and implementation goals."
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
              <p className="mt-2 text-sm text-zinc-300">{plan.audience}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                {plan.details.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={plan.name === 'Custom' ? '/contact' : '/start-trial'}>{plan.cta}</Button>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">How the 7-day trial works</h2>
        <ol className="mt-4 space-y-3 text-zinc-300">
          <li>1. Create your workspace and select your first operational use case.</li>
          <li>2. Configure assistants and automations with onboarding guidance.</li>
          <li>3. Evaluate workflow impact and decide the best long-term plan.</li>
        </ol>
      </SectionWrapper>
    </div>
  );
}
