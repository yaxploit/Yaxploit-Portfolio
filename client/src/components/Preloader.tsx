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
        <div className="relative w-32 h-32 mb-8 animate-pulse">
          {/* Hexagon Shape */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path 
              d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" 
              fill="transparent"
              stroke="#42f5d7" 
              strokeWidth="3"
              className="animate-pulse"
            />
            {/* Y Letter */}
            <text 
              x="50" 
              y="62" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              fill="#42f5d7" 
              fontSize="40"
              fontWeight="bold"
            >
              Y
            </text>
          </svg>
        </div>
        
        {/* Security-themed text that appears letter by letter */}
        <div className="mt-4 text-xl text-[#42f5d7] font-mono">
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">
            YAXPLOIT SEC
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;