import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo/logo.png';
const IntroLoader = ({ finishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 3500);
    return () => clearTimeout(timer);
  }, [finishLoading]);
  return (
    <motion.div
      initial={{ x: 0 }}
      exit={{
        x: '-100%',
        transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
      }}
      className="fixed inset-0 z-9999 bg-vvrm-dark flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        <motion.img
          src={Logo}
          alt="VVRM Logo"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-55  md:w-96 mb-8"
        />
        <div className="w-48 h-0.5 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute h-full bg-linear-to-r from-vvrm-cyan to-vvrm-blue"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-white text-[10px] font-serif tracking-[0.4em] uppercase font-bold"
        >
          Innovating Digital Future
        </motion.p>
      </div>
    </motion.div>
  );
};
export default IntroLoader;