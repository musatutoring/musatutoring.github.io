import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/musa-tutoring-logo.png';
import { site } from '@/content/site';
import { program } from '@/content/program';
import { bookingHref, daysUntil } from '@/lib/booking';

const navigation = [
  { label: 'Why 12 weeks', href: '#why' },
  { label: 'How it works', href: '#how-it-works' },
  { label: "What's included", href: '#included' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Questions', href: '#faq' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const open = daysUntil(program.enrolmentCloses) > 0 && program.seatsRemaining > 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {open && (
        <div className="bg-secondary px-4 py-2 text-center text-sm text-secondary-foreground">
          <span className="font-medium">
            Fall cohort starts {program.programStartsLabel}
          </span>
          <span className="hidden sm:inline">
            {' '}
            · {program.seatsRemaining} of {program.seatsTotal} places left · Enrolment closes{' '}
            {program.enrolmentClosesLabel}
          </span>
        </div>
      )}

      <header
        className={`sticky top-0 z-50 w-full transition-shadow ${
          scrolled ? 'bg-background/95 shadow-card backdrop-blur' : 'bg-background'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
            <a href="/#hero" className="flex shrink-0 items-center gap-3">
              <img
                src={logo}
                alt=""
                className="h-10 w-10 rounded-lg object-contain lg:h-11 lg:w-11"
                aria-hidden="true"
              />
              <span className="text-lg font-bold text-secondary lg:text-xl">{site.name}</span>
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => goTo(item.href)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary-strong"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button asChild className="font-semibold">
                <a href={bookingHref(site.schedulerUrl)}>Book your call</a>
              </Button>
            </div>

            <button
              type="button"
              className="p-2 text-secondary lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-border py-4 lg:hidden">
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => goTo(item.href)}
                    className="rounded-lg px-2 py-2.5 text-left font-medium text-secondary hover:bg-muted"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <Button asChild className="mt-3 w-full font-semibold">
                <a href={bookingHref(site.schedulerUrl)}>Book your Math Plan Call</a>
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
