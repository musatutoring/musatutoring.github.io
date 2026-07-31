import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-badge-navy.png';
import { site } from '@/content/site';
import { program } from '@/content/program';
import { bookingHref, daysUntil } from '@/lib/booking';

const navigation = [
  { label: 'Our Approach', href: '#difference' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: "What's Included", href: '#included' },
  { label: 'Why 12 Weeks', href: '#why' },
  { label: 'Questions', href: '#faq' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const open = daysUntil(program.enrolmentCloses) > 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close the mobile menu on ANY navigation, including the booking button. */
  const closeMenu = () => setMenuOpen(false);

  const goTo = (href: string) => {
    closeMenu();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {open && (
        <div className="bg-navy px-4 py-2.5 text-center text-sm text-ivory/85">
          <span className="font-medium text-gold">
            Only {program.seatsTotal} Places Left in This Cohort
          </span>
          <span className="hidden sm:inline">
            {' '}
            · Enrolment closes {program.enrolmentClosesLabel}
          </span>
        </div>
      )}

      <header
        className={`sticky top-0 z-50 w-full border-b transition-smooth ${
          scrolled
            ? 'border-border bg-background/95 shadow-card backdrop-blur'
            : 'border-transparent bg-background'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
            <a href="/#hero" onClick={closeMenu} className="flex shrink-0 items-center gap-3">
              <img src={logo} alt="" className="h-11 w-11 object-contain" aria-hidden="true" />
              <span className="font-serif text-lg font-semibold text-navy lg:text-xl">
                {site.name}
              </span>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => goTo(item.href)}
                  className="text-sm font-medium text-muted-foreground transition-smooth hover:text-gold-deep"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button asChild variant="gold">
                <a href={bookingHref(site.schedulerUrl)}>Book Your Call</a>
              </Button>
            </div>

            <button
              type="button"
              className="-mr-2 p-2 text-navy lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-border py-4 lg:hidden">
              <nav className="flex flex-col">
                {navigation.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => goTo(item.href)}
                    className="rounded-lg px-2 py-3 text-left font-medium text-navy transition-smooth hover:bg-muted"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <Button asChild variant="gold" className="mt-4 w-full">
                {/* onClick here is what closes the menu after tapping through */}
                <a href={bookingHref(site.schedulerUrl)} onClick={closeMenu}>
                  Book Your Math Plan Call
                </a>
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
