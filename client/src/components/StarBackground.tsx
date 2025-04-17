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
    const starCount = 200; // Increased star count for more density
    const shootingStarCount = 5; // More shooting stars in queue
    
    // Clear existing stars
    container.innerHTML = '';
    
    // Create regular twinkling stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Randomize star size and brightness
      const size = Math.random() * 2.5 + 0.5; // 0.5px to 3px
      const brightness = Math.random() * 0.3 + 0.2; // 0.2 to 0.5 opacity
      
      // Apply styles
      Object.assign(star.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'white',
        borderRadius: '50%',
        opacity: `${brightness}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`,
        boxShadow: size > 2 ? '0 0 2px 1px rgba(255, 255, 255, 0.3)' : 'none', // Glow for larger stars
      });
      
      container.appendChild(star);
    }
    
    // Create shooting stars that appear at random intervals
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      
      // Random position on screen - can start from different parts (not just top)
      const randomPosition = Math.random();
      const startingX = Math.random() * 70 + 15; // 15-85% of screen width
      const startingY = randomPosition < 0.6 ? Math.random() * 30 : 0; // 60% chance to start from top 30% of screen
      
      // Random travel distance - not always full screen
      const travelDistance = Math.random() * 50 + 20; // 20-70% of screen height
      const endY = Math.min(100, startingY + travelDistance);
      
      // Random angle for diagonal movement
      const angle = Math.random() * 35 + 10; // 10-45 degrees 
      
      // Direction of travel (left or right)
      const direction = Math.random() > 0.5 ? 1 : -1;
      
      // Calculate end position based on angle and direction
      const endX = startingX + (angle / 2) * direction;
      
      // Random tail length
      const tailLength = Math.random() * 20 + 10; // 10-30px
      
      // Random brightness 
      const brightness = Math.random() * 0.4 + 0.6; // 0.6-1.0
      
      // Style the shooting star
      Object.assign(shootingStar.style, {
        position: 'absolute',
        width: '2px',
        height: '2px',
        backgroundColor: 'white',
        boxShadow: `0 0 3px 1px rgba(255, 255, 255, ${brightness * 0.6})`,
        borderRadius: '50%',
        left: `${startingX}%`,
        top: `${startingY}%`,
        opacity: '0',
        transform: direction > 0 ? 'rotate(45deg)' : 'rotate(135deg)', // Adjust angle based on direction
        zIndex: '1',
      });
      
      // Append to container
      container.appendChild(shootingStar);
      
      // Random duration for animation
      const duration = 700 + Math.random() * 1300; // 0.7-2 seconds
      
      // Add animation with keyframes for shooting star effect
      shootingStar.animate([
        { // Start state
          opacity: 0,
          left: `${startingX}%`,
          top: `${startingY}%`,
          boxShadow: `0 0 3px 1px rgba(255, 255, 255, ${brightness * 0.2})`,
        },
        { // Mid state (visible, trailing)
          opacity: brightness,
          left: `${(startingX + endX) / 2}%`,
          top: `${(startingY + endY) / 2}%`,
          boxShadow: `0 0 5px 2px rgba(255, 255, 255, ${brightness * 0.7}), 
                     0 0 ${tailLength}px ${tailLength/2}px rgba(255, 255, 255, ${brightness * 0.5})`,
        },
        { // End state
          opacity: 0,
          left: `${endX}%`,
          top: `${endY}%`,
          boxShadow: `0 0 3px 1px rgba(255, 255, 255, ${brightness * 0.2})`,
        }
      ], {
        duration: duration,
        easing: 'ease-out',
        fill: 'forwards'
      });
      
      // Remove the shooting star after animation
      setTimeout(() => {
        if (container.contains(shootingStar)) {
          container.removeChild(shootingStar);
        }
      }, duration + 100);
    };
    
    // Regularly create shooting stars at a more frequent interval
    const createShootingStarsRegularly = () => {
      // Create initial shooting stars
      for (let i = 0; i < shootingStarCount; i++) {
        setTimeout(() => {
          createShootingStar();
        }, Math.random() * 2000); // Spread initial stars over 2 seconds
      }
      
      // Set up regular interval for new shooting stars (every 3-4 seconds)
      setInterval(() => {
        // Only create a shooting star 80% of the time
        if (Math.random() < 0.8) {
          createShootingStar();
        }
      }, 3000 + Math.random() * 1000); // 3-4 second interval
    };
    
    // Start the shooting star creation
    createShootingStarsRegularly();
    
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
