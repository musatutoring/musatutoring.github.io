/**
 * SERVICES
 * --------
 * The subject cards shown in the Services section.
 */

export type Service = {
  icon: 'calculator' | 'flask' | 'pen' | 'globe' | 'target' | 'book' | 'users';
  title: string;
  grades: string;
  subjects: string[];
  description: string;
};

export const services: Service[] = [
  {
    icon: 'calculator',
    title: 'Mathematics',
    grades: 'K-12',
    subjects: ['Arithmetic', 'Algebra', 'Geometry', 'Pre-Calculus', 'Calculus', 'Statistics'],
    description:
      'We find the exact point where math stopped making sense, then build forward from there.',
  },
  {
    icon: 'flask',
    title: 'Sciences',
    grades: '6-12',
    subjects: ['Biology', 'Chemistry', 'Physics', 'Earth Science', 'AP Sciences'],
    description:
      'Coursework support for students carrying heavy science loads, including pre-health tracks.',
  },
  {
    icon: 'pen',
    title: 'English & Writing',
    grades: 'K-12',
    subjects: ['Reading comprehension', 'Essay writing', 'Literature', 'Grammar'],
    description:
      'Reading and writing skills that carry across every other subject a student takes.',
  },
  {
    icon: 'globe',
    title: 'Social Studies',
    grades: '6-12',
    subjects: ['History', 'Geography', 'Civics', 'Economics'],
    description: 'Coursework support with an emphasis on writing clearly about what they have read.',
  },
  {
    icon: 'target',
    title: 'Test Preparation',
    grades: '9-12',
    subjects: ['ACT', 'SAT', 'AP exams', 'State tests'],
    description: 'Content review plus test-day strategy, paced against the actual test date.',
  },
  {
    icon: 'users',
    title: 'Small Group Classes',
    grades: 'All ages',
    subjects: ['Skill-level groups', 'Subject-focused sessions', 'Seasonal classes'],
    description:
      'Small groups of students at a similar level, working through the same material together.',
  },
  {
    icon: 'book',
    title: 'Study Skills & Organization',
    grades: 'All ages',
    subjects: ['Time management', 'Note-taking', 'Organization', 'Executive function'],
    description: 'The habits underneath the grades, taught alongside whatever subject we are on.',
  },
];
