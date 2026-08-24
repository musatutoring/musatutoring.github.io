import { useEffect, useState } from 'react';

/**
 * Tells a component whether a CSS media query currently matches.
 *
 * Used so the Google booking calendar is only ever loaded on screens
 * wide enough to display it properly. On phones the component renders
 * a button instead, and the calendar is never downloaded at all.
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const list = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(list.matches);
    list.addEventListener('change', onChange);
    return () => list.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};
