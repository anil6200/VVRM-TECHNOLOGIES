import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo/logo.png";
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
        x: "-100%",
        transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
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
      </div>
    </motion.div>
  );
};
export default IntroLoader;
