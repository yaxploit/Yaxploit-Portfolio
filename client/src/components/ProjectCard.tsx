import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

/**
 * ProjectCard Props Interface
 * 
 * Defines the properties required for the ProjectCard component.
 */
export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

/**
 * Button configuration for different action types
 */
const getButtonConfig = (type: 'github' | 'demo') => {
  const configs = {
    github: {
      icon: <FaGithub size={18} />,
      class: 'bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-gray-800/25',
      label: 'View Code'
    },
    demo: {
      icon: <ExternalLink size={18} />,
      class: 'bg-primary hover:bg-primary-600 shadow-lg hover:shadow-primary/25',
      label: 'Live Demo'
    }
  } as const;
  
  return configs[type];
};

/**
 * ProjectCard Component
 * 
 * Displays a project card with:
 * - Project image with hover effect
 * - Title and description
 * - Technologies used
 * - GitHub and Live Demo buttons
 */
const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl
}: ProjectCardProps) => {
  const githubConfig = getButtonConfig('github');
  const demoConfig = getButtonConfig('demo');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-hover-effect glow-border bg-background/50 rounded-lg border border-accent/20 overflow-hidden flex flex-col"
    >
      {imageUrl && (
        <div className="relative h-48 overflow-hidden group">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4 flex gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${githubConfig.class} text-white px-6 py-3 rounded-md transition-all duration-300 text-sm font-medium transform hover:scale-105 flex-1 justify-center`}
              aria-label="View project source code on GitHub"
            >
              {githubConfig.icon}
              <span className="font-semibold">{githubConfig.label}</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${demoConfig.class} text-white px-6 py-3 rounded-md transition-all duration-300 text-sm font-medium transform hover:scale-105 flex-1 justify-center`}
              aria-label="View live demo"
            >
              {demoConfig.icon}
              <span className="font-semibold">{demoConfig.label}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
