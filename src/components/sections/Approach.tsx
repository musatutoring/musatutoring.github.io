import { ClipboardCheck, Route, Users, MessageSquare } from 'lucide-react';

const Approach = () => {
  const items = [
    {
      icon: ClipboardCheck,
      title: 'Placement first',
      description:
        'Your student takes a short placement check in the free session, so we start from where they actually are — not where their grade level says they should be.',
    },
    {
      icon: Route,
      title: 'A plan, not a package',
      description:
        'What we work on, in what order, and how often we meet — written down and shared with you before anything starts.',
    },
    {
      icon: Users,
      title: 'Matched to a tutor',
      description:
        'Musa matches your student with the tutor whose subjects fit what they are working toward.',
    },
    {
      icon: MessageSquare,
      title: 'Parents stay informed',
      description:
        'Notes after sessions and regular updates, so you always know whether it is working.',
    },
  ];

  return (
    <section id="approach" className="scroll-mt-20 py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            What Makes This Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six years of tutoring Twin Cities students taught us one thing: the plan matters
            more than the hours. Here is what that looks like for your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl gradient-card shadow-card hover:shadow-lg transition-smooth"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary-strong" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
