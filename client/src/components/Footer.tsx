/**
 * Footer Component
 * 
 * This component renders the website footer with developer credit and copyright information.
 * The copyright year is dynamically generated based on the current date.
 */

import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p>Designed and Developed by Yaxploit</p>
            <p className="text-gray-500 text-sm">Copyright © {currentYear} Yaxploit</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
