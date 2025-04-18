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

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary transition hover:text-secondary cursor-pointer">
          <Link href="/">
            Yaxploit
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {routes.map((route) => (
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
          {/* GitHub link with icon */}
          <a
            href="https://github.com/yaxploit"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-primary transition-colors duration-300"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>

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
      </nav>

      {/* Mobile menu */}
      {isOpen && (
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
