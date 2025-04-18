/**
 * Navbar Component
 * 
 * This component creates the main navigation bar that appears at the top of all pages.
 * It includes the logo/brand name, navigation links, and a star view toggle.
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Home, User, CodeXml, FileText, Newspaper, MessageSquare, Star } from "lucide-react";

/**
 * Navbar Component
 * 
 * This component creates the navigation bar at the top of all pages.
 * It includes:
 * - Logo/brand name linking to home page
 * - Navigation links to all main pages
 * - Mobile responsive design with hamburger menu
 * 
 * To add a new navigation link:
 * 1. Add a new entry to the routes array with path, label, and icon
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  // State to track if star view is active (only showing stars)
  const [isStarViewActive, setIsStarViewActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  /**
   * Navigation routes
   * Each object defines a navigation link with:
   * - path: URL path for the link
   * - label: Display text
   * - icon: Icon component to show before the label
   */
  const routes = [
    { path: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    { path: "/about", label: "About", icon: <User className="h-4 w-4" /> },
    { path: "/projects", label: "Projects", icon: <CodeXml className="h-4 w-4" /> },
    { path: "/resume", label: "Resume", icon: <FileText className="h-4 w-4" /> },
    { path: "/blogs", label: "Blogs", icon: <Newspaper className="h-4 w-4" /> },
    { path: "/contact", label: "Contact", icon: <MessageSquare className="h-4 w-4" /> },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  // Function to handle toggling star view mode
  const toggleStarView = () => {
    // Toggle the star view state
    setIsStarViewActive(!isStarViewActive);
    
    // Get all page content elements
    const mainContent = document.querySelector('main');
    const footer = document.querySelector('footer');
    
    if (mainContent && footer) {
      if (!isStarViewActive) {
        // If activating star view, hide content
        mainContent.style.opacity = '0';
        mainContent.style.pointerEvents = 'none';
        footer.style.opacity = '0';
        document.body.style.background = 'black'; // Set pure black background
      } else {
        // If deactivating star view, show content
        mainContent.style.opacity = '1';
        mainContent.style.pointerEvents = 'auto';
        footer.style.opacity = '1';
        document.body.style.backgroundImage = 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)'; // Restore gradient background
      }
    }
  };

  return (
    <>
      {/* Star View Overlay - only visible when star view is active */}
      {isStarViewActive && (
        <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
          <div className="text-center p-4 absolute top-24 bg-black/30 backdrop-blur-sm rounded-lg border border-primary/20">
            <p className="text-lg font-semibold text-primary">Star View Mode</p>
            <p className="text-sm text-primary/70 mt-2 font-light">Press the star icon again to exit</p>
          </div>
        </div>
      )}
      
      <header className={`sticky top-0 z-50 ${isStarViewActive ? '' : 'bg-card/80 backdrop-blur-md'} border-b border-gray-800`}>
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary transition hover:text-secondary cursor-pointer">
            <Link href="/">
              Yaxploit
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {!isStarViewActive && routes.map((route) => (
              <div 
                key={route.path} 
                className={`flex items-center gap-1 hover:text-primary transition cursor-pointer ${
                  isActive(route.path) ? "text-primary" : ""
                }`}
                onClick={() => {
                  closeMenu();
                }}
              >
                <Link href={route.path}>
                  <div className="flex items-center gap-1">
                    {route.icon} {route.label}
                  </div>
                </Link>
              </div>
            ))}
            
            {/* Star View Toggle Button */}
            <button
              onClick={toggleStarView}
              className={`text-gray-300 hover:text-primary transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center ${isStarViewActive ? 'bg-primary text-black' : ''}`}
              aria-label="Toggle Star View"
              title="Toggle Star View - see only the stars"
            >
              <Star size={20} />
            </button>
          </div>

          {!isStarViewActive && (
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          )}
          
          {/* Mobile Star View Button */}
          {isStarViewActive && (
            <button
              onClick={toggleStarView}
              className="md:hidden text-primary bg-black/50 p-2 rounded-full"
              aria-label="Exit Star View"
            >
              <Star size={20} />
            </button>
          )}
        </nav>

        {/* Mobile menu */}
        {isOpen && !isStarViewActive && (
          <div className="md:hidden bg-card border-t border-gray-800">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              {routes.map((route) => (
                <div
                  key={route.path}
                  className={`flex items-center gap-2 hover:text-primary transition cursor-pointer ${
                    isActive(route.path) ? "text-primary" : ""
                  }`}
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  <Link href={route.path}>
                    <div className="flex items-center gap-2">
                      {route.icon} {route.label}
                    </div>
                  </Link>
                </div>
              ))}
              
              {/* Mobile Star View Toggle */}
              <div 
                className="flex items-center gap-2 hover:text-primary transition cursor-pointer"
                onClick={toggleStarView}
              >
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" /> Star View
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
