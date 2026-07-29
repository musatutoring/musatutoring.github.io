/**
 * HOW IT WORKS
 * ------------
 * The steps shown in the "How It Works" section.
 */

export type Step = {
  icon: 'message' | 'target' | 'calendar' | 'trending';
  title: string;
  description: string;
  timing: string;
};

export const steps: Step[] = [
  {
    icon: 'message',
    title: 'Book a free first session',
    description:
      'Your student meets a tutor and takes a short placement check, while we talk with you about what has been hard and what you want to see change.',
    timing: 'Free, no commitment',
  },
  {
    icon: 'target',
    title: 'Get a plan and a price',
    description:
      'We tell you exactly where your student is starting from, what we would work on first, and how often we should meet — with the rate in writing.',
    timing: 'Sent after your session',
  },
  {
    icon: 'calendar',
    title: 'Meet your tutor',
    description:
      'Musa matches your student with the tutor who fits their subject and goals, and you pick a weekly time that works for your family.',
    timing: 'Before sessions start',
  },
  {
    icon: 'trending',
    title: 'See the progress',
    description:
      'Sessions follow the plan, you get notes afterward, and we adjust as your student improves or a test gets close.',
    timing: 'Every week',
  },
];
