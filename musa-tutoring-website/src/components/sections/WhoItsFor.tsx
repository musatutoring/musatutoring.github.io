import { Check, X } from 'lucide-react';
import { fit } from '@/content/program';

const WhoItsFor = () => (
  <section id="fit" className="scroll-mt-24 bg-background py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Suitability</p>
        <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
          Is This Right for Your Student?
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          We would far rather tell you now than take your money and disappoint you in
          November.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-gold/40 bg-card p-9 shadow-card">
          <h3 className="mb-6 text-lg font-semibold text-navy">
            The Program Suits You If
          </h3>
          <ul className="space-y-4">
            {fit.forYou.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-gold-deep"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-muted/40 p-9">
          <h3 className="mb-6 text-lg font-semibold text-navy">
            It Is Probably Not for You If
          </h3>
          <ul className="space-y-4">
            {fit.notForYou.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X
                  className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhoItsFor;
