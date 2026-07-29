import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { tracks } from '@/content/tracks';
import { site } from '@/content/site';

const stages = [
  {
    title: 'Grade school',
    description:
      'Build the foundations — reading, math fundamentals, and the habit of sitting down and doing the work. This is the cheapest time to fix a gap.',
  },
  {
    title: 'Middle school',
    description:
      'Coursework gets faster and less forgiving. We keep students on pace and start teaching the organisation skills high school assumes they already have.',
  },
  {
    title: 'High school',
    description:
      'Course selection, GPA, test dates and applications all start to compound. Students in this stage usually combine a subject track with test prep and college readiness.',
  },
  {
    title: 'College and beyond',
    description:
      'For students already in college coursework, or heading into competitive programs, support continues into the subjects those programs depend on.',
  },
];

const Pathways = () => {
  useEffect(() => {
    document.title = 'Pathways | Musa Tutoring';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 lg:pt-32">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-strong transition-smooth mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Pathways: from grade school to college
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Getting into a competitive college is not one decision made senior year. It is a
              series of smaller ones made years earlier — which courses to take, which gaps to
              close, when to sit a test. This page lays out how we think about that, and where
              tutoring fits at each stage.
            </p>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
              What matters at each stage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {stages.map((stage, index) => (
                <div
                  key={stage.title}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{stage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-4">The tracks in detail</h2>
              <p className="text-muted-foreground">
                Most students combine two or three of these. Which ones, and in what order, is
                exactly what your plan sorts out after the free session.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {tracks.map((track) => (
                <div
                  key={track.slug}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
                >
                  <h3 className="text-2xl font-bold text-secondary mb-2">{track.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{track.summary}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-3">What it includes</p>
                      <ul className="space-y-2">
                        {track.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary-strong flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-3">Best for</p>
                      <p className="text-sm text-muted-foreground">{track.bestFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Not sure which pathway fits?
            </h2>
            <p className="text-muted-foreground mb-8">
              That is what the free first session is for. Your student takes a short
              placement check, we talk through where they are headed, and we tell you
              honestly what we would work on first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href={site.bookingUrl}>
                  Book a Free First Session
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href={`tel:${site.phoneLink}`}>Call {site.phone}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pathways;
