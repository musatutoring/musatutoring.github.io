/**
 * PLANS
 * -----
 * The session formats shown in the "Plans & Enrollment" section.
 */

export type Plan = {
  icon: 'user' | 'users';
  name: string;
  duration: string;
  description: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    icon: 'user',
    name: 'One-to-One Tutoring',
    duration: '60-minute sessions',
    description:
      'One tutor, one student, working through a plan built around exactly what that student needs.',
    features: [
      'Plan written after your free session',
      'Paced to your student, not a curriculum',
      'Notes for you after each session',
      'In person or online — your choice',
    ],
  },
  {
    icon: 'users',
    name: 'Small Group Classes',
    duration: 'Up to 5 students, 60-minute sessions',
    description:
      'A few students at a similar level working through the same material together, at a lower rate per family.',
    features: [
      'Grouped by level, not just by grade',
      'Individual check-ins inside every session',
      'Lower cost than one-to-one',
      'Same plan-first approach',
    ],
  },
];

/** The note shown under the plans about how pricing is decided. */
export const pricingNote =
  'We do not quote a rate before we have met your student. After the free first session we know what they need, how often you should meet, and whether one-to-one or a small group makes more sense — and you get the rate in writing before anything begins. No packages, no contracts, no surprise fees.';
