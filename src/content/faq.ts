/**
 * FREQUENTLY ASKED QUESTIONS
 * These exist to answer the objections parents actually raise.
 * Add a question by copying one block and changing the text.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: 'Why twelve weeks? Can we just book a few hours?',
    answer:
      'Because a few hours cannot fix what is usually wrong. Math builds on itself, so a student struggling now almost always has a gap from a year or two back. Hourly help gets tonight\u2019s homework done without ever going back for the gap, which is why families end up paying for it month after month. Twelve weeks is the time it takes to close the gap and get ahead. We only sell the program.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Five hundred dollars for the full twelve weeks, or three monthly payments of $185. That covers 24 one-to-one hours, the placement assessment, the written plan, weekly reports, and monthly meetings. It works out to roughly $21 an hour — well below the going rate for one-to-one math tutoring in the Twin Cities.',
  },
  {
    question: 'What if it is not working?',
    answer:
      'Two things protect you. If you are not satisfied after your student\u2019s second session, we refund you in full. And if at the end of twelve weeks your student has attended their sessions and done the work but has not reached the goal we agreed in week one, we keep working with them for free until they do.',
  },
  {
    question: 'Is the monthly option a subscription I can cancel?',
    answer:
      'No. The program is a twelve-week commitment and the monthly option is simply a way to spread the cost. The full-refund window after session two is the point at which you decide whether to continue.',
  },
  {
    question: 'Is this online or in person?',
    answer:
      'The Delta Program is online, one-to-one. That lets us match your student to the right tutor rather than the nearest one, and it means no driving and no cancelled sessions because of Minnesota weather. We continue to run our in-person group classes for existing families.',
  },
  {
    question: 'Who actually teaches my student?',
    answer:
      'One tutor, matched by Musa to what your student needs, and the same tutor every week. Musa runs your consultation, writes the plan, and meets you monthly. You will always know who is teaching your student and why they were chosen.',
  },
  {
    question: 'What if we miss a session?',
    answer:
      'Tell us in advance and we will move it. Sessions cancelled at short notice repeatedly are the one thing that genuinely stops the program working, which is why attendance is part of our end-of-term promise.',
  },
  {
    question: 'My student is doing fine but wants to get ahead.',
    answer:
      'That works too. The goal we set in week one is whatever you want it to be — repairing a gap, lifting a grade, preparing for an AP class, or getting ahead of next year\u2019s material. The structure is the same; the target is yours.',
  },
  {
    question: 'What happens after the twelve weeks?',
    answer:
      'We review against the goal at your final meeting. Some students finish and stop, which is the point. Others set a new goal for the next term. There is no automatic renewal and nothing to cancel.',
  },
  {
    question: 'What if I miss this cohort?',
    answer:
      'Places are limited and enrolment closes on August 30. If you miss it, join the waitlist and we will contact you before the December cohort opens — waitlist families get first refusal on places.',
  },
];
