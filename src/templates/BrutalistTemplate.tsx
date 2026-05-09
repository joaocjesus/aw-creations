import { services, plans, steps, stats, testimonials, tickerWords } from '@/data/site';

const mono = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace' };
const display = { fontFamily: '"Archivo Black", "Helvetica Neue", Arial, sans-serif' };

const YELLOW = '#ffe600';
const INK = '#0a0a0a';

export function BrutalistTemplate() {
  return (
    <div data-template="brutalist" style={{ background: YELLOW, color: INK, ...mono }} className="min-h-screen">
      <header style={{ borderBottom: `3px solid ${INK}` }}>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <span style={{ background: INK, color: YELLOW }} className="px-2 py-1 text-sm font-bold">ANNA.WILSON//STUDIO</span>
            <span className="text-xs">v3.0 — RAW.OUTPUT</span>
          </div>
          <nav className="hidden gap-5 md:flex">
            {['SVC', 'PROC', 'PRICE', 'WORK', 'CONTACT'].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-xs underline underline-offset-4 hover:bg-black hover:text-yellow-300">
                {n}
              </a>
            ))}
          </nav>
          <a href="#contact" style={{ background: INK, color: YELLOW }} className="px-4 py-2 text-xs font-bold tracking-widest">
            [CALL.NOW]
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden" style={{ borderBottom: `3px solid ${INK}` }}>
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:py-20">
          <div className="flex flex-wrap items-baseline gap-x-3 text-xs">
            <span style={{ background: INK, color: YELLOW }} className="px-2 py-1">FILE_001</span>
            <span>/ VIDEO.MARKETING / SMALL.BIZ / 2026</span>
          </div>
          <h1 style={display} className="mt-6 text-[15vw] uppercase leading-[0.85] tracking-tighter md:text-[12rem]">
            VIDEO.<br />
            <span style={{ WebkitTextStroke: `2px ${INK}`, color: 'transparent' }}>THAT.WORKS.</span>
          </h1>
          <div className="mt-8 grid grid-cols-12 gap-5">
            <p className="col-span-12 max-w-xl text-sm leading-relaxed md:col-span-6">
              NO FLUFF. NO VAGUE BRAND DECKS. WE BUILD HOOK-FIRST VIDEO FOR SHOPS, OPERATORS, BUILDERS. SHIP WEEKLY. MEASURE EVERY FRAME.
            </p>
            <div className="col-span-12 flex flex-wrap items-start gap-3 md:col-span-6 md:justify-end">
              <a href="#contact" style={{ background: INK, color: YELLOW, boxShadow: `8px 8px 0 ${INK}` }} className="px-6 py-4 text-sm font-bold uppercase tracking-widest hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform">
                ▸ Book.A.Call
              </a>
              <a href="#svc" style={{ border: `3px solid ${INK}`, background: YELLOW, boxShadow: `8px 8px 0 ${INK}` }} className="px-6 py-4 text-sm font-bold uppercase tracking-widest hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform">
                ▾ See.Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: INK, color: YELLOW, borderBottom: `3px solid ${INK}` }} className="overflow-hidden whitespace-nowrap py-3">
        <div className="inline-block animate-[ticker_30s_linear_infinite]">
          {[...tickerWords, ...tickerWords].map((w, i) => (
            <span key={i} style={display} className="mx-6 text-2xl uppercase">★ {w}</span>
          ))}
        </div>
      </div>

      <section id="svc" style={{ borderBottom: `3px solid ${INK}` }}>
        <div className="mx-auto max-w-[1400px] px-5 py-16">
          <h2 style={display} className="text-5xl uppercase md:text-7xl">// SERVICES.GRID</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3" style={{ gap: 0 }}>
            {services.map((s, i) => (
              <article
                key={s.n}
                className="p-7"
                style={{
                  border: `3px solid ${INK}`,
                  marginLeft: i % 3 !== 0 ? '-3px' : 0,
                  marginTop: i >= 3 ? '-3px' : 0,
                  background: i % 2 === 0 ? YELLOW : '#fff',
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={display} className="text-4xl">{s.n}</span>
                  <span className="text-[10px]">██ ACTIVE</span>
                </div>
                <h3 style={display} className="mt-4 text-2xl uppercase">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{s.desc}</p>
                <a href="#contact" className="mt-5 inline-block text-xs underline underline-offset-4">→ ENGAGE_{s.n}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderBottom: `3px solid ${INK}`, background: INK, color: YELLOW }}>
        <div className="mx-auto max-w-[1400px] px-5 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 0 }}>
            {stats.map((s, i) => (
              <div key={s.label} className="p-6" style={{ borderLeft: i === 0 ? 'none' : `3px solid ${YELLOW}` }}>
                <div style={display} className="text-5xl md:text-7xl">{s.value}</div>
                <div className="mt-2 text-xs uppercase">▸ {s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proc" style={{ borderBottom: `3px solid ${INK}` }}>
        <div className="mx-auto max-w-[1400px] px-5 py-16">
          <h2 style={display} className="text-5xl uppercase md:text-7xl">// PROCESS.LOG</h2>
          <ol className="mt-10 space-y-0">
            {steps.map((s, i) => (
              <li key={s.n} className="flex flex-col gap-4 p-6 md:flex-row md:items-baseline md:gap-10" style={{ borderTop: `3px solid ${INK}`, borderBottom: i === steps.length - 1 ? `3px solid ${INK}` : 'none' }}>
                <span style={display} className="text-6xl md:w-32">{s.n}</span>
                <h3 style={display} className="text-3xl uppercase md:w-72">{s.title}</h3>
                <p className="flex-1 text-sm leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="price" style={{ borderBottom: `3px solid ${INK}` }}>
        <div className="mx-auto max-w-[1400px] px-5 py-16">
          <h2 style={display} className="text-5xl uppercase md:text-7xl">// PRICE.TABLE</h2>
          <div className="mt-10 grid grid-cols-1 gap-0 md:grid-cols-3">
            {plans.map((p, i) => (
              <div
                key={p.name}
                className="p-7"
                style={{
                  border: `3px solid ${INK}`,
                  marginLeft: i > 0 ? '-3px' : 0,
                  background: p.featured ? INK : YELLOW,
                  color: p.featured ? YELLOW : INK,
                  transform: p.featured ? 'translateY(-12px)' : 'none',
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 style={display} className="text-3xl uppercase">{p.name}</h3>
                  {p.featured && <span style={{ background: YELLOW, color: INK }} className="px-2 py-1 text-[10px] font-bold">[BEST]</span>}
                </div>
                <div style={display} className="mt-4 text-6xl">{p.price}<span className="text-base">{p.cadence}</span></div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f}>▸ {f}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 block text-center text-sm font-bold uppercase tracking-widest"
                  style={{
                    border: `3px solid ${p.featured ? YELLOW : INK}`,
                    padding: '12px 16px',
                    background: p.featured ? YELLOW : INK,
                    color: p.featured ? INK : YELLOW,
                  }}
                >
                  ▸ {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderBottom: `3px solid ${INK}` }}>
        <div className="mx-auto max-w-[1400px] px-5 py-16">
          <h2 style={display} className="text-5xl uppercase md:text-7xl">// CLIENT.QUOTES</h2>
          <div className="mt-10 grid grid-cols-1 gap-0 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="p-7"
                style={{ border: `3px solid ${INK}`, marginLeft: i > 0 ? '-3px' : 0, background: '#fff' }}
              >
                <span style={display} className="text-3xl">"</span>
                <blockquote style={display} className="text-xl uppercase leading-tight">{t.quote}</blockquote>
                <p className="mt-4 text-sm leading-relaxed">{t.body}</p>
                <figcaption className="mt-5 text-xs uppercase">— {t.name}, {t.business}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: INK, color: YELLOW }}>
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:py-28">
          <h2 style={display} className="text-6xl uppercase leading-[0.9] md:text-[10rem]">
            HIT.<br />SEND.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="mailto:hello@annastudio.co" style={{ background: YELLOW, color: INK, boxShadow: `8px 8px 0 ${YELLOW}` }} className="px-6 py-4 text-sm font-bold uppercase tracking-widest">
              ▸ HELLO@ANNASTUDIO.CO
            </a>
            <span className="text-xs">// REPLIES IN &lt; 24h</span>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: `3px solid ${YELLOW}`, background: INK, color: YELLOW }} className="px-5 py-6">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between text-xs">
          <span>© {new Date().getFullYear()} ANNA.WILSON//STUDIO</span>
          <span>EOF.</span>
        </div>
      </footer>
    </div>
  );
}
