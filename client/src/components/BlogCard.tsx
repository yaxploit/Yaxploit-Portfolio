import { ArrowRight, BookOpen, FlaskConical } from "lucide-react";

/**
 * BlogCard Props Interface
 * 
 * Defines the properties required for the BlogCard component.
 * These props match the Blog interface from data/blogs.ts
 */
export interface BlogProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
  url: string;
  category: "blog" | "research";
}

/**
 * BlogCard Component
 * 
 * Displays a card for a blog or research article with:
 * - Featured image
 * - Title and description
 * - Tags and metadata (date, read time)
 * - Category indicator (blog or research)
 * - Read more link
 */
const BlogCard = ({
  title,
  description,
  image,
  tags,
  date,
  readTime,
  url,
  category,
}: BlogProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow">
        <div className="flex gap-2 mb-3 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="flex items-center gap-1 mr-4">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{date}</span>
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{readTime}</span>
          </span>
        </div>
      </div>
      <div className="p-6 pt-0">
        <a
          href={url}
          className="text-primary hover:text-secondary flex items-center gap-2 transition-all duration-300"
        >
          <span>Read More</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
