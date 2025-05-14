import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PreloaderWebm from '@/assets/Preloader.webm'; // Use your preloader.webm file here

const DISPLAY_DURATION = 3000; // Time the video shows before exit starts (in ms)
const EXIT_DURATION = 800;     // Duration of swipe-up animation (in ms)

const Preloader = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    /*
    // OPTIONAL: Use sessionStorage to show preloader only on first visit
    const visited = sessionStorage.getItem('hasVisited');
    if (visited) {
      setShouldRender(false);
      return;
    }
    sessionStorage.setItem('hasVisited', 'true');
    */

    const startExit = setTimeout(() => {
      setExiting(true);
    }, DISPLAY_DURATION); // show for DISPLAY_DURATION ms

    return () => clearTimeout(startExit);
  }, []);

  useEffect(() => {
    if (exiting) {
      const removeFromDOM = setTimeout(() => {
        setShouldRender(false);
      }, EXIT_DURATION); // after swipe-up animation duration

      return () => clearTimeout(removeFromDOM);
    }
  }, [exiting]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          key="preloader"
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: EXIT_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
        >
          <video
            src={PreloaderWebm}
            autoPlay
            muted
            playsInline
            loop
            className="w-96 h-96 object-contain pointer-events-none select-none"
          />
          {/*
          // OPTIONAL:
          // You can add text or branding here as overlay inside the motion.div
          // <h1 className="absolute text-white text-2xl">Loading...</h1>
          */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
