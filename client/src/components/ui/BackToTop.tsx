// BackToTop Button Component
//
// This component displays a floating button in the bottom-right corner
// when the user scrolls down the page. Clicking it smoothly scrolls
// the user back to the top. The button is animated and positioned
// to avoid overlapping the footer.

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  // Track whether the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button if scrolled down more than 300px
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          // Positioned above the footer, always visible, high z-index
          className="fixed bottom-24 md:bottom-8 right-8 p-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 transition-colors z-50"
          aria-label="Back to top"
        >
          {/* Upward arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop; 