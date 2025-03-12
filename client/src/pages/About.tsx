import SkillCard from "@/components/SkillCard";
import ToolCard from "@/components/ToolCard";
import CodeCalendar from "@/components/CodeCalendar";
import { skills } from "@/data/skills";
import { tools } from "@/data/tools";
import { ShieldAlert, Newspaper, CupSoda, Trophy, Bug, Terminal } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Know Who <span className="text-primary">I'M</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
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
              </ul>

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
              </ul>

              <p className="text-gray-300 mt-6 italic">
                "Security is not a product, but a process."
                <span className="block mt-1 text-right text-primary">— Yaxploit</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative animate-float max-w-md hover:scale-105 transition-transform duration-300">
              <img
                src="https://img.freepik.com/free-vector/information-security-concept-illustration_114360-1418.jpg"
                alt="Cybersecurity illustration"
                className="rounded-lg shadow-2xl border-2 border-primary/30"
              />
            </div>
          </div>
        </div>

        {/* Security Skillset */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Security <span className="text-primary">Skillset</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Penetration Testing Arsenal */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Penetration Testing <span className="text-primary">Arsenal</span>
          </h2>

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
          <h2 className="text-3xl font-bold text-center mb-12">
            Hacking <span className="text-primary">Activity</span>
          </h2>

          <CodeCalendar />
        </div>
      </div>
    </section>
  );
};

export default About;
