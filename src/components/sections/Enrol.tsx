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

  const daysLeft = daysUntil(program.enrolmentCloses);
  const open = daysLeft > 0 && program.seatsRemaining > 0;

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
    <section id="enrol" className="scroll-mt-24 bg-muted/40 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
            {open ? 'Book your Math Plan Call' : `Join the waitlist for ${program.nextCohort}`}
          </h2>
          <p className="text-lg text-muted-foreground">
            {open
              ? 'Thirty minutes with Musa. We find what is actually going wrong and tell you whether we can help. Nothing is paid on this call.'
              : 'This cohort is full. Leave your details and we will contact you before places open for the next one — waitlist families get first refusal.'}
          </p>
          {open && (
            <p className="mt-4 text-sm font-medium text-secondary">
              {program.seatsRemaining} of {program.seatsTotal} places left · Closes{' '}
              {program.enrolmentClosesLabel}
            </p>
          )}
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* ---------- Booking ---------- */}
          <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-card sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
              >
                <CalendarDays className="h-5 w-5 text-primary-strong" />
              </div>
              <div>
                <h3 className="font-bold text-secondary">
                  {open ? 'Pick a time' : 'Questions first?'}
                </h3>
                <p className="text-sm text-muted-foreground">30 minutes, free</p>
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
              <Button asChild size="lg" className="w-full text-base font-semibold">
                <a href={scheduler} target="_blank" rel="noopener noreferrer">
                  Choose a time
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            )}

            {!scheduler && (
              <div className="rounded-xl border border-border bg-muted/50 p-5">
                <p className="mb-4 text-sm text-muted-foreground">
                  Call or text us and we will find a time that works.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1 font-semibold">
                    <a href={`tel:${site.phoneLink}`}>Call {site.phone}</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 font-semibold">
                    <a href={`mailto:${site.email}`}>Email us</a>
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-6 space-y-3 border-t border-border pt-6">
              <a
                href={`tel:${site.phoneLink}`}
                className="flex items-center gap-3 text-sm text-secondary hover:text-primary-strong"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{site.phone} — call or text</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-secondary hover:text-primary-strong"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="break-all">{site.email}</span>
              </a>
              <p className="text-sm text-muted-foreground">
                We reply to every message, usually {site.responseTime.toLowerCase()}.
              </p>
            </div>
          </div>

          {/* ---------- Enquiry / waitlist form ---------- */}
          <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-card sm:p-8">
            <h3 className="mb-2 text-xl font-bold text-secondary">
              {open ? 'Or send us a message' : 'Join the waitlist'}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {open
                ? 'Not ready to book a time? Tell us about your student and we will come back to you.'
                : 'Tell us about your student and we will be in touch before the next cohort opens.'}
            </p>

            <div id="socket-enquiry" className="tc-socket-form" />

            {status === 'loading' && (
              <p className="text-sm text-muted-foreground">Loading the form…</p>
            )}

            {status === 'error' && (
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <p className="mb-2 text-sm font-medium text-secondary">
                  The form did not load.
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  Please reach us directly and we will get straight back to you.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1 font-semibold">
                    <a href={`tel:${site.phoneLink}`}>Call {site.phone}</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 font-semibold">
                    <a href={`mailto:${site.email}`}>Email us</a>
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
