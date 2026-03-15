import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

const capabilities = [
  {
    title: 'AI Assistants for Teams',
    description:
      'Deploy assistants for sales, support, and operations so teams can resolve tasks faster with consistent decision support.'
  },
  {
    title: 'Workflow Automation',
    description:
      'Automate repetitive handoffs, follow-ups, and approvals across your existing tools without rebuilding internal systems.'
  },
  {
    title: 'Operational Intelligence',
    description:
      'Track performance with AI-generated reporting that highlights bottlenecks, opportunities, and priority actions.'
  }
];

const steps = [
  {
    title: 'Connect your workflow',
    description: 'Map your current process, tools, and data sources to identify immediate automation wins.'
  },
  {
    title: 'Launch focused AI systems',
    description: 'Enable assistants and automations for the highest-impact areas first, then expand in stages.'
  },
  {
    title: 'Improve with live insights',
    description: 'Use dashboard reporting to refine decisions, improve throughput, and scale confidently.'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="AI Business Operating System"
          title="Run smarter operations with AI built for real business workflows"
          description="X Centrix AI helps organizations automate repetitive work, deploy practical AI assistants, and improve decision-making with operational intelligence."
        />
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
          <h2 className="text-lg font-semibold text-white">Command Dashboard Preview</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Unified view of assistant activity, workflow throughput, response quality, and weekly business impact.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-400">Automations Completed</p>
              <p className="mt-2 text-sm font-semibold text-white">Live activity view</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-400">Assistant Resolution Rate</p>
              <p className="mt-2 text-sm font-semibold text-white">Quality monitoring enabled</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-400">Avg. Time Saved / Week</p>
              <p className="mt-2 text-sm font-semibold text-white">Impact tracking enabled</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/start-trial">Start 7-Day Trial</Button>
          <Button href="/pricing" variant="secondary">
            Compare Plans
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Platform capabilities built for operations teams</h2>
          <p className="max-w-3xl text-zinc-300">
            The platform combines AI assistants, automation logic, and reporting infrastructure so your team can execute faster without sacrificing control.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">How teams get value quickly</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium text-orange-300">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white">Build an AI-driven operating layer for your business</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
            Start with the toolkit or work with us on a custom deployment. Either path is designed to produce measurable operational improvements.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/start-trial">Start 7-Day Trial</Button>
            <Button href="/custom-ai-solutions" variant="secondary">
              Explore Custom AI Solutions
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
