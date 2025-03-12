export interface Blog {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
  url: string;
}

export const blogs: Blog[] = [
  {
    title: "Understanding Cross-Site Scripting (XSS) Attacks",
    description: "A detailed exploration of XSS vulnerabilities, detection methods, and prevention techniques for web applications.",
    image: "https://img.freepik.com/free-vector/cyber-attack-concept-illustration_114360-1538.jpg",
    tags: ["Web Security", "XSS", "OWASP"],
    date: "March 5, 2025",
    readTime: "8 min read",
    url: "https://blog.yaxploit.com/understanding-xss-attacks",
  },
  {
    title: "SQL Injection: From Basic to Advanced Exploitation",
    description: "Learn how SQL injection attacks work, common vulnerability patterns, and implementing parameterized queries for protection.",
    image: "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg",
    tags: ["SQL Injection", "Database Security", "Web Exploitation"],
    date: "February 18, 2025",
    readTime: "12 min read",
    url: "https://blog.yaxploit.com/sql-injection-exploitation",
  },
  {
    title: "Secure Code Review: Finding Security Flaws Before Attackers",
    description: "A methodical approach to identifying security vulnerabilities during code review with practical examples and checklists.",
    image: "https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865392.jpg",
    tags: ["Secure Coding", "Code Review", "DevSecOps"],
    date: "January 25, 2025",
    readTime: "10 min read",
    url: "https://blog.yaxploit.com/secure-code-review",
  },
  {
    title: "Building Effective Security Headers for Web Applications",
    description: "How to implement and configure HTTP security headers to protect against common web vulnerabilities and attacks.",
    image: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
    tags: ["Web Security", "HTTP Headers", "CSP"],
    date: "January 10, 2025",
    readTime: "7 min read",
    url: "https://blog.yaxploit.com/security-headers",
  },
  {
    title: "Bug Bounty Hunting: From Beginner to Pro",
    description: "My journey into bug bounty hunting, methodologies for finding high-impact vulnerabilities, and tips for success in bounty programs.",
    image: "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg",
    tags: ["Bug Bounty", "Ethical Hacking", "Vulnerability Disclosure"],
    date: "December 15, 2024",
    readTime: "15 min read",
    url: "https://blog.yaxploit.com/bug-bounty-hunting",
  },
];
