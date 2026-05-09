import { services, plans, steps, stats, testimonials } from '@/data/site';

const serif = { fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, "Times New Roman", serif' };

const editorialNav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'UGC', href: '#ugc' },
  { label: 'Testimonials', href: '#testimonials' },
];

export function EditorialTemplate() {
  return (
    <div data-template="editorial" style={{ background: '#f5f1e8', color: '#1a1814' }} className="min-h-screen">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <div className="flex items-baseline gap-3">
            <span style={serif} className="text-2xl italic tracking-tight">Anna Wilson Studio</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">Est. 2018 · Issue 07</span>
          </div>
          <nav className="hidden gap-7 md:flex">
            {editorialNav.map((n) => (
              <a key={n.href} href={n.href} className="text-xs uppercase tracking-[0.25em] text-black/70 hover:text-black">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="border border-black px-4 py-2 text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-[#f5f1e8]">
            Enquire
          </a>
        </div>
      </header>

      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-16 md:px-10 md:py-28">
          <div className="col-span-12 md:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-black/60">Volume I — The Craft of Story</p>
            <h1 style={serif} className="text-6xl leading-[0.95] tracking-tight md:text-8xl">
              Films that<br />
              <em className="font-light italic">linger.</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
              An editorial studio for small businesses. We make video the way old magazines made stories — with care for the line, the frame, and the reader.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a href="#contact" className="bg-black px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f5f1e8] hover:bg-black/80">
                Begin a project
              </a>
              <a href="#work" className="border-b border-black pb-1 text-xs uppercase tracking-[0.3em]">
                Browse the archive
              </a>
            </div>
          </div>
          <aside className="col-span-12 md:col-span-5 md:border-l md:border-black/15 md:pl-8">
            <div className="aspect-[3/4] w-full" style={{ background: 'linear-gradient(180deg,#c9b89a 0%,#8a7a5e 100%)' }} />
            <p className="mt-3 text-xs italic text-black/60">Pl. 01 — On Sourdough, Folio Bakery, Spring '25.</p>
          </aside>
        </div>
      </section>

      <section id="about" className="border-b border-black/10" style={{ background: '#ece6d6' }}>
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-20 md:px-10 md:py-28">
          <aside className="col-span-12 md:col-span-5">
            <div
              className="aspect-[4/5] w-full"
              style={{
                background:
                  'linear-gradient(160deg,#d8c8a8 0%,#a89171 55%,#5a4a36 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)',
              }}
            />
            <p className="mt-3 text-xs italic text-black/60">Pl. 02 — Anna Wilson, on location, Brooklyn '25.</p>
          </aside>
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">A note from the founder</p>
            <h2 style={serif} className="mt-4 text-5xl leading-[1] tracking-tight md:text-7xl">
              About<br />
              <em className="italic font-light">Anna Wilson.</em>
            </h2>
            <div style={serif} className="mt-8 space-y-5 text-lg leading-relaxed text-black/80 md:text-xl">
              <p>
                <span className="text-3xl float-left mr-2 leading-none">I</span>
                started this studio after a decade of making films inside agencies that
                kept asking for louder, faster, glossier. I wanted the opposite —
                quieter work, made with patience, that still moved the needle.
              </p>
              <p>
                Today I work with a small bench of trusted creators and editors,
                directing every project from first call to final frame. Sourdough
                bakeries, indie roasters, skincare founders, denim shops — the
                brands I love are the ones built by hand.
              </p>
              <p>
                If you are a small business with a story worth telling slowly,
                I would like to hear from you.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-black/15 pt-8 md:grid-cols-3">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-black/55">Based in</dt>
                <dd style={serif} className="mt-1 text-xl">Brooklyn, NY</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-black/55">Working since</dt>
                <dd style={serif} className="mt-1 text-xl">2014</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-black/55">Featured in</dt>
                <dd style={serif} className="mt-1 text-xl italic">It's Nice That · Kinfolk</dd>
              </div>
            </dl>

            <p style={serif} className="mt-10 text-2xl italic text-black/70 md:text-3xl">
              — Anna Wilson, Founder &amp; Director
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <h2 style={serif} className="col-span-12 text-4xl md:col-span-4 md:text-5xl">The Disciplines</h2>
            <p className="col-span-12 text-sm leading-relaxed text-black/65 md:col-span-7 md:col-start-6">
              Six practices, each tuned for a different cadence of attention. Choose one or commission the suite.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.n} className="border-t border-black/15 pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-black/50">{s.n}</span>
                  <span className="text-xs italic text-black/40">— per the brief</span>
                </div>
                <h3 style={serif} className="mt-3 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10" style={{ background: '#ece6d6' }}>
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-black/60">From the masthead</p>
          <h2 style={serif} className="mt-3 text-4xl md:text-6xl">By the numbers.</h2>
          <div className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-black/20 pl-5">
                <div style={serif} className="text-5xl md:text-6xl">{s.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-black/55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 style={serif} className="text-4xl md:text-6xl">A working method.</h2>
          <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-black/15 md:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="bg-[#f5f1e8] p-7" style={{ outline: '1px solid rgba(0,0,0,0.08)', outlineOffset: '-1px' }}>
                <span style={serif} className="text-3xl italic text-black/30">{s.n}</span>
                <h3 style={serif} className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/65">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 style={serif} className="text-4xl md:text-6xl">Subscriptions.</h2>
          <div className="mt-12 grid grid-cols-1 gap-px md:grid-cols-3" style={{ background: 'rgba(0,0,0,0.15)' }}>
            {plans.map((p) => (
              <div key={p.name} className="bg-[#f5f1e8] p-8">
                <div className="flex items-baseline justify-between">
                  <h3 style={serif} className="text-3xl">{p.name}</h3>
                  {p.featured && <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">Recommended</span>}
                </div>
                <div style={serif} className="mt-4 text-5xl">
                  {p.price}
                  <span className="text-base text-black/50">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-black/70">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-black/40">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 inline-block border-b border-black pb-1 text-xs uppercase tracking-[0.3em]">
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 style={serif} className="text-4xl md:text-6xl">Letters from the field.</h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-black/15 pt-6">
                <blockquote style={serif} className="text-2xl italic leading-snug">"{t.quote}"</blockquote>
                <p className="mt-4 text-sm leading-relaxed text-black/65">{t.body}</p>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-black/55">
                  {t.name} — {t.business}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: '#1a1814', color: '#f5f1e8' }}>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="text-xs uppercase tracking-[0.4em] text-[#c9b89a]">Correspondence</p>
          <h2 style={serif} className="mt-4 text-5xl leading-[0.95] md:text-7xl">
            Write to us.<br />
            <em className="italic">We write back.</em>
          </h2>
          <a href="mailto:hello@annastudio.co" style={serif} className="mt-10 inline-block border-b border-[#c9b89a] pb-2 text-2xl italic text-[#c9b89a] md:text-3xl">
            hello@annastudio.co
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 text-xs uppercase tracking-[0.25em] text-black/55 md:flex-row md:items-center md:px-10">
          <span style={serif} className="text-base normal-case italic tracking-normal text-black">Anna Wilson Studio — Folio of moving pictures.</span>
          <span>© {new Date().getFullYear()} · Set in Cormorant.</span>
        </div>
      </footer>
    </div>
  );
}
