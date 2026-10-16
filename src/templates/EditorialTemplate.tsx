import { useState } from 'react';
import { Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { buttonVariants } from '@/components/ui/button-variants';
import { experience, instagram, services } from '@/data/site';
import { cn } from '@/lib/utils';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const editorialNav = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'My Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const portfolioGroups = [
  {
    id: 'business-videos',
    number: '01',
    eyebrow: 'For small businesses',
    title: 'Videos',
    description: 'Short-form stories that bring independent businesses, their people and their work to life.',
    examples: [
      {
        title: 'Small business showreel',
        src: '/media/hero-reel.mp4',
        poster: '/media/hero-poster.jpg',
      },
      { title: 'Interior video 01', src: '/media/interior-video-01.mp4' },
      { title: 'Interior video 02', src: '/media/interior-video-02.mp4' },
      { title: 'Interior video 03', src: '/media/interior-video-03.mp4' },
      { title: 'Interior video 04', src: '/media/interior-video-04.mp4' },
      { title: 'Interior video 05', src: '/media/interior-video-05.mp4' },
      { title: 'Interior video 06', src: '/media/interior-video-06.mp4' },
      { title: 'Video example 08', placeholder: true },
    ],
  },
  {
    id: 'behind-the-scenes',
    number: '02',
    eyebrow: 'For the filming industry',
    title: 'Behind the scenes',
    description: 'A closer look at the people, craft and moments that happen behind the camera.',
    examples: [
      {
        title: 'On-set behind the scenes',
        src: '/media/anna-web-hero.mp4',
        poster: '/media/anna-web-hero-poster.jpg',
      },
      { title: 'Behind-the-scenes video 01', src: '/media/bts-video-01.mp4' },
      { title: 'Behind-the-scenes video 02', src: '/media/bts-video-02.mp4' },
      { title: 'BTS example 04', placeholder: true },
    ],
  },
];

const primaryCta = 'Let’s talk about your business';
const mobilePrimaryCtaClass =
  'h-auto min-h-12 whitespace-normal px-4 py-3 text-center leading-snug tracking-[0.16em] sm:whitespace-nowrap sm:px-7 sm:tracking-[0.25em]';
const contactLinkClass = (className: string) =>
  cn(buttonVariants({ size: 'sm' }), 'inset-frame-button h-11 leading-none', className);
const primaryLinkClass = (className: string) =>
  cn(
    buttonVariants({ size: 'lg' }),
    'inset-frame-button',
    mobilePrimaryCtaClass,
    className,
  );

export function EditorialTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div data-template="editorial" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--background)] dark:border-white/10">
        <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-10 md:py-5">
          <span className="shrink-0 whitespace-nowrap text-base font-normal leading-[1.15] tracking-[0.08em] [font-variant:small-caps] min-[340px]:text-xl min-[440px]:text-lg min-[440px]:leading-none min-[440px]:tracking-[0.03em] sm:text-xl sm:tracking-[0.1em] md:text-[1.5rem] md:tracking-[0.12em] xl:text-[1.75rem] xl:tracking-[0.18em]">
            AW Creations
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
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <a
              href="/contact"
              className={contactLinkClass('inline-flex px-3 tracking-[0.16em] sm:px-4 sm:tracking-[0.25em]')}
            >
              <span className="relative top-px">Contact Us</span>
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
              <div className="flex items-center justify-between border-b border-black/10 py-3 dark:border-white/10 md:hidden">
                <span className="text-sm uppercase tracking-[0.25em] text-black/70 dark:text-white/70">
                  Theme
                </span>
                <ThemeToggle />
              </div>
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
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative h-[calc(100svh-4.5rem)] min-h-[580px] overflow-hidden border-b border-black/10 dark:border-white/10">
          <video
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            src="/media/anna-web-hero.mp4"
            poster="/media/anna-web-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <img
            src="/media/anna-web-hero-poster.jpg"
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
              <h1 className="font-display display-safe max-w-5xl text-[2.5rem] font-semibold min-[340px]:text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
                Visual and<br />
                <em className="font-normal not-italic">Marketing Storytelling</em>
              </h1>
              <p className="mt-0 max-w-2xl font-display display-safe text-2xl font-normal italic text-[#f5f1e8]/85 sm:text-3xl md:text-4xl">
                Clear strategy. Hands-on creativity.
              </p>
              <p className="mt-16 max-w-2xl text-base leading-relaxed text-[#f5f1e8]/85 sm:mt-24 md:text-lg">
                Helping small businesses tell better stories through short form video and marketing.
              </p>
            </div>
            <a
              href="/contact"
              className={primaryLinkClass('mt-7 w-full sm:w-fit')}
            >
              {primaryCta}
            </a>
          </div>
        </section>

        <section className="border-b border-black/10 bg-[var(--muted)] dark:border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
            <div className="grid gap-5 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">Portfolio</p>
                <h2 id="portfolio" className="font-display display-safe mt-3 scroll-mt-8 text-4xl font-semibold sm:text-5xl md:text-6xl">
                  Two sides of<br />
                  <em className="font-normal italic">the story.</em>
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70 md:col-span-5">
                From bringing independent businesses to life to capturing the energy behind a production, explore the work I love making.
              </p>
            </div>

            <div className="mt-10 space-y-16 md:mt-14 md:space-y-20">
              {portfolioGroups.map((group) => (
                <section key={group.id} aria-labelledby={`${group.id}-title`}>
                  <div className="mb-6 flex flex-col gap-2 border-t border-black/15 pt-4 dark:border-white/15 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-[0.3em] text-black/50 dark:text-white/50">{group.number} / {group.eyebrow}</span>
                      <h3 id={`${group.id}-title`} className="font-display display-safe mt-1 text-3xl font-semibold sm:text-4xl">{group.title}</h3>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-black/65 dark:text-white/65">{group.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4">
                    {group.examples.map((example) => (
                      <figure key={example.title} className="min-w-0">
                        {'placeholder' in example ? (
                          <div
                            className="relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden border border-black/10 bg-[#ded7c7] px-2 text-center dark:border-white/10 dark:bg-[#29251f] sm:px-4"
                            aria-label={`${example.title}, vertical video placeholder`}
                          >
                            <div className="absolute inset-3 border border-black/15 dark:border-white/15" />
                            <div className="relative px-4">
                              <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-current text-xl" aria-hidden="true">+</span>
                              <span className="block text-[0.55rem] uppercase tracking-[0.16em] text-black/50 dark:text-white/50 sm:text-[0.65rem] sm:tracking-[0.25em]">9:16 / {example.title}</span>
                              <span className="mt-2 block font-display text-base italic text-black/75 dark:text-white/75 sm:text-xl">Video coming soon</span>
                            </div>
                          </div>
                        ) : (
                          <video
                            className="aspect-[9/16] w-full bg-black object-cover"
                            src={example.src}
                            poster={example.poster}
                            controls
                            muted
                            playsInline
                            preload="metadata"
                            aria-label={example.title}
                          />
                        )}
                        <figcaption className="break-words pt-2 text-xs font-medium leading-snug text-black/75 dark:text-white/75 sm:pt-3 sm:text-sm">{example.title}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 dark:border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-12 md:px-10 md:py-24">
            <div className="md:col-span-5">
              <img
                src="/media/portrait-bokah-flowers.jpg"
                alt="Anna W"
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
                I started AW Creations after a decade of making films inside agencies. I wanted to offer small businesses thoughtful creative work without the layers of a large production company.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-black/75 dark:text-white/75">
                Today, I direct every project and bring in a small group of trusted specialists only when the work calls for it.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-black/75 dark:text-white/75">
                I also spent several years working in the TV and film industry, including appearing as the protagonist in an NFTS graduation project. That first-hand experience gave me a strong understanding of life on set and the collaboration behind every production. I bring that insight to behind-the-scenes filming, capturing the people, craft and atmosphere that make each project.
              </p>
              <p className="mt-8 font-display text-2xl italic text-black/65 dark:text-white/65">- Anna W</p>
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 dark:border-white/10">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-6 md:grid-cols-12 md:px-10 md:py-24">
            <h2 className="font-display display-safe text-4xl font-semibold sm:text-5xl md:col-span-7 md:text-6xl">
              Your business has a story.
              <br />
              <em className="font-normal italic">Let’s make sure people see it.</em>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-black/70 dark:text-white/70 md:col-span-5 md:self-end">
              I help small businesses turn what they do into engaging visual content that builds trust, reaches new audiences and gives people a reason to choose them.
            </p>
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
                  alt="Anna W working on a laptop"
                  width={1066}
                  height={1600}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">Experience</p>
                <h2 id="experience" className="font-display display-safe mt-3 scroll-mt-8 text-4xl font-semibold sm:text-5xl md:text-6xl">
                  Clear strategy,<br />
                  <em className="font-normal italic">hands-on creativity.</em>
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

        <section className="bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-10 md:py-28">
            <p className="text-xs uppercase tracking-[0.4em] text-black/55 dark:text-white/55">Contact</p>
            <h2 id="contact" className="font-display display-safe mt-4 max-w-4xl scroll-mt-8 text-5xl font-semibold sm:text-6xl md:text-7xl">
              Have a story<br />
              <em className="font-normal italic">worth telling?</em>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70">
              Tell me about your business, what you are working towards and where you would like creative support.
            </p>
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className={primaryLinkClass('w-full sm:w-fit')}
              >
                Contact Us
              </a>
              <a
                href="mailto:anna@awcreations.co.uk"
                className="inline-flex items-center gap-2 pb-1 text-lg italic text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
              >
                <Mail size={18} aria-hidden="true" />
                anna@awcreations.co.uk
              </a>
              <a
                href={instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${instagram.handle}`}
                className="inline-flex items-center gap-2 pb-1 text-lg italic text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
              >
                <InstagramIcon size={18} />
                {instagram.handle}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 text-xs uppercase tracking-[0.2em] text-black/55 dark:text-white/55 sm:px-6 md:flex-row md:items-center md:px-10">
          <span className="font-display display-safe text-base font-semibold normal-case tracking-normal text-black dark:text-white">
            AW Creations - Visual and marketing storytelling.
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${instagram.handle}`}
              className="inline-flex items-center gap-2 hover:text-black dark:hover:text-white"
            >
              <InstagramIcon size={16} />
              {instagram.handle}
            </a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
