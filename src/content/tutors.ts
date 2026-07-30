/**
 * WHO TEACHES
 * Copy a block from `{` to `},` to add someone.
 * Leave `photo` out until you have a real photograph.
 */

export type Tutor = {
  name: string;
  role: string;
  initials: string;
  summary: string;
  focus: string[];
  photo?: string;
};

export const tutors: Tutor[] = [
  {
    name: 'Musa',
    role: 'Founder',
    initials: 'M',
    summary:
      'Musa conducts every Math Plan Call himself, writes each student\u2019s twelve-week plan, selects their tutor, and meets parents monthly to review progress against the goal. He has spent six years teaching mathematics to students across the Twin Cities, alongside classroom teaching experience and a business education at the University of Minnesota.',
    focus: ['Your Consultation', 'The Twelve-Week Plan', 'Tutor Selection', 'Monthly Reviews'],
  },
];

export const teamNote =
  'Your student is taught by one tutor throughout the term, chosen for what your student specifically needs. You will be introduced to them, and told why they were selected, before the program begins.';
