import { ReactNode } from 'react';

type SettingsSectionProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function SettingsSection({ title, description, children }: SettingsSectionProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
