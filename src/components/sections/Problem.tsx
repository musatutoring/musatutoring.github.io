import { problem, nameNote } from '@/content/program';

const Problem = () => (
  <section id="why" className="scroll-mt-20 bg-background py-16 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
          {problem.heading}
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">{problem.lede}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        {problem.points.map((point) => (
          <div
            key={point.title}
            className="rounded-2xl border border-border/50 bg-card p-6 shadow-card"
          >
            <h3 className="mb-3 text-lg font-semibold text-secondary">{point.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{point.body}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-primary/5 p-8 text-center">
        <p className="text-lg font-medium leading-relaxed text-secondary">{problem.turn}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{nameNote}</p>
      </div>
    </div>
  </section>
);

export default Problem;
