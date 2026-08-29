/**
 * Shared helpers for the booking buttons.
 */

/**
 * Every "Book Your Math Plan Call" button on the site points here:
 * the Enrol section at the foot of the home page.
 *
 * We deliberately do NOT send people straight to Google. The Enrol
 * section explains what the call is, how long it takes, and that
 * nothing is payable — and only then shows the calendar. A parent who
 * lands cold on a Google booking grid is more likely to leave.
 */
export const BOOKING_ANCHOR = '/#enrol';

export const bookingHref = (): string => BOOKING_ANCHOR;

/** Whole days between today and a YYYY-MM-DD date. Negative once it has passed. */
export const daysUntil = (isoDate: string): number => {
  const target = new Date(`${isoDate}T23:59:59`);
  const now = new Date();
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
};
