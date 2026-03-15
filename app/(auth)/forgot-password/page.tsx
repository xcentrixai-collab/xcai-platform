import Link from 'next/link';
import { SectionWrapper } from '@/components/section-wrapper';

export default function ForgotPasswordPage() {
  return (
    <SectionWrapper>
      <h1 className="text-2xl font-semibold text-white">Forgot Password</h1>
      <p className="mt-2 text-sm text-zinc-300">Enter your email address and we will send reset instructions.</p>

      <form className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-zinc-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/15 bg-zinc-900/70 px-4 py-2 text-sm text-white outline-none ring-orange-400 focus:ring-2"
          />
        </div>

        <p className="rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200">
          Password reset backend is not connected yet. This page is ready for auth provider integration.
        </p>

        <button
          type="button"
          className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Send Reset Link
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-300">
        Back to{' '}
        <Link href="/login" className="text-orange-300 hover:text-orange-200">
          Login
        </Link>
      </p>
    </SectionWrapper>
  );
}
