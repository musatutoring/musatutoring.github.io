import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, ClipboardCheck } from 'lucide-react';
import heroBackground from '@/assets/hero-study-background.jpg';
import { site } from '@/content/site';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    { icon: ClipboardCheck, label: 'Free first session' },
    { icon: Users, label: 'A tutor matched to your student' },
    { icon: MapPin, label: 'Twin Cities & online' },
  ];

  return (
    <section id="hero" className="scroll-mt-20 relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Students studying together at a desk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-secondary/85 to-secondary/95"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-primary-foreground py-16 sm:py-20 lg:py-24">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12 text-sm font-medium">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Tutoring Built Around
            <span className="block drop-shadow-sm">Your Student</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Start with a free first session. Your student takes a short placement
            check, we tell you exactly where they stand, and you get a plan and a price
            before you commit to anything.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="bg-background text-primary-strong hover:bg-background/95 shadow-button text-lg px-8 py-4 h-auto"
            >
              <a href={site.bookingUrl}>
                Book a Free First Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#tracks')}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 h-auto bg-transparent"
            >
              Explore Tracks
            </Button>
          </div>

          <p className="text-sm drop-shadow-sm max-w-xl mx-auto">
            No packages and no contracts. We set the rate after we have met your student.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-12 bg-primary-foreground/60 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
