import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { enrolmentSteps, weeklyRhythm } from '@/content/process';
import { bookingHref } from '@/lib/booking';

const HowItWorks = () => (
  <section id="how-it-works" className="scroll-mt-24 bg-muted/45 py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Getting Started</p>
        <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
          How Enrolment Works
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Four steps. Nothing is payable until you have spoken with us and your student
          has had a full session.
        </p>
      </div>

      <ol className="mx-auto mt-16 max-w-4xl">
        {enrolmentSteps.map((step, i) => (
          <li key={step.number} className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
            {i < enrolmentSteps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[1.4rem] top-14 h-[calc(100%-3rem)] w-px bg-border sm:left-[1.65rem]"
              />
            )}
            <div
              aria-hidden="true"
              className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-background font-serif text-sm font-semibold text-gold-deep sm:h-[3.3rem] sm:w-[3.3rem] sm:text-base"
            >
              {step.number}
            </div>
            <div className="pt-1.5">
              <div className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                <span className="text-xs font-medium uppercase tracking-[0.11em] text-gold-deep">
                  {step.timing}
                </span>
              </div>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-16 max-w-5xl rounded-xl border border-border bg-card p-8 shadow-card sm:p-10">
        <h3 className="mb-8 text-center text-xl font-semibold text-navy">
          Then, Every Week for Twelve Weeks
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {weeklyRhythm.map((item) => (
            <div key={item.title} className="border-t-2 border-gold/60 pt-4">
              <h4 className="mb-2 font-semibold text-navy">{item.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="gold" size="lg">
          <a href={bookingHref()}>
            Book Your Math Plan Call
            <ArrowRight className="ml-2" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HowItWorks;
