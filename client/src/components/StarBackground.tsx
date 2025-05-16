/**
 * StarBackground Component
 * 
 * This component creates a dynamic night sky background with:
 * - Steady blinking stars
 * - Random shooting stars with tails
 */
import { useEffect, useRef, useCallback } from "react";
import { motion } from 'framer-motion';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const lastShootingStarTime = useRef<number>(0);

  class Star {
    baseX: number = 0;
    baseY: number = 0;
    x: number = 0;
    y: number = 0;
    size: number = 0;
    opacity: number = 0;
    blinkSpeed: number = 0;
    brightness: number = 0;
    phase: number = 0;

    constructor(canvas: HTMLCanvasElement) {
      this.baseX = Math.random() * canvas.width;
      this.baseY = Math.random() * canvas.height;
      this.x = this.baseX;
      this.y = this.baseY;
      this.size = Math.random() * 2 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.blinkSpeed = Math.random() * 0.03 + 0.02;
      this.brightness = Math.random() * 0.5 + 0.5;
      this.phase = Math.random() * Math.PI * 2;
    }

    update(time: number) {
      // Oscillation: opacity sine wave (twinkle in a wave pattern)
      const speed = 1.2; // Controls how fast the wave moves
      this.opacity = 0.5 + 0.5 * Math.sin(time * speed + this.phase);
      // Clamp opacity for safety
      this.opacity = Math.max(0.2, Math.min(1, this.opacity));
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2.5 // Increased glow radius
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * this.brightness})`);
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * this.brightness * 0.5})`); // Added middle gradient
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }

  class ShootingStar {
    x: number = 0;
    y: number = 0;
    speed: number = 0;
    length: number = 0;
    opacity: number = 0;
    angle: number = 0;

    constructor(canvas: HTMLCanvasElement) {
      // Start from random position on the top or right edge
      if (Math.random() > 0.5) {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.angle = Math.PI / 4 + (Math.random() * Math.PI / 4); // 45-90 degrees
      } else {
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.PI * 3/4 + (Math.random() * Math.PI / 4); // 135-180 degrees
      }
      
      this.speed = Math.random() * 15 + 10; // Faster speed for shooting stars
      this.length = Math.random() * 20 + 10; // Tail length
      this.opacity = 1;
    }

    update(canvas: HTMLCanvasElement) {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.opacity -= 0.02; // Fade out

      // Check if out of bounds
      return this.x < 0 || this.x > canvas.width || 
             this.y < 0 || this.y > canvas.height || 
             this.opacity <= 0;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x - Math.cos(this.angle) * this.length,
        this.y - Math.sin(this.angle) * this.length
      );
      
      const gradient = ctx.createLinearGradient(
        this.x, this.y,
        this.x - Math.cos(this.angle) * this.length,
        this.y - Math.sin(this.angle) * this.length
      );
      
      gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      // Lower device pixel ratio on mobile for better performance
      const isMobile = window.innerWidth < 768;
      const dpr = isMobile ? 1 : (window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform before scaling
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Fewer stars on mobile for smoother performance
      const baseDensity = isMobile ? 2500 : 1500;
      const starCount = Math.floor((rect.width * rect.height) / baseDensity);
      starsRef.current = Array.from({ length: starCount }, () => new Star(canvas));
      shootingStarsRef.current = [];
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear with a slight fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw regular stars
    const time = performance.now() / 1000;
    starsRef.current.forEach(star => {
      star.update(time);
      star.draw(ctx);
    });

    // Add new shooting star randomly
    const now = Date.now();
    const isMobile = window.innerWidth < 768;
    // Make shooting stars less frequent and slower on mobile
    const shootingStarChance = isMobile ? 0.04 : 0.15;
    const shootingStarInterval = isMobile ? 3000 : 1000;
    if (now - lastShootingStarTime.current > shootingStarInterval && Math.random() < shootingStarChance) {
      shootingStarsRef.current.push(new ShootingStar(canvas));
      lastShootingStarTime.current = now;
    }

    // Update and draw shooting stars
    shootingStarsRef.current = shootingStarsRef.current.filter(star => {
      const isOutOfBounds = star.update(canvas);
      if (!isOutOfBounds) {
        star.draw(ctx);
      }
      return !isOutOfBounds;
    });
    
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const cleanup = initCanvas();
    animate();

    return () => {
      cleanup?.();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initCanvas, animate]);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background: 'transparent'
      }}
    />
  );
};

export default StarBackground;
