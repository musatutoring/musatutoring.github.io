import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import HowItWorks from '@/components/sections/HowItWorks';
import Included from '@/components/sections/Included';
import Curriculum from '@/components/sections/Curriculum';
import Pricing from '@/components/sections/Pricing';
import Guarantee from '@/components/sections/Guarantee';
import WhoItsFor from '@/components/sections/WhoItsFor';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Enrol from '@/components/sections/Enrol';
import Footer from '@/components/sections/Footer';

/**
 * THE HOME PAGE
 * The order below is the order a parent reads the page in.
 * Move a line to move a section. Delete a line to hide one.
 */
const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Included />
      <Curriculum />
      <Pricing />
      <Guarantee />
      <WhoItsFor />
      <Team />
      <Testimonials />
      <FAQ />
      <Enrol />
    </main>
    <Footer />
  </div>
);

export default Index;
