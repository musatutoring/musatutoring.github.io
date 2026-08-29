import { testimonials } from '@/content/testimonials';

/**
 * PARENT FEEDBACK
 * This section hides itself completely while `testimonials` is empty,
 * so there is never a placeholder or an invented quote on the site.
 * Add real ones in src/content/testimonials.ts when you have them.
 */
const Testimonials = () => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">In Their Words</p>
          <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
            What Parents Say
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-xl border border-border bg-card p-8 shadow-card"
            >
              <div aria-hidden="true" className="mb-4 font-serif text-4xl leading-none text-gold">
                &ldquo;
              </div>
              <blockquote className="leading-relaxed text-navy">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <span className="font-semibold text-navy">{t.name}</span>
                {t.detail && (
                  <span className="block text-muted-foreground">{t.detail}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
