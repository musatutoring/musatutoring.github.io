import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { enrolmentSteps, weeklyRhythm } from '@/content/process';
import { site } from '@/content/site';
import { bookingHref } from '@/lib/booking';

const HowItWorks = () => (
  <section id="how-it-works" className="scroll-mt-20 bg-muted/40 py-16 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
          How you get started
        </h2>
        <p className="text-lg text-muted-foreground">
          Four steps. Nothing is paid until you have met us and your student has had a
          session.
        </p>
      </div>

      <ol className="mx-auto mt-14 max-w-4xl space-y-5">
        {enrolmentSteps.map((step) => (
          <li
            key={step.number}
            className="flex flex-col gap-5 rounded-2xl border border-border/50 bg-card p-6 shadow-card sm:flex-row sm:p-8"
          >
            <div
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary-strong"
            >
              {step.number}
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-secondary">{step.title}</h3>
                <span className="text-sm font-medium text-primary-strong">{step.timing}</span>
              </div>
              <p className="leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-16 max-w-4xl">
        <h3 className="mb-6 text-center text-xl font-bold text-secondary">
          Then, every week for twelve weeks
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {weeklyRhythm.map((item) => (
            <div key={item.title} className="rounded-2xl bg-card p-5 shadow-card">
              <h4 className="mb-2 font-semibold text-secondary">{item.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg" className="px-8 text-base font-semibold">
          <a href={bookingHref(site.schedulerUrl)}>
            Book your Math Plan Call
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HowItWorks;
