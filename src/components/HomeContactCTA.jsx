import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail } from 'react-icons/fi';
const HomeContactCTA = () => {
  return (
    <section className="relative w-full py-32 px-6 flex items-center justify-center overflow-hidden bg-vvrm-dark">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Home/sec4bgimg.png"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-vvrm-dark via-vvrm-dark/80 to-vvrm-dark"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-125 h-125 bg-vvrm-cyan/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full font-serif   text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            Expert Guidance & Support
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold  font-serif tracking-tight leading-tight">
            Ready to Start the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue font-serif text-[38px] tracking-wide">Conversation</span> ?
          </h2>
          <p className="text-gray-200 font-serif text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            Whether you have a groundbreaking idea, a technical query, or just want to say hello — our team is ready to listen and answer.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-black  hover:text-black text-lg font-bold rounded-full  duration-300 transition-transform hover:scale-105]"
          >
            <span className='font-serif'>Contact with us</span>
            <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:hello@vvrm.tech"
            className="group flex items-center gap-2 text-gray-100 hover:text-white transition-colors text-lg font-medium border-b border-transparent hover:border-white/50 pb-1"
          >
            <FiMail className="text-vvrm-cyan group-hover:scale-110  transition-transform" />
            <span className='font-serif tracking-wider '>vvrmtechnologies@gmail.com</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default HomeContactCTA;