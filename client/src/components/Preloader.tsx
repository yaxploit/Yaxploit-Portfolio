/**
 * Preloader Component
 * 
 * This component displays a loading animation when the site is first accessed.
 * It includes a custom hexagon logo and a typed text animation.
 * The preloader automatically disappears after a set time.
 */
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        {/* Hexagon Logo */}
        <div className="relative w-32 h-32 mb-8">
          {/* Container for both elements */}
          <div className="relative w-full h-full">
            {/* Rotating Hexagon Shape */}
            <svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-full h-full animate-spin-slow">
              <path 
                d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" 
                fill="transparent"
                stroke="#a78bfa" 
                strokeWidth="5"
              />
            </svg>
            
            {/* Non-rotating Y Letter */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-6xl font-bold text-[#a78bfa]">Y</span>
            </div>
          </div>
        </div>
        
        {/* Security-themed text that appears letter by letter */}
        <div className="mt-4 text-xl text-[#a78bfa] font-mono">
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">
            YAXPLOIT SEC
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;