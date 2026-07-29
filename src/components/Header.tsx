import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import musaLogo from '@/assets/musa-tutoring-logo.png';
import { site } from '@/content/site';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Subjects', href: '#services' },
    { label: 'Plans', href: '#plans' },
    { label: 'Tutors', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const solid = isScrolled || location.pathname !== '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        solid
          ? 'bg-background/95 backdrop-blur-sm shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className={`flex items-center gap-3 text-2xl font-bold transition-smooth hover:text-primary ${
                solid ? 'text-secondary' : 'text-primary-foreground'
              }`}
            >
              <img src={musaLogo} alt="Musa Tutoring logo" className="w-10 h-10 object-contain" />
              <span className="hidden sm:block">{site.name}</span>
              <span className="sm:hidden">Musa</span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`hover:text-primary transition-smooth font-medium ${
                  solid ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="hero" asChild>
              <a href={site.bookingUrl}>
                Book Free Session
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-smooth ${
              solid ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-smooth font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <Button variant="hero" className="w-full" asChild>
                  <a href={site.bookingUrl}>
                    Book Free Session
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
