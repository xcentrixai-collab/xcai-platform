import { ReactNode } from 'react';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-6 lg:flex-row">
        <DashboardSidebar />
        <div className="flex-1 space-y-6">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </main>
  );
}
