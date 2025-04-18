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
  Shield, Code, Cloud, Lock, Network, Wifi, FileText, Book,
  Award, Briefcase, Calendar, GraduationCap, Clock, Building
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

        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            I continuously update my knowledge and skills through industry-recognized certifications that validate my expertise in various cybersecurity domains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {/* OSCP Certification */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Award className="text-primary h-10 w-10 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">OSCP</h3>
                  <p className="text-primary text-sm">Offensive Security Certified Professional</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: March 2022</span>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Advanced penetration testing certification demonstrating practical skills in exploiting vulnerabilities and conducting security assessments.
                  </p>
                </div>
              </div>
            </div>

            {/* CEH Certification */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Award className="text-primary h-10 w-10 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">CEH</h3>
                  <p className="text-primary text-sm">Certified Ethical Hacker</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: August 2021</span>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Industry-standard certification covering a wide range of security concepts, tools, and techniques used in ethical hacking.
                  </p>
                </div>
              </div>
            </div>

            {/* CompTIA Security+ */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Award className="text-primary h-10 w-10 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">CompTIA Security+</h3>
                  <p className="text-primary text-sm">Security Certification</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: January 2021</span>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Foundation-level security certification validating the core skills required to perform security functions and pursue a career in IT security.
                  </p>
                </div>
              </div>
            </div>

            {/* CISSP (In progress) */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Award className="text-primary h-10 w-10 flex-shrink-0 opacity-70" />
                <div>
                  <h3 className="text-xl font-semibold">CISSP</h3>
                  <p className="text-primary text-sm">Certified Information Systems Security Professional</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>In Progress</span>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Advanced security certification covering the design, implementation, and management of cybersecurity programs.
                  </p>
                </div>
              </div>
            </div>

            {/* eJPT */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Award className="text-primary h-10 w-10 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">eJPT</h3>
                  <p className="text-primary text-sm">eLearnSecurity Junior Penetration Tester</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: May 2020</span>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Entry-level penetration testing certification covering basic IT, networking, and penetration testing concepts.
                  </p>
                </div>
              </div>
            </div>

            {/* AWS Security Specialist */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Award className="text-primary h-10 w-10 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">AWS Security Specialist</h3>
                  <p className="text-primary text-sm">Amazon Web Services</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: October 2022</span>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Specialization in securing cloud infrastructure and applications on the AWS platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            My career path in cybersecurity has allowed me to work with diverse organizations and tackle complex security challenges.
          </p>

          <div className="space-y-6">
            {/* Job 1 */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4">
                  <h3 className="text-xl font-semibold">Security Researcher</h3>
                  <p className="text-primary">CyberShield Inc.</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - Present</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm">
                    <Building className="h-4 w-4" />
                    <span>Mumbai, India</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Leading a team of 4 security analysts in conducting penetration tests for enterprise clients</li>
                    <li>Discovered and reported over 30 critical vulnerabilities in banking applications</li>
                    <li>Developed custom security tools for internal use and client assessments</li>
                    <li>Presented findings to executives and provided remediation guidance</li>
                    <li>Conducted security training sessions for development teams</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4">
                  <h3 className="text-xl font-semibold">Penetration Tester</h3>
                  <p className="text-primary">SecureNet Technologies</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>2020 - 2022</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm">
                    <Building className="h-4 w-4" />
                    <span>Pune, India</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Performed black-box and gray-box penetration tests for financial and healthcare clients</li>
                    <li>Specialized in web application security assessments and API testing</li>
                    <li>Created detailed reports with risk ratings and remediation recommendations</li>
                    <li>Assisted in developing the company's security testing methodology</li>
                    <li>Participated in security research initiatives and bug bounty programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4">
                  <h3 className="text-xl font-semibold">Security Analyst</h3>
                  <p className="text-primary">TechDefend Solutions</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>2018 - 2020</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm">
                    <Building className="h-4 w-4" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Monitored security incidents and alerts in a 24/7 SOC environment</li>
                    <li>Performed vulnerability assessments and basic penetration testing</li>
                    <li>Implemented SIEM solutions and created custom detection rules</li>
                    <li>Assisted with incident response and forensic investigations</li>
                    <li>Developed and maintained security documentation and procedures</li>
                  </ul>
                </div>
              </div>
            </div>
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
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">
            Hacking <span className="text-primary">Activity</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            My continuous commitment to security research and contribution to open-source security projects.
          </p>
          
          {/* Activity Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-primary mb-2">35+</div>
              <div className="text-gray-300 font-medium">CVEs Discovered</div>
              <p className="text-gray-400 text-sm mt-2">Vulnerabilities found and reported to vendors</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-300 font-medium">Bug Bounties</div>
              <p className="text-gray-400 text-sm mt-2">Successfully submitted and rewarded vulnerabilities</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-300 font-medium">CTF Competitions</div>
              <p className="text-gray-400 text-sm mt-2">Participated in global capture the flag events</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-gray-300 font-medium">Open Source Tools</div>
              <p className="text-gray-400 text-sm mt-2">Security tools published on GitHub</p>
            </div>
          </div>

          {/* Calendar with commits */}
          <div className="bg-card p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-medium mb-6 text-center">GitHub Contribution Calendar</h3>
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

export default About;
