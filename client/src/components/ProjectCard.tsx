import { Github, ExternalLink } from "lucide-react";

/**
 * ProjectCard Props Interface
 * 
 * Defines the properties required for the ProjectCard component.
 */
export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
}

/**
 * ProjectCard Component
 * 
 * Displays a project card with:
 * - Project image with hover effect
 * - Title and description
 * - GitHub and Demo links
 */
const ProjectCard = ({
  title,
  description,
  image,
  githubUrl,
  demoUrl,
}: ProjectProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 flex flex-col h-full">
      <div className="p-4">
        <div className="h-48 overflow-hidden rounded-lg mb-4 group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <div className="mt-auto p-4 pt-0 flex gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-primary text-white px-4 py-2 rounded-md transition-all duration-300"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-primary text-white px-4 py-2 rounded-md transition-all duration-300"
        >
          <ExternalLink size={18} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
