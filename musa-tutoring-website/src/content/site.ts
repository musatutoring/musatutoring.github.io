/**
 * SITE SETTINGS
 * -------------
 * Business details and the two links the site depends on.
 */

export const site = {
  name: 'Musa Tutoring',
  tagline: 'One-to-One Mathematics, Taught Online',

  shortDescription:
    'A twelve-week one-to-one mathematics program built around a single goal for your student, with a written plan, weekly progress reports, and monthly meetings with the founder.',

  /** Google Voice number. Rings your phone, keeps your cell private. */
  phone: '(612) 234-1270',
  phoneLink: '+16122341270',

  email: 'info@musatutoring.org',

  /** Office. Shown in the footer and in the site's structured data. */
  addressLine1: '601 Carlson Parkway, Suite 1074',
  addressLine2: 'Minnetonka, MN 55305',

  /** How sessions are delivered. */
  delivery: 'Taught online, one-to-one',

  responseTime: 'We answer quickly, and we answer personally.',

  /**
   * ---------------------------------------------------------------
   * THE BOOKING CALENDAR
   * ---------------------------------------------------------------
   * Your Google Calendar appointment page for the Math Plan Call.
   *
   * On desktop this is embedded directly into the Enrol section at the
   * foot of the page. On phones the calendar is too cramped to use, so
   * a button opens this same page in a new tab instead.
   *
   * If you ever rebuild the appointment schedule in Google Calendar,
   * the link changes. To get the new one:
   *   Google Calendar > open the appointment schedule > Share >
   *   copy the EMBED code, and take the long address inside src="..."
   *
   * It must be the long calendar.google.com/... address.
   * The short calendar.app.google/... link will NOT work here.
   */
  schedulerUrl:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_Yf3gnac14cjBqUIqEh_SRqglX-96iVLfio0GpcCQnxOaQduNN3Y4k2Mwx4_qkQeDQ9cEc-2l?gv=true',

  /**
   * ---------------------------------------------------------------
   * TUTORCRUNCHER FORM  —  WAITING LIST ONLY
   * ---------------------------------------------------------------
   * IMPORTANT, so you are not surprised later:
   *
   * This form NO LONGER appears while enrolment is open. Bookings now
   * go through the Google Calendar above, and your Apps Script puts
   * those people into TutorCruncher automatically.
   *
   * This form only appears AFTER enrolment closes, when the Enrol
   * section turns into a waiting list. So leave this key here — the
   * waiting list stops working without it.
   *
   * Key from: System > Settings > TutorCruncher API > API Integrations
   * musatutoring.org must still appear under "Allowed Domains".
   */
  tutorCruncherSocketKey: '1dd4875e818fff8c65bb',

  /** Social links. Leave empty ('') to hide. */
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },
};

export type Site = typeof site;
