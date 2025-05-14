import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DISPLAY_DURATION = 4000; // 4 seconds total
const EXIT_DURATION = 1200; // Increased for smoother exit

const bootSteps = [
  '[BOOT] Initializing hardware modules...',
  '[ OK ] System clock synchronized.',
  '[ OK ] BIOS integrity verified.',
  '[ OK ] Chipset diagnostics passed.',
  '[ OK ] Processor cores online.',
  '[ OK ] Memory checks completed.',
  '[ OK ] Storage volumes mounted.',
  '[ OK ] Network interfaces up.',
  '[ OK ] VPN tunnels established.',
  '[ OK ] Security modules activated.',
  '[ OK ] Advanced threat protection engaged.',
  '[ OK ] Firewall rules loaded.',
  '[ OK ] Anti-malware services running.',
  '[ OK ] IDS/IPS systems initialized.',
  '[ OK ] Kernel modules patched.',
  '[ OK ] Loading Yaxploit kernel core...',
  '[ OK ] Kernel core checksum verified.',
  '[ OK ] GPU acceleration enabled.',
  '[ OK ] SSH services online.',
  '[ OK ] Secure shell access hardened.',
  '[ OK ] User authentication daemon initialized.',
  '[ OK ] Key vault unlocked.',
  '[ OK ] Encrypted partitions mounted.',
  '[ OK ] Yaxploit system assets deployed.',
  '[ OK ] AI subsystems calibrated.',
  '[ OK ] Blockchain node synced.',
  '[ OK ] Container orchestration started.',
  '[ OK ] Service mesh initialized.',
  '[ OK ] Terminal interface loaded.',
  '[ OK ] UI assets prepared.',
  '[ OK ] Boot sequence finalized.',
  '[BOOT] System boot complete. Welcome to Yaxploit.sec.',
];

const TerminalStylePreloader = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showSignature, setShowSignature] = useState(false);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      if (stepIndex < bootSteps.length) {
        setCurrentStep((prev) => prev + 1);
        stepIndex++;
        // Immediate scroll without delay
        scrollToBottom();
      } else {
        clearInterval(stepInterval);
        setShowSignature(true);
      }
    }, DISPLAY_DURATION / bootSteps.length);

    const startExit = setTimeout(() => {
      setExiting(true);
    }, DISPLAY_DURATION);

    // Show signature when boot sequence is complete
    const showSignatureTimeout = setTimeout(() => {
      setShowSignature(true);
    }, DISPLAY_DURATION - 1000);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(startExit);
      clearTimeout(showSignatureTimeout);
    };
  }, []);

  useEffect(() => {
    if (exiting) {
      const removeFromDOM = setTimeout(() => {
        setShouldRender(false);
      }, EXIT_DURATION);

      return () => clearTimeout(removeFromDOM);
    }
  }, [exiting]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          key="preloader"
          className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ 
            y: '-100%',
            opacity: 0,
            transition: {
              duration: EXIT_DURATION / 1000,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: EXIT_DURATION / 1500 }
            }
          }}
        >
          <div className="bg-gray-900 rounded-xl shadow-lg w-full max-w-[600px] min-w-[280px] px-4 sm:px-6 py-3 sm:py-4 flex flex-col justify-between h-[300px] sm:h-[350px] md:h-[400px] relative">
            <div 
              ref={logsContainerRef}
              className="space-y-1 overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            >
              <h2 className="text-gray-400 mb-2 sm:mb-3 text-[10px] sm:text-xs md:text-sm">system_boot.sh</h2>
              {bootSteps.slice(0, currentStep + 1).map((step, index) => (
                <p key={index} className="text-green-400 font-mono text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-normal">
                  {step}
                </p>
              ))}
            </div>
            <div className="mt-2 sm:mt-4 mb-6 sm:mb-8">
              <div className="relative w-full h-1.5 sm:h-2 md:h-3 bg-gray-800 rounded overflow-hidden shadow-inner">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: `${((currentStep + 1) / bootSteps.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-right text-gray-500 mt-0.5 sm:mt-1 text-[10px] sm:text-xs">FINALIZING...</div>
            </div>

            {/* Yaxploit.sec Signature with typing animation */}
            {showSignature && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-1 sm:bottom-2 left-3 sm:left-4 font-mono text-green-400 text-[10px] sm:text-xs md:text-sm"
              >
                <span className="typing-animation">Yaxploit.sec_</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalStylePreloader; 