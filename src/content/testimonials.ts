/**
 * PARENT FEEDBACK
 * ---------------
 * This list is EMPTY on purpose. The section stays completely hidden on
 * the website until there is at least one real review in here, so the
 * site never shows a placeholder or an invented quote.
 *
 * To add one: delete the two slashes at the start of each line in the
 * example below, then change the details. Copy the block for each extra
 * review. Only publish words you have permission to use.
 */

export type Testimonial = {
  /** The parent's own words. */
  quote: string;
  /** How they are credited, for example 'Sarah M.' */
  name: string;
  /** Optional line underneath, for example 'Parent of a 9th grader, Algebra II' */
  detail?: string;
};

export const testimonials: Testimonial[] = [
  // {
  //   quote: 'Write the parent\u2019s own words here.',
  //   name: 'First name L.',
  //   detail: 'Parent of a 9th grader, Algebra I',
  // },
];
