import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import posterimg from "../assets/logo/image.png";
import { Helmet } from "react-helmet";
import {
  FiTarget,
  FiEye,
  FiCheck,
  FiAward,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";
const teamImages = [
  "/images/about/sec2img1.png",
  "/images/about/sec2img2.png",
  "/images/about/sec2img3.png",
  "/images/about/sec2img4.png",
  "/images/about/sec2img5.png",
];
const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamImages.length);
    }, 1000); //
    return () => clearInterval(timer);
  }, []);
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };
  const cardDropVariant = {
    hidden: {
      y: -150,
      opacity: 0,
      rotate: -10,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  const hover3D = {
    rotateX: 10,
    rotateY: -5,
    scale: 1.05,
    boxShadow: "0px 20px 50px rgba(0, 194, 255, 0.2)",
    transition: { duration: 0.4 },
  };
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.3;
    }
  }, []);
  return (
    <div className="w-full overflow-x-hidden bg-vvrm-dark text-white">
      <Helmet>
        <title>About Us | VVRM Technologies - Innovating Digital Future</title>
        <meta
          name="description"
          content="Learn about VVRM Technologies, a team of passionate developers and designers. We empower businesses with scalable, secure, and innovative IT solutions."
        />
        <meta
          name="keywords"
          content="About VVRM, IT Company Profile, Web Development Team, Software Agency Rohtak, VVRM Mission Vision, Digital Transformation Partners"
        />
        <link rel="canonical" href="https://vvrmtechnologies.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vvrmtechnologies.com/about" />
        <meta
          property="og:title"
          content="About VVRM Technologies | Who We Are"
        />
        <meta
          property="og:description"
          content="We are innovating for a digital future. Discover our journey from a small office to a global digital agency."
        />
        <meta
          property="og:image"
          content="https://vvrmtechnologies.com/images/about/sec2img1.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://vvrmtechnologies.com/about"
        />
        <meta property="twitter:title" content="About VVRM Technologies" />
        <meta
          property="twitter:description"
          content="Excellence, Transparency, and Innovation. See why businesses choose VVRM."
        />
        <meta
          property="twitter:image"
          content="https://vvrmtechnologies.com/images/about/sec2img1.png"
        />
      </Helmet>
      {/* HERO SECTION*/}
      <section className="relative min-h-[85vh] bg-vvrm-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              isVideoLoaded ? "opacity-80" : "opacity-0"
            }`}
            poster={posterimg}
          >
            <source src="/videos/abouthero.mp4" type="video/mp4" />
          </video>
          {!isVideoLoaded && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-75 transition-opacity duration-700"
              style={{
                backgroundImage: "url(' /images/image.png')",
              }}
            ></div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-vvrm-dark via-vvrm-dark/60 to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-vvrm-dark to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 py-20 px-8 sm:px-12 lg:px-24 max-w-7xl mx-auto text-center perspective-1000">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
          >
            <motion.span
              className="  font-semibold font-serif tracking-wider uppercase text-sm inline-block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Who We Are
            </motion.span>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight font-serif mt-4 mb-6 text-white">
              Innovating for a <br />
              <span className="bg-linear-to-r from-vvrm-cyan to-vvrm-blue bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-[19px] text-gray-200 max-w-3xl mx-auto font-serif leading-relaxed tracking-wide">
              VVRM Technologies is more than just an IT company. We are a team
              of passionate developers, designers, and strategists dedicated to
              transforming businesses through code.
            </p>
          </motion.div>
        </div>
      </section>
      {/*OUR STORY SECTION */}
      <section className="py-20 px-8 -mt-20 relative z-30 bg-vvrm-dark   sm:px-12 lg:px-24  perspective-1000">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
          {/* Left: Image Slider */}
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
            {/* Slider Logic */}
            {teamImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Our Journey"
                className={`absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {/* Slider Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {teamImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-6 bg-vvrm-cyan"
                      : "w-2 bg-white/50"
                  }`}
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
            <h2 className="text-3xl font-bold font-serif text-white">
              Our Journey
            </h2>
            <p className="text-gray-200 tracking-wider font-serif leading-relaxed">
              Started with a vision to simplify technology,{" "}
              <b>VVRM Technologies</b> began its journey in a small office with
              big dreams. We saw a gap in the market where businesses struggled
              to find reliable, high-quality tech partners.
            </p>
            <p className="text-gray-200 font-sans tracking-wider leading-relaxed">
              Today, we have grown into a full-scale digital agency, serving
              clients across the globe. From <b>Rohtak to the World</b>, our
              commitment remains the same: writing clean code, designing
              intuitive interfaces, and delivering results that matter.
            </p>
            {/* Stats Row */}
            <div className="flex gap-8 pt-4 border-t border-gray-800">
              <div>
                <h4 className="text-3xl font-bold font-serif text-vvrm-cyan">
                  5+
                </h4>
                <p className="text-xs text-gray-300  mt-2  font-sans uppercase tracking-wide">
                  Years Exp.
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold font-serif text-vvrm-cyan">
                  50+
                </h4>
                <p className="text-xs mt-2 text-gray-300 font-sans uppercase tracking-wide">
                  Projects Done
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold font-serif text-vvrm-cyan">
                  100%
                </h4>
                <p className="text-xs text-gray-300 mt-2 font-sans uppercase tracking-wide">
                  Satisfaction
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* MISSION & VISION (FIXED STABILITY)*/}
      <section className="py-20 px-8 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="p-10 bg-vvrm-card border border-gray-800 rounded-3xl relative overflow-hidden group cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3, margin: "-50px" }}
            variants={{
              hidden: {
                y: -50,
                opacity: 0,
                rotate: -5,
                scale: 0.9,
              },
              visible: {
                y: 0,
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.2,
                },
              },
            }}
            whileHover={hover3D}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-vvrm-cyan/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-vvrm-cyan/20"></div>
            <div className="w-16 h-16 bg-vvrm-cyan/20 rounded-2xl flex items-center justify-center text-vvrm-cyan mb-6">
              <FiTarget size={32} />
            </div>
            <h3 className="text-2xl font-bold font-serif text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 tracking-wider leading-relaxed relative z-10">
              To empower businesses of all sizes with scalable, secure, and
              innovative technology solutions. We aim to bridge the gap between
              complex code and user-friendly experiences.
            </p>
          </motion.div>
          {/* Vision Card */}
          <motion.div
            className="p-10 bg-vvrm-card border border-gray-800 rounded-3xl relative overflow-hidden group cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            variants={{
              hidden: {
                y: -50,
                opacity: 0,
                rotate: 5,
                scale: 0.9,
              },
              visible: {
                y: 0,
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.2,
                },
              },
            }}
            whileHover={hover3D}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-vvrm-blue/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-vvrm-blue/20"></div>
            <div className="w-16 h-16 bg-vvrm-blue/20 rounded-2xl flex items-center justify-center text-vvrm-blue mb-6">
              <FiEye size={32} />
            </div>
            <h3 className="text-2xl font-bold font-serif  text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 tracking-wider leading-relaxed relative z-10">
              To become a globally recognized IT consultancy known for
              excellence, integrity, and forward-thinking innovation. We see a
              future where every business is digital-first.
            </p>
          </motion.div>
        </div>
      </section>
      {/* WHY CHOOSE US (FALLING GRID) */}
      <section className="py-20 px-8 sm:px-12 lg:px-24 bg-vvrm-card/50 perspective-1000">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold font-serif text-white mb-4">
              Why Choose VVRM?
            </h2>
            <p className=" font-serif text-gray-200">
              What sets us apart from the rest.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: <FiAward />,
                title: "Excellence",
                desc: "We don't settle for 'good'. We aim for pixel-perfect.",
              },
              {
                icon: <FiCheck />,
                title: "Transparency",
                desc: "No hidden costs. Honest communication.",
              },
              {
                icon: <FiUsers />,
                title: "Client-Centric",
                desc: "Your success is our success. We work as partners.",
              },
              {
                icon: <FiGlobe />,
                title: "Global Standards",
                desc: "World-class code quality and security practices.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-vvrm-dark border border-gray-800 rounded-xl hover:border-vvrm-cyan transition-all duration-300 text-center group cursor-pointer"
                variants={cardDropVariant}
                whileHover={hover3D}
              >
                <div className="w-12 h-12 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-vvrm-cyan group-hover:text-white transition-all mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold font-serif text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-sans tracking-wide text-gray-200">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA SECTION */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="px-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
            Ready to Digitalize Your Business?
          </h2>
          <p className="text-gray-300  font-serif mb-8">
            Let's discuss your project and see how we can help.
          </p>
          <Link to="/contact">
            <button className="px-10 py-4 font-serif bg-linear-to-r text-[18px] from-vvrm-cyan to-vvrm-blue rounded-full font-bold text-white shadow-lg hover:shadow-vvrm-cyan/50 transition-all transform hover:-translate-y-1">
              Start a Conversation
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
export default About;
