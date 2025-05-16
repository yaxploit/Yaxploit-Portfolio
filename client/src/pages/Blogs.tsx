import { BookOpen, FlaskConical, Newspaper, Book } from "lucide-react";
import BlogCard from "@/components/BlogCard";
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
  const books = blogs.filter(blog => blog.category === "book");
  
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
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>Blog Posts</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="flex items-center gap-2">
                <FlaskConical size={16} />
                <span>Research Papers</span>
              </TabsTrigger>
              <TabsTrigger value="book" className="flex items-center gap-2">
                <Book size={16} />
                <span>Books</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((blog) => (
                  <BlogCard
                    key={blog.title}
                    title={blog.title}
                    excerpt={blog.description}
                    date={blog.date}
                    readTime={blog.readTime}
                    slug={blog.url}
                    imageUrl={blog.image}
                    tags={blog.tags}
                    category="blog"
                  />
                ))}
                <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">More Blogs</h3>
                      <p className="text-primary text-sm">Comming Soon...</p>
                      <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                        
                      </div>
                      <p className="mt-3 text-gray-400">
                      Blogs and research publications are in the works — stay tuned for upcoming content as I document my journey and insights in cybersecurity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="research">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {researchPapers.map((blog) => (
                  <BlogCard
                    key={blog.title}
                    title={blog.title}
                    excerpt={blog.description}
                    date={blog.date}
                    readTime={blog.readTime}
                    slug={blog.url}
                    imageUrl={blog.image}
                    tags={blog.tags}
                    category="research"
                  />
                ))}
                <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">Research Papers</h3>
                      <p className="text-primary text-sm">Comming Soon...</p>
                      <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                        
                      </div>
                      <p className="mt-3 text-gray-400">
                      Blogs and research publications are in the works — stay tuned for upcoming content as I document my journey and insights in cybersecurity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="book">
              <div className="flex justify-center items-center py-8">
                {books.length > 0 && (
                  <div className="w-full max-w-2xl">
                    <BlogCard
                      key={books[0].title}
                      title={books[0].title}
                      excerpt={books[0].description}
                      date={books[0].date}
                      readTime={books[0].readTime}
                      slug={books[0].url}
                      imageUrl={books[0].image}
                      tags={books[0].tags}
                      category="book"
                    />
                  </div>
                )}
              </div>
              <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">Yaxploit's Offensive Cybersecurity Playbook</h3>
                      <p className="text-primary text-sm">Comming Soon...</p>
                      <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                        
                      </div>
                      <p className="mt-3 text-gray-400">
                      A curated personal handbook crafted by Yash Gaikwad (a.k.a Yaxploit), compiling years of offensive cybersecurity knowledge, practical exploitation checklists, hunting playbooks, CTF methodologies, and personal strategies. This playbook bridges the gap between raw hacker instinct and structured offensive security practices, serving as a trusted companion for bug hunters, penetration testers, and red teamers
                      </p>
                    </div>
                  </div>
                </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <a
              href="https://dev.to/yaxploit"
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
    </div>
  );
};

export default Blogs;
