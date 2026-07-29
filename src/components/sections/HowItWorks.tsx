import { Calendar, MessageSquare, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { steps } from '@/content/process';
import { site } from '@/content/site';

const iconMap = {
  message: MessageSquare,
  target: Target,
  calendar: Calendar,
  trending: TrendingUp,
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four steps from your first message to weekly sessions. The first one costs nothing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <Icon className="w-6 h-6 text-primary-strong" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-xs font-medium text-primary-strong">{step.timing}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href={site.bookingUrl}>
              Book a Free First Session
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
