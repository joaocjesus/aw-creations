import { heroThumbs } from '@/data/site';
import { Icon } from '@/components/Icon';

function Column({ direction, items }: { direction: 'down' | 'up'; items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="flex flex-col gap-3"
        style={{ animation: `${direction === 'down' ? 'scroll-down' : 'scroll-up'} 50s linear infinite` }}
      >
        {doubled.map((bg, i) => (
          <div
            key={i}
            className="relative aspect-[9/16] w-full shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)]"
            style={{ background: bg }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const cols = 6;
  const slices: string[][] = Array.from({ length: cols }, (_, c) =>
    heroThumbs.filter((_, i) => i % cols === c),
  );

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid grid-cols-3 gap-3 px-4 opacity-40 md:grid-cols-6 md:gap-4 md:px-8">
          {slices.map((s, i) => (
            <Column key={i} direction={i % 2 === 0 ? 'down' : 'up'} items={s} />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/60 via-[var(--color-bg)]/85 to-[var(--color-bg)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_75%)]" />
      </div>

      <div className="container-x relative flex min-h-[calc(100vh-6rem)] flex-col justify-center pb-24 pt-12">
        <div className="reveal max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            Video marketing for small business
          </span>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tight text-[var(--color-fg)] md:text-7xl lg:text-8xl">
            Video that actually
            <br />
            <span className="italic text-[var(--color-accent)]">moves the needle.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[var(--color-fg)]/70 md:text-lg">
            We make short-form video, UGC, and brand films for small businesses ready
            to grow. Hook-first, performance-tracked, delivered weekly.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-accent)] px-7 py-4 text-sm font-medium text-[var(--color-bg)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-highlight)]"
            >
              Book a strategy call
              <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-7 py-4 text-sm font-medium text-[var(--color-fg)] transition-all hover:border-[var(--color-fg)]/40 hover:bg-[var(--color-secondary)]"
            >
              See what we do
              <Icon.ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-muted)] [writing-mode:vertical-rl]">
            Scroll to explore
          </span>
          <span className="block h-16 w-px bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
