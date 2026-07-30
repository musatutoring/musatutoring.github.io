/**
 * COURSES WE TEACH
 * Add or remove entries and the section rebuilds itself.
 */

export type Course = {
  group: string;
  items: string[];
};

export const curriculum: Course[] = [
  {
    group: 'Middle school',
    items: ['Pre-Algebra', 'Middle school math', 'Foundations & gap repair'],
  },
  {
    group: 'High school',
    items: ['Algebra I', 'Geometry', 'Algebra II', 'Pre-Calculus', 'AP Pre-Calculus'],
  },
  {
    group: 'Advanced',
    items: ['Calculus', 'AP Calculus AB', 'AP Calculus BC'],
  },
];

export const curriculumNote =
  'Math only, middle school through AP Calculus. We do not spread ourselves across every subject — this is the one we are good at.';
