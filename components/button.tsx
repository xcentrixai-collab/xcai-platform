import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-glow hover:from-orange-400 hover:to-orange-500'
      : 'border border-white/20 bg-white/5 text-white hover:bg-white/10';

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
