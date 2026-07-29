/**
 * TRACKS
 * ------
 * A "track" is a path a student can follow. These appear in the Tracks
 * section on the home page and on the Pathways page.
 */

export type Track = {
  slug: string;
  title: string;
  summary: string;
  bestFor: string;
  includes: string[];
};

export const tracks: Track[] = [
  {
    slug: 'core',
    title: 'Everyday School Support',
    summary:
      'Steady weekly help with the classes your student is taking right now, so they keep up instead of catching up.',
    bestFor: 'Students slipping in a class or two.',
    includes: [
      'Weekly work on current homework and units',
      'Study and homework routines that stick',
      'Updates so you know where things stand',
    ],
  },
  {
    slug: 'math',
    title: 'Math, From Basics to Calculus',
    summary:
      'We find the exact point where math stopped making sense, fix that, and build forward from there.',
    bestFor: 'Students who have gaps, or who are ready to move ahead.',
    includes: [
      'Placement check to find the real starting point',
      'Arithmetic and algebra through calculus',
      'Rebuilding confidence, not just grades',
    ],
  },
  {
    slug: 'college-readiness',
    title: 'Getting Ready for College',
    summary:
      'Planning the high school years while there is still time to shape them — courses, grades, applications and essays.',
    bestFor: 'Students in grades 9-12 and their parents.',
    includes: [
      'Course choices that strengthen an application',
      'Application and essay support',
      'Time management and staying organized',
    ],
  },
  {
    slug: 'test-prep',
    title: 'ACT & SAT Prep',
    summary:
      'Focused preparation built backward from your test date, with real practice sections in every session.',
    bestFor: 'Students with a test date on the calendar.',
    includes: ['ACT and SAT', 'AP exams', 'Pacing and test-day strategy'],
  },
  {
    slug: 'pre-health',
    title: 'Science & Pre-Health',
    summary:
      'For students aiming at medicine, nursing or another health career — the science coursework that path depends on.',
    bestFor: 'Students carrying heavy biology and chemistry loads.',
    includes: [
      'Biology, chemistry and AP sciences',
      'Study systems for demanding science classes',
      'Straight answers about the pre-health path',
    ],
  },
  {
    slug: 'business',
    title: 'Business & Economics',
    summary:
      'Coursework support plus the practical side — reading numbers clearly, setting goals, and thinking like a business student.',
    bestFor: 'Students in business, economics or statistics courses.',
    includes: ['Economics and business coursework', 'Statistics', 'Goal setting and planning'],
  },
];
