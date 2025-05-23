import { motion } from 'framer-motion';

const SanskritShloka = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(80,80,180,0.18)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut",
        opacity: { duration: 0.3 }
      }}
      className="hidden md:flex mx-auto mb-6 px-8 py-4 bg-black/40 backdrop-blur-sm border border-accent/30 rounded-full shadow-lg flex-col items-center max-w-3xl min-w-[320px]"
      style={{ 
        width: 'fit-content',
        willChange: 'transform, opacity',
        transform: 'translateZ(0)'
      }}
    >
      <div className="text-center">
        <h3 className="text-base md:text-lg font-sanskrit mb-1 text-accent">
          ॥ शस्त्रं नास्ति समं ज्ञानं, नास्ति शक्तिः विचारतः।<br />
          संगणके यः विजानीते, स एव जयति संग्रामे॥
        </h3>
        <p className="text-gray-400 text-xs md:text-sm">
          There is no weapon as powerful as knowledge,
          nor any strength greater than critical thinking.
          He who understands systems,
          is the one who triumphs in the battlefield.
        </p>
      </div>
    </motion.div>
  );
};

export default SanskritShloka; 