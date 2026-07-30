/**
 * HOW ENROLMENT WORKS
 * The four steps between a parent finding the site and their student starting.
 */

export type Step = {
  number: string;
  title: string;
  timing: string;
  body: string;
};

export const enrolmentSteps: Step[] = [
  {
    number: '1',
    title: 'Book your Math Plan Call',
    timing: 'Takes 2 minutes',
    body:
      'Pick a time that suits you. You will need about five minutes to tell us your student\u2019s grade, their current math class, and what is going wrong.',
  },
  {
    number: '2',
    title: 'The Math Plan Call',
    timing: '30 minutes, with Musa',
    body:
      'We work out what is actually causing the trouble — which is often not the class they are failing. You leave the call knowing what we would do, what it costs, and whether we think we can help. If we do not think we are right for your student, we will say so.',
  },
  {
    number: '3',
    title: 'A free session for your student',
    timing: '1 hour, no cost',
    body:
      'Your student meets their tutor and sits a placement assessment. You receive their results and a written 12-week plan with a specific goal — whether or not you go ahead.',
  },
  {
    number: '4',
    title: 'Start with the cohort',
    timing: 'Monday, September 7',
    body:
      'Your regular weekly times are locked in and your student begins. Weekly reports start at the end of week one.',
  },
];

/**
 * THE WEEKLY RHYTHM once the program is running.
 */
export const weeklyRhythm = [
  {
    title: 'Two sessions',
    body: 'One hour each, one-to-one with the same tutor every week.',
  },
  {
    title: 'Targeted practice',
    body: 'Problems generated on the exact weakness, worked between sessions.',
  },
  {
    title: 'A written report',
    body: 'Sent to you at the end of each week: covered, improved, still weak, next.',
  },
  {
    title: 'A plan adjustment',
    body: 'The following week is re-planned against the goal, not against a syllabus.',
  },
];
