/**
 * Tool Interface
 * 
 * Defines the structure for penetration testing tools with name and icon properties.
 * Icons use react-icons/si for consistent styling across the site.
 */
interface Tool {
  name: string;   // Display name of the tool
  icon: string;   // Icon identifier from react-icons/si
}

/**
 * Penetration Testing Tools Array
 * 
 * This array contains all the security tools displayed in the "Penetration Testing Arsenal" section.
 * Each tool has a name and an icon from the Simple Icons collection.
 * 
 * Tools are organized by their primary purpose:
 * - Operating Systems
 * - Reconnaissance Tools
 * - Scanning & Enumeration
 * - Exploitation Frameworks
 * - Web Application Testing
 * - Password & Crypto Tools
 * - Network Tools
 * - Reverse Engineering Tools
 * - Post-Exploitation
 * 
 * To add a new tool:
 * 1. Find an appropriate icon from https://react-icons.github.io/react-icons/icons?name=si
 * 2. Add a new object with name and icon properties in the appropriate category
 */
export const tools: Tool[] = [
  // Operating Systems & Distributions
  {
    name: "Kali Linux",
    icon: "SiKalilinux",
  },
  {
    name: "Parrot OS",
    icon: "SiLinux",
  },
  
  // Exploitation Frameworks
  {
    name: "Metasploit",
    icon: "SiRapidapi",
  },
  {
    name: "Cobalt Strike",
    icon: "SiCloudbees",
  },
  
  // Web Application Testing
  {
    name: "Burp Suite",
    icon: "SiPortswigger",
  },
  {
    name: "OWASP ZAP",
    icon: "SiOwasp",
  },
  {
    name: "Nikto",
    icon: "SiWebmoney",
  },
  {
    name: "SQLmap",
    icon: "SiSqlite",
  },
  
  // Network Tools
  {
    name: "Wireshark",
    icon: "SiWireshark",
  },
  {
    name: "Nmap",
    icon: "SiGnuprivacyguard",
  },
  {
    name: "Netcat",
    icon: "SiNintendonetwork",
  },
  {
    name: "Aircrack-ng",
    icon: "SiWifi",
  },
  
  // Password & Crypto Tools
  {
    name: "John the Ripper",
    icon: "SiOpenssl",
  },
  {
    name: "Hashcat",
    icon: "SiHackaday",
  },
  {
    name: "Hydra",
    icon: "SiProxmox",
  },
  
  // Vulnerability Scanners
  {
    name: "Nessus",
    icon: "SiOpenbugbounty",
  },
  {
    name: "OpenVAS",
    icon: "SiOpensource",
  },
  
  // Reverse Engineering Tools
  {
    name: "Ghidra",
    icon: "SiReverbnation",
  },
  {
    name: "IDA Pro",
    icon: "SiRedhat",
  },
  {
    name: "Radare2",
    icon: "SiReact",
  },
  
  // Post-Exploitation
  {
    name: "Mimikatz",
    icon: "SiMicrosoftazure",
  },
  {
    name: "Empire",
    icon: "SiEmpire",
  },
  
  // Mobile Security
  {
    name: "MobSF",
    icon: "SiAndroid",
  },
  {
    name: "Frida",
    icon: "SiIos",
  },
];
