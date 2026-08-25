import { differentiators, credibility } from '@/content/program';

const Differentiators = () => (
  <section id="difference" className="scroll-mt-24 bg-background py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* credibility strip */}
      <div className="mx-auto mb-20 grid max-w-4xl grid-cols-2 gap-y-10 border-y border-border py-10 lg:grid-cols-4">
        {credibility.map((stat) => (
          <div key={stat.label} className="px-4 text-center">
            <div className="font-serif text-4xl font-semibold text-navy lg:text-[2.75rem]">
              {stat.figure}
              <span className="text-gold">{stat.suffix}</span>
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.11em] text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Our Approach</p>
        <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem] lg:leading-tight">
          {differentiators.heading}
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          {differentiators.lede}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.items.map((item, i) => (
          <div key={item.title} className="bg-card p-8">
            <div
              aria-hidden="true"
              className="mb-5 font-serif text-sm font-semibold text-gold"
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="mb-3 text-lg font-semibold leading-snug text-navy">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentiators;
