import { Github, Shield } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

/**
 * Projects Page Component
 * 
 * This page showcases cybersecurity projects developed by Yash Gaikwad.
 * Each project is displayed as a card with image, description, and links.
 */
const Projects = () => {
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Security <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Tools, frameworks, and applications I've developed for cybersecurity
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yaxploit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-all duration-300"
          >
            <Shield size={20} />
            <span>More Security Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
