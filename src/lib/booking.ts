/**
 * Small helpers shared by the booking buttons.
 */

/**
 * Where a "Book your Math Plan Call" button should point.
 * Uses the Google Calendar link if one has been set in site.ts,
 * otherwise falls back to the enquiry form at the bottom of the page
 * so no button is ever dead.
 */
export const bookingHref = (schedulerUrl: string): string =>
  schedulerUrl && schedulerUrl.trim().length > 0 ? schedulerUrl : '/#enrol';

/** Whole days between today and a YYYY-MM-DD date. Negative once it has passed. */
export const daysUntil = (isoDate: string): number => {
  const target = new Date(`${isoDate}T23:59:59`);
  const now = new Date();
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
};
