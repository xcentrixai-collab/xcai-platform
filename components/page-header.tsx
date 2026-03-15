type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-4xl space-y-4 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">{eyebrow}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="mx-auto max-w-2xl text-base text-zinc-300 sm:text-lg">{description}</p>
    </header>
  );
}
