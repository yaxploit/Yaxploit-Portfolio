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
        {/* Custom Y logo */}
        <div className="w-32 h-32 mb-4 flex items-center justify-center border-4 border-primary rounded-full">
          <span className="text-6xl font-bold text-primary animate-pulse">Y</span>
        </div>
        
        {/* Loading spinner */}
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-mono">
            Loading...
          </div>
        </div>
        
        {/* Security-themed text that appears letter by letter */}
        <div className="mt-6 text-xl text-primary font-mono">
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">
            YAXPLOIT SECURITY LABS
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;