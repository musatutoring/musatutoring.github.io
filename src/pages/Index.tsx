import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Approach from '@/components/sections/Approach';
import HowItWorks from '@/components/sections/HowItWorks';
import Tracks from '@/components/sections/Tracks';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';
import Plans from '@/components/sections/Plans';
import Schedule from '@/components/sections/Schedule';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Approach />
        <HowItWorks />
        <Tracks />
        <Services />
        <Team />
        <Plans />
        <Schedule />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
