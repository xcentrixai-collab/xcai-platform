import { StatCard } from '@/components/dashboard/stat-card';
import { SectionWrapper } from '@/components/section-wrapper';

const stats = [
  {
    title: 'AI Agents Running',
    value: '12 active',
    description: 'Sample placeholder for currently deployed operational assistants.'
  },
  {
    title: 'Active Workflows',
    value: '28 workflows',
    description: 'Sample placeholder for automation sequences currently enabled.'
  },
  {
    title: 'Automation Events',
    value: 'Live stream',
    description: 'Placeholder activity feed for automation triggers and outcomes.'
  },
  {
    title: 'Platform Activity',
    value: 'Monitoring on',
    description: 'Placeholder indicator for platform health and operations telemetry.'
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Operations overview</h2>
        <p className="mt-2 text-zinc-300">
          View AI assistants, workflow automation, and platform signals from a single command center.
        </p>
      </SectionWrapper>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} description={stat.description} />
        ))}
      </div>
    </div>
  );
}
