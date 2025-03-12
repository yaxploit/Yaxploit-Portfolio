/**
 * Skill Interface
 * 
 * Defines the structure for skill data with name and icon properties.
 * Icons use react-icons/si for consistent styling across the site.
 */
interface Skill {
  name: string;   // Display name of the skill
  icon: string;   // Icon identifier from react-icons/si
}

/**
 * Cybersecurity Skills Array
 * 
 * This array contains all the cybersecurity skills displayed on the About page.
 * Each skill has a name and an icon from the Simple Icons collection.
 * 
 * To add a new skill:
 * 1. Find an appropriate icon from https://react-icons.github.io/react-icons/icons?name=si
 * 2. Add a new object with name and icon properties
 */
export const skills: Skill[] = [
  // Programming Languages
  {
    name: "Python",
    icon: "SiPython",
  },
  {
    name: "Bash",
    icon: "SiBash",
  },
  {
    name: "JavaScript",
    icon: "SiJavascript",
  },
  {
    name: "C/C++",
    icon: "SiCplusplus",
  },
  {
    name: "PowerShell",
    icon: "SiPowershell",
  },
  {
    name: "Ruby",
    icon: "SiRuby",
  },
  
  // Operating Systems
  {
    name: "Linux",
    icon: "SiLinux",
  },
  {
    name: "Windows",
    icon: "SiWindows",
  },
  
  // Security Domains
  {
    name: "Web Security",
    icon: "SiWebmoney",
  },
  {
    name: "Network Security",
    icon: "SiWireshark",
  },
  {
    name: "Cloud Security",
    icon: "SiAmazonaws",
  },
  {
    name: "Mobile Security",
    icon: "SiAndroid",
  },
  {
    name: "IoT Security",
    icon: "SiHomeassistant",
  },
  
  // Frameworks & Standards
  {
    name: "OWASP",
    icon: "SiOwasp",
  },
  {
    name: "NIST",
    icon: "SiBookstack",
  },
  {
    name: "ISO 27001",
    icon: "SiIso",
  },
  
  // Security Testing Tools
  {
    name: "Burp Suite",
    icon: "SiPortswigger",
  },
  {
    name: "Metasploit",
    icon: "SiRapidapi",
  },
  
  // Attack Techniques
  {
    name: "SQL Injection",
    icon: "SiSqlite",
  },
  {
    name: "XSS",
    icon: "SiJavascript",
  },
  {
    name: "Social Engineering",
    icon: "SiPhishing",
  },
  
  // Security Environments
  {
    name: "Kali Linux",
    icon: "SiKalilinux",
  },
  {
    name: "Penetration Testing",
    icon: "SiHackaday",
  },
  {
    name: "CTF",
    icon: "SiHackthebox",
  },
];
