/**
 * Footer Component
 * 
 * This component renders the website footer with developer credit and copyright information.
 * The copyright year is dynamically generated based on the current date.
 */

import { motion } from 'framer-motion';
import { Link } from 'wouter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8 border-t border-accent/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Yash Gaikwad. All rights reserved.
          </div>
          
          <nav className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-accent text-sm transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
