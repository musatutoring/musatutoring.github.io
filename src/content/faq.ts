/**
 * FREQUENTLY ASKED QUESTIONS
 * These exist to answer the objections parents genuinely raise.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: 'Why twelve weeks? Could we not simply book a few hours?',
    answer:
      'Because a few hours cannot resolve what is usually wrong. Mathematics builds on itself, so a student struggling today almost always has a gap from a year or two earlier. Hourly help completes tonight\u2019s homework without ever returning to that gap, which is why families find themselves paying for it month after month. Twelve weeks is the time required to close the gap and build enough momentum for your student to keep pace independently.',
  },
  {
    question: 'What does the program cost?',
    answer:
      'The Delta Program is a single flat fee for the full twelve weeks, covering all twenty-four hours of instruction, the placement assessment, the written plan, weekly reports, and your monthly meetings. We give you the exact figure on your Math Plan Call, together with the option to pay in full or spread the cost across the term. Nothing is payable until after your student\u2019s free session.',
  },
  {
    question: 'What happens if it is not working?',
    answer:
      'Two commitments protect you. If you are not satisfied after your student\u2019s second session, we refund you in full. And if, at the end of twelve weeks, your student has attended their sessions and completed the work set but has not reached the goal agreed in week one, we continue teaching them at no further cost until they do.',
  },
  {
    question: 'Is the program taught online?',
    answer:
      'Yes. Every session is taught online, one-to-one. This allows us to match your student with the tutor best suited to their goal rather than the one who happens to live nearby, and it removes the driving, the scheduling difficulties, and the sessions lost to Minnesota winters.',
  },
  {
    question: 'Who will be teaching my student?',
    answer:
      'One tutor, selected by Musa on the basis of your student\u2019s assessment, teaching them throughout the term. Musa conducts your Math Plan Call, writes the plan, chooses the tutor, and meets you each month. You will know who is teaching your student and why they were chosen before the program begins.',
  },
  {
    question: 'What happens if we miss a session?',
    answer:
      'Let us know in advance and we will reschedule it. Sessions cancelled repeatedly at short notice are the one thing that genuinely prevents the program from working, which is why consistent attendance forms part of our end-of-term commitment.',
  },
  {
    question: 'My student is doing well but wants to move ahead. Does that work?',
    answer:
      'It does. The goal set in week one is whatever you and your student want it to be, whether that is repairing a gap, raising a grade, preparing for an AP course, or working ahead of next year\u2019s material. The structure remains the same; the target is yours to set.',
  },
  {
    question: 'What happens once the twelve weeks are over?',
    answer:
      'We review progress against the goal at your final meeting, and we set a fresh goal for the following term. If your student did not reach their goal while following the plan, that is on us and we will continue free of charge until they reach the goal we agreed on. ',
  },
  {
    question: 'What if we miss this cohort?',
    answer:
      'Places are limited and enrolment closes on August 30. If you miss it, join the waiting list and we will contact you before places open again. Families on the waiting list are offered places first.',
  },
];
