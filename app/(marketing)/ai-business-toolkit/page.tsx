import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

const modules = [
  {
    title: 'AI Assistants',
    description: 'Role-specific assistants for support, sales, and internal operations with controlled prompts and response policies.'
  },
  {
    title: 'Workflow Automation',
    description: 'Trigger actions, route tasks, and automate follow-up work across your existing stack to reduce manual overhead.'
  },
  {
    title: 'Operational Reporting',
    description: 'Monitor throughput, handoff delays, and resolution quality from a centralized reporting layer.'
  },
  {
    title: 'Integrations Layer',
    description: 'Connect CRM, support, comms, and productivity tools so AI systems can operate in real business context.'
  },
  {
    title: 'Command Dashboard',
    description: 'A single control surface for visibility into assistant usage, automation health, and team adoption.'
  },
  {
    title: 'Voice-Ready Infrastructure',
    description: 'Optional voice channels for businesses that need AI interactions beyond chat and forms.'
  }
];

export default function AIBusinessToolkitPage() {
  return (
    <div className="space-y-10">
      <SectionWrapper>
        <PageHeader
          eyebrow="Product"
          title="AI Business Toolkit"
          description="A modular toolkit that helps companies automate routine operations, deploy AI assistants, and run more efficient workflows."
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">What the toolkit includes</h2>
        <p className="mt-3 max-w-3xl text-zinc-300">
          Each module can be deployed independently or combined into a full business operating layer, depending on your team’s priorities.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <article key={module.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">{module.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{module.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Who it is for</h2>
        <ul className="mt-4 space-y-3 text-zinc-300">
          <li>• Operations teams that need to reduce repetitive coordination work.</li>
          <li>• Revenue and support teams that want consistent, AI-assisted execution.</li>
          <li>• Leadership teams that need clearer visibility into process performance.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/start-trial">Start 7-Day Trial</Button>
          <Button href="/contact" variant="secondary">
            Talk to Product Team
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
