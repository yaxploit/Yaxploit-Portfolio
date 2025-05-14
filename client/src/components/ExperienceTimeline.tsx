import React, { useState } from "react";

// Example experience data structure
const experienceData = [
  {
    title: "VAPT Intern",
    company: "AlGOVIZ Solutions",
    companyUrl: "#",
    date: "Dec 2024 - March 2025",
    type: "Full-time",
    location: "Pune, Maharashtra, India",
    mode: "Remote",
    tags: ["Vulnerability Assesments", "Ethical Hacking", "OWASP", "Penetration Testing", "Bug Bounty"],
    category: "VAPT",
  },
  {
    title: "Founder & CEO Yaxploit.sec",
    company: "Yaxploit.sec",
    companyUrl: "#",
    date: "Jan 2025 - Present",
    type: "Full-time",
    location: "Maharashtra, India",
    mode: "On-site",
    tags: ["Ethical Hacking", "Clients Management", "Defending Assets", "Vulnerability Assesments"],
    category: "Leadership",
  },
  {
    title: "Freelancer Bug Bounty Hunter",
    company: "Hacker one ",
    companyUrl: "#",
    date: "Jan 2025 - Present",
    type: "Part-time",
    location: "Maharashtra, India",
    mode: "Remote",
    tags: ["Offensive Security", "Web Application Security", "Bug Bounty Hunting", "Security Research", "Critical Thinking"],
    category: "Freelance",
  },
  // Add more experiences as needed
];

// const categories = ["All", "Development", "Design", "Leadership", "Freelance"];

// Educational background data
const educationData = [
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Patwardhan HighSchool, Sangli",
    date: "2015 - 2020",
    cgpa: "71% ",
    description: "Completed secondary school education with a focus on foundational subjects.",
    category: "SSC"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Willingdon COllage, Sangli",
    date: "2020 - 2022",
    cgpa: "51% (Science)",
    description: "Completed higher secondary education with a science major.",
    category: "HSC"
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Sanjay Ghodawat University, Kolhapur",
    date: "2022 - 202",
    cgpa: "8.7 CGPA",
    description: "Graduated with a focus on cybersecurity, programming, and network fundamentals.",
    category: "Degree"
  },
  {
    degree: "Masters of Sciende Cybersecurity (M.Sc.Cybersecurity)",
    institution: "Amity University, Jaipur",
    date: "2025 - 2027",
    cgpa: "Ongoing",
    description: "Pursuing a master's degree with a specialization in cybersecurity, focusing on advanced security protocols and ethical hacking.",
    category: "Degree"
  }
  
];

const ExperienceTimeline = () => {
  const filteredData = experienceData;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Experience Timeline */}
      <div className="relative w-full max-w-4xl mx-auto mb-24">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/60 to-primary/10 rounded-full -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-16">
          {filteredData.map((exp, idx) => (
            <div
              key={exp.title + exp.company + idx}
              className={`relative flex w-full ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`card-hover-effect glow-border w-full max-w-md bg-card rounded-xl p-6 z-10 ${
                  idx % 2 === 0 ? "ml-0 mr-auto" : "mr-0 ml-auto"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline text-right transform hover:scale-105 transition-transform"
                  >
                    {exp.company}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mb-2">
                  <span>🗓️ {exp.date}</span>
                  <span>• {exp.type}</span>
                  <span>• {exp.location}</span>
                </div>
                <div className="text-right text-primary text-xs mb-2">{exp.mode}</div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Timeline dot */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Background Section */}
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Educational <span className="text-primary">Background</span>
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          My academic journey has provided a strong foundation in computer science and cybersecurity principles.
        </p>
        
        {/* Educational Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/60 to-primary/10 rounded-full -translate-x-1/2 z-0" />
          <div className="flex flex-col gap-16">
            {educationData.map((edu, idx) => (
              <div
                key={edu.degree + edu.institution + idx}
                className={`relative flex w-full ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`card-hover-effect glow-border w-full max-w-md bg-card rounded-xl p-6 z-10 ${
                    idx % 2 === 0 ? "ml-0 mr-auto" : "mr-0 ml-auto"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                  <p className="text-primary text-sm mb-1">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <span className='inline-block'><svg className="h-4 w-4 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></span>
                    <span>{edu.date}</span>
                  </div>
                  <p className="text-primary text-xs mb-1">{edu.cgpa}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
                {/* Timeline dot */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline; 