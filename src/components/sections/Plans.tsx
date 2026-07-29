import { User, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { plans, pricingNote } from '@/content/plans';
import { site } from '@/content/site';

const iconMap = { user: User, users: Users };

const Plans = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plans" className="scroll-mt-20 py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Plans & Enrollment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two ways to work with us. We will tell you which one fits after the free session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const Icon = iconMap[plan.icon];
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 flex flex-col"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-strong" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-1">{plan.name}</h3>
                <p className="text-sm text-primary-strong font-medium mb-4">{plan.duration}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-strong flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="w-full mt-auto" asChild>
                  <a href={site.bookingUrl}>
                    Book a Free First Session
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-secondary mb-3">What will this cost?</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{pricingNote}</p>
          <Button variant="secondary" onClick={() => scrollToSection('#contact')}>
            Ask About Rates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
