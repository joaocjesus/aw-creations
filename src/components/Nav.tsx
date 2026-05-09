import { useEffect, useState } from 'react';
import { nav } from '@/data/site';
import { cn } from '@/lib/cn';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-bg)]/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold">A</span>
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-fg)]">Anna Wilson Studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-sm text-[var(--color-fg)]/80 transition-colors hover:text-[var(--color-highlight)]"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
          >
            Book a call
            <span aria-hidden>→</span>
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-fg)]"
          >
            <span className="space-y-1">
              <span className={cn('block h-px w-4 bg-current transition-transform', open && 'translate-y-1 rotate-45')} />
              <span className={cn('block h-px w-4 bg-current transition-opacity', open && 'opacity-0')} />
              <span className={cn('block h-px w-4 bg-current transition-transform', open && '-translate-y-1 -rotate-45')} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl">
          <nav className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-[var(--color-fg)]/80 hover:text-[var(--color-highlight)]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
            >
              Book a call →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
