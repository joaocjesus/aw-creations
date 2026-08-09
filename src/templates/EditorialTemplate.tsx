import { useRef, useState, type FormEvent } from 'react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { experience, services } from '@/data/site';

const editorialNav = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'My Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const primaryCta = 'Let’s talk about your business';
const bookingUrl = 'https://cal.com/annawcreation';
const enquiryTimeoutMs = 15_000;
const mobilePrimaryCtaClass =
  'h-auto min-h-12 whitespace-normal px-4 py-3 text-center leading-snug tracking-[0.16em] sm:whitespace-nowrap sm:px-7 sm:tracking-[0.25em]';
const bookingLinkClass =
  'inset-frame-button inline-flex min-h-9 items-center justify-center px-4 py-2 text-center text-xs font-medium uppercase tracking-[0.25em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]';

export function EditorialTemplate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const [enquiryError, setEnquiryError] = useState<string | null>(null);
  const enquiryRequestRef = useRef<AbortController | null>(null);

  const handleModalOpenChange = (open: boolean) => {
    setModalOpen(open);
    if (!open) {
      enquiryRequestRef.current?.abort();
      enquiryRequestRef.current = null;
      setEnquirySent(false);
      setEnquirySubmitting(false);
      setEnquiryError(null);
    }
  };

  const openEnquiry = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  const handleEnquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    enquiryRequestRef.current?.abort();

    const controller = new AbortController();
    enquiryRequestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), enquiryTimeoutMs);
    setEnquirySubmitting(true);
    setEnquiryError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
        signal: controller.signal,
      });

      if (!response.ok) {
        const responseBody = await response.text();
        let payload: unknown;

        if (responseBody) {
          try {
            payload = JSON.parse(responseBody);
          } catch {
            console.error('Contact endpoint returned a non-JSON error response.');
          }
        }

        const message =
          payload &&
          typeof payload === 'object' &&
          'error' in payload &&
          typeof payload.error === 'string'
            ? payload.error
            : response.status === 404
              ? 'Email sending is unavailable on the local preview. Please try the deployed site.'
              : 'The enquiry could not be sent. Please try again.';
        throw new Error(message);
      }

      if (enquiryRequestRef.current === controller) {
        form.reset();
        setEnquirySent(true);
      }
    } catch (error) {
      if (enquiryRequestRef.current === controller) {
        const timedOut = error instanceof DOMException && error.name === 'AbortError';
        if (!timedOut) {
          console.error('Contact form submission failed:', error);
        }
        setEnquiryError(
            timedOut
              ? 'The enquiry took too long to send. Please try again.'
              : error instanceof Error
            ? error.message
            : 'The enquiry could not be sent. Please try again.',
        );
      }
    } finally {
      window.clearTimeout(timeout);
      if (enquiryRequestRef.current === controller) {
        enquiryRequestRef.current = null;
        setEnquirySubmitting(false);
      }
    }
  };

  return (
    <div data-template="editorial" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--background)] dark:border-white/10">
        <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-10 md:py-5">
          <span className="shrink-0 whitespace-nowrap text-[1.25rem] font-normal leading-none tracking-[0.12em] [font-variant:small-caps] sm:text-[1.5rem] xl:text-[1.75rem] xl:tracking-[0.18em]">
            Anna Wilson Creations
          </span>
          <nav className="hidden shrink-0 items-center gap-5 min-[1400px]:flex">
            {editorialNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-xs uppercase tracking-[0.2em] text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${bookingLinkClass} hidden md:inline-flex`}
            >
              Book a Call
            </a>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="flex flex-col gap-[5px] p-2 min-[1400px]:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block h-px w-6 bg-black transition-transform duration-200 dark:bg-white ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block h-px w-6 bg-black transition-opacity duration-200 dark:bg-white ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-black transition-transform duration-200 dark:bg-white ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute left-0 right-0 z-40 border-b border-[color:var(--border)] bg-[var(--background)] shadow-[0_8px_24px_rgba(0,0,0,0.12)] min-[1400px]:hidden">
            <nav className="mx-auto flex max-w-[100rem] flex-col px-6 py-4">
              {editorialNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-black/10 py-3 text-sm uppercase tracking-[0.25em] text-black/70 hover:text-black dark:border-white/10 dark:text-white/70 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={`${bookingLinkClass} mt-4 min-h-12 w-full`}
              >
                Book a Call
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative h-[calc(100svh-4.5rem)] min-h-[580px] overflow-hidden border-b border-black/10 dark:border-white/10">
          <video
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            src="/media/hero-reel.mp4"
            poster="/media/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <img
            src="/media/hero-poster.jpg"
            alt=""
            aria-hidden="true"
            width={640}
            height={360}
            className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.5) 48%, rgba(0, 0, 0, 0.12) 78%), linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, transparent 72%)',
            }}
          />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-10 text-[#f5f1e8] sm:px-6 sm:pb-14 md:px-10 md:pb-20">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#f5f1e8]/70 sm:text-sm">
                Anna Wilson Creations
              </p>
              <h1 className="font-display display-safe max-w-5xl text-[2.5rem] font-semibold min-[340px]:text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
                Visual and<br />
                <em className="font-normal not-italic">Marketing Storytelling</em>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#f5f1e8]/85 sm:mt-6 md:text-lg">
                Helping small businesses tell better stories through short form video and marketing.
              </p>
            </div>
            <Button
              onClick={openEnquiry}
              size="lg"
              className={`inset-frame-button mt-7 w-full sm:w-fit ${mobilePrimaryCtaClass}`}
            >
              {primaryCta}
            </Button>
          </div>
        </section>

        <section className="border-b border-black/10 bg-[var(--muted)] dark:border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
            <div className="grid gap-5 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">Portfolio</p>
                <h2 id="portfolio" className="font-display display-safe mt-3 scroll-mt-8 text-4xl font-semibold sm:text-5xl md:text-6xl">
                  Stories made<br />
                  <em className="font-normal italic">to be remembered.</em>
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70 md:col-span-5">
                A showreel of visual stories created with warmth, clarity and a strong sense of place.
              </p>
            </div>

            <figure className="mt-10 md:mt-14">
              <video
                className="aspect-video w-full bg-black object-cover"
                src="/media/hero-reel.mp4"
                poster="/media/hero-poster.jpg"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label="Anna Wilson Creations showreel"
              />
              <figcaption className="grid gap-3 border-t border-black/15 pt-4 dark:border-white/15 sm:grid-cols-2 sm:items-start">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-black/50 dark:text-white/50">Showreel 01</span>
                  <h3 className="font-display display-safe mt-1 text-2xl font-semibold">Short-form storytelling</h3>
                </div>
                <p className="text-sm leading-relaxed text-black/65 dark:text-white/65 sm:text-right">
                  Direction, filming and editing for people-led brands and independent businesses.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-b border-black/10 dark:border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-12 md:px-10 md:py-24">
            <div className="md:col-span-5">
              <img
                src="/media/portrait-bokah-flowers.jpg"
                alt="Anna Wilson"
                width={768}
                height={1152}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="self-center md:col-span-6 md:col-start-7">
              <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">My Story</p>
              <h2 id="story" className="font-display display-safe mt-3 scroll-mt-8 text-4xl font-semibold sm:text-5xl md:text-6xl">
                Personal work,<br />
                <em className="font-normal italic">made with purpose.</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black/75 dark:text-white/75">
                I started Anna Wilson Creations after a decade of making films inside agencies. I wanted to offer small businesses thoughtful creative work without the layers of a large production company.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-black/75 dark:text-white/75">
                Today, I direct every project and bring in a small group of trusted specialists only when the work calls for it.
              </p>
              <p className="mt-8 font-display text-2xl italic text-black/65 dark:text-white/65">— Anna Wilson</p>
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 bg-[var(--muted)] dark:border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
            <div className="grid gap-5 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">Services</p>
                <h2 id="services" className="font-display display-safe mt-3 scroll-mt-8 text-4xl font-semibold sm:text-5xl md:text-6xl">
                  Four ways<br />
                  <em className="font-normal italic">we can work together.</em>
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70 md:col-span-5 md:col-start-8 md:self-end">
                Start with the support your business needs now. Each service can stand alone or become part of a wider project.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:mt-14">
              {services.map((service) => (
                <article key={service.n} className="border-t border-black/20 pt-5 dark:border-white/20">
                  <span className="text-xs uppercase tracking-[0.3em] text-black/45 dark:text-white/45">{service.n}</span>
                  <h3 className="font-display display-safe mt-3 max-w-lg text-2xl font-semibold sm:text-3xl">{service.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/65 dark:text-white/65">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <img
                  src="/media/using-laptop.jpg"
                  alt="Anna Wilson working on a laptop"
                  width={1066}
                  height={1600}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">Experience</p>
                <h2 id="experience" className="font-display display-safe mt-3 scroll-mt-8 text-4xl font-semibold sm:text-5xl md:text-6xl">
                  Experience,<br />
                  <em className="font-normal italic">without the agency layers.</em>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70">
                  Strategic thinking and hands-on creative support, delivered through a simple, collaborative process.
                </p>
                <div className="mt-9 space-y-7">
                  {experience.map((item) => (
                    <article key={item.label} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-black/15 pt-5 dark:border-white/15 sm:grid-cols-[8rem_1fr]">
                      <div className="font-display text-3xl font-semibold sm:text-4xl">{item.value}</div>
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.25em] text-black/55 dark:text-white/55">{item.label}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">{item.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1a1814] text-[#f5f1e8]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-10 md:py-28">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9b89a]">Contact</p>
            <h2 id="contact" className="font-display display-safe mt-4 max-w-4xl scroll-mt-8 text-5xl font-semibold sm:text-6xl md:text-7xl">
              Have a story<br />
              <em className="font-normal italic">worth telling?</em>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f5f1e8]/70">
              Tell me about your business, what you are working towards and where you would like creative support.
            </p>
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Button
                onClick={openEnquiry}
                size="lg"
                className={`inset-frame-button w-full sm:w-fit ${mobilePrimaryCtaClass}`}
              >
                {primaryCta}
              </Button>
              <a
                href="mailto:hello@annastudio.co"
                className="border-b border-[#c9b89a] pb-1 text-lg italic text-[#c9b89a]"
              >
                hello@annastudio.co
              </a>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={modalOpen} onOpenChange={handleModalOpenChange}>
        <DialogContent aria-labelledby="enquiry-title">
          <DialogHeader>
            <DialogDescription>Tell me a little about what you need</DialogDescription>
            <DialogTitle id="enquiry-title" className="font-display display-safe">
              {primaryCta}
            </DialogTitle>
          </DialogHeader>
          {enquirySent ? (
            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">
                Thank you — I have your details and will be in touch within one working day.
              </p>
              <Button onClick={() => handleModalOpenChange(false)} className="inset-frame-button w-full">
                Close
              </Button>
            </div>
          ) : (
            <form
              className="mt-8 space-y-5"
              onSubmit={handleEnquirySubmit}
            >
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="enquiry-website">Website</label>
                <input
                  id="enquiry-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="enquiry-name" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Name</label>
                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="enquiry-email" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Email</label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="hello@yourbusiness.co"
                />
              </div>
              <div>
                <label htmlFor="enquiry-phone" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Phone</label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="+44 7700 900000"
                />
              </div>
              <div>
                <label htmlFor="enquiry-message" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Tell me about your business</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  required
                  maxLength={2000}
                  rows={3}
                  className="mt-2 w-full resize-y border border-black/30 bg-transparent p-3 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
                  placeholder="What are you working towards, and where would you like support?"
                />
              </div>
              {enquiryError && (
                <p role="alert" className="text-sm text-red-700 dark:text-red-300">
                  {enquiryError}
                </p>
              )}
              <Button
                type="submit"
                disabled={enquirySubmitting}
                className="inset-frame-button mt-4 w-full"
              >
                {enquirySubmitting ? 'Sending…' : 'Send enquiry'}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t border-black/10 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 text-xs uppercase tracking-[0.2em] text-black/55 dark:text-white/55 sm:px-6 md:flex-row md:items-center md:px-10">
          <span className="font-display display-safe text-base font-semibold normal-case tracking-normal text-black dark:text-white">
            Anna Wilson Creations — Visual and marketing storytelling.
          </span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
