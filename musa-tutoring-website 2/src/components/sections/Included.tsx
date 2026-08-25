import { Check } from 'lucide-react';
import { included, program } from '@/content/program';

const Included = () => (
  <section id="included" className="scroll-mt-24 bg-background py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">What Is Included</p>
        <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
          What Your Student Receives
        </h2>
        <p className="mt-8 text-lg text-muted-foreground">
          {program.weeks} weeks · {program.totalHours} one-to-one hours ·{' '}
          {program.sessionsPerWeek} sessions each week, {program.sessionLengthLabel} each
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-x-12 gap-y-10 md:grid-cols-2">
        {included.map((item) => (
          <div key={item.title} className="flex gap-5">
            <div
              aria-hidden="true"
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15"
            >
              <Check className="h-[1.1rem] w-[1.1rem] text-gold-deep" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-navy">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Included;
