import { useEffect } from 'react';

export const useScrollReveal = (loadingState) => {
  useEffect(() => {
    if (loadingState) return;

    let observer;

    const setupObserver = () => {
      const elements = document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-fade'
      );

      const observerCallback = (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            // Unobserve after revealing to prevent intersection oscillation loops
            obs.unobserve(entry.target);
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);

      elements.forEach((el) => observer.observe(el));
    };

    const timer = setTimeout(setupObserver, 150);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [loadingState]);
};

export default useScrollReveal;
