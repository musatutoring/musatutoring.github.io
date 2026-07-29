import { BookOpen, Calculator, FlaskConical, Globe, Pen, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/content/services';
import { site } from '@/content/site';

const iconMap = {
  calculator: Calculator,
  flask: FlaskConical,
  pen: Pen,
  globe: Globe,
  target: Target,
  book: BookOpen,
  users: Users,
};

const Services = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="scroll-mt-20 py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Subjects We Cover
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elementary basics through advanced high school coursework and college prep. What
            we actually work on comes from your student's plan, not a fixed syllabus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-smooth border border-border/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-strong" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary mb-1">{service.title}</h3>
                    <p className="text-sm text-primary-strong font-medium">{service.grades}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-secondary">Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary-strong px-3 py-1 rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-card rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Don't see your subject?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our tutors cover more than what is listed here. Ask us — and if we are not the
            right fit, we will tell you straight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" onClick={() => scrollToSection('#contact')}>
              Ask About a Subject
            </Button>
            <Button variant="hero" asChild>
              <a href={site.bookingUrl}>
                Book a Free First Session
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
