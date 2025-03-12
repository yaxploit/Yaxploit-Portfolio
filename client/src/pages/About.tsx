/**
 * About Page Component
 * 
 * This page showcases Yash Gaikwad's (Yaxploit) background, skills, and expertise
 * in cybersecurity. It contains several sections:
 * 
 * 1. Personal introduction with background and expertise
 * 2. Security skillset with programming languages and security domains
 * 3. Penetration testing tools arsenal
 * 4. Coding/hacking activity calendar
 * 
 * The layout is responsive and uses a grid system that adjusts for different screen sizes.
 */

import SkillCard from "@/components/SkillCard";
import ToolCard from "@/components/ToolCard";
import CodeCalendar from "@/components/CodeCalendar";
import { skills } from "@/data/skills";
import { tools } from "@/data/tools";
import { 
  ShieldAlert, Newspaper, CupSoda, Trophy, Bug, Terminal, 
  Shield, Code, Cloud, Lock, Network, Wifi, FileText, Book
} from "lucide-react";

const About = () => {
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
                <span className="text-primary font-medium">Mumbai, India</span>.
              </p>
              <p className="text-gray-300">
                I am currently working as a <span className="text-primary font-medium">Cybersecurity Researcher & Penetration Tester</span>, with 
                a focus on identifying vulnerabilities in web applications and network infrastructure.
              </p>
              <p className="text-gray-300">
                I hold several industry certifications including <span className="text-primary font-medium">CEH (Certified Ethical Hacker)</span>, 
                <span className="text-primary font-medium"> OSCP (Offensive Security Certified Professional)</span>, and 
                <span className="text-primary font-medium"> CompTIA Security+</span>.
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
                  <Terminal className="text-primary h-5 w-5" /> Exploit Development
                </li>
                <li className="flex items-center gap-2">
                  <ShieldAlert className="text-primary h-5 w-5" /> Network Penetration Testing
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="text-primary h-5 w-5" /> Cloud Security Assessments
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-primary h-5 w-5" /> Security Architecture Design
                </li>
                <li className="flex items-center gap-2">
                  <Code className="text-primary h-5 w-5" /> Secure Code Reviews
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
              </ul>

              {/* Quote */}
              <p className="text-gray-300 mt-6 italic">
                "Security is not a product, but a process."
                <span className="block mt-1 text-right text-primary">— Yaxploit</span>
              </p>
            </div>
          </div>

          {/* Right column: Profile image with hover effect */}
          <div className="flex justify-center">
            <div className="relative max-w-md overflow-hidden rounded-lg shadow-2xl group">
              <img
                src="https://img.freepik.com/free-vector/information-security-concept-illustration_114360-1418.jpg"
                alt="Cybersecurity illustration"
                className="rounded-lg shadow-2xl border-2 border-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-bold text-lg">Yash Gaikwad</p>
                  <p className="text-sm text-gray-300">Cybersecurity Expert</p>
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
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">
            Hacking <span className="text-primary">Activity</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            My continuous commitment to security research and contribution to open-source security projects.
          </p>

          <CodeCalendar />
        </div>
      </div>
    </section>
  );
};

export default About;
