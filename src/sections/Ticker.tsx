import { tickerWords } from '@/data/site';

export function Ticker() {
  const loop = [...tickerWords, ...tickerWords];
  return (
    <section
      aria-label="services ticker"
      className="overflow-hidden border-y border-[var(--color-accent)]/30 bg-[var(--color-accent)] py-5 text-[var(--color-bg)]"
    >
      <div className="flex w-max animate-[ticker_30s_linear_infinite] items-center gap-12 whitespace-nowrap">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center gap-12 text-2xl font-medium tracking-tight md:text-3xl">
            <span>{w}</span>
            <span aria-hidden className="text-[var(--color-bg)]/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
