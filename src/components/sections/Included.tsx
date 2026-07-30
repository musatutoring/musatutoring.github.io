import { Check } from 'lucide-react';
import { included, program } from '@/content/program';

const Included = () => (
  <section id="included" className="scroll-mt-20 bg-background py-16 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
          What your student actually gets
        </h2>
        <p className="text-lg text-muted-foreground">
          {program.weeks} weeks · {program.totalHours} one-to-one hours ·{' '}
          {program.sessionsPerWeek} sessions a week, {program.sessionLengthLabel} each
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
        {included.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-2xl border border-border/50 bg-card p-6 shadow-card"
          >
            <div
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10"
            >
              <Check className="h-5 w-5 text-primary-strong" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-secondary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Included;
