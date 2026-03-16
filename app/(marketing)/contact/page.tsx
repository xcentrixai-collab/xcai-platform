import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="Contact"
          title="Talk to X Centrix AI"
          description="Reach out for product questions, solution scoping, implementation planning, or partnership discussions."
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Best reasons to contact us</h2>
        <ul className="mt-4 space-y-3 text-zinc-300">
          <li>• You want to automate repetitive workflows with AI.</li>
          <li>• You need a tailored AI system for a specific business process.</li>
          <li>• You are evaluating the platform for a team rollout.</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">What happens next</h2>
        <ol className="mt-4 space-y-3 text-zinc-300">
          <li>1. We review your inquiry and operational goals.</li>
          <li>2. We schedule a focused call to understand workflow requirements.</li>
          <li>3. We share recommended next steps, timeline, and implementation path.</li>
        </ol>
        <div className="mt-6">
          <Button href="mailto:hello@xcentrix.ai">Email hello@xcentrix.ai</Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
