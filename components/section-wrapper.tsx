import { ReactNode } from 'react';

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl sm:p-12 ${className}`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-300/5" />
      {children}
    </section>
  );
}
