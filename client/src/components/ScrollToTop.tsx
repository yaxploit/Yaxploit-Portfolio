import { useScrollToTop } from "@/hooks/useScrollToTop";

/**
 * ScrollToTop Component
 * 
 * A utility component that handles scroll restoration on route changes.
 * This component doesn't render anything visible but provides the scroll
 * behavior functionality through the useScrollToTop hook.
 * 
 * Usage:
 * Place this component at the top level of your app, inside your router
 * but outside of your main content area.
 * 
 * @example
 * ```tsx
 * <App>
 *   <ScrollToTop />
 *   <MainContent />
 * </App>
 * ```
 */
export const ScrollToTop = () => {
  useScrollToTop();
  return null;
}; 