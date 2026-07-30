/**
 * COURSES WE TEACH
 */

export type Course = {
  group: string;
  items: string[];
};

export const curriculum: Course[] = [
  {
    group: 'Middle School',
    items: ['Pre-Algebra', 'Middle School Mathematics', 'Foundations and Gap Repair'],
  },
  {
    group: 'High School',
    items: ['Algebra I', 'Geometry', 'Algebra II', 'Pre-Calculus', 'AP Pre-Calculus'],
  },
  {
    group: 'Advanced',
    items: ['Calculus', 'AP Calculus AB', 'AP Calculus BC'],
  },
];

export const curriculumNote =
  'Mathematics is the whole of our practice, from middle school foundations through AP Calculus. That depth is what allows us to identify a problem precisely rather than approximately.';
