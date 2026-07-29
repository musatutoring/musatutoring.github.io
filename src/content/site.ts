/**
 * SITE SETTINGS
 * -------------
 * This is the main settings file for the website.
 * Change the text between the quote marks to update the site.
 * Do not delete the quote marks, commas, or curly braces.
 */

export const site = {
  /** Business name, shown in the header, footer and browser tab. */
  name: 'Musa Tutoring',

  /** Short line under the business name. */
  tagline: 'Tutoring for Twin Cities families, in person and online',

  /** One or two sentences describing the business. Used in the footer. */
  shortDescription:
    'Tutoring built around each student — a free first session, a plan made for their goals, and regular updates for parents.',

  /** Public phone number (Google Voice — rings your phone, keeps your cell private). */
  phone: '(612) 234-1270',

  /** Phone number in link format (digits only, no spaces or brackets). */
  phoneLink: '+16122341270',

  /** Public email address. */
  email: 'info@musatutoring.org',

  /** Where sessions happen. Shown on the contact section and in the footer. */
  serviceArea: 'Minnetonka, Hopkins, Eden Prairie, St. Louis Park & across the Twin Cities',

  /** Short version of the above, used where space is tight. */
  serviceAreaShort: 'Twin Cities metro — in person and online',

  /** How quickly enquiries are answered. Shown on the contact section. */
  responseTime: 'Within 24 hours',

  /**
   * WHERE THE "BOOK" BUTTONS GO
   * Every "Book" button on the site sends people to the enquiry form
   * further down the home page. You should not need to change this.
   */
  bookingUrl: '/#contact',

  /**
   * TUTORCRUNCHER ENQUIRY FORM
   * This is the public key for your TutorCruncher Socket integration.
   * When a parent submits the form on your site, their details go
   * straight into TutorCruncher as a new client.
   *
   * Find or replace it at:
   *   System > Settings > TutorCruncher API > API Integrations
   *
   * IMPORTANT: musatutoring.org must be listed under "Allowed Domains"
   * in that same screen, or the form shows a 403 error.
   */
  tutorCruncherSocketKey: '1dd4875e818fff8c65bb',

  /**
   * Social links. Leave a value empty ('') to hide that icon.
   */
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },
};

export type Site = typeof site;
