import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/career" },
    { name: "Contact Us", path: "/contact" },
    { name: "About ", path: "/about" },
  ];
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-vvrm-dark/90 backdrop-blur-md border-b border-gray-500 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 h-full relative">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="  relative flex items-center h-full w-48 z-50 shrink-0"
          >
            <img
              src={Logo}
              alt="VVRM Technologies"
              className="  absolute top-1/2  -left-10 lg:-left-50 lg:-translate-y-1/2 -translate-y-10 lg:h-32 h-22 w-auto max-w-none drop-shadow-lg "
            />
          </Link>
          <div className="hidden md:flex grow items-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[18px] font-serif transition-colors duration-300 relative group ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-gray-400 hover:text-vvrm-cyan"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-vvrm-cyan rounded-full transform -translate-x-1/2"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://wa.me/919499437069"
              target="_blank"
              rel="noopener noreferrer"
              className=" px-6 py-2.5 rounded-lg bg-linear-to-r from-vvrm-cyan to-vvrm-blue text-white font-bold text-sm hover:shadow-[0_0_15px_rgba(0,194,255,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center border border-vvrm-cyan/20"
            >
              <FaWhatsapp size={18} className="mr-2" />
              <span className="font-serif">WhatsApp Us</span>
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-vvrm-dark/95 backdrop-blur-xl border-b border-gray-800 overflow-hidden z-40"
          >
            <div className="px-8 pt-4 pb-10 space-y-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-lg font-serif ${
                      location.pathname === link.path
                        ? "text-vvrm-cyan"
                        : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t border-gray-800"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 rounded-xl bg-linear-to-r from-vvrm-cyan to-vvrm-blue text-white font-bold"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
