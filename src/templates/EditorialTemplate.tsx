import { useState } from 'react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { services, plans, steps, stats, testimonials } from '@/data/site';

const editorialNav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
];

export function EditorialTemplate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);

  const handleModalOpenChange = (open: boolean) => {
    setModalOpen(open);
    if (!open) {
      setEnquirySent(false);
    }
  };

  return (
    <div data-template="editorial" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--background)] dark:border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <div className="flex items-baseline gap-3">
            <span className="font-display display-safe text-2xl font-semibold tracking-tight">Anna Wilson Studio</span>
          </div>
          <nav className="hidden gap-7 md:flex">
            {editorialNav.map((n) => (
              <a key={n.href} href={n.href} className="text-xs uppercase tracking-[0.25em] text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={() => setModalOpen(true)}
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              Book a Call
            </Button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="flex flex-col gap-[5px] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block h-px w-6 bg-black dark:bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-px w-6 bg-black dark:bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-black dark:bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute left-0 right-0 z-40 border-b border-[color:var(--border)] bg-[var(--background)] shadow-[0_8px_24px_rgba(0,0,0,0.12)] md:hidden">
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
              <Button
                onClick={() => { setMenuOpen(false); setModalOpen(true); }}
                variant="outline"
                className="mt-4 w-full"
              >
                Book a Call
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section className="relative h-[calc(100svh-5rem)] min-h-[480px] overflow-hidden border-b border-black/10 dark:border-white/10">
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          src="/media/hero-reel.mp4"
          poster="/media/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <img
          src="/media/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/10" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 text-[#f5f1e8] md:px-10 md:pb-20">
          <h1 className="font-display display-safe text-5xl font-semibold md:text-8xl">
            Films that<br />
            <em className="font-normal not-italic">linger.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#f5f1e8]/80 md:text-lg">
            An editorial studio for small businesses. We make video the way old magazines made stories — with care for the line, the frame, and the reader.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a href="#contact" className="bg-[#f5f1e8] px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#1a1814] hover:bg-[#f5f1e8]/85">
              Begin a project
            </a>
            <a href="#services" className="border-b border-[#c9b89a] pb-1 text-xs uppercase tracking-[0.3em] text-[#f5f1e8]">
              Browse the disciplines
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-black/10 bg-[var(--muted)] dark:border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-20 md:px-10 md:py-28">
          <aside className="col-span-12 md:col-span-5">
            <img
              src="/media/using-laptop.jpg"
              alt="Anna Wilson working on a laptop"
              width={1066}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </aside>
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display display-safe mt-4 text-5xl font-semibold md:text-7xl">
              About<br />
              <em className="italic font-normal">Anna Wilson.</em>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-black/80 dark:text-white/80 md:text-xl">
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

            <p className="mt-10 text-2xl italic text-black/70 dark:text-white/70 md:text-3xl">
              — Anna Wilson, Founder &amp; Director
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <h2 className="font-display display-safe col-span-12 text-4xl font-semibold md:col-span-4 md:text-5xl">The Disciplines</h2>
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
                <h3 className="font-display display-safe mt-3 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[var(--muted)] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-black/60 dark:text-white/60">From the masthead</p>
          <h2 className="font-display display-safe mt-3 text-4xl font-semibold md:text-6xl">By the numbers.</h2>
          <div className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-black/20 pl-5 dark:border-white/20">
                <div className="font-display display-safe text-5xl font-semibold md:text-6xl">{s.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-black/55 dark:text-white/55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 className="font-display display-safe text-4xl font-semibold md:text-6xl">A working method.</h2>
          <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-black/15 dark:border-white/15 md:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="bg-[var(--card)] p-7 outline outline-1 -outline-offset-1 outline-[color:var(--border-subtle)]"
              >
                <span className="text-3xl italic text-black/30 dark:text-white/30">{s.n}</span>
                <h3 className="font-display display-safe mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/65 dark:text-white/65">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 className="font-display display-safe text-4xl font-semibold md:text-6xl">Subscriptions.</h2>
          <div
            className="mt-12 grid grid-cols-1 gap-px bg-[color:var(--border-strong)] md:grid-cols-3"
          >
            {plans.map((p) => (
              <div key={p.name} className="bg-[var(--card)] p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display display-safe text-3xl font-semibold">{p.name}</h3>
                  {p.featured && <span className="text-[10px] uppercase tracking-[0.3em] text-black/50 dark:text-white/50">Recommended</span>}
                </div>
                <div className="font-display display-safe mt-4 text-5xl font-semibold">
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
          <h2 className="font-display display-safe text-4xl font-semibold md:text-6xl">Letters from the field.</h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-black/15 pt-6 dark:border-white/15">
                <blockquote className="text-2xl italic leading-snug">"{t.quote}"</blockquote>
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
          <h2 className="font-display display-safe mt-4 text-5xl font-semibold md:text-7xl">
            Write to us.<br />
            <em className="italic">We write back.</em>
          </h2>
          <a href="mailto:hello@annastudio.co" className="mt-10 inline-block border-b border-[#c9b89a] pb-2 text-2xl italic text-[#c9b89a] md:text-3xl">
            hello@annastudio.co
          </a>
        </div>
      </section>

      <Dialog open={modalOpen} onOpenChange={handleModalOpenChange}>
        <DialogContent aria-labelledby="book-call-title">
          <DialogHeader>
            <DialogDescription>Let's talk</DialogDescription>
            <DialogTitle id="book-call-title" className="font-display display-safe">Book a Call.</DialogTitle>
          </DialogHeader>
          {enquirySent ? (
            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">
                Thank you — we have your details and will be in touch within one working day.
              </p>
              <Button onClick={() => handleModalOpenChange(false)} className="w-full">
                Close
              </Button>
            </div>
          ) : (
            <form
              className="mt-8 space-y-5"
              /* TODO: wire to a real endpoint (Formspree/API) — currently only shows confirmation */
              onSubmit={(e) => { e.preventDefault(); setEnquirySent(true); }}
            >
              <div>
                <label htmlFor="enquiry-name" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Name</label>
                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="Anna Wilson"
                />
              </div>
              <div>
                <label htmlFor="enquiry-email" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Email</label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="hello@yourbrand.co"
                />
              </div>
              <div>
                <label htmlFor="enquiry-phone" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Phone</label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="+44 7700 900000"
                />
              </div>
              <Button
                type="submit"
                className="mt-4 w-full"
              >
                Send Enquiry
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t border-black/10 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 text-xs uppercase tracking-[0.25em] text-black/55 dark:text-white/55 md:flex-row md:items-center md:px-10">
          <span className="font-display display-safe text-base normal-case font-semibold tracking-normal text-black dark:text-white">Anna Wilson Studio — Folio of moving pictures.</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
