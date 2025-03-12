import SkillCard from "@/components/SkillCard";
import ToolCard from "@/components/ToolCard";
import CodeCalendar from "@/components/CodeCalendar";
import { skills } from "@/data/skills";
import { tools } from "@/data/tools";
import { Gamepad, PencilLine, Plane } from "lucide-react";

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
                <span className="text-primary font-medium">Soumyajit Behera</span> from{" "}
                <span className="text-primary font-medium">Bhubaneswar, India</span>.
              </p>
              <p className="text-gray-300">
                I am currently employed as a software developer at Juspay.
              </p>
              <p className="text-gray-300">
                I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.
              </p>

              <p className="text-gray-300 mt-6">
                Apart from coding, some other activities that I love to do!
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Gamepad className="text-primary h-5 w-5" /> Playing Games
                </li>
                <li className="flex items-center gap-2">
                  <PencilLine className="text-primary h-5 w-5" /> Writing Tech Blogs
                </li>
                <li className="flex items-center gap-2">
                  <Plane className="text-primary h-5 w-5" /> Travelling
                </li>
              </ul>

              <p className="text-gray-300 mt-6 italic">
                "Strive to build things that make a difference!"
                <span className="block mt-1 text-right text-primary">— Soumyajit</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative animate-float max-w-md">
              <img
                src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740"
                alt="Coding illustration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Professional Skillset */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional <span className="text-primary">Skillset</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Tools I use */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tools <span className="text-primary">I use</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool) => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                icon={tool.icon}
                showName={tool.name === "macOS"}
              />
            ))}
          </div>
        </div>

        {/* Days I code */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Days I <span className="text-primary">Code</span>
          </h2>

          <CodeCalendar />
        </div>
      </div>
    </section>
  );
};

export default About;
