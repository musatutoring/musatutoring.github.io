import { problem, nameNote } from '@/content/program';

const Problem = () => (
  <section id="why" className="scroll-mt-24 bg-muted/45 py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">The Reasoning</p>
        <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
          {problem.heading}
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{problem.lede}</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
        {problem.points.map((point, i) => (
          <div key={point.title} className="border-t-2 border-gold/60 pt-6">
            <div aria-hidden="true" className="mb-3 font-serif text-sm font-semibold text-gold-deep">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="mb-3 text-lg font-semibold leading-snug text-navy">
              {point.title}
            </h3>
            <p className="leading-relaxed text-muted-foreground">{point.body}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl border-l-2 border-gold pl-8">
        <p className="font-serif text-xl leading-relaxed text-navy sm:text-[1.4rem] sm:leading-relaxed">
          {problem.turn}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{nameNote}</p>
      </div>
    </div>
  </section>
);

export default Problem;
