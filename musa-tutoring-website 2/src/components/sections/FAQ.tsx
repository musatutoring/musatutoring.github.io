import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { faqs } from '@/content/faq';
import { site } from '@/content/site';
import { bookingHref } from '@/lib/booking';

const FAQ = () => (
  <section id="faq" className="scroll-mt-24 bg-background py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Questions</p>
        <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto mt-14 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 text-left text-lg font-semibold text-navy hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 rounded-xl border border-border bg-muted/40 p-9 text-center">
          <h3 className="mb-3 text-xl font-semibold text-navy">
            Still Have a Question?
          </h3>
          <p className="mx-auto mb-7 max-w-lg leading-relaxed text-muted-foreground">
            The Math Plan Call is the fastest way to get a straight answer about your own
            student. It is free, it takes thirty minutes, and there is no obligation.
          </p>
          <Button asChild variant="gold" size="lg">
            <a href={bookingHref()}>Book Your Math Plan Call</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
