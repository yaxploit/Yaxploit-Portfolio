export interface Blog {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
  url: string;
}

export const blogs: Blog[] = [
  {
    title: "Getting Started with React Hooks",
    description: "A comprehensive guide to understanding and implementing React Hooks in your applications.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2831&auto=format&fit=crop",
    tags: ["React", "JavaScript"],
    date: "March 15, 2023",
    readTime: "5 min read",
    url: "https://blogs.soumyajit.tech/getting-started-with-react-hooks",
  },
  {
    title: "Optimizing Web Performance",
    description: "Learn techniques and strategies to improve your website's loading speed and overall performance.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2940&auto=format&fit=crop",
    tags: ["Performance", "Web"],
    date: "February 22, 2023",
    readTime: "8 min read",
    url: "https://blogs.soumyajit.tech/optimizing-web-performance",
  },
  {
    title: "Why TypeScript Is Worth Learning",
    description: "Discover the benefits of TypeScript and why it's becoming an essential tool for modern JavaScript development.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
    tags: ["TypeScript", "JavaScript"],
    date: "January 10, 2023",
    readTime: "6 min read",
    url: "https://blogs.soumyajit.tech/why-typescript-is-worth-learning",
  },
];
