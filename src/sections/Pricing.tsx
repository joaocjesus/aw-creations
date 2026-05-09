import { plans } from '@/data/site';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/cn';

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">/ Pricing</span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
            Simple plans.
            <span className="block text-[var(--color-fg)]/50">Cancel anytime.</span>
          </h2>
          <p className="mt-5 text-sm text-[var(--color-fg)]/60 md:text-base">
            Month-to-month retainers, no long lock-ins, no agency markups. Pause whenever your calendar gets weird.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4">
          {plans.map((p) => (
            <article
              key={p.name}
              className={cn(
                'reveal relative flex flex-col rounded-2xl border p-8 md:p-10 transition-all',
                p.featured
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] lg:-translate-y-4 lg:scale-[1.02]'
                  : 'border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-fg)] hover:border-[var(--color-fg)]/30',
              )}
            >
              {p.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-[var(--color-bg)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                  Featured
                </span>
              )}
              <div>
                <h3 className={cn('text-sm uppercase tracking-[0.25em]', p.featured ? 'text-[var(--color-bg)]/70' : 'text-[var(--color-muted)]')}>
                  {p.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-medium tracking-tight md:text-6xl">{p.price}</span>
                  <span className={cn('text-sm', p.featured ? 'text-[var(--color-bg)]/60' : 'text-[var(--color-fg)]/50')}>{p.cadence}</span>
                </div>
              </div>

              <ul className={cn('mt-10 flex-1 space-y-4 border-t pt-8 text-sm', p.featured ? 'border-[var(--color-bg)]/15' : 'border-[var(--color-border)]')}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Icon.Check
                      className={cn('mt-0.5 h-4 w-4 shrink-0', p.featured ? 'text-[var(--color-bg)]' : 'text-[var(--color-accent)]')}
                    />
                    <span className={cn(p.featured ? 'text-[var(--color-bg)]/85' : 'text-[var(--color-fg)]/75')}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={cn(
                  'mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all',
                  p.featured
                    ? 'bg-[var(--color-bg)] text-[var(--color-accent-soft)] hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)]'
                    : 'border border-[var(--color-border)] bg-[var(--color-secondary)] text-[var(--color-fg)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]',
                )}
              >
                {p.cta}
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
