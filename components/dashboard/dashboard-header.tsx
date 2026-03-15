import Link from 'next/link';

export function DashboardHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
      <div>
        <p className="text-sm text-zinc-400">X Centrix AI Platform</p>
        <h1 className="text-xl font-semibold text-white">Automation Command Dashboard</h1>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/contact" className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-100 hover:bg-white/10">
          Support
        </Link>
        <Link
          href="/start-trial"
          className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Upgrade
        </Link>
      </div>
    </header>
  );
}
