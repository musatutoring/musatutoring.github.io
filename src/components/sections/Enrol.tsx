import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Mail, Phone } from 'lucide-react';
import { site } from '@/content/site';
import { program } from '@/content/program';
import { daysUntil } from '@/lib/booking';

/**
 * ENROL SECTION
 * -------------
 * Two ways in:
 *   1. Book the Math Plan Call on Google Calendar (the main path)
 *   2. Send a message, which lands in TutorCruncher as a new client
 *
 * Once enrolment closes or places run out, the same form becomes the
 * waitlist for the next cohort. Nothing needs to be swapped over by hand.
 */

const SOCKET_SRC = 'https://cdn.tutorcruncher.com/socket/latest/socket.js';
const SCRIPT_ID = 'tutorcruncher-socket-script';

const Enrol = () => {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  const open = daysUntil(program.enrolmentCloses) > 0;

  const scheduler = site.schedulerUrl?.trim() ?? '';
  const canEmbed = scheduler.includes('calendar.google.com');

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
      if ((window as any).socket) startForm();
      else {
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

  return (
    <section id="enrol" className="scroll-mt-24 bg-muted/45 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Next Step</p>
          <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
            {open ? 'Book Your Math Plan Call' : `Join the Waiting List for ${program.nextCohort}`}
          </h2>
          <p className="text-lg text-muted-foreground">
            {open
              ? 'Thirty minutes with Musa. We work out what is genuinely going wrong and tell you honestly whether we can help. Nothing is payable on this call.'
              : 'This cohort has closed. Leave your details and we will contact you before places open again. Families on the waiting list are offered places first.'}
          </p>
          {open && (
            <p className="mt-6 text-sm text-muted-foreground">
              Only {program.seatsTotal} places in this cohort. Enrolment closes{' '}
              <span className="font-semibold text-navy">{program.enrolmentClosesLabel}</span>.
            </p>
          )}
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* ---------- Booking ---------- */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-card sm:p-9">
            <div className="mb-5 flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15"
              >
                <CalendarDays className="h-5 w-5 text-gold-deep" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">
                  {open ? 'Pick a Time' : 'Questions First?'}
                </h3>
                <p className="text-sm text-muted-foreground">Thirty minutes, at no cost</p>
              </div>
            </div>

            {scheduler && canEmbed && (
              <iframe
                src={`${scheduler}${scheduler.includes('?') ? '&' : '?'}gv=true`}
                title="Book your Math Plan Call"
                className="h-[620px] w-full rounded-xl border border-border"
                loading="lazy"
              />
            )}

            {scheduler && !canEmbed && (
              <Button asChild variant="gold" size="lg" className="w-full">
                <a href={scheduler} target="_blank" rel="noopener noreferrer">
                  Choose a Time
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            )}

            {!scheduler && (
              <div className="rounded-lg border border-border bg-muted/50 p-6">
                <p className="mb-4 text-sm text-muted-foreground">
                  Call or text us and we will find a time that works.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="gold" className="flex-1">
                    <a href={`tel:${site.phoneLink}`}>Call {site.phone}</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={`mailto:${site.email}`}>Email Us</a>
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-6 space-y-3 border-t border-border pt-6">
              <a
                href={`tel:${site.phoneLink}`}
                className="flex items-center gap-3 text-sm text-navy transition-smooth hover:text-gold-deep"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{site.phone} · Call or text</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-navy transition-smooth hover:text-gold-deep"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="break-all">{site.email}</span>
              </a>
              <p className="text-sm text-muted-foreground">
                We reply to every message, usually within twenty-four hours.
              </p>
            </div>
          </div>

          {/* ---------- Enquiry / waitlist form ---------- */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-card sm:p-9">
            <h3 className="mb-2 text-xl font-semibold text-navy">
              {open ? 'Or Get in Touch' : 'Join the Waiting List'}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {open
                ? 'Not ready to choose a time? Fill out the form below and we will get back to you ASAP.'
                : 'Tell us about your student and we will be in touch before the next cohort opens.'}
            </p>

            <div id="socket-enquiry" className="tc-socket-form" />

            {status === 'loading' && (
              <p className="text-sm text-muted-foreground">Loading the form…</p>
            )}

            {status === 'error' && (
              <div className="rounded-lg border border-border bg-muted/40 p-6">
                <p className="mb-2 text-sm font-medium text-secondary">
                  The form did not load.
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  Please reach us directly and we will come straight back to you.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="gold" className="flex-1">
                    <a href={`tel:${site.phoneLink}`}>Call {site.phone}</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={`mailto:${site.email}`}>Email Us</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrol;
