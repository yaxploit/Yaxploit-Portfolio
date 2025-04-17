/**
 * StarBackground Component
 * 
 * This component creates a dynamic night sky background with:
 * - Random twinkling stars
 * - Occasional shooting stars that appear randomly
 * 
 * The animation is subtle, resembling a natural night sky.
 */
import { useEffect, useRef } from "react";

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starCount = 100;
    const shootingStarCount = 3; // Limited number of shooting stars
    
    // Clear existing stars
    container.innerHTML = '';
    
    // Create regular twinkling stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Apply styles
      Object.assign(star.style, {
        position: 'absolute',
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        backgroundColor: 'white',
        borderRadius: '50%',
        opacity: '0.2',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`,
      });
      
      container.appendChild(star);
    }
    
    // Create shooting stars that appear at random intervals
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      
      // Random starting position at top of screen with random angle
      const startingX = Math.random() * 100;
      const angle = Math.random() * 40 + 20; // 20-60 degrees
      
      // Calculate end position based on angle
      const endX = startingX + (angle / 2);
      
      // Style the shooting star
      Object.assign(shootingStar.style, {
        position: 'absolute',
        width: '2px',
        height: '2px',
        backgroundColor: 'white',
        boxShadow: '0 0 3px 1px rgba(255, 255, 255, 0.6)',
        borderRadius: '50%',
        left: `${startingX}%`,
        top: '0%',
        opacity: '0',
        transform: 'rotate(45deg) scale(1)',
        zIndex: '1',
      });
      
      // Append first to modify later with animation
      container.appendChild(shootingStar);
      
      // Add animation with keyframes for shooting star effect
      shootingStar.animate([
        { // Start state
          opacity: 0,
          left: `${startingX}%`,
          top: '0%',
          boxShadow: '0 0 3px 1px rgba(255, 255, 255, 0.1)',
          transform: 'rotate(45deg) scale(1)'
        },
        { // Mid state (visible, trailing)
          opacity: 1,
          left: `${(startingX + endX) / 2 + 5}%`,
          top: '50%',
          boxShadow: '0 0 5px 2px rgba(255, 255, 255, 0.7), 0 0 20px 5px rgba(255, 255, 255, 0.5)',
          transform: 'rotate(45deg) scale(1.5)'
        },
        { // End state
          opacity: 0,
          left: `${endX + 15}%`,
          top: '100%',
          boxShadow: '0 0 3px 1px rgba(255, 255, 255, 0.1)',
          transform: 'rotate(45deg) scale(1)'
        }
      ], {
        duration: 1500 + Math.random() * 1000, // 1.5-2.5 seconds
        easing: 'ease-out',
        fill: 'forwards'
      });
      
      // Remove the shooting star after animation
      setTimeout(() => {
        if (container.contains(shootingStar)) {
          container.removeChild(shootingStar);
        }
      }, 3000);
    };
    
    // Randomly create shooting stars
    const triggerShootingStars = () => {
      // Only create a shooting star 20% of the time to make them rare
      if (Math.random() < 0.2) {
        createShootingStar();
      }
      
      // Schedule next one at random interval (7-20 seconds)
      const nextDelay = 7000 + Math.random() * 13000;
      setTimeout(triggerShootingStars, nextDelay);
    };
    
    // Initial delays for the first few shooting stars
    for (let i = 0; i < shootingStarCount; i++) {
      setTimeout(triggerShootingStars, 3000 + i * 8000);
    }
    
    // Cleanup function
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarBackground;
