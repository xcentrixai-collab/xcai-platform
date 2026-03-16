import Link from 'next/link';

type BillingCardProps = {
  plan: string;
  usage: string;
};

export function BillingCard({ plan, usage }: BillingCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold text-white">Current Plan: {plan}</h3>
      <p className="mt-2 text-sm text-zinc-300">Usage: {usage}</p>
      <Link
        href="/pricing"
        className="mt-4 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white"
      >
        View Upgrade Options
      </Link>
    </article>
  );
}
