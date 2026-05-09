import { ugc } from '@/data/site';
import { Icon } from '@/components/Icon';

export function UGC() {
  return (
    <section id="ugc" className="relative bg-[var(--color-secondary)] py-28 md:py-36">
      <div className="container-x">
        <div className="reveal grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">/ UGC</span>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              Real creators.
              <br />
              <span className="text-[var(--color-fg)]/50">Real bookings.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 text-sm leading-relaxed text-[var(--color-fg)]/65 md:text-base">
            <p>
              Our creator network turns your product into native, snackable video that
              feels like a friend's recommendation — not a billboard.
            </p>
            <p>
              Every asset is briefed, hooked, and edited for the platform it lives on,
              so the spend you put behind it actually compounds.
            </p>
          </div>
        </div>

        <div className="reveal mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {ugc.map((u, i) => (
            <article
              key={u.handle}
              className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] transition-transform hover:-translate-y-1"
              style={{
                background: `linear-gradient(160deg, hsl(${24 + i * 6} 18% ${16 + i * 3}%) 0%, hsl(${30 + i * 4} 14% ${9 + i * 2}%) 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              <button
                aria-label={`Play ${u.handle}`}
                className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-accent)]/95 text-[var(--color-bg)] shadow-lg backdrop-blur transition-transform group-hover:scale-110">
                  <Icon.Play className="h-5 w-5 translate-x-0.5" />
                </span>
              </button>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
                  {u.handle}
                </div>
                <p className="mt-1.5 text-sm leading-snug text-[var(--color-fg)]/85 line-clamp-2">{u.caption}</p>
              </div>
            </article>
          ))}

          <button
            type="button"
            className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-card)]/40 transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-card)]"
          >
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-3 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-current">
                  <Icon.Plus className="h-5 w-5" />
                </span>
                <span className="text-xs uppercase tracking-[0.25em]">Add UGC</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
