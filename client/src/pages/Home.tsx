import { Link } from "wouter";
import SocialLinks from "@/components/SocialLinks";
import Typewriter from 'typewriter-effect';
import { Shield, Lock, Terminal, Cpu, Bug } from "lucide-react";

// This is the Home page component with cybersecurity focus
const Home = () => {
  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">
              Hi There! <span className="wave">👋</span>
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              I'M <span className="text-primary">YASH GAIKWAD</span> <span className="text-primary text-2xl md:text-3xl">(yaxploit)</span>
            </h1>
            
            {/* Typewriter effect for different titles */}
            <h3 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 h-16">
              <Typewriter
                options={{
                  strings: [
                    "Cybersecurity Enthusiast",
                    "Bug Bounty Hunter",
                    "Web Security Researcher",
                    "Penetration Tester",
                    "CTF Player",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h3>

            <div className="mt-8">
              <p className="text-xl mb-6">
                LET ME <span className="text-primary">INTRODUCE</span> MYSELF
              </p>
              <p className="text-gray-300 mb-4">
                I'm passionate about finding vulnerabilities and helping secure the digital world. 🔐
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in <span className="text-primary">Web Application Security, Network Penetration, and Exploitation</span>
              </p>
              <p className="text-gray-300 mb-4">
                My areas of expertise include <span className="text-primary">OWASP Top 10</span>, 
                <span className="text-primary"> Social Engineering</span>, and 
                <span className="text-primary"> Security Assessment</span>.
              </p>
              <p className="text-gray-300 mb-8">
                I'm constantly expanding my skills in <span className="text-primary">Advanced Exploitation</span>, 
                <span className="text-primary"> Reverse Engineering</span>, and 
                <span className="text-primary"> Malware Analysis</span>
              </p>
            </div>

            {/* Social links section */}
            <div className="mt-10">
              <p className="text-xl mb-4 text-center lg:text-left">FIND ME ON</p>
              <p className="text-gray-400 mb-6 text-center lg:text-left">
                Feel free to{" "}
                <span className="text-primary cursor-pointer hover:underline">connect</span> with me
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* Cybersecurity themed image with hover effect */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-md hover:scale-105 transition-transform duration-300 shadow-xl">
              <img
                src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg"
                alt="Cybersecurity illustration"
                className="rounded-lg border-2 border-primary/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
