import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-study-background.jpg';
import { program } from '@/content/program';
import { site } from '@/content/site';
import { bookingHref, daysUntil } from '@/lib/booking';

const Hero = () => {
  const daysLeft = daysUntil(program.enrolmentCloses);
  const open = daysLeft > 0;

  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-800" />
        <div className="bg-grid absolute inset-0 opacity-60" />
      </div>

      {/* gold hairline along the top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gold/50" />

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {open && (
            <p className="eyebrow eyebrow-on-dark mb-7">{program.eyebrow}</p>
          )}

          <h1 className="mb-7 text-[2.6rem] font-semibold leading-[1.08] text-ivory sm:text-6xl lg:text-7xl">
            {program.name}
          </h1>

          <div aria-hidden="true" className="mx-auto mb-7 h-px w-16 bg-gold" />

          <p className="mx-auto mb-6 max-w-2xl font-serif text-xl leading-relaxed text-ivory/90 sm:text-[1.65rem] sm:leading-relaxed">
            {program.subtitle}
          </p>

          <p className="mx-auto mb-11 max-w-xl text-base leading-relaxed text-ivory/65">
            Most students do not need more hours. They need someone to find the gap
            beneath the problem and close it properly.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
              <a href={bookingHref(site.schedulerUrl)}>
                Book Your Math Plan Call
                <ArrowRight className="ml-2" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="onDark" size="lg" className="w-full sm:w-auto">
              <a href="#difference">See How It Works</a>
            </Button>
          </div>

          <p className="mt-7 text-sm text-ivory/60">
            A free thirty-minute call, and a free session for your student.
            Nothing is payable before then.
          </p>

          {open && (
            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-gold/30 bg-ivory/[0.04] px-5 py-2.5 text-sm text-ivory/85">
              <span className="font-medium text-gold">
                Only {program.seatsTotal} Places in This Cohort
              </span>
              <span aria-hidden="true" className="text-ivory/25">
                |
              </span>
              <span>Enrolment closes {program.enrolmentClosesLabel}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
