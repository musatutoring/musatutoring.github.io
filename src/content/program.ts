/**
 * THE DELTA PROGRAM
 * -----------------
 * Every detail of the program lives in this file. Change something here
 * and it updates everywhere it appears on the site.
 */

export const program = {
  name: 'The Delta Program',
  subtitle: 'Twelve weeks of one-to-one mathematics, built around a single goal for your student.',

  eyebrow: 'Now Enrolling · Fall 2026',

  /** Dates. Use the format YYYY-MM-DD; the site works the countdown out. */
  enrolmentCloses: '2026-08-30',
  enrolmentClosesLabel: 'August 30',
  startsLabel: 'early September',
  nextCohort: 'the winter cohort',

  /** Places in this cohort. */
  seatsTotal: 20,

  /** Sessions. */
  sessionsPerWeek: 2,
  sessionLengthLabel: 'one hour',
  totalHours: 24,
  weeks: 12,
};

/**
 * CREDIBILITY FIGURES
 * -------------------
 * PLEASE CHECK THESE BEFORE YOU ADVERTISE.
 * The first three are yours. The fourth is an estimate based on six years
 * of teaching — correct it to whatever the true figure is.
 */
export const credibility = [
  { figure: '6', suffix: '', label: 'Years Teaching Mathematics' },
  { figure: '100', suffix: '+', label: 'Students Taught' },
  { figure: '20', suffix: '+', label: 'Students Enrolled Today' },
  { figure: '2,500', suffix: '+', label: 'Hours of Instruction Delivered' },
];

/**
 * WHAT SETS THE PROGRAM APART
 * The first thing a parent reads after the hero.
 */
export const differentiators = {
  heading: 'What Makes the Delta Program Different',
  lede:
    'Most tutoring is sold by the hour, which means nobody is accountable for where your student ends up. We work the other way around: we agree on the destination first, then build the twelve weeks required to reach it.',
  items: [
    {
      title: 'A Defined Goal From Day One',
      body:
        'Before any teaching begins, your student sits a placement assessment and we agree on a specific, measurable target with you. Everything that follows is judged against it.',
    },
    {
      title: 'A Plan Built for Your Student',
      body:
        'No two plans are the same, because no two students arrive with the same gaps. Yours is written after the assessment and revised every week as your student progresses.',
    },
    {
      title: 'A Tutor Chosen for the Goal',
      body:
        'Musa reviews the assessment personally and selects the tutor whose strengths match what your student needs, rather than whoever happens to have an opening.',
    },
    {
      title: 'Written Progress Every Week',
      body:
        'You receive a report at the end of each week covering what was taught, what improved, what still needs work, and what changes next. You will never have to ask how it is going.',
    },
    {
      title: 'Monthly Meetings With the Founder',
      body:
        'Three times across the term you sit down with Musa to review progress against the goal and decide what happens next. You always have a direct line to the person responsible.',
    },
    {
      title: 'Mathematics, Studied in Depth',
      body:
        'Mathematics is the whole of our practice, from middle school foundations through AP Calculus. That focus is what allows us to diagnose a problem precisely rather than approximately.',
    },
  ],
};

/**
 * WHY TWELVE WEEKS
 */
export const problem = {
  heading: 'Why Twelve Weeks',
  lede:
    'Most families come to us after months of hourly tutoring. The sessions help with tonight\u2019s homework, the next test comes back looking much the same, and the invoices keep arriving. There is a reason for this, and it is structural.',
  points: [
    {
      title: 'Mathematics Is Cumulative',
      body:
        'A student struggling in Algebra II almost always has an unresolved gap somewhere in Algebra I. That gap does not appear on a report card, but every new topic is built directly on top of it.',
    },
    {
      title: 'Hourly Tutoring Treats the Symptom',
      body:
        'An hour spent on Thursday\u2019s worksheet is an hour not spent on the thing causing the difficulty. The homework gets finished, the grade moves a little, and the underlying gap remains exactly where it was.',
    },
    {
      title: 'Without Measurement, Nothing Improves',
      body:
        'If there is no starting point and no target, there is no way to judge whether tutoring is working. That is how a temporary fix quietly becomes a permanent monthly expense.',
    },
  ],
  turn:
    'Twelve weeks is the time it takes to go back, close the gap properly, and get far enough ahead that your student can keep pace on their own.',
};

export const nameNote =
  'In mathematics, the Greek letter delta (\u0394) denotes change: the measured difference between where something began and where it finished. That is precisely what we are hired to produce.';

/**
 * WHAT IS INCLUDED — six items, deliberately.
 */
export const included = [
  {
    title: 'A Placement Assessment and Written Plan',
    body:
      'Your student is assessed before teaching begins. You receive their results and a written twelve-week plan with a specific goal, whether or not you decide to continue.',
  },
  {
    title: 'Two One-to-One Hours Each Week',
    body:
      'Twenty-four hours of instruction across the term, one student and one tutor. There are no group sessions and no rotating tutors.',
  },
  {
    title: 'A Tutor Matched to Your Student',
    body:
      'Musa selects the tutor whose strengths align with what your student needs, and introduces them before the program begins.',
  },
  {
    title: 'A Weekly Report, Reviewed and Revised',
    body:
      'Every week you receive a written summary of progress, and the following week is re-planned against the goal. If something is not working, the approach changes rather than repeats.',
  },
  {
    title: 'Monthly Meetings With Musa',
    body:
      'Three parent meetings across the term to review progress properly, discuss what has changed, and agree what happens next.',
  },
  {
    title: 'Targeted Practice Between Sessions',
    body:
      'We generate problem sets aimed at the specific weakness we are working on, so session time is spent teaching rather than diagnosing.',
  },
];

/**
 * THE TWO PROMISES
 */
export const promises = [
  {
    label: 'Weeks One and Two',
    title: 'If It Is Not Right, You Pay Nothing',
    body:
      'If, after your student\u2019s second session, you do not believe the program is right for them, tell us and we will refund you in full. There are no forms to complete and no conversation to have about it.',
  },
  {
    label: 'Week Twelve',
    title: 'If the Goal Is Not Reached, We Continue',
    body:
      'Provided your student attends their sessions and completes the work they are set, we will keep teaching them at no further cost until the goal we agreed in week one has been met.',
  },
];

/**
 * WHO IT IS FOR
 */
export const fit = {
  forYou: [
    'Your student is studying mathematics in middle school or high school.',
    'Something specific needs to change: a grade, a gap, an examination, or a place on an advanced course.',
    'You want written evidence of progress rather than a general impression.',
    'Your student can commit to two sessions each week for twelve weeks.',
  ],
  notForYou: [
    'You are looking for occasional help the evening before a test.',
    'Your priority is finding the lowest hourly rate available.',
    'Your student is unwilling to do any work between sessions.',
    'You need a subject other than mathematics.',
  ],
};

/**
 * PRICING — presented as structure, not as a number.
 * The figure is given on the Math Plan Call.
 */
export const pricing = {
  heading: 'One Program, One Fee',
  body:
    'The Delta Program is a single flat fee covering the full twelve weeks. There is no hourly billing, no package to top up, and no additional charge for the assessment, the written plan, the weekly reports, or your monthly meetings.',
  note:
    'We will give you the exact figure on your Math Plan Call, along with the choice of paying in full or spreading the cost across the term. Nothing is payable until after your student\u2019s free session.',
  points: [
    'One fee for the entire twelve weeks.',
    'The assessment and written plan are included.',
    'Weekly reports and monthly meetings are included.',
    'Pay in full, or spread the cost across the term.',
  ],
};
