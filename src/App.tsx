import { Cursor } from '@/components/Cursor';
import { Nav } from '@/components/Nav';
import { Hero } from '@/sections/Hero';
import { Ticker } from '@/sections/Ticker';
import { Services } from '@/sections/Services';
import { Stats } from '@/sections/Stats';
import { HowItWorks } from '@/sections/HowItWorks';
import { Pricing } from '@/sections/Pricing';
import { UGC } from '@/sections/UGC';
import { Testimonials } from '@/sections/Testimonials';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { useReveal } from '@/hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Stats />
        <HowItWorks />
        <Pricing />
        <UGC />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
