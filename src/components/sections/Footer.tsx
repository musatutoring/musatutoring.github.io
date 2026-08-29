import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import logo from '@/assets/logo-cutout.png';
import { site } from '@/content/site';
import { program } from '@/content/program';
import { bookingHref, daysUntil } from '@/lib/booking';

const Footer = () => {
  const year = new Date().getFullYear();
  const open = daysUntil(program.enrolmentCloses) > 0;

  const links = [
    { label: 'Our Approach', href: '#difference' },
    { label: 'How Enrolment Works', href: '#how-it-works' },
    { label: 'What Is Included', href: '#included' },
    { label: 'Why Twelve Weeks', href: '#why' },
    { label: 'Courses We Teach', href: '#courses' },
    { label: 'One Program, One Fee', href: '#pricing' },
    { label: 'Our Commitment', href: '#promise' },
    { label: 'Questions', href: '#faq' },
  ];

  return (
    <footer className="bg-navy text-ivory">
      <div className="border-b border-ivory/10">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-5 text-2xl font-semibold text-ivory lg:text-[2rem] lg:leading-snug">
              {open
                ? 'Twenty Places. One Cohort. Enrolment Closes August 30.'
                : 'Enrolment Has Closed for This Cohort.'}
            </h2>
            <p className="mb-9 leading-relaxed text-ivory/70">
              {open
                ? 'Begin with a free thirty-minute call and a free session for your student. Nothing is payable before then.'
                : 'Leave your details and we will contact you before places open again.'}
            </p>
            <Button asChild variant="gold" size="lg">
              <a href={bookingHref()}>
                {open ? 'Book Your Math Plan Call' : 'Join the Waiting List'}
                <ArrowRight className="ml-2" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src={logo} alt="" className="h-12 w-12 object-contain" aria-hidden="true" />
              <div>
                <div className="font-serif text-lg font-semibold text-ivory">{site.name}</div>
                <div className="text-sm text-ivory/60">{site.tagline}</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/65">
              {site.shortDescription}
            </p>
          </div>

          <div>
            <h3 className="eyebrow eyebrow-on-dark mb-5">On This Page</h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/65 transition-smooth hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow eyebrow-on-dark mb-5">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${site.phoneLink}`}
                  className="flex items-start gap-3 text-ivory/65 transition-smooth hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-ivory/65 transition-smooth hover:text-gold"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-ivory/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                </address>
              </li>
              <li className="pt-1 text-ivory/50">{site.delivery}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-6 text-center text-sm text-ivory/45">
          © {year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
