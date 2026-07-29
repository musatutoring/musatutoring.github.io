import { Calendar, CreditCard, FileText, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/content/site';

const Schedule = () => {
  const features = [
    { icon: Calendar, title: 'See open times', description: 'Pick a time that works and confirm it online.' },
    { icon: Bell, title: 'Reminders', description: 'Email and text reminders before every session.' },
    { icon: FileText, title: 'Session reports', description: 'Notes after every session, so you can see the progress.' },
    { icon: CreditCard, title: 'Invoices & payments', description: 'Pay online and see your full history any time.' },
  ];

  return (
    <section id="schedule" className="scroll-mt-20 py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Everything in One Place
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No chasing texts or paper invoices. Scheduling, reminders, session notes and
            payments all live in one account — you get a login when you enroll.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-strong" />
              </div>
              <h3 className="font-bold text-secondary mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Ready to book your free first session?
          </h3>
          <p className="text-muted-foreground mb-8">
            No cost, nothing to sign. Your student takes a short placement
            check and we talk through what you want to change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href={site.bookingUrl}>
                Book Online
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={`tel:${site.phoneLink}`}>Call {site.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
