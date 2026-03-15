import Link from 'next/link';
import { SectionWrapper } from '@/components/section-wrapper';

export default function RegisterPage() {
  return (
    <SectionWrapper>
      <h1 className="text-2xl font-semibold text-white">Create Account</h1>
      <p className="mt-2 text-sm text-zinc-300">Start your X Centrix AI platform workspace.</p>

      <form className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-zinc-200">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/15 bg-zinc-900/70 px-4 py-2 text-sm text-white outline-none ring-orange-400 focus:ring-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-sm text-zinc-200">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Create a secure password"
            className="w-full rounded-xl border border-white/15 bg-zinc-900/70 px-4 py-2 text-sm text-white outline-none ring-orange-400 focus:ring-2"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm text-zinc-300">
            <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-zinc-900" />
            Keep me signed in on this device
          </label>
        </div>

        <p className="rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200">
          Registration flow is a placeholder pending Supabase Auth or Auth.js integration.
        </p>

        <button
          type="button"
          className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Create Account
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-300">
        Already have an account?{' '}
        <Link href="/login" className="text-orange-300 hover:text-orange-200">
          Login
        </Link>
      </p>
    </SectionWrapper>
  );
}
