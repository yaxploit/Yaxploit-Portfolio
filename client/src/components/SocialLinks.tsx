/**
 * SocialLinks Component
 * 
 * This component displays social media and hacking platform links.
 * Links open in a new tab when clicked.
 * 
 * The component can display icons only or icons with text labels.
 */
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    href: 'https://github.com/Yaxploit',
    label: 'GitHub'
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    href: 'https://linkedin.com/in/Yash-5gaikwad',
    label: 'LinkedIn'
  },
  {
    icon: <FaTwitter className="w-5 h-5" />,
    href: 'https://twitter.com/Yaxploit',
    label: 'Twitter'
  },
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    href: 'mailto:Yaxploit@tutamail.com',
    label: 'Email'
  }
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          className="p-3 rounded-full bg-background/50 border border-accent/20 hover:border-accent/40 text-accent hover:text-white transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
