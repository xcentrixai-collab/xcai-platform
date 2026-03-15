import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="text-sm text-zinc-400">AI-First Business Infrastructure</p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-300">Navigation</h2>
          <ul className="space-y-2">
            {siteConfig.footerLinks.navigation.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-zinc-300 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-300">Legal</h2>
          <ul className="space-y-2">
            {siteConfig.footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-zinc-300 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
