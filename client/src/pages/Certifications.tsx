import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import BackToTop from "@/components/ui/BackToTop";
import Reveal from "@/components/ui/reveal";
import Footer from "@/components/Footer";

const Certifications = () => {
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
      className="min-h-screen bg-background relative"
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <div className="digital-noise"></div>
      <main className="overflow-x-hidden relative z-10 pt-24 pb-20">
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4">
            {/* Add your certification content here */}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Certifications; 