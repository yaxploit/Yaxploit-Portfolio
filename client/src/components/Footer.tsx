/**
 * Footer Component
 * 
 * This component renders the website footer with:
 * - Developer credit and copyright information
 * - Social media links with icons
 * 
 * The copyright year is dynamically generated based on the current date.
 */

import { Link } from "wouter";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>Designed and Developed by Yaxploit</p>
            <p className="text-gray-500 text-sm">Copyright © {currentYear} Yaxploit</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/yaxploit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/yaxploit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yash-gaikwad-634438289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/yaxploit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
