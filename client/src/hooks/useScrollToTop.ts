import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Hook to handle automatic scroll restoration on route changes
 * 
 * This hook ensures that when navigating between routes:
 * 1. The scroll position is immediately reset to the top
 * 2. Any browser scroll position restoration is prevented
 * 3. The scroll reset is enforced even if the browser tries to restore position
 * 
 * Implementation details:
 * - Uses immediate scrollTo for fast response
 * - Uses requestAnimationFrame as a backup to prevent browser scroll restoration
 * - Triggers on every route change via useLocation hook
 * 
 * @returns void
 */
export const useScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Immediate scroll reset
    window.scrollTo(0, 0);
    
    // Backup scroll reset to prevent browser scroll restoration
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [location]);
}; 