/**
 * HOW ENROLMENT WORKS
 */

export type Step = {
  number: string;
  title: string;
  timing: string;
  body: string;
};

export const enrolmentSteps: Step[] = [
  {
    number: '01',
    title: 'Book Your Math Plan Call',
    timing: 'Two Minutes',
    body:
      'Choose a time that suits you. We will ask for your student\u2019s grade, their current mathematics class, and a short description of what is going wrong, so that the call begins with context rather than introductions.',
  },
  {
    number: '02',
    title: 'The Math Plan Call',
    timing: 'Thirty Minutes, With Musa',
    body:
      'Together we work out what is genuinely causing the difficulty, which is frequently not the class your student is struggling in. You will leave the call knowing what we would do, what it costs, and whether we believe we can help. If we do not think the program is right for your student, we will tell you.',
  },
  {
    number: '03',
    title: 'A Free Session for Your Student',
    timing: 'One Hour, At No Cost',
    body:
      'Your student meets their tutor and completes a placement assessment. You then receive their results and a written twelve-week plan setting out a specific goal, whether or not you decide to enrol.',
  },
  {
    number: '04',
    title: 'Begin With the Cohort',
    timing: 'September 7',
    body:
      'Your weekly session times are confirmed and your student begins. The first written report reaches you at the end of week one.',
  },
];

/**
 * THE WEEKLY RHYTHM once the program is under way.
 */
export const weeklyRhythm = [
  {
    title: 'Two Sessions',
    body: 'One hour each, taught one-to-one by the same tutor throughout the term.',
  },
  {
    title: 'Targeted Practice',
    body: 'Problem sets built around the specific weakness being addressed that week.',
  },
  {
    title: 'A Written Report',
    body: 'Sent to you each week: what was taught, what improved, and what still needs work.',
  },
  {
    title: 'A Revised Plan',
    body: 'The week ahead is re-planned against the goal rather than against a fixed syllabus.',
  },
];
