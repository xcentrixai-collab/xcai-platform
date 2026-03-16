import Link from 'next/link';

const sidebarLinks = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'AI Agents', href: '/dashboard/agents' },
  { label: 'Workflows', href: '/dashboard/workflows' },
  { label: 'Analytics', href: '/dashboard/analytics' },
  { label: 'Billing', href: '/dashboard/billing' },
  { label: 'Settings', href: '/dashboard/settings' }
];

export function DashboardSidebar() {
  return (
    <aside className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl lg:w-64 lg:shrink-0">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">Command Center</p>
      <nav className="space-y-1">
        {sidebarLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
