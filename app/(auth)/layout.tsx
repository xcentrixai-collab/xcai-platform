import Link from 'next/link';

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-6">
        <Link href="/" className="inline-block text-sm font-medium text-orange-300 hover:text-orange-200">
          ← Back to X Centrix AI
        </Link>
        {children}
      </div>
    </main>
  );
}
