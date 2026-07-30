import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Target, Users } from 'lucide-react';
import heroBackground from '@/assets/hero-study-background.jpg';
import { program } from '@/content/program';
import { site } from '@/content/site';
import { bookingHref, daysUntil } from '@/lib/booking';

const Hero = () => {
  const daysLeft = daysUntil(program.enrolmentCloses);
  const open = daysLeft > 0 && program.seatsRemaining > 0;

  const highlights = [
    { icon: Target, label: 'One goal, agreed in writing' },
    { icon: Users, label: `${program.totalHours} one-to-one hours` },
    { icon: CalendarDays, label: `Starts ${program.programStartsLabel}` },
  ];

  return (
    <section
      id="hero"
      className="scroll-mt-20 relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="A student working through math problems at a desk"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-secondary/85 to-secondary/95" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center text-primary-foreground lg:py-24">
          {open && (
            <div className="mb-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-primary-foreground/30 bg-primary-foreground/15 px-5 py-2 text-sm font-medium backdrop-blur-sm">
              <span>{program.eyebrow}</span>
              <span aria-hidden="true" className="opacity-50">
                •
              </span>
              <span>
                {program.seatsRemaining} of {program.seatsTotal} places left
              </span>
            </div>
          )}

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {program.name}
          </h1>

          <p className="mx-auto mb-4 max-w-3xl text-xl leading-relaxed text-primary-foreground/95 sm:text-2xl">
            {program.subtitle}
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base text-primary-foreground/80">
            Most students do not need more hours. They need someone to find the gap
            underneath the problem and close it. That is what twelve weeks is for.
          </p>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-3 text-sm font-medium sm:gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 backdrop-blur-sm"
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-primary-foreground px-8 text-base font-semibold text-secondary hover:bg-primary-foreground/90 sm:w-auto"
            >
              <a href={bookingHref(site.schedulerUrl)}>
                Book your Math Plan Call
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/60 bg-transparent px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            >
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/80">
            Free 30-minute call · Free session for your student · No card needed to book
          </p>

          {open && daysLeft <= 21 && (
            <p className="mt-3 text-sm font-medium text-primary-foreground">
              Enrolment closes {program.enrolmentClosesLabel} —{' '}
              {daysLeft === 1 ? '1 day' : `${daysLeft} days`} left
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
