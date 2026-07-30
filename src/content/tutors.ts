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
      'Musa runs every Math Plan Call himself, writes your student\u2019s plan, chooses their tutor, and meets you each month to review progress against the goal. Six years tutoring across the Twin Cities, classroom teaching experience, and a business education at the University of Minnesota.',
    focus: ['Your consultation', 'The 12-week plan', 'Tutor matching', 'Monthly reviews'],
  },
];

export const teamNote =
  'Your student is taught by one tutor, every week, chosen for what your student actually needs. You will know who they are and why they were matched before the program starts.';
