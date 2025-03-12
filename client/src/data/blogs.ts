/**
 * Blog Interface
 * 
 * Defines the structure for blog and research post data
 */
export interface Blog {
  title: string;       // Title of the blog post
  description: string; // Summary of the content
  image: string;       // URL to the featured image
  tags: string[];      // Array of related topic tags
  date: string;        // Publication date
  readTime: string;    // Estimated reading time
  url: string;         // URL to the full article
  category: "blog" | "research"; // Type of content (blog or research)
}

/**
 * Blog Data Array 
 * 
 * This array contains all blog posts that will be displayed on the site.
 * Each blog object has the following properties:
 * - title: The title of the blog post
 * - description: A brief summary of the content
 * - image: URL to the featured image
 * - tags: Array of relevant topic tags
 * - date: Publication date
 * - readTime: Estimated time to read the article
 * - url: Link to the full blog post
 * - category: Either "blog" or "research" to determine which tab it appears in
 */
export const blogs: Blog[] = [
  // Blog Posts
  {
    title: "Understanding Cross-Site Scripting (XSS) Attacks",
    description: "A detailed exploration of XSS vulnerabilities, detection methods, and prevention techniques for web applications.",
    image: "https://img.freepik.com/free-vector/cyber-attack-concept-illustration_114360-1538.jpg",
    tags: ["Web Security", "XSS", "OWASP"],
    date: "March 5, 2025",
    readTime: "8 min read",
    url: "https://blog.yaxploit.com/understanding-xss-attacks",
    category: "blog"
  },
  {
    title: "SQL Injection: From Basic to Advanced Exploitation",
    description: "Learn how SQL injection attacks work, common vulnerability patterns, and implementing parameterized queries for protection.",
    image: "https://img.freepik.com/free-vector/malware-attack-concept-illustration_114360-1913.jpg",
    tags: ["SQL Injection", "Database Security", "Web Exploitation"],
    date: "February 18, 2025",
    readTime: "12 min read",
    url: "https://blog.yaxploit.com/sql-injection-exploitation",
    category: "blog"
  },
  {
    title: "Secure Code Review: Finding Security Flaws Before Attackers",
    description: "A methodical approach to identifying security vulnerabilities during code review with practical examples and checklists.",
    image: "https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865392.jpg",
    tags: ["Secure Coding", "Code Review", "DevSecOps"],
    date: "January 25, 2025",
    readTime: "10 min read",
    url: "https://blog.yaxploit.com/secure-code-review",
    category: "blog"
  },
  {
    title: "Building Effective Security Headers for Web Applications",
    description: "How to implement and configure HTTP security headers to protect against common web vulnerabilities and attacks.",
    image: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
    tags: ["Web Security", "HTTP Headers", "CSP"],
    date: "January 10, 2025",
    readTime: "7 min read",
    url: "https://blog.yaxploit.com/security-headers",
    category: "blog"
  },
  {
    title: "Bug Bounty Hunting: From Beginner to Pro",
    description: "My journey into bug bounty hunting, methodologies for finding high-impact vulnerabilities, and tips for success in bounty programs.",
    image: "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg",
    tags: ["Bug Bounty", "Ethical Hacking", "Vulnerability Disclosure"],
    date: "December 15, 2024",
    readTime: "15 min read",
    url: "https://blog.yaxploit.com/bug-bounty-hunting",
    category: "blog"
  },
  
  // Research Papers
  {
    title: "Analysis of Zero-Day Vulnerabilities in IoT Devices",
    description: "An in-depth research paper examining recent zero-day vulnerabilities discovered in popular IoT devices and their implications.",
    image: "https://img.freepik.com/free-vector/internet-things-concept-illustration_114360-2123.jpg",
    tags: ["IoT Security", "Zero-Day", "Research"],
    date: "March 1, 2025",
    readTime: "20 min read",
    url: "https://research.yaxploit.com/iot-zeroday-analysis",
    category: "research"
  },
  {
    title: "Forensic Analysis of Advanced Persistent Threats",
    description: "A comprehensive methodology for detecting and analyzing APT activities with case studies from recent high-profile breaches.",
    image: "https://img.freepik.com/free-vector/cyber-security-concept-with-people_23-2148530843.jpg",
    tags: ["APT", "Digital Forensics", "Threat Intelligence"],
    date: "February 10, 2025",
    readTime: "25 min read",
    url: "https://research.yaxploit.com/apt-forensic-analysis",
    category: "research"
  },
  {
    title: "Machine Learning Approaches to Malware Classification",
    description: "Exploring how machine learning algorithms can be used to improve malware detection rates and reduce false positives.",
    image: "https://img.freepik.com/free-vector/artificial-intelligence-concept-landing-page_52683-24662.jpg",
    tags: ["Machine Learning", "Malware Analysis", "AI Security"],
    date: "January 15, 2025",
    readTime: "18 min read",
    url: "https://research.yaxploit.com/ml-malware-classification",
    category: "research"
  },
  {
    title: "Exploiting and Mitigating Kernel Vulnerabilities",
    description: "Technical deep dive into Linux kernel exploitation techniques and developing effective mitigation strategies.",
    image: "https://img.freepik.com/free-vector/virus-disinfection-concept_23-2148481291.jpg",
    tags: ["Kernel Security", "Exploitation", "Linux"],
    date: "December 5, 2024",
    readTime: "30 min read",
    url: "https://research.yaxploit.com/kernel-vulnerability-research",
    category: "research"
  }
];
