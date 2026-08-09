import { useEffect, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { ContactForm } from '@/components/contact/contact-form';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { buttonVariants } from '@/components/ui/button-variants';
import { useTheme } from '@/components/theme/theme-context';
import { cn } from '@/lib/utils';

const bookingUrl = 'https://cal.com/annawcreation';
const calendarNamespace = 'contact-page';

export default function ContactPage() {
  const { resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Contact Anna Wilson Creations';
  }, []);

  useEffect(() => {
    void getCalApi({ namespace: calendarNamespace }).then((cal) => {
      cal('ui', {
        theme: resolvedTheme,
        colorScheme: resolvedTheme,
        layout: 'month_view',
        hideEventTypeDetails: true,
        styles: {
          body: {
            background: resolvedTheme === 'dark' ? '#201c16' : '#ece6d6',
          },
        },
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#1a1814',
            'cal-brand-emphasis': '#302b24',
            'cal-brand-text': '#f5f1e8',
            'cal-text': '#49433a',
            'cal-text-emphasis': '#1a1814',
            'cal-text-subtle': '#6f685d',
            'cal-text-muted': '#9a9285',
            'cal-bg': '#f5f1e8',
            'cal-bg-emphasis': '#ded5c2',
            'cal-bg-subtle': '#ece6d6',
            'cal-bg-muted': '#f1ecdf',
            'cal-bg-inverted': '#1a1814',
            'cal-border': '#c9b89a',
            'cal-border-emphasis': '#9b8a6e',
            'cal-border-subtle': '#d8cebd',
            'cal-border-muted': '#e8e1d5',
            'cal-border-booker': '#c9b89a',
            'cal-border-booker-width': '1px',
            radius: '0.25rem',
          },
          dark: {
            'cal-brand': '#f5f1e8',
            'cal-brand-emphasis': '#ded5c2',
            'cal-brand-text': '#1a1814',
            'cal-bg': '#201c16',
            'cal-bg-emphasis': '#3b352c',
            'cal-bg-subtle': '#29251f',
            'cal-bg-muted': '#242018',
            'cal-border': '#5b5347',
            'cal-border-subtle': '#403a31',
            'cal-border-muted': '#302b25',
            'cal-border-booker': '#5b5347',
            'cal-border-booker-width': '1px',
            radius: '0.25rem',
          },
        },
      });
    }).catch((error: unknown) => {
      console.error('Cal.com embed failed to initialize:', error);
    });
  }, [resolvedTheme]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--background)] dark:border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-6 md:px-10">
          <a
            href="/"
            className="whitespace-nowrap text-lg font-normal leading-none tracking-[0.1em] [font-variant:small-caps] sm:text-2xl sm:tracking-[0.12em]"
          >
            Anna Wilson Creations
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            <a
              href="#email-enquiry"
              className="whitespace-nowrap text-xs uppercase tracking-[0.2em] text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
            >
              Email Enquiry
            </a>
            <a
              href="#book-a-call"
              className="whitespace-nowrap text-xs uppercase tracking-[0.2em] text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
            >
              Book a Call
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden min-[480px]:block">
              <ThemeToggle />
            </div>
            <a
              href="/"
              className={cn(buttonVariants({ size: 'sm' }), 'inset-frame-button hidden h-11 lg:inline-flex')}
            >
              Back to home
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex flex-col gap-[5px] p-2 lg:hidden"
              aria-label="Toggle contact menu"
              aria-expanded={menuOpen}
            >
              <span className={`block h-px w-6 bg-black transition-transform duration-200 dark:bg-white ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block h-px w-6 bg-black transition-opacity duration-200 dark:bg-white ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-black transition-transform duration-200 dark:bg-white ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="absolute left-0 right-0 border-b border-[color:var(--border)] bg-[var(--background)] px-6 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] lg:hidden">
            <a
              href="#email-enquiry"
              onClick={() => setMenuOpen(false)}
              className="block border-b border-black/10 py-3 text-sm uppercase tracking-[0.25em] text-black/70 dark:border-white/10 dark:text-white/70"
            >
              Email Enquiry
            </a>
            <a
              href="#book-a-call"
              onClick={() => setMenuOpen(false)}
              className="block border-b border-black/10 py-3 text-sm uppercase tracking-[0.25em] text-black/70 dark:border-white/10 dark:text-white/70"
            >
              Book a Call
            </a>
            <a
              href="/"
              className="block py-3 text-sm uppercase tracking-[0.25em] text-black/70 dark:text-white/70"
            >
              Back to Home
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="border-b border-black/10 bg-[var(--muted)] dark:border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:px-10 md:py-16">
            <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">Contact</p>
            <h1 className="font-display display-safe mt-3 max-w-5xl text-5xl font-semibold sm:text-6xl">
              Start a<br />
              <em className="font-normal italic">conversation.</em>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70 md:text-lg">
              Send a little context or choose a time to talk. Either way, you will hear directly from me.
            </p>
          </div>
        </section>

        <section className="border-b border-black/10 dark:border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-12 md:px-10 md:py-20">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">Send an enquiry</p>
              <h2 id="email-enquiry" className="font-display display-safe mt-3 scroll-mt-28 text-4xl font-semibold sm:text-5xl">
                Tell me what<br />
                <em className="font-normal italic">you are working on.</em>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-black/70 dark:text-white/70">
                A few details are enough to start. I will reply within one working day.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-20">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">Book a call</p>
                <h2 id="book-a-call" className="font-display display-safe mt-3 scroll-mt-28 text-4xl font-semibold sm:text-5xl">
                  Prefer to talk?<br />
                  <em className="font-normal italic">Choose a time.</em>
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-black/70 dark:text-white/70">
                  Open Anna’s live availability and pick the time that works for you.
                </p>
              </div>

            </div>

            <Cal
              namespace={calendarNamespace}
              calLink="annawcreation"
              config={{
                layout: 'month_view',
                theme: resolvedTheme,
                'ui.color-scheme': resolvedTheme,
                iframeAttrs: {
                  title: 'Book a call with Anna Wilson',
                },
              }}
              className="min-h-[720px] w-full"
              style={{ width: '100%', height: '100%', overflow: 'auto' }}
            />
            <p className="mt-4 text-sm text-black/60 dark:text-white/60 md:text-right">
              Calendar not loading?{' '}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Cal.com in a new tab"
                className="border-b border-current"
              >
                Open Cal.com in a new tab
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 text-xs uppercase tracking-[0.2em] text-black/55 dark:text-white/55 sm:px-6 md:flex-row md:items-center md:px-10">
          <span className="font-display text-base font-semibold normal-case tracking-normal text-black dark:text-white">
            Anna Wilson Creations — Visual and marketing storytelling.
          </span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
