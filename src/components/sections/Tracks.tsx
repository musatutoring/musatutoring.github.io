import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { tracks } from '@/content/tracks';

const Tracks = () => {
  return (
    <section id="tracks" className="scroll-mt-20 py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Find Your Student's Track
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every student is heading somewhere different. Pick the one that sounds like
            your student — most families end up combining two.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tracks.map((track) => (
            <div
              key={track.slug}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-smooth border border-border/50 flex flex-col"
            >
              <h3 className="text-xl font-bold text-secondary mb-2">{track.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{track.summary}</p>
              <ul className="space-y-2 mb-4">
                {track.includes.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary-strong">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-primary-strong font-medium mt-auto">Best for: {track.bestFor}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" asChild>
            <Link to="/pathways">
              See how the tracks fit together
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
