import Link from 'next/link';
import { Button } from '@/components/button';
import { siteConfig } from '@/lib/site-config';

const isLoggedIn = false;

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href={isLoggedIn ? '/dashboard' : '/login'} className="text-sm text-zinc-300 transition hover:text-white">
            {isLoggedIn ? 'Dashboard' : 'Login'}
          </Link>
          <Button href="/start-trial">{siteConfig.cta}</Button>
        </div>
      </div>
    </nav>
  );
}
