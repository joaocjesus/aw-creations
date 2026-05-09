import { services, plans, steps, stats, testimonials, nav } from '@/data/site';

const PINK = '#ffd9e8';
const MINT = '#bdf3d7';
const PEACH = '#ffd1a8';
const LILAC = '#d9c8ff';
const BLUE = '#bcd9ff';
const INK = '#1f1330';

const stickerColors = [PINK, MINT, PEACH, LILAC, BLUE, '#fff7a8'];

export function RetroTemplate() {
  return (
    <div data-template="retro" style={{ background: PINK, color: INK, fontFamily: '"DM Sans", "Quicksand", system-ui, sans-serif' }} className="min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-40 h-64 w-64 rounded-full" style={{ background: MINT, filter: 'blur(40px)', opacity: 0.6 }} />
        <div className="absolute right-0 top-96 h-72 w-72 rounded-full" style={{ background: LILAC, filter: 'blur(50px)', opacity: 0.5 }} />
      </div>

      <header className="relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl text-xl font-black" style={{ background: INK, color: PINK, transform: 'rotate(-6deg)' }}>A</span>
            <span className="text-lg font-extrabold tracking-tight">anna.wilson.studio</span>
            <span style={{ background: MINT }} className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase">v.cute</span>
          </a>
          <nav className="hidden gap-2 md:flex">
            {nav.map((n, i) => (
              <a key={n.href} href={n.href} style={{ background: stickerColors[i % stickerColors.length] }} className="rounded-full border-2 border-[var(--ink,#1f1330)] px-4 py-1.5 text-sm font-bold hover:translate-y-[-2px] transition-transform" >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="rounded-full border-2 px-5 py-2 text-sm font-bold" style={{ background: INK, color: '#fff', borderColor: INK, boxShadow: '4px 4px 0 #fff' }}>
            say hi ✿
          </a>
        </div>
      </header>

      <section className="relative px-6 pt-16 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rotate-[-3deg] rounded-full border-2 border-[var(--ink,#1f1330)] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider" style={{ borderColor: INK }}>
            ✿ video for cute brands ✿
          </span>
          <h1 className="mt-6 text-6xl font-black leading-[0.9] tracking-tight md:text-[8rem]">
            make<br />
            <span className="inline-block rotate-[-2deg] rounded-3xl px-4 py-1" style={{ background: MINT }}>videos</span>
            <br />
            people <em className="italic" style={{ color: '#e8478f' }}>love</em>.
          </h1>
          <p className="mt-8 max-w-xl text-lg font-medium">
            A friendly little studio making short-form video for small businesses. Think: stickers, sparkles, sourdough, and growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full border-2 px-7 py-4 text-sm font-extrabold uppercase tracking-wider" style={{ background: INK, color: '#fff', borderColor: INK, boxShadow: `6px 6px 0 ${MINT}` }}>
              ✦ book a call
            </a>
            <a href="#services" className="rounded-full border-2 px-7 py-4 text-sm font-extrabold uppercase tracking-wider" style={{ background: '#fff', color: INK, borderColor: INK, boxShadow: `6px 6px 0 ${LILAC}` }}>
              peek the menu →
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-3xl border-2 p-5"
                style={{
                  background: stickerColors[(i + 1) % stickerColors.length],
                  borderColor: INK,
                  boxShadow: `5px 5px 0 ${INK}`,
                  transform: `rotate(${[-2, 1.5, -1, 2][i]}deg)`,
                }}
              >
                <div className="text-4xl font-black md:text-5xl">{s.value}</div>
                <div className="mt-1 text-xs font-bold uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative px-6 py-24 md:px-10" style={{ background: '#fff' }}>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-black tracking-tight md:text-7xl">the menu ✿</h2>
          <p className="mt-3 max-w-md font-medium">six tasty things we make. mix and match like a sticker book.</p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.n}
                className="rounded-3xl border-2 p-6 transition-transform hover:-translate-y-1"
                style={{
                  background: stickerColors[i % stickerColors.length],
                  borderColor: INK,
                  boxShadow: `6px 6px 0 ${INK}`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full border-2 text-sm font-black" style={{ background: '#fff', borderColor: INK }}>{s.n}</span>
                  <span className="text-2xl">{['✿', '★', '✦', '❀', '✺', '◆'][i % 6]}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black">{s.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-10" style={{ background: LILAC }}>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-black tracking-tight md:text-7xl">how it goes ✦</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="rounded-3xl border-2 p-6"
                style={{
                  background: '#fff',
                  borderColor: INK,
                  boxShadow: `5px 5px 0 ${INK}`,
                  transform: `rotate(${[-1.5, 1, -0.5, 1.5][i]}deg)`,
                }}
              >
                <div className="text-xs font-black uppercase" style={{ color: '#e8478f' }}>step {s.n}</div>
                <h3 className="mt-2 text-2xl font-black">{s.title}</h3>
                <p className="mt-2 text-sm font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative px-6 py-24 md:px-10" style={{ background: PEACH }}>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-black tracking-tight md:text-7xl">cute prices ✿</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <div
                key={p.name}
                className="rounded-3xl border-2 p-7"
                style={{
                  background: p.featured ? INK : '#fff',
                  color: p.featured ? '#fff' : INK,
                  borderColor: INK,
                  boxShadow: `7px 7px 0 ${[MINT, '#fff', LILAC][i]}`,
                  transform: p.featured ? 'translateY(-12px) rotate(1deg)' : `rotate(${i === 0 ? -1 : 1}deg)`,
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black">{p.name}</h3>
                  {p.featured && <span style={{ background: MINT, color: INK }} className="rounded-full px-3 py-1 text-[10px] font-black uppercase">★ best</span>}
                </div>
                <div className="mt-4 text-5xl font-black">{p.price}<span className="text-base font-bold opacity-70">{p.cadence}</span></div>
                <ul className="mt-6 space-y-2 text-sm font-medium">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span>✿</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 block rounded-full border-2 py-3 text-center text-sm font-black uppercase"
                  style={{
                    background: p.featured ? MINT : INK,
                    color: p.featured ? INK : '#fff',
                    borderColor: p.featured ? MINT : INK,
                  }}>
                  {p.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-10" style={{ background: BLUE }}>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-black tracking-tight md:text-7xl">happy folks ✦</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="rounded-3xl border-2 p-6"
                style={{
                  background: '#fff',
                  borderColor: INK,
                  boxShadow: `6px 6px 0 ${INK}`,
                  transform: `rotate(${[-1.5, 0.5, -0.8][i]}deg)`,
                }}
              >
                <span className="text-3xl">"</span>
                <blockquote className="text-xl font-black leading-snug">{t.quote}</blockquote>
                <p className="mt-3 text-sm font-medium">{t.body}</p>
                <figcaption className="mt-5 flex items-center gap-2 text-xs font-bold">
                  <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: stickerColors[i % stickerColors.length] }}>{t.name[0]}</span>
                  {t.name} · {t.business}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-32 md:px-10" style={{ background: INK, color: '#fff' }}>
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rotate-[-3deg] rounded-full border-2 px-4 py-1.5 text-xs font-bold uppercase" style={{ background: MINT, color: INK, borderColor: MINT }}>
            ✿ let's chat ✿
          </span>
          <h2 className="mt-6 text-6xl font-black leading-[0.95] md:text-9xl">
            be<br />
            <span style={{ color: PINK }}>friends?</span>
          </h2>
          <a href="mailto:hello@annastudio.co" className="mt-10 inline-block rounded-full border-2 px-8 py-4 text-lg font-black"
            style={{ background: PINK, color: INK, borderColor: PINK, boxShadow: `6px 6px 0 ${MINT}` }}>
            hello@annastudio.co ✦
          </a>
        </div>
      </section>

      <footer className="px-6 py-6 text-center text-xs font-bold" style={{ background: INK, color: '#fff' }}>
        © {new Date().getFullYear()} anna.wilson.studio · made with ✿
      </footer>
    </div>
  );
}
