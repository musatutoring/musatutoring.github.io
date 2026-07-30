import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import logo from '@/assets/musa-tutoring-logo.png';
import { site } from '@/content/site';
import { program } from '@/content/program';
import { bookingHref, daysUntil } from '@/lib/booking';

const Footer = () => {
  const year = new Date().getFullYear();
  const open = daysUntil(program.enrolmentCloses) > 0 && program.seatsRemaining > 0;

  const links = [
    { label: 'Why 12 weeks', href: '#why' },
    { label: 'How it works', href: '#how-it-works' },
    { label: "What's included", href: '#included' },
    { label: 'Courses', href: '#courses' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Our promise', href: '#promise' },
    { label: 'Questions', href: '#faq' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-2xl font-bold lg:text-3xl">
              {open
                ? `${program.seatsRemaining} places left for ${program.programStartsLabel}`
                : `Waitlist open for ${program.nextCohort}`}
            </h2>
            <p className="mb-7 text-secondary-foreground/85">
              {open
                ? 'Start with a free 30-minute call and a free session for your student. Nothing is paid before then.'
                : 'Leave your details and we will contact you before places open.'}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground px-8 text-base font-semibold text-secondary hover:bg-primary-foreground/90"
            >
              <a href={open ? bookingHref(site.schedulerUrl) : '/#enrol'}>
                {open ? 'Book your Math Plan Call' : 'Join the waitlist'}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={logo}
                alt=""
                className="h-11 w-11 rounded-lg object-contain"
                aria-hidden="true"
              />
              <div>
                <div className="font-bold">{site.name}</div>
                <div className="text-sm text-secondary-foreground/70">{site.tagline}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-secondary-foreground/75">
              {site.shortDescription}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">On this page</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/75 transition-colors hover:text-secondary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Get in touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${site.phoneLink}`}
                  className="flex items-start gap-3 text-secondary-foreground/75 transition-colors hover:text-secondary-foreground"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-secondary-foreground/75 transition-colors hover:text-secondary-foreground"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{site.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-sm text-secondary-foreground/60">
          © {year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
