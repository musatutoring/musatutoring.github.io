import { promises } from '@/content/program';

const Guarantee = () => (
  <section id="promise" className="scroll-mt-24 relative overflow-hidden bg-navy py-20 lg:py-28">
    <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
    <div className="absolute inset-x-0 top-0 h-px bg-gold/40" aria-hidden="true" />

    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow eyebrow-on-dark mb-4">Our Commitment</p>
        <h2 className="mb-6 text-3xl font-semibold text-ivory lg:text-[2.6rem]">
          Where the Risk Sits
        </h2>
        <div aria-hidden="true" className="mx-auto mb-8 h-px w-14 bg-gold" />
        <p className="text-lg leading-relaxed text-ivory/75">
          We are asking you to commit to a full term before you have seen the results.
          These two commitments are how we make that a reasonable thing to ask.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
        {promises.map((promise) => (
          <div
            key={promise.title}
            className="rounded-xl border border-gold/25 bg-ivory/[0.04] p-9"
          >
            <p className="eyebrow eyebrow-on-dark mb-4">{promise.label}</p>
            <h3 className="mb-4 text-xl font-semibold leading-snug text-ivory">
              {promise.title}
            </h3>
            <p className="leading-relaxed text-ivory/75">{promise.body}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ivory/55">
        The end-of-term commitment depends on your student attending their sessions and
        completing the work they are set. If that stops happening, we will tell you early
        and clearly.
      </p>
    </div>
  </section>
);

export default Guarantee;
