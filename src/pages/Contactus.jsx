import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const heroVRVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    e.target.reset();
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };
  return (
    <div className="w-full min-h-screen bg-vvrm-dark text-white">
      {/*   SECTION 1: HERO HEADER    */}
      <div
        className="relative w-full h-[75vh] lg:h-[85vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: " url('/images/contactus/img1.png')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-vvrm-dark"></div>
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          <span className="inline-block px-4 py-1 mb-6 rounded-full font-serif font-bold tracking-widest uppercase  ">
            Get in Touch
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold font-serif text-white mb-8 tracking-tight drop-shadow-2xl">
            Contact <span className=" text-transparent text-[50px] font-serif bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue">VVRM</span>
          </h1>
          <p className="text-gray-200 font-serif text-sm md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            You have the vision. We have the code. Let's build something that breaks the internet together ....
          </p>
        </motion.div>
      </div>
      {/*   SECTION 2: MAIN CONTENT  */}
      <div className="relative overflow-hidden py-24 px-4 perspective-2000 bg-vvrm-dark">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] _transparent_70%)] blur-[100px]"></div>
        </div>
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">
          {/* LEFT SIDE: CONTACT INFO */}
          <motion.div
            className="w-full lg:w-5/12 pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Title */}
            <motion.div variants={heroVRVariant} className="mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-extrabold leading-tight">
                <span className='text-transparent font-serif bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue'>Let's</span> Start a <span className='text-transparent font-sans bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue'>Conversation</span> <br />
                With Us.
              </h1>
              <p className="text-gray-200 mt-6 text-sm font-serif tracking-wider leading-loose">
                Have a Project in mind? We had  love to hear about it. Our team is ready to help you transform your ideas into reality.
              </p>
            </motion.div>
            <div className="space-y-8">
              <motion.div variants={heroVRVariant} className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-vvrm-card border border-gray-800 rounded-2xl flex items-center justify-center text-vvrm-cyan shrink-0 text-xl group-hover:border-vvrm-cyan transition-colors">
                  <FiMail />
                </div>
                <div>
                  <h4 className="text-white font-bold font-serif text-lg mb-1">Email Us</h4>
                  <p className="text-gray-300 font-sans tracking-widest text-sm"> vvrmtechnologies@gmail.com</p>
                </div>
              </motion.div>
              <motion.div variants={heroVRVariant} className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-vvrm-card border border-gray-800 rounded-2xl flex items-center justify-center text-vvrm-cyan shrink-0 text-xl group-hover:border-vvrm-cyan transition-colors">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="text-white font-bold font-serif text-lg mb-1">Call Us</h4>
                  <p className="text-gray-300 font-sans text-sm tracking-widest">+91 9499437069</p>
                  <p className="text-gray-300 font-sans mt-2 text-sm">Mon-Fri, 9am - 6pm</p>
                </div>
              </motion.div>
              <motion.div variants={heroVRVariant} className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-vvrm-card border border-gray-800 rounded-2xl flex items-center justify-center text-vvrm-cyan shrink-0 text-xl group-hover:border-vvrm-cyan transition-colors">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-gray-300 font-sans mt-2 text-sm">Rohtak, Haryana, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* RIGHT SIDE: THE FORM   */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, rotateY: -30, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className=" overflow-hidden group transition-colors duration-400">
              <div className="absolute top-0 right-0 w-64 h-64  rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
              <form onSubmit={handleSubmit} className="space-y-6 gap-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[15px]  font-serif tracking-wider text-gray-200  ml-1">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-vvrm-dark border border-gray-400  mt-2 rounded-xl px-4 py-4 text-white   ] outline-none transition-all placeholder-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[15px]  font-serif tracking-wider text-gray-200 ml-1">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-vvrm-dark mt-2 border border-gray-400 rounded-xl px-4 py-4 text-white  ] outline-none transition-all placeholder-gray-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] font-serif tracking-wider text-gray-200 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-vvrm-dark mt-2 border border-gray-400 rounded-xl px-4 py-4 text-white  ] outline-none transition-all placeholder-gray-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] font-serif tracking-widest text-gray-200 ml-1">Phone Number</label>
                  <input type="tel" placeholder="+91..." className="w-full mt-2 bg-vvrm-dark border border-gray-400 rounded-xl px-4 py-4 text-white  ] outline-none transition-all placeholder-gray-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] font-serif tracking-widest text-gray-200 ml-1">Service Interested In</label>
                  <select className="w-full bg-vvrm-dark mt-2 border text-sm border-gray-200 rounded-xl px-4 py-4 text-white ] outline-none transition-all cursor-pointer">
                    <option>Website Development</option>
                    <option>Android Development</option>
                    <option>Graphic Designing</option>
                    <option>Ios Development</option>
                    <option>Hosting & Management </option>
                    <option>API Development</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold font-serif tracking-widest text-gray-300 ml-1">Message</label>
                  <textarea rows="4" placeholder="Tell us about your project..." className="w-full mt-2 bg-vvrm-dark border border-gray-400 rounded-xl px-4 py-4 text-white ] outline-none transition-all placeholder-gray-600 resize-none"></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,194,255,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 font-serif bg-linear-to-r from-vvrm-cyan to-vvrm-blue text-white font-bold text-[18px] ] transition-all transform hover:-translate-y-0.5 flex items-center border border-vvrm-cyan/20 justify-center rounded-3xl"
                >
                  Send Message <FiArrowRight />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      {/* SUCCESS POPUP  */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            ></motion.div>
            {/*  Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-vvrm-card   p-8 rounded-2xl   flex flex-col items-center text-center gap-4 min-w-75"
            >
              <div className="w-16 h-16 bg-vvrm-cyan/20 rounded-full flex items-center justify-center mb-2">
                <FiCheckCircle className="text-vvrm-cyan text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400 text-sm mt-1">We'll get back to you shortly.</p>
              </div>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
                className="absolute bottom-0 left-0 h-1 bg-vvrm-cyan rounded-b-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Contact;