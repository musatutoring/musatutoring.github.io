import { ShieldCheck } from 'lucide-react';
import { promises } from '@/content/program';

const Guarantee = () => (
  <section id="promise" className="scroll-mt-20 bg-secondary py-16 text-secondary-foreground lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div
          aria-hidden="true"
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15"
        >
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Where the risk sits</h2>
        <p className="text-lg text-secondary-foreground/85">
          You are being asked to commit to a term before you have seen results. These two
          promises are how we make that reasonable.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {promises.map((promise) => (
          <div
            key={promise.title}
            className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8"
          >
            <div className="mb-3 inline-block rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {promise.label}
            </div>
            <h3 className="mb-3 text-xl font-bold">{promise.title}</h3>
            <p className="leading-relaxed text-secondary-foreground/85">{promise.body}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-secondary-foreground/70">
        The end-of-term promise depends on your student attending their sessions and
        completing the work they are set. We will tell you early and clearly if that stops
        happening.
      </p>
    </div>
  </section>
);

export default Guarantee;
