export interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    title: "VulnScanner Pro",
    description: "An advanced web application vulnerability scanner built with Python and React. Features automated OWASP Top 10 detection, customizable scanning profiles, and detailed remediation guidance for security teams.",
    image: "https://img.freepik.com/free-vector/programming-code-icon-made-with-binary-code-coding-hacker-matrix-background-with-digits-1-0_127544-1141.jpg",
    githubUrl: "https://github.com/yaxploit/vulnscanner-pro",
    demoUrl: "https://vulnscanner.yaxploit.com",
  },
  {
    title: "SecureAuth Framework",
    description: "A comprehensive authentication security framework that implements multi-factor authentication, JWT token security, and protection against common authentication vulnerabilities like session hijacking and CSRF.",
    image: "https://img.freepik.com/free-vector/cyber-lock-security-concept-padlock-protection-access-with-privacy-data-illustration_175838-749.jpg",
    githubUrl: "https://github.com/yaxploit/secureauth-framework",
    demoUrl: "https://secureauth.yaxploit.com",
  },
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
];
