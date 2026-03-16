import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

export default function StartTrialPage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="Start Trial"
          title="Start your 7-day trial"
          description="Launch a guided trial environment to evaluate assistants, automation workflows, and operational reporting in one platform."
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">What you can test during the trial</h2>
        <ul className="mt-4 space-y-3 text-zinc-300">
          <li>• Configure an AI assistant for a real operational use case.</li>
          <li>• Build and run workflow automations using your existing tools.</li>
          <li>• Review dashboard insights to evaluate process performance.</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Onboarding experience</h2>
        <p className="mt-3 text-zinc-300">
          The trial includes structured onboarding so your team can move from setup to measurable workflow outcomes without unnecessary complexity.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/contact">Request Trial Access</Button>
          <Button href="/pricing" variant="secondary">
            Review Plan Options
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
