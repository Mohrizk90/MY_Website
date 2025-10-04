import { useState, useEffect, useCallback, useRef } from 'react';

// Custom hook for optimized scroll handling
export const useScrollOptimized = (threshold = 100) => {
  const [scrolled, setScrolled] = useState(false);
  const throttleRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (throttleRef.current) return;
    
    throttleRef.current = setTimeout(() => {
      setScrolled(window.scrollY > threshold);
      throttleRef.current = null;
    }, 16); // ~60fps
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, [handleScroll]);

  return scrolled;
};

// Custom hook for scroll to section
export const useScrollToSection = () => {
  const scrollToSection = useCallback((href, offset = 0) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
};
