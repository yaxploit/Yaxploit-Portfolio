/**
 * Resume Page Component
 * 
 * This page displays Yash Gaikwad's professional resume with:
 * - A download button for the PDF version
 * - A visual representation of the resume
 * 
 * The resume content is displayed as an image for consistent formatting
 * across all devices, with a downloadable PDF option.
 */

import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumeImage from "../assets/Yash resume  no introdction.jpg";
import resumePDF from "../assets/Yash resume  no introdction.pdf";
import { motion, useScroll, useSpring } from "framer-motion";
import BackToTop from "@/components/ui/BackToTop";

const Resume = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    document.body.style.cursor = 'default';
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "yash_gaikwad_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-transparent relative"
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <div className="digital-noise"></div>
      
      <main className="overflow-x-hidden relative z-10 pt-24 pb-20">
        <section className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              My <span className="text-primary">Resume</span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
              My professional background in cybersecurity, including relevant projects, education, and technical skills.
            </p>

            <div className="flex justify-center mb-8">
              <Button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-all duration-300"
              >
                <Download size={20} />
                <span>Download CV</span>
              </Button>
            </div>

            {/* Resume Display Container */}
            <div className="card-hover-effect glow-border bg-card border border-primary/20 rounded-lg shadow-xl max-w-4xl mx-auto overflow-hidden">
              {/* Resume Image */}
              <div className="flex justify-center p-4">
                <img 
                  src={resumeImage}
                  alt="Yash Gaikwad's Resume" 
                  className="w-full h-auto max-h-[800px] object-contain rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <BackToTop />
    </motion.div>
  );
};

export default Resume;
