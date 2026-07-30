import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { pricing, program } from '@/content/program';
import { site } from '@/content/site';
import { bookingHref, daysUntil } from '@/lib/booking';

const Pricing = () => {
  const open = daysUntil(program.enrolmentCloses) > 0;

  return (
    <section id="pricing" className="scroll-mt-24 bg-muted/45 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Investment</p>
          <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
            {pricing.heading}
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-border p-9 md:border-b-0 md:border-r sm:p-11">
              <p className="text-lg leading-relaxed text-navy">{pricing.body}</p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{pricing.note}</p>
            </div>

            <div className="bg-muted/40 p-9 sm:p-11">
              <h3 className="eyebrow mb-6">What the Fee Covers</h3>
              <ul className="space-y-4">
                {pricing.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-gold-deep"
                      aria-hidden="true"
                    />
                    <span className="text-navy">{point}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="gold" size="lg" className="mt-9 w-full">
                <a href={bookingHref(site.schedulerUrl)}>
                  Book Your Math Plan Call
                  <ArrowRight className="ml-2" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {open && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Only {program.seatsTotal} places in this cohort. Enrolment closes{' '}
            <span className="font-semibold text-navy">{program.enrolmentClosesLabel}</span>.
          </p>
        )}
      </div>
    </section>
  );
};

export default Pricing;
