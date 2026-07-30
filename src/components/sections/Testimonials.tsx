import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/content/testimonials';
import { site } from '@/content/site';
import { bookingHref } from '@/lib/booking';

const Testimonials = () => {
  // The section hides itself entirely until there is at least one real
  // review in src/content/testimonials.ts
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-20 py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            What Families Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In their own words.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary-strong" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-secondary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.relationship} · {testimonial.location}
                </p>
                <p className="text-xs text-primary-strong mt-1">{testimonial.subject}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" asChild>
            <a href={bookingHref(site.schedulerUrl)}>
              Book a Free Session
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
