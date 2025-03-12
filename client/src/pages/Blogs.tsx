import { BookOpen, FlaskConical, Newspaper } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import { blogs } from "@/data/blogs";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Blogs Page Component
 * 
 * This page displays two categories of content:
 * 1. Blog posts - Regular articles on cybersecurity topics
 * 2. Research papers - More in-depth technical research
 * 
 * The page uses tabs to allow users to toggle between these two types of content.
 */
const Blogs = () => {
  const [activeTab, setActiveTab] = useState("blog");
  
  // Filter blogs based on category
  const blogPosts = blogs.filter(blog => blog.category === "blog");
  const researchPapers = blogs.filter(blog => blog.category === "research");
  
  return (
    <div className="min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            My <span className="text-primary">Publications</span>
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Articles, guides, and research papers on cybersecurity topics
          </p>

          <Tabs defaultValue="blog" className="w-full mb-12" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>Blog Posts</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="flex items-center gap-2">
                <FlaskConical size={16} />
                <span>Research Papers</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((blog) => (
                  <BlogCard
                    key={blog.title}
                    title={blog.title}
                    description={blog.description}
                    image={blog.image}
                    tags={blog.tags}
                    date={blog.date}
                    readTime={blog.readTime}
                    url={blog.url}
                    category={blog.category}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="research">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {researchPapers.map((blog) => (
                  <BlogCard
                    key={blog.title}
                    title={blog.title}
                    description={blog.description}
                    image={blog.image}
                    tags={blog.tags}
                    date={blog.date}
                    readTime={blog.readTime}
                    url={blog.url}
                    category={blog.category}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <a
              href="https://blog.yaxploit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-all duration-300"
            >
              <Newspaper size={20} />
              <span>View All Publications</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Feel free to contact me for any questions or opportunities
          </p>

          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Blogs;
