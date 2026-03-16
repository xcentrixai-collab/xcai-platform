import { SectionWrapper } from '@/components/section-wrapper';
import { WorkflowCard } from '@/components/dashboard/workflow-card';

const workflows = [
  {
    name: 'Lead Automation Pipeline',
    trigger: 'New inbound lead captured',
    pipeline: 'Qualification → Priority scoring → Sales assignment'
  },
  {
    name: 'Reporting Workflow',
    trigger: 'Daily schedule',
    pipeline: 'Data sync → KPI summary → Executive digest'
  },
  {
    name: 'Marketing Automation',
    trigger: 'Campaign event detected',
    pipeline: 'Audience update → Follow-up sequence → Performance log'
  },
  {
    name: 'Internal Operations Workflow',
    trigger: 'Task status change',
    pipeline: 'Validation → Routing → Notification + audit trail'
  }
];

export default function WorkflowsPage() {
  return (
    <div className="space-y-6">
      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Workflows</h2>
        <p className="mt-2 text-zinc-300">
          Design and monitor automation pipelines with clear triggers, action paths, and operational visibility.
        </p>
      </SectionWrapper>

      <div className="grid gap-4 md:grid-cols-2">
        {workflows.map((workflow) => (
          <WorkflowCard
            key={workflow.name}
            name={workflow.name}
            trigger={workflow.trigger}
            pipeline={workflow.pipeline}
          />
        ))}
      </div>
    </div>
  );
}
