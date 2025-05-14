import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/blogs', label: 'Blogs' },
  { path: '/contact', label: 'Contact' },
];

const SideNavigation = () => {
  const [location] = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <ul className="space-y-4">
        {navItems.map((item) => (
          <motion.li
            key={item.path}
            whileHover={{ x: 5 }}
            className="relative"
          >
            <Link
              href={item.path}
              className={`block px-4 py-2 text-sm font-medium transition-colors ${
                location === item.path
                  ? 'text-accent'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              {location === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-r-full"
                />
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default SideNavigation; 