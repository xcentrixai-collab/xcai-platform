import { SectionWrapper } from '@/components/section-wrapper';

const metrics = [
  { label: 'Automation Activity', value: 'Placeholder stream', note: 'Recent trigger and completion events.' },
  { label: 'Workflow Success Rate', value: 'Placeholder trend', note: 'Completion reliability by workflow.' },
  { label: 'System Activity Chart', value: 'Placeholder chart area', note: 'Volume and timing of platform events.' },
  { label: 'Operational Metrics', value: 'Placeholder KPI board', note: 'Cycle time, response quality, and throughput.' }
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-white">Analytics</h2>
        <p className="mt-2 text-zinc-300">
          Track automation performance and operational intelligence from a centralized analytics workspace.
        </p>
      </SectionWrapper>

      <div className="grid gap-4 md:grid-cols-2">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-wide text-zinc-400">{metric.label}</p>
            <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
            <p className="mt-2 text-sm text-zinc-300">{metric.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
