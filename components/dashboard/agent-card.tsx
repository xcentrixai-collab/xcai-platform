type AgentCardProps = {
  name: string;
  role: string;
  status: 'Active' | 'Draft' | 'Paused';
};

export function AgentCard({ name, role, status }: AgentCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200">{status}</span>
      </div>
      <p className="mt-2 text-sm text-zinc-300">{role}</p>
    </article>
  );
}
