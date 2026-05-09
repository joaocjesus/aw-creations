import { steps } from '@/data/site';
import { Icon, type IconKey } from '@/components/Icon';

const iconMap: IconKey[] = ['Compass', 'Strategy', 'Camera', 'Rocket'];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="reveal flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">/ How it works</span>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              Four steps from
              <br />
              <span className="text-[var(--color-fg)]/50">first call to first launch.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[var(--color-fg)]/60 md:text-base">
            We move fast without skipping the strategy. Most clients ship their first batch within 14 days.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const I = Icon[iconMap[i] ?? 'Sparkle'];
            return (
              <div key={s.n} className="reveal relative">
                <span
                  aria-hidden
                  className="absolute -top-12 left-0 select-none font-display text-[10rem] font-medium leading-none text-[var(--color-fg)]/[0.04] md:-top-16 md:text-[12rem]"
                >
                  {s.n}
                </span>
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-accent)]">
                    <I className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-[var(--color-fg)] md:text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg)]/60">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
