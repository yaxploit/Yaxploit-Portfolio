/**
 * Preloader Component
 * 
 * This component displays a loading animation when the site is first accessed.
 * It includes an atom structure animation with the "Y" logo in the center.
 * The preloader automatically disappears after a set time.
 */
import { useState, useEffect } from 'react';

// Add animation keyframes to our CSS
const addKeyframes = () => {
  // If we've already added the style, don't add it again
  if (document.getElementById("atom-animations")) return;
  
  const style = document.createElement("style");
  style.id = "atom-animations";
  style.innerHTML = `
    @keyframes orbit1 {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes orbit2 {
      0% { transform: rotate(120deg); }
      100% { transform: rotate(480deg); }
    }
    @keyframes orbit3 {
      0% { transform: rotate(240deg); }
      100% { transform: rotate(600deg); }
    }
    @keyframes pulsate {
      0% { transform: scale(0.85); opacity: 0.6; }
      50% { transform: scale(1); opacity: 1; }
      100% { transform: scale(0.85); opacity: 0.6; }
    }
    @keyframes electron-move {
      0%, 100% { transform: translateX(-8px) translateY(-8px); }
      25% { transform: translateX(8px) translateY(-8px); }
      50% { transform: translateX(8px) translateY(8px); }
      75% { transform: translateX(-8px) translateY(8px); }
    }
  `;
  document.head.appendChild(style);
};

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add the keyframes for our atom animations
    addKeyframes();
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        {/* Atom Logo Structure */}
        <div className="relative w-40 h-40 mb-8">
          {/* Central nucleus with Y letter */}
          <div className="absolute top-1/2 left-1/2 w-20 h-20 -mt-10 -ml-10 bg-gray-800 rounded-full flex items-center justify-center animate-[pulsate_2s_ease-in-out_infinite]">
            <span className="text-6xl font-bold text-primary">Y</span>
          </div>
          
          {/* Orbital rings with electrons */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* First electron orbit */}
            <div className="absolute top-0 left-0 w-full h-full animate-[orbit1_3s_linear_infinite]">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/2 -ml-1.5 w-3 h-3 bg-primary rounded-full animate-[electron-move_2s_ease-in-out_infinite] shadow-[0_0_10px_2px_rgba(167,139,250,0.8)]"></div>
                <div className="absolute top-0 left-0 w-full h-full border-2 border-primary rounded-full opacity-70"></div>
              </div>
            </div>
            
            {/* Second electron orbit - rotated */}
            <div className="absolute top-0 left-0 w-full h-full animate-[orbit2_4s_linear_infinite]" style={{ transform: 'rotate(60deg)' }}>
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/2 -ml-1.5 w-3 h-3 bg-secondary rounded-full animate-[electron-move_2.5s_ease-in-out_infinite] shadow-[0_0_10px_2px_rgba(167,139,250,0.8)]"></div>
                <div className="absolute top-0 left-0 w-full h-full border-2 border-secondary rounded-full opacity-70"></div>
              </div>
            </div>
            
            {/* Third electron orbit - rotated differently */}
            <div className="absolute top-0 left-0 w-full h-full animate-[orbit3_5s_linear_infinite]" style={{ transform: 'rotate(120deg)' }}>
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/2 -ml-1.5 w-3 h-3 bg-primary rounded-full animate-[electron-move_3s_ease-in-out_infinite] shadow-[0_0_10px_2px_rgba(167,139,250,0.8)]"></div>
                <div className="absolute top-0 left-0 w-full h-full border-2 border-primary rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Security-themed text that appears letter by letter */}
        <div className="mt-4 text-xl text-primary">
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold">
            YAXPLOIT SEC
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;