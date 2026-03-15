import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/button';

export default function HomePage() {
  return (
    <SectionWrapper>
      <PageHeader
        eyebrow="Platform"
        title="X Centrix AI Command Center"
        description="Deploy AI-first business infrastructure that scales decision intelligence, automation, and customer experience from a single control plane."
      />
      <div className="mt-10 flex justify-center gap-4">
        <Button href="/start-trial">Start 7-Day Trial</Button>
        <Button href="/pricing" variant="secondary">
          View Pricing
        </Button>
      </div>
    </SectionWrapper>
  );
}
