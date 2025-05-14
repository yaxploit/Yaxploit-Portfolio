import { Github, Shield } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

/**
 * Projects Page Component
 * 
 * This page showcases cybersecurity projects developed by Yash Gaikwad.
 * Each project is displayed as a card with image, description, and links.
 */
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-center mb-4"
          >
            Security <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-400 mb-16"
          >
            Tools, Scripts, and applications I've developed for cybersecurity
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.demoUrl}
                  imageUrl={project.image}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: projects.length * 0.1 }}
              className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold">More Projects</h3>
                  <p className="text-primary text-sm">Coming Soon...</p>
                  <p className="mt-3 text-gray-400">
                    Currently honing my skills in cybersecurity and working towards adding more tools, applications, projects to my gallery in the near future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: (projects.length + 1) * 0.1 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/yaxploit?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-all duration-300"
              aria-label="View more security projects on GitHub"
            >
              <Shield size={20} />
              <span>More Security Projects</span>
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
