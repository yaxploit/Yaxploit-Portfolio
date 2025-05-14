import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SocialLinks from "@/components/SocialLinks";
import BackToTop from "@/components/ui/BackToTop";
import Footer from "@/components/Footer";

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' } },
  exit: { opacity: 0, y: 100, transition: { duration: 0.7, ease: 'easeInOut' } }
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [heroKey, setHeroKey] = useState(Date.now());

  useEffect(() => {
    setHeroKey(Date.now());
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'default';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        key="homepage"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-transparent flex flex-col"
      >
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
          style={{ scaleX }}
        />
        <div className="transition-opacity duration-500 opacity-100 flex-1 flex flex-col">
          <div className="digital-noise"></div>
          <SocialLinks />
          <main className="overflow-x-hidden relative z-10 flex-1 flex flex-col">
            <HeroSection key={heroKey} />
            <section id="about" className="relative z-10">
              <AboutSection />
            </section>
          </main>
          <BackToTop />
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
