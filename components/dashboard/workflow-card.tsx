type WorkflowCardProps = {
  name: string;
  trigger: string;
  pipeline: string;
};

export function WorkflowCard({ name, trigger, pipeline }: WorkflowCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="mt-2 text-sm text-zinc-300">Trigger: {trigger}</p>
      <p className="mt-1 text-sm text-zinc-400">Pipeline: {pipeline}</p>
    </article>
  );
}
