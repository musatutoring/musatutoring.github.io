import { useEffect, useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Mail, Phone } from 'lucide-react';
import { site } from '@/content/site';
import { program } from '@/content/program';
import { daysUntil } from '@/lib/booking';
import { useMediaQuery } from '@/hooks/use-media-query';

/**
 * ENROL SECTION
 * -------------
 * This section has two completely different states, and it switches
 * between them on its own. You do not need to edit anything on the day.
 *
 *   WHILE ENROLMENT IS OPEN
 *     One action only: book the Math Plan Call.
 *     - On desktop the Google calendar is embedded in the page.
 *     - On phones the calendar is too cramped to use, so a button
 *       opens the same booking page in a new tab.
 *
 *   ONCE ENROLMENT HAS CLOSED  (after program.enrolmentCloses)
 *     The calendar disappears completely, because a live calendar for
 *     a cohort you cannot fill books calls you have to cancel.
 *     The TutorCruncher form takes its place as the waiting list.
 */

const SOCKET_SRC = 'https://cdn.tutorcruncher.com/socket/latest/socket.js';
const SCRIPT_ID = 'tutorcruncher-socket-script';

/* The calendar needs roughly this much width to be usable. */
const WIDE_ENOUGH_FOR_CALENDAR = '(min-width: 900px)';

const Enrol = () => {
  const open = daysUntil(program.enrolmentCloses) > 0;
  const canEmbedCalendar = useMediaQuery(WIDE_ENOUGH_FOR_CALENDAR);
  const scheduler = site.schedulerUrl?.trim() ?? '';

  return (
    <section id="enrol" className="scroll-mt-24 bg-muted/45 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">{open ? 'Next Step' : 'Waiting List'}</p>
          <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
            {open
              ? 'Book Your Math Plan Call'
              : `Join the Waiting List for ${program.nextCohort}`}
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            {open
              ? 'Thirty minutes with Musa. We discuss how we can tailor the tutoring experience specifically to your student and answer any questions you have about the program. Nothing is payable on this call, and there is no obligation afterwards.'
              : 'This cohort has closed. Leave your details and we will contact you before places open again. Families on the waiting list are offered places first.'}
          </p>
          {open && (
            <p className="mt-6 text-sm text-muted-foreground">
              Only {program.seatsTotal} places in this cohort. Enrolment closes{' '}
              <span className="font-semibold text-navy">
                {program.enrolmentClosesLabel}
              </span>
              .
            </p>
          )}
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {open ? (
              <BookingPanel scheduler={scheduler} embed={canEmbedCalendar} />
            ) : (
              <WaitingListPanel />
            )}
          </div>

          <div className="lg:col-span-2">
            <ContactPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Booking — shown while enrolment is open                            */
/* ------------------------------------------------------------------ */

const BookingPanel = ({ scheduler, embed }: { scheduler: string; embed: boolean }) => {
  if (!scheduler) {
    /* Only reachable if the booking link in site.ts has been emptied. */
    return (
      <PanelShell title="Pick a Time" caption="Thirty minutes, at no cost">
        <div className="rounded-lg border border-border bg-muted/50 p-6">
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            Call or text us and we will find a time that suits you.
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
      </PanelShell>
    );
  }

  return (
    <PanelShell title="Pick a Time" caption="Thirty minutes, at no cost">
      {embed ? (
        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <iframe
            src={scheduler}
            title="Book your Math Plan Call"
            className="block h-[640px] w-full"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-muted/40 p-6 text-center">
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Choose a time that suits you. The booking page opens in a new tab and
            takes about a minute.
          </p>
          <Button asChild variant="gold" size="lg" className="w-full">
            <a href={scheduler} target="_blank" rel="noopener noreferrer">
              See Available Times
              <ArrowRight className="ml-2" aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-5 text-xs text-muted-foreground">
            Prefer to talk first? Call or text {site.phone}.
          </p>
        </div>
      )}
    </PanelShell>
  );
};

/* ------------------------------------------------------------------ */
/*  Waiting list — shown once enrolment has closed                     */
/* ------------------------------------------------------------------ */

const WaitingListPanel = () => {
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
    <PanelShell title="Join the Waiting List" caption="We will be in touch before places open">
      <div id="socket-enquiry" className="tc-socket-form" />

      {status === 'loading' && (
        <p className="text-sm text-muted-foreground">Loading the form&hellip;</p>
      )}

      {status === 'error' && (
        <div className="rounded-lg border border-border bg-muted/40 p-6">
          <p className="mb-2 text-sm font-medium text-navy">The form did not load.</p>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            Please reach us directly and we will add you to the list ourselves.
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
    </PanelShell>
  );
};

/* ------------------------------------------------------------------ */
/*  Shared pieces                                                      */
/* ------------------------------------------------------------------ */

const PanelShell = ({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: ReactNode;
}) => (
  <div className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
    <div className="mb-6 flex items-center gap-3">
      <div
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15"
      >
        <CalendarDays className="h-5 w-5 text-gold-deep" />
      </div>
      <div>
        <h3 className="font-semibold text-navy">{title}</h3>
        <p className="text-sm text-muted-foreground">{caption}</p>
      </div>
    </div>
    {children}
  </div>
);

const ContactPanel = () => (
  <div className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
    <h3 className="mb-6 font-semibold text-navy">Rather Speak to Someone?</h3>

    <ul className="space-y-5">
      <li>
        <a
          href={`tel:${site.phoneLink}`}
          className="flex items-start gap-3 text-navy transition-smooth hover:text-gold-deep"
        >
          <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            <span className="block font-medium">{site.phone}</span>
            <span className="block text-sm text-muted-foreground">Call or text</span>
          </span>
        </a>
      </li>
      <li>
        <a
          href={`mailto:${site.email}`}
          className="flex items-start gap-3 text-navy transition-smooth hover:text-gold-deep"
        >
          <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            <span className="block break-all font-medium">{site.email}</span>
            <span className="block text-sm text-muted-foreground">For longer questions</span>
          </span>
        </a>
      </li>
    </ul>

    <p className="mt-7 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
      {site.responseTime}
    </p>
  </div>
);

export default Enrol;
