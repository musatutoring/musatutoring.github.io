import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { program, included } from '@/content/program';
import { site } from '@/content/site';
import { bookingHref, daysUntil } from '@/lib/booking';

const Pricing = () => {
  const daysLeft = daysUntil(program.enrolmentCloses);
  const open = daysLeft > 0 && program.seatsRemaining > 0;
  const perHour = Math.round(program.priceUpfront / program.totalHours);
  const monthlyTotal = program.priceMonthly * program.priceMonthlyCount;

  return (
    <section id="pricing" className="scroll-mt-20 bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
            One program, one price
          </h2>
          <p className="text-lg text-muted-foreground">
            No hourly rates, no packages to compare, nothing to cancel later.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary bg-card p-8 shadow-card">
            <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary-strong">
              Pay in full
            </div>
            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-secondary">
                ${program.priceUpfront}
              </span>
              <span className="text-muted-foreground">for {program.weeks} weeks</span>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              About ${perHour} per one-to-one hour, everything included.
            </p>
            <Button asChild size="lg" className="w-full text-base font-semibold">
              <a href={bookingHref(site.schedulerUrl)}>
                Book your Math Plan Call
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Spread the cost
            </div>
            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-secondary">
                ${program.priceMonthly}
              </span>
              <span className="text-muted-foreground">
                × {program.priceMonthlyCount} months
              </span>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              ${monthlyTotal} in total. The first payment is taken when you enrol.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full text-base font-semibold"
            >
              <a href={bookingHref(site.schedulerUrl)}>Book your Math Plan Call</a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-muted/50 p-6">
          <h3 className="mb-4 font-semibold text-secondary">Both options include</h3>
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item.title} className="flex items-start gap-2 text-sm text-secondary">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary-strong"
                  aria-hidden="true"
                />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
            The Delta Program is a {program.weeks}-week commitment. The monthly option is a
            way to spread the cost, not a rolling subscription — so there is nothing to
            cancel and nothing that renews on its own.
          </p>
        </div>

        {open && (
          <p className="mt-8 text-center text-sm font-medium text-secondary">
            {program.seatsRemaining} of {program.seatsTotal} places remaining · Enrolment
            closes {program.enrolmentClosesLabel} · Cohort starts{' '}
            {program.programStartsLabel}
          </p>
        )}

        {!open && (
          <p className="mt-8 text-center text-sm font-medium text-secondary">
            This cohort is now closed. Join the waitlist below for {program.nextCohort}.
          </p>
        )}
      </div>
    </section>
  );
};

export default Pricing;
