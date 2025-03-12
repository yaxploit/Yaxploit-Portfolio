import { Newspaper } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import { blogs } from "@/data/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            My <span className="text-primary">Blogs</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            I write about tech, development, and my experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.title}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                tags={blog.tags}
                date={blog.date}
                readTime={blog.readTime}
                url={blog.url}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://soumyajit.tech/blogs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-all duration-300"
            >
              <Newspaper size={20} />
              <span>View All Blogs</span>
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
