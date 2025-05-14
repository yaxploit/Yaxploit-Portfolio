/**
 * Project Interface
 * 
 * Defines the structure for cybersecurity project data.
 * 
 * HOW TO USE:
 * - When adding a new project, copy an existing project object and modify its properties.
 * - Each project must have all of the properties defined below.
 * - Images can be stored in the /public folder or use external URLs (https://...).
 * - For local images, use the path like "/images/your-image.jpg".
 */
export interface Project {
  title: string;        // Name of the project (required)
  description: string;  // Brief description of what it does (required)
  image: string;        // URL to the project image (required)
  githubUrl: string;    // Link to the GitHub repository (required)
  demoUrl: string;      // Link to a live demo (required)
  technologies: string[]; // Array of technologies used in the project (required)
}

/**
 * Projects Data Array
 * 
 * This array contains all projects that will be displayed on the site.
 * Projects will be displayed in the order they appear here (first to last).
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy one of the existing project objects including the enclosing curly braces {}.
 * 2. Paste it where you want it to appear in the display order.
 * 3. Update all of the properties with your new project information.
 * 4. Make sure to add a comma after the closing brace if it's not the last project.
 * 
 * HOW TO REMOVE A PROJECT:
 * 1. Delete the entire project object including the enclosing curly braces {}.
 * 2. Make sure to remove any trailing comma or add a comma to the project before it if needed.
 * 
 * HOW TO EDIT A PROJECT:
 * 1. Simply find the project object you want to edit and update its properties.
 */
export const projects: Project[] = [
  {
    title: "Inspector",
    description: "An advanced web application vulnerability scanner built with Python and React. Features automated OWASP Top 10 detection, customizable scanning profiles, and detailed remediation guidance for security teams.",
    image: "/src/assets/inspector.jpg",
    githubUrl: "https://github.com/yaxploit/Inspector",
    demoUrl: "https://inspector-mu6h.onrender.com/",
    technologies: ["Python", "React", "OWASP", "Security"]
  },
  {
    title: "Mal_Scanner",
    description: "A Python-based signature malware scanner with a Tkinter GUI. It scans files using hash and pattern matching, detects known threats, and displays results in a simple, user-friendly interface. Supports custom signature databases and real-time scanning for lightweight threat detection.",
    image: "/src/assets/Mal_scanner.jpg",
    githubUrl: "https://github.com/yaxploit/Mal_scanner",
    demoUrl: "https://github.com/yaxploit/Mal_scanner",
    technologies: ["Python", "Tkinter", "Malware Analysis", "Security"]
  },


  /*

  {
    title: "NetworkMapperX",
    description: "An advanced network mapping and reconnaissance tool with stealth capabilities. Features port scanning, service detection, and vulnerability correlation in an intuitive dashboard interface.",
    image: "https://img.freepik.com/free-vector/futuristic-network-information-connection-structure-connecting-dots-lines-digital-data-visualization_127544-873.jpg",
    githubUrl: "https://github.com/yaxploit/networkmapperx",
    demoUrl: "https://networkmap.yaxploit.com",
  },

  {
    title: "WebSecFuzzer",
    description: "A specialized fuzzing tool for web applications that identifies security vulnerabilities through intelligent input mutation and response analysis. Helps discover XSS, SQLi, and business logic flaws.",
    image: "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg",
    githubUrl: "https://github.com/yaxploit/websecfuzzer",
    demoUrl: "https://fuzzer.yaxploit.com",
  },
  {
    title: "CryptoVault",
    description: "A secure password manager with military-grade encryption, zero-knowledge architecture, and breach detection. Protects sensitive credentials while providing convenient access across devices.",
    image: "https://img.freepik.com/free-vector/secure-data-concept-illustration_114360-778.jpg",
    githubUrl: "https://github.com/yaxploit/crypto-vault",
    demoUrl: "https://cryptovault.yaxploit.com",
  },
  {
    title: "MalwareAnalyzer",
    description: "A sandbox environment for safely analyzing malicious code. Features behavioral analysis, network traffic monitoring, and automated reporting of indicators of compromise (IOCs).",
    image: "https://img.freepik.com/free-vector/virus-disinfection-concept_23-2148481291.jpg",
    githubUrl: "https://github.com/yaxploit/malware-analyzer",
    demoUrl: "https://malware-lab.yaxploit.com",
  },
  {
    title: "SecureCodeTrainer",
    description: "An interactive training platform that teaches secure coding practices through real-world vulnerable code examples. Contains challenges for various languages and frameworks.",
    image: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg",
    githubUrl: "https://github.com/yaxploit/secure-code-trainer",
    demoUrl: "https://secure-training.yaxploit.com",
  },
  {
    title: "ThreatIntel Dashboard",
    description: "A centralized dashboard for threat intelligence gathering and analysis. Aggregates data from multiple sources and visualizes emerging threats with customizable risk scores.",
    image: "https://img.freepik.com/free-vector/gradient-infographic-dashboard-concept_52683-29182.jpg",
    githubUrl: "https://github.com/yaxploit/threat-intel-dashboard",
    demoUrl: "https://threatintel.yaxploit.com",
  },
  {
    title: "IoT Security Scanner",
    description: "A specialized tool for auditing IoT device security. Identifies insecure configurations, weak credentials, outdated firmware, and communication protocol vulnerabilities.",
    image: "https://img.freepik.com/free-vector/internet-things-concept-illustration_114360-2123.jpg",
    githubUrl: "https://github.com/yaxploit/iot-security-scanner",
    demoUrl: "https://iot-scanner.yaxploit.com",
  }, */
  

];

