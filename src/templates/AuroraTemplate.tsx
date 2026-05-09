import { services, plans, steps, stats, testimonials, nav } from '@/data/site';

export function AuroraTemplate() {
  return (
    <div data-template="aurora" className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: '#06061a' }} />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-90"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 10%, rgba(180,80,255,0.55) 0%, transparent 60%), radial-gradient(50% 40% at 80% 0%, rgba(80,180,255,0.55) 0%, transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(255,90,170,0.45) 0%, transparent 65%), radial-gradient(40% 40% at 90% 70%, rgba(120,255,210,0.35) 0%, transparent 60%)',
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"180\\" height=\\"180\\"><filter id=\\"n\\"><feTurbulence baseFrequency=\\"0.9\\"/></filter><rect width=\\"100%\\" height=\\"100%\\" filter=\\"url(%23n)\\"/></svg>")' }} />

      <header className="sticky top-0 z-40">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-xl md:px-7">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-400 to-cyan-400 text-sm font-bold text-black">A</span>
            <span className="text-sm font-medium tracking-wide">Anna Wilson Studio</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-white/70 transition hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 px-5 py-2 text-sm font-medium text-black hover:opacity-90">
            Book a call
          </a>
        </div>
      </header>

      <section className="px-6 pt-24 pb-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            Now booking · Q2 cohort
          </div>
          <h1 className="mt-6 text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl">
            Video for the<br />
            <span className="bg-gradient-to-r from-fuchsia-300 via-pink-200 to-cyan-200 bg-clip-text text-transparent">always-on</span> brand.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-white/75">
            Glassy, dreamy, scroll-stopping. Short-form video that feels like the future and performs like the present.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-white px-7 py-4 text-sm font-medium text-black hover:bg-white/90">
              Start a project →
            </a>
            <a href="#services" className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium backdrop-blur hover:bg-white/10">
              Explore services
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl">
                <div className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-medium text-transparent md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-medium md:text-6xl">What we make</h2>
          <p className="mt-4 max-w-xl text-white/70">Six glass-cased services. Mix to taste.</p>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.n}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-xl transition hover:bg-white/10"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-400/40 to-cyan-400/40 blur-2xl" />
                <span className="relative text-xs uppercase tracking-[0.3em] text-white/50">{s.n}</span>
                <h3 className="relative mt-3 text-2xl font-medium">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/15 bg-white/5 p-8 backdrop-blur-xl md:p-14">
          <h2 className="text-4xl font-medium md:text-6xl">How it flows</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">Step {s.n}</div>
                <h3 className="mt-3 text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-medium md:text-6xl">Simple plans</h2>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={
                  'relative rounded-3xl border p-8 backdrop-blur-xl transition ' +
                  (p.featured
                    ? 'border-transparent bg-gradient-to-br from-fuchsia-500/30 via-pink-400/20 to-cyan-400/30 shadow-[0_0_60px_rgba(255,120,220,0.25)]'
                    : 'border-white/15 bg-white/5')
                }
              >
                {p.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-black">
                    Most popular
                  </span>
                )}
                <h3 className="text-2xl font-medium">{p.name}</h3>
                <div className="mt-3 text-5xl font-medium">
                  {p.price}<span className="text-lg text-white/60">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-cyan-300">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={'mt-8 block rounded-full px-5 py-3 text-center text-sm font-medium ' + (p.featured ? 'bg-white text-black' : 'border border-white/20 bg-white/5 hover:bg-white/10')}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-medium md:text-6xl">Loved by founders</h2>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-xl">
                <blockquote className="bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text text-2xl font-medium text-transparent">"{t.quote}"</blockquote>
                <p className="mt-4 text-sm leading-relaxed text-white/75">{t.body}</p>
                <figcaption className="mt-6 text-xs uppercase tracking-wider text-white/55">{t.name} · {t.business}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-32 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-fuchsia-500/30 via-pink-400/20 to-cyan-400/30 p-12 text-center backdrop-blur-2xl md:p-20">
          <h2 className="text-5xl font-medium leading-[0.95] md:text-7xl">Let's make something glow.</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/80">A 30-minute call. No deck. No pressure. Just figure out if we're a fit.</p>
          <a href="mailto:hello@annastudio.co" className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black hover:bg-white/90">
            hello@annastudio.co →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-xs text-white/55 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>Anna Wilson Studio · Aurora</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
