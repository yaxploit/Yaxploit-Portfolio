import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { SiHackerone, SiBugcrowd, SiTryhackme } from "react-icons/si";

interface SocialLinksProps {
  className?: string;
  showText?: boolean;
}

const SocialLinks = ({ className = "", showText = false }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/soumyajit4419",
      icon: <Github />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/soumyajit4419",
      icon: <Twitter />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/soumyajit4419",
      icon: <Linkedin />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/soumyajit4419",
      icon: <Instagram />,
    },
    {
      name: "HackerOne",
      url: "https://hackerone.com/soumyajit4419",
      icon: <SiHackerone size={20} />,
    },
    {
      name: "BugCrowd",
      url: "https://bugcrowd.com/soumyajit4419",
      icon: <SiBugcrowd size={20} />,
    },
    {
      name: "TryHackMe",
      url: "https://tryhackme.com/p/soumyajit4419",
      icon: <SiTryhackme size={20} />,
    },
  ];

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all duration-300"
            aria-label={link.name}
          >
            {link.icon}
            {showText && <span className="ml-2">{link.name}</span>}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
