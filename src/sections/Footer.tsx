const cols = [
  {
    title: 'Services',
    links: ['UGC Content', 'Short-Form Edits', 'Brand Films', 'Paid Ad Creative', 'Content Strategy'],
  },
  {
    title: 'Company',
    links: ['About', 'Process', 'Case Studies', 'Careers', 'Press'],
  },
];

const socials = ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-x grid grid-cols-2 gap-10 py-20 md:grid-cols-4 md:gap-16">
        <div className="col-span-2 md:col-span-1">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold">A</span>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-fg)]">Anna Studio</span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--color-fg)]/55">
            Video marketing studio helping small businesses look unforgettable on every feed.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg)]/70 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">{c.title}</h3>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-[var(--color-fg)]/75 transition-colors hover:text-[var(--color-accent)]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-[var(--color-fg)]/75">
            <li>
              <a className="hover:text-[var(--color-accent)]" href="mailto:hello@annastudio.co">hello@annastudio.co</a>
            </li>
            <li>
              <a className="hover:text-[var(--color-accent)]" href="tel:+15555550123">+1 (555) 555-0123</a>
            </li>
            <li className="text-[var(--color-fg)]/55">
              215 Mercer St, Floor 4
              <br />
              Brooklyn, NY 11201
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-[var(--color-muted)] md:flex-row md:items-center">
          <span>© {year} Anna Studio. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-accent)]">Privacy</a>
            <a href="#" className="hover:text-[var(--color-accent)]">Terms</a>
            <a href="#" className="hover:text-[var(--color-accent)]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
