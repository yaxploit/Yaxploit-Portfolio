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

const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    // In a production environment, you'd probably fetch the PDF 
    // from a CDN or server, but for this example, we'll use a static import
    setPdfUrl("/src/assets/resume.pdf");
  }, []);

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = pdfUrl || "";
    link.download = "yash_gaikwad_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
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
        <div className="bg-card border border-primary/20 rounded-lg shadow-xl max-w-4xl mx-auto overflow-hidden">
          {/* Resume Image */}
          <div className="flex justify-center p-4">
            <img 
              src="/attached_assets/Yash resume  no introdction.jpg" 
              alt="Yash Gaikwad's Resume" 
              className="w-full h-auto object-contain rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
