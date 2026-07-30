/**
 * THE DELTA PROGRAM
 * -----------------
 * Every detail of the program lives here. Change it in this file and it
 * updates everywhere on the site.
 *
 * The two you will change most often:
 *   seatsRemaining  - update as students enrol
 *   enrolmentCloses - the date enrolment shuts for this cohort
 */

export const program = {
  name: 'The Delta Program',
  subtitle: '12 weeks of one-to-one math, built around one goal for your student',

  /** Shown as a small label above the name. */
  eyebrow: 'Now enrolling — Fall 2026 cohort',

  /**
   * DATES
   * Use the format YYYY-MM-DD. The countdown on the site works these out.
   */
  enrolmentCloses: '2026-08-30',
  programStarts: '2026-09-07',
  programEnds: '2026-11-29',
  nextCohort: 'December 2026',

  /** Human-readable versions used in the copy. */
  enrolmentClosesLabel: 'Sunday, August 30',
  programStartsLabel: 'Monday, September 7',

  /** SEATS — update this number as students enrol. */
  seatsTotal: 20,
  seatsRemaining: 20,

  /** PRICING */
  priceUpfront: 500,
  priceMonthly: 185,
  priceMonthlyCount: 3,

  /** Sessions */
  sessionsPerWeek: 2,
  sessionLengthLabel: '1 hour',
  totalHours: 24,
  weeks: 12,
};

/**
 * THE PROBLEM
 * The argument for why hourly tutoring has not worked. This is the most
 * important section on the page — it is the reason a parent keeps reading.
 */
export const problem = {
  heading: 'More hours has not fixed it',
  lede:
    'Most families come to us after months of hourly tutoring. The sessions help with tonight\u2019s homework, the next test comes back the same, and the bill keeps arriving.',
  points: [
    {
      title: 'Math is cumulative',
      body:
        'A student struggling in Algebra II usually has an unclosed gap in Algebra I. The gap is invisible on a report card, but every new topic sits on top of it.',
    },
    {
      title: 'Hourly tutoring treats symptoms',
      body:
        'An hour spent on Thursday\u2019s worksheet is an hour not spent on the thing actually causing the trouble. The homework gets done. The gap stays.',
    },
    {
      title: 'Nobody is measuring anything',
      body:
        'Without a starting point and a target, there is no way to tell whether it is working — so tutoring quietly becomes a permanent monthly expense.',
    },
  ],
  turn:
    'Twelve weeks is long enough to go back, close the gap, and get ahead of the class. That is the whole idea behind Delta.',
};

/** Why the name — used in a small aside. */
export const nameNote =
  'In math, the Greek letter delta (\u0394) means change — the measured difference between where something started and where it ended. That is what we are hired to produce.';

/**
 * WHAT IS INCLUDED
 */
export const included = [
  {
    title: 'A goal set in writing in week one',
    body:
      'Your student takes a placement assessment. We find what is actually holding them back, agree a specific target with you, and write the plan to reach it.',
  },
  {
    title: 'Two one-to-one hours every week',
    body:
      'Twenty-four hours across twelve weeks, one student and one tutor. No group sessions, no rotating tutors.',
  },
  {
    title: 'A tutor matched to the goal',
    body:
      'Musa matches your student to the tutor whose strengths fit what needs fixing — not whoever happens to be free.',
  },
  {
    title: 'A written report every week',
    body:
      'What was covered, what improved, what is still weak, and what changes next week. You are never guessing whether it is working.',
  },
  {
    title: 'A plan that adjusts weekly',
    body:
      'The plan is reviewed against the goal every week. If something is not moving, we change the approach rather than repeating it.',
  },
  {
    title: 'A meeting with Musa every month',
    body:
      'Three parent meetings across the term to review progress against the goal and decide what happens next.',
  },
  {
    title: 'Practice generated between sessions',
    body:
      'We generate targeted problems on the specific weakness so session time is spent on teaching, not on finding out what they cannot do yet.',
  },
];

/**
 * THE TWO PROMISES
 */
export const promises = [
  {
    label: 'Weeks 1–2',
    title: 'Not the right fit? Full refund.',
    body:
      'If after your student\u2019s second session you do not think this is right for them, tell us and we refund you in full. No forms, no argument.',
  },
  {
    label: 'Week 12',
    title: 'Goal not reached? We keep going, free.',
    body:
      'If your student attends their sessions and completes the work they are set, and has not reached the goal we agreed in week one, we carry on working with them at no further cost until they do.',
  },
];

/**
 * WHO IT IS FOR
 */
export const fit = {
  forYou: [
    'Your student is in middle school or high school math',
    'Something specific is going wrong — a class, a gap, a test, a goal',
    'You want to know whether it is working, in writing, every week',
    'You can commit to two sessions a week for twelve weeks',
  ],
  notForYou: [
    'You want occasional help the night before a test',
    'You are looking for the cheapest hourly rate available',
    'Your student is not willing to do work between sessions',
    'You need a subject outside middle school and high school math',
  ],
};
