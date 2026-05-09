import { Icon } from '@/components/Icon';

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[var(--color-accent)] text-[var(--color-bg)]">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[var(--color-bg)] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[var(--color-fg)] blur-3xl" />
      </div>
      <div className="container-x relative grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div className="reveal max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-bg)]/60">/ Let's go</span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-6xl">
            Ready to be the brand
            <br />
            people screenshot?
          </h2>
          <p className="mt-5 max-w-lg text-base text-[var(--color-bg)]/75">
            Tell us about your business — we'll send a 5-minute Loom with three ideas you can run with this quarter.
          </p>
        </div>
        <div className="reveal flex flex-col gap-3 md:items-end">
          <a
            href="mailto:hello@annastudio.co"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-bg)] px-8 py-5 text-sm font-medium text-[var(--color-fg)] transition-all hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] md:w-auto"
          >
            <Icon.Mail className="h-4 w-4" />
            hello@annastudio.co
          </a>
          <a
            href="#cta"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-[var(--color-bg)]/30 bg-transparent px-8 py-5 text-sm font-medium text-[var(--color-bg)] transition-all hover:bg-[var(--color-bg)] hover:text-[var(--color-accent-soft)] md:w-auto"
          >
            <Icon.Calendar className="h-4 w-4" />
            Book a 30-min intro
            <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
