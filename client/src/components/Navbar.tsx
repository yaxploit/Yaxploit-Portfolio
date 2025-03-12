import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Home, User, CodeXml, FileText, Newspaper, Star } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const routes = [
    { path: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    { path: "/about", label: "About", icon: <User className="h-4 w-4" /> },
    { path: "/projects", label: "Projects", icon: <CodeXml className="h-4 w-4" /> },
    { path: "/resume", label: "Resume", icon: <FileText className="h-4 w-4" /> },
    { path: "/blogs", label: "Blogs", icon: <Newspaper className="h-4 w-4" /> },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary transition hover:text-secondary cursor-pointer">
          <Link href="/">
            Sb.
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
          <a
            href="https://github.com/soumyajit4419"
            target="_blank"
            rel="noreferrer"
            className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md flex items-center gap-1 transition duration-300"
          >
            <Star className="h-4 w-4" />
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
