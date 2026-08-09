import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';

const enquiryTimeoutMs = 15_000;

export function ContactForm() {
  const [enquirySent, setEnquirySent] = useState(false);
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const [enquiryError, setEnquiryError] = useState<string | null>(null);
  const enquiryRequestRef = useRef<AbortController | null>(null);

  useEffect(
    () => () => {
      enquiryRequestRef.current?.abort();
    },
    [],
  );

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
            : 'The enquiry could not be sent. Please try again or email me directly.';
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

  if (enquirySent) {
    return (
      <div className="mt-10 border-t border-black/15 pt-7 dark:border-white/15">
        <p className="font-display text-3xl font-semibold">Thank you.</p>
        <p className="mt-3 text-base leading-relaxed text-black/70 dark:text-white/70">
          I have your details and will be in touch within one working day.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setEnquirySent(false)}
          className="mt-6"
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form className="mt-10 space-y-6" onSubmit={handleEnquirySubmit}>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="contact-name" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
          placeholder="hello@yourbusiness.co"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2 w-full border-b border-black/30 bg-transparent pb-2 text-base outline-none focus:border-black dark:border-white/30 dark:focus:border-white"
          placeholder="+44 7700 900000"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">
          Tell me about your business
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={2000}
          rows={5}
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
        className="inset-frame-button h-12 w-full"
      >
        {enquirySubmitting ? 'Sending…' : 'Send enquiry'}
      </Button>
    </form>
  );
}
