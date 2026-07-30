/**
 * SITE SETTINGS
 * -------------
 * Business details and the two links the site depends on.
 * Change the text between the quote marks. Do not delete quote marks or commas.
 */

export const site = {
  name: 'Musa Tutoring',
  tagline: 'One-to-one math for middle school and high school',

  shortDescription:
    'A 12-week one-to-one math program built around a single goal for your student, with a written plan, weekly reports and monthly parent meetings.',

  /** Google Voice number — rings your phone, keeps your cell private. */
  phone: '(612) 234-1270',
  phoneLink: '+16122341270',

  email: 'info@musatutoring.org',

  serviceArea: 'Minnetonka, Hopkins, Eden Prairie, St. Louis Park & across the Twin Cities',
  serviceAreaShort: 'Twin Cities families, taught online',
  responseTime: 'Within 24 hours',

  /**
   * ---------------------------------------------------------------
   * THE BOOKING LINK  —  YOU MUST SET THIS BEFORE LAUNCH
   * ---------------------------------------------------------------
   * This is your Google Calendar appointment booking page. Every
   * "Book your Math Plan Call" button on the site points at it.
   *
   * To create it (free with your Google Workspace):
   *   1. Open Google Calendar
   *   2. Click Create > Appointment schedule
   *   3. Name it "Math Plan Call", set it to 30 minutes
   *   4. Set the hours you want to take calls
   *   5. Under "Booking form", add these questions:
   *        - Student's grade
   *        - Current math class
   *        - What is going wrong right now?
   *        - Phone number
   *   6. Click "Share" and copy the booking page link
   *   7. Paste it below, replacing the whole line
   *
   * Until you paste a real link, the buttons fall back to the
   * enquiry form at the bottom of the page.
   */
  schedulerUrl: '',

  /**
   * TUTORCRUNCHER ENQUIRY FORM
   * Submissions arrive in TutorCruncher as a new client automatically.
   * Key from: System > Settings > TutorCruncher API > API Integrations
   * musatutoring.org must be listed under "Allowed Domains".
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
