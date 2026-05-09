import { testimonials } from '@/data/site';

function initials(name: string) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">/ Testimonials</span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
            Founders who'd
            <br />
            <span className="text-[var(--color-fg)]/50">vouch for us.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-colors hover:border-[var(--color-accent)] md:p-10"
            >
              <span aria-hidden className="font-display text-5xl leading-none text-[var(--color-accent)]/60">
                "
              </span>
              <blockquote className="mt-3">
                <p className="font-display text-2xl font-medium leading-snug text-[var(--color-fg)] md:text-3xl">
                  {t.quote}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-[var(--color-fg)]/65">{t.body}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-[var(--color-border)] pt-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-accent)] text-sm font-medium text-[var(--color-bg)]">
                  {initials(t.name)}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-[var(--color-fg)]">{t.name}</span>
                  <span className="text-xs text-[var(--color-muted)]">{t.business}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
