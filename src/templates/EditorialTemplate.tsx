import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { services, plans, steps, stats, testimonials } from '@/data/site';

const serif = { fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, "Times New Roman", serif' };

const editorialNav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'UGC', href: '#ugc' },
];

export function EditorialTemplate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <div
      data-template="editorial"
      className={`min-h-screen${dark ? ' dark' : ''}`}
      style={{ background: dark ? '#1a1814' : '#f5f1e8', color: dark ? '#f5f1e8' : '#1a1814' }}
    >
      <button
        onClick={() => setDark((d) => !d)}
        className="fixed right-5 top-5 z-50 rounded-full border border-black/15 bg-[#f5f1e8] p-2 text-black/60 shadow-sm hover:text-black dark:border-white/15 dark:bg-[#1a1814] dark:text-white/60 dark:hover:text-white"
        aria-label="Toggle dark mode"
      >
        {dark ? <Sun size={15} /> : <Moon size={15} />}
      </button>

      <header className="relative border-b border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <div className="flex items-baseline gap-3">
            <span style={serif} className="text-2xl italic tracking-tight">Anna Wilson Studio</span>
          </div>
          <nav className="hidden gap-7 md:flex">
            {editorialNav.map((n) => (
              <a key={n.href} href={n.href} className="text-xs uppercase tracking-[0.25em] text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="hidden border border-black px-4 py-2 text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-[#f5f1e8] dark:border-white dark:hover:bg-white dark:hover:text-[#1a1814] md:inline-block"
            >
              Book a Call
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="flex flex-col gap-[5px] md:hidden"
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-6 bg-black dark:bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-px w-6 bg-black dark:bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-black dark:bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            className="absolute left-0 right-0 z-40 md:hidden"
            style={{
              background: dark ? '#1a1814' : '#f5f1e8',
              borderBottom: `1px solid ${dark ? 'rgba(245,241,232,0.1)' : 'rgba(0,0,0,0.1)'}`,
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            }}
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
              {editorialNav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-black/10 py-4 text-xs uppercase tracking-[0.25em] text-black/70 hover:text-black dark:border-white/10 dark:text-white/70 dark:hover:text-white"
                >
                  {n.label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); setModalOpen(true); }}
                className="mt-4 border border-black px-4 py-3 text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-[#f5f1e8] dark:border-white dark:hover:bg-white dark:hover:text-[#1a1814]"
              >
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </header>

      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-16 md:px-10 md:py-28">
          <div className="col-span-12 md:col-span-7">
            <h1 style={serif} className="text-6xl leading-[0.95] tracking-tight md:text-8xl">
              Films that<br />
              <em className="font-light italic">linger.</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70 md:text-lg">
              An editorial studio for small businesses. We make video the way old magazines made stories — with care for the line, the frame, and the reader.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a href="#contact" className="bg-black px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f5f1e8] hover:bg-black/80 dark:bg-[#f5f1e8] dark:text-[#1a1814] dark:hover:bg-white/80">
                Begin a project
              </a>
              <a href="#work" className="border-b border-black pb-1 text-xs uppercase tracking-[0.3em] dark:border-white">
                Browse the archive
              </a>
            </div>
          </div>
          <aside className="col-span-12 md:col-span-5 md:border-l md:border-black/15 md:pl-8 dark:md:border-white/15">
            <div className="aspect-[3/4] w-full" style={{ background: 'linear-gradient(180deg,#c9b89a 0%,#8a7a5e 100%)' }} />
          </aside>
        </div>
      </section>

      <section id="about" className="border-b border-black/10 dark:border-white/10" style={{ background: dark ? '#201c16' : '#ece6d6' }}>
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-20 md:px-10 md:py-28">
          <aside className="col-span-12 md:col-span-5">
            <img
              src="/media/using-laptop.JPG"
              alt="Anna Wilson working on a laptop"
              className="aspect-[4/5] w-full object-cover"
            />
          </aside>
          <div className="col-span-12 md:col-span-7">
            <h2 style={serif} className="mt-4 text-5xl leading-[1] tracking-tight md:text-7xl">
              About<br />
              <em className="italic font-light">Anna Wilson.</em>
            </h2>
            <div style={serif} className="mt-8 space-y-5 text-lg leading-relaxed text-black/80 dark:text-white/80 md:text-xl">
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

            <p style={serif} className="mt-10 text-2xl italic text-black/70 dark:text-white/70 md:text-3xl">
              — Anna Wilson, Founder &amp; Director
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <h2 style={serif} className="col-span-12 text-4xl md:col-span-4 md:text-5xl">The Disciplines</h2>
            <p className="col-span-12 text-sm leading-relaxed text-black/65 dark:text-white/65 md:col-span-7 md:col-start-6">
              Six practices, each tuned for a different cadence of attention. Choose one or commission the suite.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.n} className="border-t border-black/15 pt-5 dark:border-white/15">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-black/50 dark:text-white/50">{s.n}</span>
                  <span className="text-xs italic text-black/40 dark:text-white/40">— per the brief</span>
                </div>
                <h3 style={serif} className="mt-3 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 dark:border-white/10" style={{ background: dark ? '#201c16' : '#ece6d6' }}>
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-black/60 dark:text-white/60">From the masthead</p>
          <h2 style={serif} className="mt-3 text-4xl md:text-6xl">By the numbers.</h2>
          <div className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-black/20 pl-5 dark:border-white/20">
                <div style={serif} className="text-5xl md:text-6xl">{s.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-black/55 dark:text-white/55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 style={serif} className="text-4xl md:text-6xl">A working method.</h2>
          <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-black/15 dark:border-white/15 md:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="p-7"
                style={{
                  background: dark ? '#242018' : '#f5f1e8',
                  outline: `1px solid ${dark ? 'rgba(245,241,232,0.08)' : 'rgba(0,0,0,0.08)'}`,
                  outlineOffset: '-1px',
                }}
              >
                <span style={serif} className="text-3xl italic text-black/30 dark:text-white/30">{s.n}</span>
                <h3 style={serif} className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/65 dark:text-white/65">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 style={serif} className="text-4xl md:text-6xl">Subscriptions.</h2>
          <div
            className="mt-12 grid grid-cols-1 gap-px md:grid-cols-3"
            style={{ background: dark ? 'rgba(245,241,232,0.15)' : 'rgba(0,0,0,0.15)' }}
          >
            {plans.map((p) => (
              <div key={p.name} className="p-8" style={{ background: dark ? '#242018' : '#f5f1e8' }}>
                <div className="flex items-baseline justify-between">
                  <h3 style={serif} className="text-3xl">{p.name}</h3>
                  {p.featured && <span className="text-[10px] uppercase tracking-[0.3em] text-black/50 dark:text-white/50">Recommended</span>}
                </div>
                <div style={serif} className="mt-4 text-5xl">
                  {p.price}
                  <span className="text-base text-black/50 dark:text-white/50">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-black/70 dark:text-white/70">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-black/40 dark:text-white/40">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 inline-block border-b border-black pb-1 text-xs uppercase tracking-[0.3em] dark:border-white">
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 style={serif} className="text-4xl md:text-6xl">Letters from the field.</h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-black/15 pt-6 dark:border-white/15">
                <blockquote style={serif} className="text-2xl italic leading-snug">"{t.quote}"</blockquote>
                <p className="mt-4 text-sm leading-relaxed text-black/65 dark:text-white/65">{t.body}</p>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-black/55 dark:text-white/55">
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

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setModalOpen(false)}>
          <div
            className="relative w-full max-w-md p-10"
            style={{ background: dark ? '#1a1814' : '#f5f1e8', color: dark ? '#f5f1e8' : '#1a1814' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-5 top-5 text-xs uppercase tracking-[0.25em] text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
            >
              Close
            </button>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60 dark:text-white/60">Let's talk</p>
            <h2 style={serif} className="mt-3 text-4xl">Book a Call.</h2>
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => { e.preventDefault(); setModalOpen(false); }}
            >
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Name</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="Anna Wilson"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="hello@yourbrand.co"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Phone</label>
                <input
                  type="tel"
                  className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="+44 7700 900000"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-black py-3 text-xs uppercase tracking-[0.3em] text-[#f5f1e8] hover:bg-black/80 dark:bg-[#f5f1e8] dark:text-[#1a1814] dark:hover:bg-white/80"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="border-t border-black/10 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 text-xs uppercase tracking-[0.25em] text-black/55 dark:text-white/55 md:flex-row md:items-center md:px-10">
          <span style={serif} className="text-base normal-case italic tracking-normal text-black dark:text-white">Anna Wilson Studio — Folio of moving pictures.</span>
          <span>© {new Date().getFullYear()} · Set in Cormorant.</span>
        </div>
      </footer>
    </div>
  );
}
