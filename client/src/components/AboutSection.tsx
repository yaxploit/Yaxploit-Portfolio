import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaLightbulb, FaRocket, FaDumbbell } from 'react-icons/fa';
import { 
  ShieldAlert, Newspaper, CupSoda, Trophy, Bug, Terminal, 
  Shield, Code, Cloud, Lock, Network, Wifi, FileText, Book,
  Award, Briefcase, Calendar, GraduationCap, Clock, Building
} from "lucide-react";
import SkillCard from "@/components/SkillCard";
import ToolCard from "@/components/ToolCard";
import CodeCalendar from "@/components/CodeCalendar";
import { skills } from "@/data/skills";
import { tools } from "@/data/tools";
import yaxploitImg from "@/assets/yaxploit.jpg";
import { useState } from 'react';

const AboutSection = () => {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const certifications = [{
    id: 'google-cert',
    title: 'Google CyberSecurity',
    subtitle: 'Google Cybersecurity Professional Certificate.',
    issued: 'March 2023',
    description: 'Google Cybersecurity Professional Certificate: A comprehensive certification demonstrating practical skills in securing systems, networks, and applications through hands-on cybersecurity training and real-world scenarios.',
    skills: [
      'Network Security',
      'Incident Response',
      'Threat Analysis',
      'Vulnerability Assessment',
      'SIEM',
      'Security Operations',
      'Risk Management',
    ],
    link: 'https://www.credly.com/badges/your-certificate-link',
    icon: <Award className="text-primary h-10 w-10 flex-shrink-0" />,
  },
  {
    id: 'nptl-cert',
    title: 'NPTL CyberSecurity',
    subtitle: 'NPTL Practical Cybersecurity For professionals.',
    issued: 'March 2023',
    description: 'Google Cybersecurity Professional Certificate: A comprehensive certification demonstrating practical skills in securing systems, networks, and applications through hands-on cybersecurity training and real-world scenarios.',
    skills: [
      'Threat Modeling & Risk Assessment',
      'Practical Incident Response & Handling',
      'Threat Analysis',
      'Real-world Vulnerability Management & Mitigation',
      'Applied Network Security & Defensive Architecture',
      'Security Posture Evaluation & Hardening Strategies',
      'Exposure to Industry-grade Cybersecurity Tools & Frameworks',
    ],
    link: 'https://www.credly.com/badges/your-certificate-link',
    icon: <Award className="text-primary h-10 w-10 flex-shrink-0" />,
  },
  

  {
    id: 'More Certifications',
    title: 'Udemy, Coursera, HackTheBox, TryHackMe.',
    subtitle: 'ongoing..',
    issued: '',
    description: 'I have also completed several other cybersecurity certifications that strengthened my foundational and applied skills. However, I prioritize showcasing only select, impactful certifications relevant to my current offensive and defensive security focus',
    skills: [],
    link: '',
    icon: null,
  },

  {
    id: 'more-cert',
    title: 'Upcoming Certifications',
    subtitle: 'Coming Soon...',
    issued: '',
    description: 'Currently honing my skills in cybersecurity and working towards adding more certifications to my gallery in the near future.',
    skills: [],
    link: '',
    icon: null,
  }];

  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Page title */}
        <h2 className="text-3xl font-bold text-center mb-16">
          Know Who <span className="text-primary">I'M</span>
        </h2>

        {/* Introduction section with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left column: Text introduction */}
          <div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Hi Everyone, I am{" "}
                <span className="text-primary font-medium">Yash Gaikwad (Yaxploit)</span> from{" "}
                <span className="text-primary font-medium">sangli, Maharashtra, India</span>.
              </p>
              <p className="text-gray-300">
                I am currently working as a <span className="text-primary font-medium">Cybersecurity Researcher & Penetration Tester</span>, with 
                a focus on identifying vulnerabilities in web applications and network infrastructure.
              </p>

              {/* Areas of expertise */}
              <p className="text-gray-300 mt-6">
                My areas of expertise include:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Bug className="text-primary h-5 w-5" /> Web Application Security
                </li>
                <li className="flex items-center gap-2">
                  <ShieldAlert className="text-primary h-5 w-5" /> Penetration Testing
                </li>
                <li className="flex items-center gap-2">
                  <Code className="text-primary h-5 w-5" /> Secure Code Reviews
                </li>
                <li className="flex items-center gap-2">
                  <Terminal className="text-primary h-5 w-5" /> Script Development
                </li>
              </ul>

              {/* Personal interests */}
              <p className="text-gray-300 mt-6">
                When I'm not hunting for vulnerabilities, I enjoy:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Trophy className="text-primary h-5 w-5" /> Participating in CTF competitions
                </li>
                <li className="flex items-center gap-2">
                  <Newspaper className="text-primary h-5 w-5" /> Writing security research articles
                </li>
                <li className="flex items-center gap-2">
                  <CupSoda className="text-primary h-5 w-5" /> Mentoring aspiring security professionals
                </li>
                <li className="flex items-center gap-2">
                  <Book className="text-primary h-5 w-5" /> Speaking at security conferences
                </li>
                <li className="flex items-center gap-2">
                  <FaDumbbell className="text-primary h-5 w-5" /> Powerlifting
                </li>
              </ul>

              {/* Quote */}
              <p className="text-gray-300 mt-6 italic">
                "If you think security is expensive, try a breach."
                <span className="block mt-1 text-right text-primary">— Yaxploit</span>
              </p>
            </div>
          </div>

          {/* Right column: Profile image with hover effect */}
          <div className="flex justify-center">
            <div className="relative max-w-md overflow-hidden rounded-lg shadow-2xl group">
              <div className="relative w-fit after:absolute after:inset-0 after:bg-gradient-to-br after:from-black/40 after:via-transparent after:to-black/40 after:rounded-lg after:pointer-events-none">
                <img
                  src={yaxploitImg}
                  alt="Yash Gaikwad"
                  className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-4 border-primary/40 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2 hover:brightness-110 hover:contrast-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-bold text-lg">Yash Gaikwad</p>
                  <p className="text-sm text-gray-300">Cybersecurity Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Skillset Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Security <span className="text-primary">Skillset</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            My comprehensive cybersecurity expertise spans across multiple domains, programming languages, and security frameworks that allow me to tackle complex security challenges.
          </p>

          {/* Core Security Domains */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <Lock className="text-primary h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Application Security</h3>
              <p className="text-gray-400 mb-4">Expertise in identifying and remediating vulnerabilities in web and mobile applications.</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>OWASP Top 10 vulnerabilities</li>
                <li>Secure coding practices</li>
                <li>API security testing</li>
                <li>Static & dynamic analysis</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <Network className="text-primary h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Network Security</h3>
              <p className="text-gray-400 mb-4">In-depth knowledge of network protocols and infrastructure security assessment.</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Network architecture review</li>
                <li>Firewall configuration audit</li>
                <li>Traffic analysis</li>
                <li>Secure network design</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <Wifi className="text-primary h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wireless Security</h3>
              <p className="text-gray-400 mb-4">Specialized in securing wireless networks and identifying RF vulnerabilities.</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>WiFi security assessments</li>
                <li>Bluetooth vulnerabilities</li>
                <li>Rogue access point detection</li>
                <li>Wireless intrusion prevention</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            I continuously update my knowledge and skills through industry-recognized certifications that validate my expertise in various cybersecurity domains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 items-start">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className={`card-hover-effect glow-border bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                  expandedCert === cert.id ? 'shadow-2xl scale-[1.03]' : ''
                }`}
                onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
              >
                <div className="flex items-start gap-4">
                  {cert.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-primary text-sm">{cert.subtitle}</p>
                    {cert.issued && (
                      <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>Issued: {cert.issued}</span>
                      </div>
                    )}
                    {expandedCert === cert.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <p className="mt-3 text-gray-400">{cert.description}</p>
                        {cert.skills.length > 0 && (
                          <>
                            <h4 className="text-sm font-semibold text-primary mb-2 mt-4">Skills Gained:</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {cert.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">{skill}</span>
                              ))}
                            </div>
                          </>
                        )}
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium mt-2"
                            aria-label="View Certificate"
                          >
                            View Certificate
                          </a>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Penetration Testing Arsenal */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Penetration Testing <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            My toolbox contains specialized security tools for every phase of security testing, from reconnaissance to exploitation and post-exploitation.
          </p>

          {/* Testing Methodology */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-card p-4 rounded-lg border border-primary/20 hover:shadow-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="text-primary font-bold mb-2">1. Reconnaissance</div>
              <p className="text-gray-400 text-sm">Information gathering and footprinting to map the attack surface</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-primary/20 hover:shadow-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="text-primary font-bold mb-2">2. Scanning</div>
              <p className="text-gray-400 text-sm">Identifying live systems, open ports, services, and potential vulnerabilities</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-primary/20 hover:shadow-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="text-primary font-bold mb-2">3. Exploitation</div>
              <p className="text-gray-400 text-sm">Leveraging discovered vulnerabilities to gain unauthorized access</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-primary/20 hover:shadow-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="text-primary font-bold mb-2">4. Post-Exploitation</div>
              <p className="text-gray-400 text-sm">Privilege escalation, lateral movement, and data exfiltration testing</p>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                icon={tool.icon}
                showName={tool.name === "Kali Linux"}
              />
            ))}
          </div>
        </div>

        {/* Hacking Activity */}
        <div className="mb-2">
          <h2 className="text-3xl font-bold text-center mb-6">
            Hacking <span className="text-primary">Activity</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            My continuous commitment to security research and contribution to open-source security projects.
          </p>
          
          {/* Activity Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="card-hover-effect glow-border bg-card p-6 rounded-lg border border-primary/20 text-center">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-gray-300 font-medium group-hover:text-primary transition-colors">CVEs Discovered</div>
              <p className="text-gray-400 text-sm mt-2">Vulnerabilities found and reported to vendors</p>
            </div>
            
            <div className="card-hover-effect glow-border bg-card p-6 rounded-lg border border-primary/20 text-center">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">3+</div>
              <div className="text-gray-300 font-medium group-hover:text-primary transition-colors">Bug Bounties</div>
              <p className="text-gray-400 text-sm mt-2">Successfully submitted and rewarded vulnerabilities</p>
            </div>
            
            <div className="card-hover-effect glow-border bg-card p-6 rounded-lg border border-primary/20 text-center">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-gray-300 font-medium group-hover:text-primary transition-colors">CTF Competitions</div>
              <p className="text-gray-400 text-sm mt-2">Participated in global capture the flag events</p>
            </div>
            
            <div className="card-hover-effect glow-border bg-card p-6 rounded-lg border border-primary/20 text-center">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">5+</div>
              <div className="text-gray-300 font-medium group-hover:text-primary transition-colors">Open Source Tools</div>
              <p className="text-gray-400 text-sm mt-2">Security tools published on GitHub</p>
            </div>
          </div>

          {/* Calendar with commits */}
          <div className="bg-card p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-medium mb-6 text-center">Hacking Activity Calendar</h3>
            <CodeCalendar />
            <p className="text-center text-gray-400 text-sm mt-6">
              Each block represents my daily contributions to security projects and research
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 