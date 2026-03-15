import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

const solutionAreas = [
  'Lead generation automation and qualification routing',
  'AI chat systems for support and customer onboarding',
  'Business workflow automation across internal teams',
  'Operational reporting dashboards for decision support',
  'Social media and content operations automation',
  'Custom AI agents trained for business-specific tasks'
];

const process = [
  {
    title: 'Discovery and scope',
    description: 'We map current workflows, identify automation constraints, and define measurable outcomes.'
  },
  {
    title: 'Architecture and build',
    description: 'Our team designs and implements a tailored AI system aligned to your stack and operating model.'
  },
  {
    title: 'Deployment and optimization',
    description: 'We launch in controlled phases, monitor performance, and iterate based on operational data.'
  }
];

export default function CustomAISolutionsPage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="Services"
          title="Custom AI Solutions"
          description="For organizations that need tailored AI systems beyond out-of-the-box tooling, built around how the business actually operates."
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Systems we design and implement</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {solutionAreas.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Delivery approach</h2>
        <p className="mt-3 max-w-3xl text-zinc-300">
          We run a consultation-led engagement designed for teams that require technical clarity, reliable execution, and production-ready handoff.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {process.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-orange-300">Phase {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/contact">Book a Consultation</Button>
          <Button href="/ai-business-toolkit" variant="secondary">
            Explore the Toolkit
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
