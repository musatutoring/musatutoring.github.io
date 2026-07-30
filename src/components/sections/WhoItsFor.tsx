import { Check, X } from 'lucide-react';
import { fit } from '@/content/program';

const WhoItsFor = () => (
  <section id="fit" className="scroll-mt-20 bg-background py-16 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
          Is this right for your student?
        </h2>
        <p className="text-lg text-muted-foreground">
          We would rather tell you now than take your money and disappoint you in November.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-card">
          <h3 className="mb-5 font-semibold text-secondary">This is a good fit if</h3>
          <ul className="space-y-3">
            {fit.forYou.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-strong"
                  aria-hidden="true"
                />
                <span className="text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border/50 bg-muted/40 p-8">
          <h3 className="mb-5 font-semibold text-secondary">Probably not a fit if</h3>
          <ul className="space-y-3">
            {fit.notForYou.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X
                  className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhoItsFor;
