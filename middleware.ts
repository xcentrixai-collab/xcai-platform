import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionState } from '@/lib/session';

export async function middleware(_request: NextRequest) {
  // Placeholder route-protection hook.
  // Integrate session verification here when auth is enabled.
  await getSessionState();
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};
