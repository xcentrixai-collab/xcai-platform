import type { Metadata } from 'next';
import '@/styles/globals.css';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `${siteConfig.name} | AI-First Business Infrastructure`,
  description: 'X Centrix AI delivers premium AI business tooling and custom AI solution architecture.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
