import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="About"
          title="X Centrix AI"
          description="We build practical AI infrastructure that helps organizations run better operations, not just launch experiments."
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Why we exist</h2>
        <p className="mt-3 text-zinc-300">
          Most teams understand AI potential but struggle to apply it inside real workflows. X Centrix AI was built to close that gap with systems focused on execution, reliability, and measurable operational outcomes.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Who we help</h2>
        <ul className="mt-4 space-y-3 text-zinc-300">
          <li>• Businesses managing high-volume repetitive work across teams.</li>
          <li>• Organizations modernizing operations with assistant-led execution.</li>
          <li>• Leaders who need clearer data to guide process and resource decisions.</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Our approach to AI automation</h2>
        <p className="mt-3 text-zinc-300">
          We prioritize use cases with near-term business value, design with existing tools in mind, and scale only after systems prove dependable in production.
        </p>
        <div className="mt-6">
          <Button href="/contact">Talk with our team</Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
