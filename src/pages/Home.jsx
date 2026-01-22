import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiCloud, FiPenTool, FiServer, FiMonitor, FiTrendingUp, FiHeart, FiUsers, FiGift } from 'react-icons/fi';
import { FaAndroid, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';
import HomeContactCTA from '../components/HomeContactCTA';
const teamImages = [
  '/images/Home/sec5img1.png',
  '/images/Home/sec5img2.png',
  '/images/Home/sec5img3.png',
  '/images/Home/sec5img4.png',
  '/images/Home/sec5img5.png',
];
const heroImages = [
  '/images/Home/heroimg1.png',
  '/images/Home/heroimg2.png',
  '/images/Home/heroimg3.png',
  '/images/Home/heroimg4.png',
  '/images/Home/heroimg5.png',
  '/images/Home/heroimg6.png',
  '/images/Home/heroimg7.png',
  '/images/Home/heroimg8.png',
];
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
 //   Hero Text  
  const heroVRVariant = {
    hidden: {
      opacity: 0,
      rotateX: 45,
      z: -100,
      y: 50
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      z: 0,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        bounce: 0.2
      }
    }
  };
  //   Services: "Falling Cards"  ♠️♥️
  const cardDropVariant = {
    hidden: {
      y: -200,
      opacity: 0,
      rotate: -20,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1.5
      }
    }
  };
  // Hover 3D  Effect
  const hover3D = {
    rotateX: 10,
    rotateY: -10,
    scale: 1.05,
    boxShadow: "0px 20px 50px rgba(0, 194, 255, 0.3)",
    transition: { duration: 0.3 }
  };
  const services = [
    { icon: <FaAndroid size={40} />, title: "Android Development", desc: "Native Android apps built with Kotlin and Java.", features: ["Custom Apps", "UI/UX", "Deployment"] },
    { icon: <FaApple size={40} />, title: "iOS Development", desc: "Premium iOS applications developed using Swift.", features: ["iPhone/iPad", "App Store", "Swift UI"] },
    { icon: <FiServer size={40} />, title: "API Development", desc: "Robust and secure RESTful & GraphQL APIs.", features: ["Security", "Speed", "Integration"] },
    { icon: <FiPenTool size={40} />, title: "Graphics Designing", desc: "Creative visual designs including logos and branding.", features: ["Logos", "Social Media", "Branding"] },
    { icon: <FiCloud size={40} />, title: "Hosting & Management", desc: "Reliable hosting solutions and server management.", features: ["AWS/VPS", "SSL", "Backups"] },
    { icon: <FiMonitor size={40} />, title: "Website Development", desc: "Modern, responsive websites built with React.", features: ["E-commerce", "Portfolios", "PWA"] }
  ];
  const benefits = [
    { icon: <FiTrendingUp size={24} />, color: "bg-blue-500/20 text-blue-400", title: "Career Growth", desc: "Continuous learning and progression." },
    { icon: <FiHeart size={24} />, color: "bg-green-500/20 text-green-400", title: "Work-Life Balance", desc: "Flexible hours and remote options." },
    { icon: <FiUsers size={24} />, color: "bg-purple-500/20 text-purple-400", title: "Collaborative Culture", desc: "Teamwork and innovation." },
    { icon: <FiGift size={24} />, color: "bg-orange-500/20 text-orange-400", title: "Competitive Benefits", desc: "Health insurance and bonuses." }
  ];
  return (
    <div className="w-full overflow-x-hidden bg-vvrm-dark text-white">
      {/*   HERO SECTION   */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-8 sm:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 perspective-1000">
        <motion.div
          className="w-full lg:w-1/2 space-y-8 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.div variants={heroVRVariant} className="inline-flex items-center font-serif px-4 py-2 rounded-full tracking-wider text-[17px] font-semibold">
            🚀 Turning Ideas into Reality
          </motion.div>
          <motion.h1 variants={heroVRVariant} className="text-5xl lg:text-5xl font-serif leading-relaxed text-white" style={{ perspective: "1000px" }}>
            We Build Scalable <br />
            <span className="bg-linear-to-r from-vvrm-cyan to-vvrm-blue bg-clip-text text-transparent">
              Web & Mobile Apps
            </span> for Your Business
          </motion.h1>
          <motion.p variants={heroVRVariant} className="text-lg text-gray-300 font-sans max-w-lg leading-relaxed">
            From stunning <b>Graphics</b> to high-performance <b>Android/iOS Apps</b> and <b>Websites</b>. We provide end-to-end digital solutions.
          </motion.p>
          <motion.div variants={heroVRVariant} className="flex flex-wrap gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 194, 255, 0.4)" }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-4 bg-linear-to-r from-vvrm-cyan to-vvrm-blue rounded-lg font-bold text-white shadow-lg transition-all"
              >
                Get a Free Quote
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-gray-600 rounded-lg font-bold text-white hover:border-vvrm-cyan hover:text-vvrm-cyan transition-all"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        {/* Right Side: Image Slider */}
        <motion.div
          initial={{ opacity: 0, rotateY: -45, scale: 0.8 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          viewport={{ once: false }} // Reset on scroll
          transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
          className="w-full lg:w-1/2 relative h-100 lg:h-125"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-vvrm-cyan/30 blur-[100px] rounded-full -z-10"></div>
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-800 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-vvrm-cyan w-6' : 'bg-gray-500 hover:bg-white'
                  }`}
              />
            ))}
          </div>
        </motion.div>
      </section>
      {/*  SECTION: CAREER   */}
      <section className="relative py-24 px-8 sm:px-12 lg:px-24 overflow-hidden">
       <div className="absolute inset-0 z-0">
          <img
            src=" /images/Home/sec2bgimg.png "
            alt="Career Background"
            className="w-full h-full object-cover opacity-200"
          />
          <div className="absolute inset-0 bg-linear-to-b from-vvrm-dark via-vvrm-dark/70 to-vvrm-dark"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-center mb-16 space-y-4"
          >
            <span className="text-vvrm-cyan font-semibold tracking-wider uppercase text-sm">Join Our Team</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-5 text-white">Build Your Career with VVRM</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-serif">
              We're always looking for talented individuals who are passionate about technology.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {benefits.map((Benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
                }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="  flex flex-col items-center hover rounded-3xl justify-center text-center p-6 bg-transparent border-none"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${Benefit.color}`}>
                  {Benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl  font-bold font-serif tracking-wide  text-white mb-2">{Benefit.title}</h3>
                  <p className="text-gray-200 text-sm font-serif tracking-wider leading-relaxed">{Benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-16">
            <Link to="/career">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 194, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-linear-to-r font-serif from-vvrm-cyan to-vvrm-blue rounded-full font-bold text-white shadow-lg transition-all"
              >
                Explore Opportunities
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      {/*  SERVICES SECTION   */}
      <section className="py-20 px-8 sm:px-12 lg:px-24 bg-vvrm-card/50 perspective-1000">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-center mb-16 space-y-4"
          >
            <span className='text-transparent text-5xl font-serif font-bold mt-0 bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue'>Our  </span>  <span className="text-white font-serif tracking-widest font-bold uppercase text-[28px]"> Services</span>
            <h2 className="text-4xl font-bold mt-5 font-serif text-white"><span className='text-transparent font-serif mt-4 bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue'>Comprehensive IT </span>Solutions</h2>
            <p className="text-gray-200 font-serif  tracking-wider max-w-2xl mx-auto">
              End-to-end technology services tailored to your business needs.
            </p>
          </motion.div>
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardDropVariant}
                whileHover={hover3D}
                className="group bg-vvrm-card border border-gray-800 rounded-2xl p-8 cursor-pointer flex flex-col relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-vvrm-cyan/0 to-vvrm-cyan/0 group-hover:from-vvrm-cyan/5 group-hover:to-vvrm-blue/10 transition-all duration-500"></div>
                <div className="w-14 h-14 bg-vvrm-cyan/10 rounded-lg flex items-center justify-center text-vvrm-cyan mb-6 group-hover:bg-vvrm-cyan group-hover:text-white transition-colors relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-vvrm-cyan transition-colors relative z-10">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow relative z-10">{service.desc}</p>
                <ul className="space-y-3 mb-8 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <FiCheckCircle className="text-vvrm-cyan mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-flex items-center text-vvrm-cyan font-semibold hover:text-white transition-colors mt-auto relative z-10">
                  Learn More <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <HomeContactCTA />
     {/*   OUR STORY SECTION    */}
      <section className="py-20 px-8 sm:px-12 lg:px-24 bg-vvrm-card/50 perspective-1000">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
          {/* Left: Image Slider  */}
          <motion.div
            className="w-full lg:w-1/2 relative h-100"
            initial={{ opacity: 0, x: -100, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -top-5 -left-5 w-24 h-24 border-t-4 border-l-4 border-vvrm-cyan rounded-tl-3xl z-20"></div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-4 border-r-4 border-vvrm-cyan rounded-br-3xl z-20"></div>
           {teamImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Our Journey"
                className={`absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            ))}
           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {teamImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-6 bg-vvrm-cyan' : 'w-2 bg-white/50'}`}
                />
              ))}
            </div>
          </motion.div>
         <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white">Our Journey</h2>
            <p className="text-gray-400 leading-relaxed">
              Started with a vision to simplify technology, <b>VVRM Technologies</b> began its journey in a small office with big dreams. We saw a gap in the market where businesses struggled to find reliable, high-quality tech partners.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Today, we have grown into a full-scale digital agency, serving clients across the globe. From <b>Rohtak to the World</b>, our commitment remains the same: writing clean code, designing intuitive interfaces, and delivering results that matter.
            </p>
           <div className="flex gap-8 pt-4 border-t border-gray-800">
              <div>
                <h4 className="text-3xl font-bold text-vvrm-cyan">5+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-vvrm-cyan">50+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Projects Done</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-vvrm-cyan">100%</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
   </div>
  );
};
export default Home;