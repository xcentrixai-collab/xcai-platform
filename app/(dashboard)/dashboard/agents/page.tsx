import { AgentCard } from '@/components/dashboard/agent-card';
import { Button } from '@/components/button';
import { SectionWrapper } from '@/components/section-wrapper';

const agents = [
  { name: 'Support Agent', role: 'Handles first-line support triage and response drafting.', status: 'Active' as const },
  { name: 'Operations Agent', role: 'Monitors task queues and flags workflow exceptions.', status: 'Active' as const },
  { name: 'Lead Qualification Agent', role: 'Scores inbound leads and routes qualified opportunities.', status: 'Draft' as const }
];

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <SectionWrapper>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">AI Agents</h2>
            <p className="mt-2 text-zinc-300">
              Manage assistants that automate support, operations, lead qualification, and reporting tasks.
            </p>
          </div>
          <Button href="/contact">Create New Agent</Button>
        </div>
      </SectionWrapper>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.name} name={agent.name} role={agent.role} status={agent.status} />
        ))}
      </div>
    </div>
  );
}
