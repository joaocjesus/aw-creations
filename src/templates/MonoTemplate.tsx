import { services, plans, steps, stats, testimonials, nav } from '@/data/site';

export function MonoTemplate() {
  return (
    <div data-template="mono" className="min-h-screen bg-white text-black">
      <header className="border-b border-black/15">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 items-center gap-4 px-8 py-5">
          <a href="#top" className="col-span-3 text-sm font-semibold tracking-tight">Anna Wilson Studio<span className="text-black/40"> / video</span></a>
          <nav className="col-span-6 hidden gap-8 md:flex">
            {nav.map((n, i) => (
              <a key={n.href} href={n.href} className="text-sm text-black/70 hover:text-black">
                <span className="text-black/30 tabular-nums">0{i + 1}.</span> {n.label}
              </a>
            ))}
          </nav>
          <div className="col-span-3 flex justify-end">
            <a href="#contact" className="text-sm underline underline-offset-4 decoration-black/30 hover:decoration-black">
              hello@annastudio.co
            </a>
          </div>
        </div>
      </header>

      <section className="border-b border-black/15">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-4 px-8 py-24 md:py-32">
          <div className="col-span-12 md:col-span-2 text-xs uppercase tracking-widest text-black/50">
            <div>Index</div>
            <div className="mt-1 tabular-nums">001 / 008</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-[14vw] font-medium leading-[0.9] tracking-[-0.04em] md:text-[10rem]">
              Quiet work.<br />
              <span className="text-black/40">Loud results.</span>
            </h1>
            <div className="mt-12 grid grid-cols-12 gap-4">
              <p className="col-span-12 max-w-md text-sm leading-relaxed text-black/70 md:col-span-5">
                A small studio for short-form video. Built around restraint, not noise. We make fewer things, better.
              </p>
              <div className="col-span-12 md:col-span-4 md:col-start-9">
                <a href="#contact" className="block w-full border-y border-black py-3 text-center text-sm tracking-wide hover:bg-black hover:text-white">
                  Book a call →
                </a>
                <a href="#services" className="mt-3 block text-xs uppercase tracking-widest text-black/60 hover:text-black">
                  ↓ Continue reading
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15">
        <div className="mx-auto max-w-[1320px] px-8 py-12">
          <div className="grid grid-cols-2 gap-x-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-black/15 pl-5 first:border-l-0 first:pl-0 md:border-l md:pl-5 md:first:border-l">
                <div className="text-4xl font-medium tabular-nums tracking-tight md:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-black/55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-black/15">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-4 px-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-black/50">§ 02</div>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Services</h2>
          </div>
          <ul className="col-span-12 md:col-span-9">
            {services.map((s) => (
              <li key={s.n} className="grid grid-cols-12 gap-4 border-t border-black/15 py-7 last:border-b">
                <span className="col-span-2 text-xs tabular-nums text-black/50 md:col-span-1">{s.n}</span>
                <h3 className="col-span-10 text-xl font-medium tracking-tight md:col-span-3">{s.title}</h3>
                <p className="col-span-12 text-sm leading-relaxed text-black/70 md:col-span-7 md:col-start-6">{s.desc}</p>
                <span className="col-span-12 text-right text-xs uppercase tracking-widest text-black/40 md:col-span-1">→</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black/15">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-4 px-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-black/50">§ 03</div>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Method</h2>
          </div>
          <ol className="col-span-12 grid grid-cols-1 gap-x-8 gap-y-12 md:col-span-9 md:grid-cols-2">
            {steps.map((s) => (
              <li key={s.n}>
                <div className="text-xs uppercase tracking-widest text-black/40 tabular-nums">— {s.n}</div>
                <h3 className="mt-2 text-2xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="border-b border-black/15">
        <div className="mx-auto max-w-[1320px] px-8 py-24">
          <div className="text-xs uppercase tracking-widest text-black/50">§ 04</div>
          <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Plans</h2>
          <table className="mt-10 w-full border-collapse text-left">
            <thead>
              <tr className="border-y border-black/20 text-xs uppercase tracking-widest text-black/55">
                <th className="py-4 font-normal">Tier</th>
                <th className="py-4 font-normal">Price</th>
                <th className="py-4 font-normal">Includes</th>
                <th className="py-4 text-right font-normal"></th>
              </tr>
            </thead>
            <tbody>
              {plans.map((p) => (
                <tr key={p.name} className="border-b border-black/15 align-top">
                  <td className="py-7 pr-4">
                    <div className="text-2xl font-medium tracking-tight">{p.name}</div>
                    {p.featured && <div className="mt-1 text-[10px] uppercase tracking-widest text-black/50">Recommended</div>}
                  </td>
                  <td className="py-7 pr-4 text-2xl tabular-nums">{p.price}<span className="text-sm text-black/45">{p.cadence}</span></td>
                  <td className="py-7 pr-4 text-sm leading-relaxed text-black/75">
                    {p.features.join(' · ')}
                  </td>
                  <td className="py-7 text-right">
                    <a href="#contact" className="text-sm underline underline-offset-4 hover:no-underline">{p.cta} →</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-b border-black/15">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-4 px-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-black/50">§ 05</div>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Words</h2>
          </div>
          <div className="col-span-12 md:col-span-9">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-black/15 py-10 last:border-b">
                <blockquote className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">"{t.body}"</blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-widest text-black/55">— {t.name}, {t.business}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-4 px-8 py-24">
          <div className="col-span-12 md:col-span-6">
            <div className="text-xs uppercase tracking-widest text-black/50">§ 06 — Contact</div>
            <h2 className="mt-2 text-5xl font-medium tracking-tight md:text-7xl">Say hello.</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-black/70">
              Replies within one working day. We take three new clients per quarter.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <a href="mailto:hello@annastudio.co" className="block border-t border-black py-5 text-2xl tracking-tight hover:text-black/60">
              hello@annastudio.co <span className="float-right text-black/40">→</span>
            </a>
            <a href="tel:+10000000000" className="block border-t border-black py-5 text-2xl tracking-tight hover:text-black/60">
              +1 (000) 000-0000 <span className="float-right text-black/40">→</span>
            </a>
            <div className="block border-y border-black py-5 text-2xl tracking-tight">
              Brooklyn, NY <span className="float-right text-black/40">↗</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/15 px-8 py-6">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between text-xs uppercase tracking-widest text-black/55">
          <span>© {new Date().getFullYear()} Anna Wilson Studio</span>
          <span>Set in system sans · Mono edition</span>
        </div>
      </footer>
    </div>
  );
}
