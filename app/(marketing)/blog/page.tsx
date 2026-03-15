import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

const focusAreas = [
  {
    title: 'AI Automation Playbooks',
    description: 'Practical guides for choosing and deploying workflow automation that teams can adopt quickly.'
  },
  {
    title: 'Workflow Optimization',
    description: 'Methods for reducing bottlenecks, improving handoffs, and increasing operational consistency.'
  },
  {
    title: 'Business AI Adoption',
    description: 'Change-management and rollout advice for integrating AI into day-to-day business execution.'
  },
  {
    title: 'Operational Intelligence',
    description: 'How to use reporting and AI insights to improve planning, staffing, and process decisions.'
  }
];

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="Knowledge Hub"
          title="Insights for AI-led operations"
          description="We publish implementation-focused content to help teams apply AI in ways that improve execution and business outcomes."
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">What you will find here</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">{area.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{area.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Need content on a specific challenge?</h2>
        <p className="mt-3 text-zinc-300">
          Contact us with the operational AI topic your team is working through, and we’ll prioritize practical guidance.
        </p>
        <div className="mt-6">
          <Button href="/contact">Suggest a Topic</Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
