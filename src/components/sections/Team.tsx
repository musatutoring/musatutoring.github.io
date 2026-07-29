import { Button } from '@/components/ui/button';
import { tutors, teamNote } from '@/content/tutors';
import { site } from '@/content/site';

const Team = () => {
  return (
    <section id="about" className="scroll-mt-20 py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Meet the Tutors
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a small team on purpose. Musa meets every family himself, writes the plan,
            then matches your student with the tutor who fits it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {tutor.photo ? (
                  <img
                    src={tutor.photo}
                    alt={`${tutor.name}, ${tutor.role} at ${site.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-primary-strong">{tutor.initials}</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-secondary">{tutor.name}</h3>
              <p className="text-sm font-medium text-primary-strong mb-4">{tutor.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {tutor.summary}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {tutor.focus.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-primary/10 text-primary-strong px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-6">{teamNote}</p>
          <Button variant="hero" asChild>
            <a href={site.bookingUrl}>
              Book a Free First Session
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
