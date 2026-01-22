import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import Logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-[#020408] border-t border-gray-800 pt-16 pb-8  text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="VVRM Technologies"
                className=" h-45 w-auto object-contain -ml-6 -mb-14 -mt-14"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-300">
              Transforming businesses through innovative technology solutions and exceptional service.
            </p>
            <div className="flex items-center mt-6">
              <a
                href="mailto:vvrmtechnologies@gmail.com"
                className="group flex items-center space-x-3 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-vvrm-cyan group-hover:text-white transition-all">
                  <FiMail size={18} />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-vvrm-cyan transition-colors">
                  vvrmtechnologies@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className='lg:pl-12'>
            <h3 className="text-white font-bold text-lg font-serif tracking-widest mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              {['Android Development', 'Api Development', 'iOS Development', 'Graphics Designing', 'Website Develoment', 'Hosting & Management'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="hover:text-vvrm-cyan transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold font-serif tracking-widest text-lg mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/career' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-vvrm-cyan font-serif transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold font-serif tracking-wider text-lg mb-6">Industries We Serve</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'FinTech',
                'Healthcare',
                'E-Commerce',
                'Education',
                'Real Estate',
                'Travel & Tourism',
                'Logistics',
                'Media & Entertainment'
              ].map((industry) => (
                <span
                  key={industry}
                  className="px-3 py-1.5 rounded-full bg-vvrm-card border border-gray-800 text-xs text-gray-400 hover:border-vvrm-cyan hover:text-white hover:bg-vvrm-cyan/10 transition-all duration-300 cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-2">Have a project in mind?</p>
              <Link to="/contact" className="text-sm font-bold text-vvrm-cyan hover:text-white transition-colors flex items-center">
                Schedule a Call <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 VVRM Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;