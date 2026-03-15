type StatCardProps = {
  title: string;
  value: string;
  description: string;
};

export function StatCard({ title, value, description }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-wide text-zinc-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-zinc-300">{description}</p>
    </article>
  );
}
