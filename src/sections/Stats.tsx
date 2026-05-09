import { stats } from '@/data/site';

export function Stats() {
  return (
    <section className="relative bg-[var(--color-accent)] text-[var(--color-bg)]">
      <div className="container-x grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4 md:gap-x-10 md:py-20">
        {stats.map((s) => (
          <div key={s.label} className="reveal flex flex-col items-start gap-2 border-l border-[var(--color-bg)]/15 pl-5 md:pl-8">
            <span className="font-display text-4xl font-medium tracking-tight md:text-6xl">{s.value}</span>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-bg)]/70 md:text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
