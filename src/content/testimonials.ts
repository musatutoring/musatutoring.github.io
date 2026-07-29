/**
 * TESTIMONIALS
 * ------------
 * This list is EMPTY on purpose. The website only shows the testimonials
 * section once there is at least one real review in here.
 *
 * To add one, delete the /* and *\/ around the example below and change
 * the details. Copy the block again for each additional review.
 *
 * Only publish reviews you have permission to use.
 */

export type Testimonial = {
  name: string;
  location: string;
  relationship: string;
  subject: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  /*
  {
    name: 'First name L.',
    location: 'Minneapolis, MN',
    relationship: 'Parent of a 9th grader',
    subject: 'Algebra',
    rating: 5,
    text: 'Write the parent\'s own words here.',
  },
  */
];
