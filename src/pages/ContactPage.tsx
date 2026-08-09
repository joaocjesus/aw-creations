import { useEffect, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { ContactForm } from '@/components/contact/contact-form';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { buttonVariants } from '@/components/ui/button-variants';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme/theme-context';
import { cn } from '@/lib/utils';

const bookingUrl = 'https://cal.com/annawcreation';
const calendarNamespace = 'contact-page';

export default function ContactPage() {
  const { resolvedTheme } = useTheme();
  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    document.title = 'Contact Anna Wilson Creations';
  }, []);

  useEffect(() => {
    if (!calendarOpen) {
      return;
    }

    void getCalApi({ namespace: calendarNamespace }).then((cal) => {
      cal('ui', {
        theme: resolvedTheme,
        layout: 'month_view',
        hideEventTypeDetails: false,
        cssVarsPerTheme: {
          light: { 'cal-brand': '#1a1814' },
          dark: { 'cal-brand': '#f5f1e8' },
        },
      });
    }).catch((error: unknown) => {
      console.error('Cal.com embed failed to initialize:', error);
    });
  }, [calendarOpen, resolvedTheme]);

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
          <div className="flex items-center gap-3">
            <div className="hidden min-[480px]:block">
              <ThemeToggle />
            </div>
            <a
              href="/"
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'hidden sm:inline-flex')}
            >
              Back to home
            </a>
          </div>
        </div>
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
              <h2 className="font-display display-safe mt-3 text-4xl font-semibold sm:text-5xl">
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
                <h2 className="font-display display-safe mt-3 text-4xl font-semibold sm:text-5xl">
                Prefer to talk?<br />
                <em className="font-normal italic">Choose a time.</em>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-black/70 dark:text-white/70">
                  Open Anna’s live availability and pick the time that works for you.
              </p>
              </div>

              <div className="md:col-span-4 md:col-start-9">
              <Button
                type="button"
                onClick={() => setCalendarOpen((open) => !open)}
                aria-expanded={calendarOpen}
                aria-controls="booking-calendar"
                  className="inset-frame-button h-12 w-full"
              >
                {calendarOpen ? 'Hide calendar' : 'View available times'}
              </Button>
                <p className="mt-3 text-center text-sm text-black/60 dark:text-white/60">
                  Or{' '}
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Cal.com in a new tab"
                    className="border-b border-current"
                  >
                    open Cal.com separately
                  </a>
                  .
                </p>
              </div>
            </div>

              {calendarOpen && (
                <div
                  id="booking-calendar"
                className="mt-10 max-h-[680px] overflow-y-auto border border-black/15 bg-[var(--card)] dark:border-white/15 md:max-h-[740px]"
                >
                  <Cal
                    namespace={calendarNamespace}
                    calLink="annawcreation"
                    config={{ layout: 'month_view', theme: resolvedTheme }}
                  className="min-h-[720px] w-full"
                    style={{ width: '100%', height: '100%', overflow: 'auto' }}
                  />
                </div>
              )}
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
