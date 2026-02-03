import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo/logo.png";

const IntroLoader = ({ finishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => finishLoading(), 2500);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  const stripVariants = {
    initial: { y: 0 },
    exit: (i) => ({
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.645, 0.045, 0.355, 1],
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="fixed inset-0 z-9999 pointer-events-none flex overflow-hidden bg-vvrm-dark">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={stripVariants}
          initial="initial"
          exit="exit"
          className="h-full relative overflow-hidden transform-gpu"
          style={{
            width: "20.5vw",
            marginLeft: i === 0 ? "0" : "-1px",
          }}
        ></motion.div>
      ))}

      {/* --- LOGO CONTAINER --- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-50">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(20px)",
            transition: { duration: 0.4 },
          }}
          className="relative px-6"
        >
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 2.3, delay: 0.5, ease: "easeInOut" }}
          >
            <img src={Logo} alt="VVRM Logo" className="w-56 md:w-80" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroLoader;
