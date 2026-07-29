import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { site } from '@/content/site';

/**
 * CONTACT SECTION
 * ---------------
 * The enquiry form below is loaded from TutorCruncher. When a parent
 * submits it, their details arrive in TutorCruncher as a new client —
 * nothing needs to be copied over by hand.
 *
 * The form is controlled by `tutorCruncherSocketKey` in src/content/site.ts.
 * If the form ever stops appearing, check that musatutoring.org is still
 * listed under "Allowed Domains" in TutorCruncher.
 */

const SOCKET_SRC = 'https://cdn.tutorcruncher.com/socket/latest/socket.js';
const SCRIPT_ID = 'tutorcruncher-socket-script';

const Contact = () => {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    const startForm = () => {
      if (cancelled) return;
      const socketFn = (window as any).socket;
      if (typeof socketFn !== 'function') {
        setStatus('error');
        return;
      }
      try {
        socketFn(site.tutorCruncherSocketKey, {
          mode: 'enquiry',
          element: '#socket-enquiry',
        });
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    };

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (existing) {
      if ((window as any).socket) {
        startForm();
      } else {
        existing.addEventListener('load', startForm);
        existing.addEventListener('error', () => setStatus('error'));
      }
      return () => {
        cancelled = true;
      };
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SOCKET_SRC;
    script.async = true;
    script.onload = startForm;
    script.onerror = () => setStatus('error');
    document.body.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone & Text',
      value: site.phone,
      description: 'Call or text — we pick up',
      href: `tel:${site.phoneLink}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: site.email,
      description: 'Best for longer questions',
      href: `mailto:${site.email}`,
    },
    {
      icon: MapPin,
      label: 'Service Area',
      value: site.serviceAreaShort,
      description: site.serviceArea,
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: site.responseTime,
      description: 'We reply to every message',
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Book Your Free First Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tell us about your student and we will get back to you within a day to
            find a time. There is no cost and nothing to sign.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <contact.icon className="w-6 h-6 text-primary-strong" />
                  </div>
                  <h4 className="font-semibold text-secondary mb-1">{contact.label}</h4>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="font-medium text-primary-strong mb-1 block hover:underline break-words"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="font-medium text-primary-strong mb-1">{contact.value}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-2xl p-6">
              <h4 className="font-bold text-secondary mb-3">What happens next</h4>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>We reply and find a time for your free first session</li>
                <li>Your student takes a short placement check during that session</li>
                <li>You get a plan and the rate in writing</li>
                <li>If it looks right, we set a regular weekly time</li>
              </ol>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border/50">
            <h3 className="text-xl font-bold text-secondary mb-2">Send a message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill this in and we will be in touch within a day.
            </p>

            {/* TutorCruncher renders the enquiry form inside this div. */}
            <div id="socket-enquiry" className="tc-socket-form" />

            {status === 'loading' && (
              <p className="text-sm text-muted-foreground">Loading the form…</p>
            )}

            {status === 'error' && (
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <p className="text-sm text-secondary font-medium mb-2">
                  The form did not load.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Please reach us directly and we will get straight back to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${site.phoneLink}`}
                    className="inline-flex items-center justify-center rounded-xl bg-primary-strong px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-smooth"
                  >
                    Call {site.phone}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-secondary hover:bg-muted transition-smooth"
                  >
                    Email us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
