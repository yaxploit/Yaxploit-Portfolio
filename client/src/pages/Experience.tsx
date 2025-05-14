import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import ExperienceSection from "@/components/ExperienceSection";
import BackToTop from "@/components/ui/BackToTop";
import ExperienceTimeline from "@/components/ExperienceTimeline";

const Experience = () => {
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
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            My career path in cybersecurity has allowed me to work with diverse organizations and tackle complex security challenges.
          </p>
          <ExperienceTimeline />
        </section>
      </main>
      <BackToTop />
    </motion.div>
  );
};

export default Experience; 