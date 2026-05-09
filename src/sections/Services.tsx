import { services } from '@/data/site';
import { Icon, type IconKey } from '@/components/Icon';

const iconMap: IconKey[] = ['Camera', 'Film', 'Sparkle', 'Target', 'Strategy', 'Crew'];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">/ Services</span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
            Everything your brand needs
            <br />
            <span className="text-[var(--color-fg)]/50">to feel inevitable on video.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const I = Icon[iconMap[i] ?? 'Camera'];
            return (
              <article
                key={s.n}
                className="group reveal relative overflow-hidden bg-[var(--color-card)] p-8 transition-colors hover:bg-[var(--color-secondary)] md:p-10"
              >
                <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-[var(--color-accent)]" />
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium tracking-[0.25em] text-[var(--color-muted)]">{s.n}</span>
                  <I className="h-5 w-5 text-[var(--color-accent)] transition-transform duration-500 group-hover:rotate-12 group-hover:text-[var(--color-highlight)]" />
                </div>
                <h3 className="mt-12 text-2xl font-medium text-[var(--color-fg)] md:text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg)]/60 md:text-base">{s.desc}</p>
                <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--color-fg)]/0 transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  Learn more
                  <span aria-hidden>→</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
