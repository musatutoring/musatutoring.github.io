import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/content/site';
import { tracks } from '@/content/tracks';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navigationLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Subjects', href: '#services' },
    { label: 'Plans & Enrollment', href: '#plans' },
    { label: 'Meet the Tutors', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{site.name}</h3>
            <p className="opacity-80 mb-6 text-sm leading-relaxed">{site.shortDescription}</p>

            <div className="space-y-3">
              <a href={`tel:${site.phoneLink}`} className="flex items-center gap-3 text-sm hover:text-primary transition-smooth">
                <Phone className="w-4 h-4 text-primary" />
                <span>{site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm hover:text-primary transition-smooth">
                <Mail className="w-4 h-4 text-primary" />
                <span>{site.email}</span>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{site.serviceArea}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navigationLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm opacity-80 hover:text-primary hover:opacity-100 transition-smooth"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/pathways"
                className="block text-sm opacity-80 hover:text-primary hover:opacity-100 transition-smooth"
              >
                Pathways
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tracks</h4>
            <div className="space-y-2">
              {tracks.map((track) => (
                <p key={track.slug} className="text-sm opacity-80">
                  {track.title}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <p className="text-sm opacity-80 mb-4">
              Your first session is free — a short placement check and a
              straight answer about what your student needs.
            </p>
            <div className="space-y-3">
              <Button variant="hero" size="sm" className="w-full" asChild>
                <a href={site.bookingUrl}>
                  Book a Free First Session
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection('#contact')}
                className="w-full border-secondary-foreground/30 bg-transparent hover:bg-secondary-foreground hover:text-secondary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm opacity-60">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-primary hover:opacity-80 transition-smooth"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
