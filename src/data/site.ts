export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'UGC', href: '#ugc' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const services = [
  {
    n: '01',
    title: 'UGC Content',
    desc: 'Authentic creator-led video tailored to your brand, ready for paid social.',
  },
  {
    n: '02',
    title: 'Short-Form Edits',
    desc: 'Hook-first vertical edits engineered for TikTok, Reels, and Shorts.',
  },
  {
    n: '03',
    title: 'Brand Storytelling',
    desc: 'Cinematic founder + product films that turn browsers into believers.',
  },
  {
    n: '04',
    title: 'Paid Ad Creative',
    desc: 'Performance-first ad batches with A/B variants built for the algorithm.',
  },
  {
    n: '05',
    title: 'Content Strategy',
    desc: 'Quarterly plans, hook frameworks, and posting cadence built around data.',
  },
  {
    n: '06',
    title: 'Production On-Site',
    desc: 'Full-service shoots — direction, lighting, sound, post — in one package.',
  },
];

export const stats = [
  { value: '340%', label: 'avg. engagement lift' },
  { value: '500+', label: 'businesses served' },
  { value: '12M+', label: 'organic views generated' },
  { value: '4.9/5', label: 'client satisfaction' },
];

export const steps = [
  { n: '01', title: 'Discovery', desc: 'A 30-min call to understand your audience, offer, and goals.' },
  { n: '02', title: 'Strategy', desc: 'We build a content plan and shotlist tuned to your channels.' },
  { n: '03', title: 'Production', desc: 'Shoot day(s) on-site or remote with our creator network.' },
  { n: '04', title: 'Launch', desc: 'Edits delivered weekly with reporting on what is working.' },
];

export const plans = [
  {
    name: 'Starter',
    price: '$1.4k',
    cadence: '/ month',
    features: ['8 short-form edits', '1 creator UGC asset', '1 round of revisions', 'Monthly report'],
    cta: 'Start small',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$3.2k',
    cadence: '/ month',
    features: ['20 short-form edits', '4 creator UGC assets', 'Hook + caption strategy', 'Weekly reporting', 'Priority delivery'],
    cta: 'Most popular',
    featured: true,
  },
  {
    name: 'Scale',
    price: '$6.8k',
    cadence: '/ month',
    features: ['50+ edits, full ad batches', '10 creator UGC assets', 'On-site production day', 'Dedicated strategist', 'Weekly reporting + ad ops'],
    cta: 'Talk to sales',
    featured: false,
  },
];

export const ugc = [
  { handle: '@laurenbakes', caption: 'Cottage bakery — small batch sourdough launch' },
  { handle: '@northrowcoffee', caption: 'Indie roaster — espresso lineup teaser' },
  { handle: '@studio.fern', caption: 'Skincare brand — gentle cleanser routine' },
  { handle: '@willstack', caption: 'DTC apparel — denim drop preview' },
];

export const testimonials = [
  {
    quote: 'Bookings up 60% in two months.',
    body: 'They cracked the hook formula for our category. We went from invisible to fully booked weekends.',
    name: 'Mira Sandoval',
    business: 'Owner, Folio Pilates',
  },
  {
    quote: 'Felt like an in-house team.',
    body: 'Briefs are tight, delivery is consistent, and the creative actually performs. We renewed before month two ended.',
    name: 'Devon Kane',
    business: 'CMO, Northrow Coffee',
  },
  {
    quote: 'CAC dropped 41% in Q1.',
    body: 'Their UGC batches outperformed every static we had running. The reporting calls keep us focused on what is working.',
    name: 'Priya Anand',
    business: 'Founder, Studio Fern',
  },
];

export const tickerWords = [
  'UGC Content',
  'Short-Form Edits',
  'Brand Films',
  'Paid Ad Creative',
  'Content Strategy',
  'On-Site Production',
  'Hook Engineering',
  'Creator Network',
];

export const heroThumbs = Array.from({ length: 24 }, (_, i) => {
  const hues = [28, 36, 44, 16, 24, 32];
  const h = hues[i % hues.length];
  const l = 14 + ((i * 7) % 18);
  return `hsl(${h} 18% ${l}%)`;
});
