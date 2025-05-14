import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { format } from 'date-fns';
import { ExternalLink, BookOpen, FlaskConical, Book } from 'lucide-react';

type ContentCategory = 'blog' | 'research' | 'book';

/**
 * BlogCard Props Interface
 * 
 * Defines the properties required for the BlogCard component.
 * These props match the Blog interface from data/blogs.ts
 */
export interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  imageUrl?: string;
  tags?: string[];
  buttonLabel?: string;
  category?: ContentCategory;
}

/**
 * Get button configuration based on content category
 */
const getButtonConfig = (category: ContentCategory = 'blog') => {
  const configs = {
    blog: {
      icon: <BookOpen size={18} />,
      class: 'bg-primary hover:bg-primary-600 shadow-lg hover:shadow-primary/25',
      label: 'Read Blog'
    },
    research: {
      icon: <FlaskConical size={18} />,
      class: 'bg-secondary hover:bg-secondary-600 shadow-lg hover:shadow-secondary/25',
      label: 'View Research'
    },
    book: {
      icon: <Book size={18} />,
      class: 'bg-accent hover:bg-accent-600 shadow-lg hover:shadow-accent/25',
      label: 'View Book'
    }
  } as const;
  
  return configs[category];
};

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
  excerpt,
  date,
  readTime,
  slug,
  imageUrl,
  tags = [],
  buttonLabel,
  category = 'blog'
}: BlogCardProps) => {
  const buttonConfig = getButtonConfig(category);
  const finalButtonLabel = buttonLabel || buttonConfig.label;

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
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <time dateTime={date}>
            {format(new Date(date), 'MMM d, yyyy')}
          </time>
          <span>•</span>
          <span>{readTime} read</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{excerpt}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto pt-4 flex gap-2">
          <a
            href="https://dev.to/yaxploit"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${buttonConfig.class} text-white px-6 py-3 rounded-md transition-all duration-300 text-sm font-medium transform hover:scale-105 flex-1 justify-center`}
            aria-label={finalButtonLabel}
          >
            {buttonConfig.icon}
            <span className="font-semibold">{finalButtonLabel}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
