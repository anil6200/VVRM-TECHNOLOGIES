import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from '../assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About ', path: '/about' },
  ];
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-vvrm-dark/90 backdrop-blur-md border-b border-gray-500 py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 h-full relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="  relative flex items-center h-full w-48 z-50 shrink-0">
            <img
              src={Logo}
              alt="VVRM Technologies"
              className="  absolute top-1/2  -left-50 -translate-y-1/2 h-32 w-auto max-w-none drop-shadow-lg "
            />
          </Link>
          <div className="hidden md:flex grow items-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[18px] font-serif transition-colors duration-300 relative group ${location.pathname === link.path
                      ? 'text-white'
                      : 'text-gray-400 hover:text-vvrm-cyan'
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
              <span className='font-serif'>WhatsApp Us</span>
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
      <div className={`md:hidden absolute w-full  bg-vvrm-card border-b border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === link.path
                  ? 'bg-vvrm-blue/10 text-vvrm-cyan border border-vvrm-blue/20'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-800 mt-4 ">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-lg bg-linear-to-r from-vvrm-cyan to-vvrm-blue text-white font-bold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;