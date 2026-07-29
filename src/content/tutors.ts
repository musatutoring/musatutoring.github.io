/**
 * TUTORS
 * ------
 * Add, remove or edit tutors here. The team section on the website
 * rebuilds itself automatically from this list.
 *
 * To add a tutor, copy one block from `{` to `},` and paste it below,
 * then change the details.
 *
 * `initials` shows in the circle when there is no photo.
 * `photo`    leave this line out until you have a real photo.
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
    role: 'Founder & Lead Tutor',
    initials: 'M',
    summary:
      'Musa started Musa Tutoring after six years of tutoring students across the Twin Cities, alongside classroom teaching experience and a business education at the University of Minnesota. He meets every new family himself, writes the plan, and matches the student with the right tutor.',
    focus: ['Learning plans', 'Parent consultations', 'Math & sciences', 'Test prep'],
  },
];

/**
 * The short line shown under the team, covering tutors not listed above.
 */
export const teamNote =
  'Musa works alongside a small team of tutors with expertise in their own subjects. After your free first session, he matches your student with the right one.';
