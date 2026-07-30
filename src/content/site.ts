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

  responseTime: 'Within 24 hours',

  /**
   * ---------------------------------------------------------------
   * THE BOOKING LINK  —  SET THIS BEFORE YOU ADVERTISE
   * ---------------------------------------------------------------
   * Your Google Calendar appointment page. Every "Book Your Math Plan
   * Call" button on the site points at it.
   *
   * To create it (free with your Google Workspace):
   *   1. Open Google Calendar
   *   2. Create > Appointment schedule
   *   3. Name it "Math Plan Call" and set it to 30 minutes
   *   4. Set the hours you are willing to take calls
   *   5. Under "Booking form", add these questions:
   *        - Student's grade
   *        - Current mathematics class
   *        - What is going wrong at the moment?
   *        - Phone number
   *   6. Click "Share", then copy the booking page link
   *   7. Paste it below, replacing the empty quote marks
   *
   * Until a real link is set, every booking button falls back to the
   * enquiry form at the foot of the page, so nothing is ever broken.
   */
  schedulerUrl: '',

  /**
   * TUTORCRUNCHER ENQUIRY FORM
   * Submissions arrive in TutorCruncher as a new client automatically.
   * Key from: System > Settings > TutorCruncher API > API Integrations
   * musatutoring.org must appear under "Allowed Domains".
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
