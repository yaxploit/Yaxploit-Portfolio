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
    link.download = "soumyajit_behera_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          My <span className="text-primary">Resume</span>
        </h2>

        <div className="flex justify-center mb-8">
          <Button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-all duration-300"
          >
            <Download size={20} />
            <span>Download CV</span>
          </Button>
        </div>

        <div className="bg-white text-gray-800 rounded-lg shadow-xl max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-light mb-2">
              Soumyajit <span className="font-bold">Behera</span>
            </h2>
            <p className="text-gray-500 mb-4">Software Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>{" "}
                +91 9123456789
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>{" "}
                contact@soumyajit.tech
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>{" "}
                soumyajit.tech
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-2 mb-4">
              Work Experience
            </h3>

            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">Juspay</h4>
                  <p className="text-gray-600 font-semibold">Product Engineer II</p>
                </div>
                <div className="text-gray-500 text-sm">June 2021 - Current</div>
              </div>
              <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Engineered a location tracking service in Rust, achieving a 30% reduction in API
                  latency and enhancing overall performance.
                </li>
                <li>
                  Developed custom metrics library to trigger events to Kafka, facilitating API
                  tracing of applications, and enhancing analytics capabilities while reducing system
                  downtime by 15%.
                </li>
                <li>
                  Conducted API profiling to identify bottlenecks causing high latency, optimizing
                  performance through cached queries and database indexing, resulting in a 25%
                  decrease in API response time.
                </li>
                <li>
                  Deployed Tiles within Karnataca, delivering a cost reduction of 40% compared to
                  Google Maps, providing a robust open-source alternative.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">Juspay</h4>
                  <p className="text-gray-600 font-semibold">Product Engineer Intern</p>
                </div>
                <div className="text-gray-500 text-sm">January 2021 - June 2021</div>
              </div>
              <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Worked on the development of the SOS feature, including the implementation of
                  contact fetching and storage functionalities for emergency scenarios.
                </li>
                <li>
                  Increased active drivers by 30% through the implementation of a driver location
                  health-check service utilizing Redis and Kafka.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-2 mb-4">
              Projects
            </h3>

            <div className="mb-6">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-bold">Bits-Of-Code</h4>
                <div className="text-primary text-sm">Next.js, React.js, Tailwind</div>
              </div>
              <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Created a single-page application with Next.js and Node.js to facilitate the
                  sharing of development blogs.
                </li>
                <li>
                  Implemented static site generation for accelerated load times and increased
                  efficiency.
                </li>
                <li>
                  Leveraged Firebase for user authentication and data storage, alongside SSR for
                  efficient data fetching.
                </li>
                <li>Blog: soumyajit.tech</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-bold">Chatify</h4>
                <div className="text-primary text-sm">React.js, Firebase</div>
              </div>
              <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Developed a real-time chat application with React.js and Firebase, enabling instant
                  messaging and file sharing.
                </li>
                <li>
                  Implemented user authentication, profile management, and message encryption for
                  secure communications.
                </li>
                <li>
                  Designed responsive UI for seamless experience across devices with Material-UI
                  components.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-2 mb-4">
              Education
            </h3>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">Birla Institute of Technology, Mesra</h4>
                  <p className="text-gray-600 font-semibold">
                    Integrated MSc (IMSc) in Mathematics and Computing
                  </p>
                </div>
                <div className="text-gray-500 text-sm">2016 - 2021</div>
              </div>
              <p className="mt-2 text-gray-700">CGPA: 8.45/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
