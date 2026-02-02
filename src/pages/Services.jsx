import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
const servicesData = [
  {
    id: "01",
    title: "Android Development",
    subtitle: "Mobile Engineering",
    description:
      "We craft high-performance, scalable, and native Android applications. From architecture design to Play Store deployment, we handle the entire lifecycle using Kotlin and Jetpack Compose.",
    features: [
      "Native Kotlin Development",
      "Jetpack Compose UI",
      "API Integration",
      "Play Store Optimization",
    ],
    images: [
      " /images/services/Aimg1.png ",
      " /images/services/Aimg2.png ",
      " /images/services/Aimg3.png ",
    ],
  },
  {
    id: "02",
    title: "Web Development",
    subtitle: "Full Stack Solutions",
    description:
      "Building responsive, blazing-fast, and SEO-optimized web applications. We utilize the MERN stack and Next.js to deliver enterprise-grade web solutions that scale with your business.",
    features: [
      "React.js & Next.js",
      "Progressive Web Apps (PWA)",
      "Server Side Rendering",
      "Scalable Architecture",
    ],
    images: [" /images/services/wdimg1.png ", "/images/services/wdimg2.png "],
  },
  {
    id: "03",
    title: "UI/UX Design",
    subtitle: "Creative Design",
    description:
      "We design user interfaces that are intuitive, engaging, and beautiful. Our design process involves user research, wireframing, and high-fidelity prototyping to ensure the best user experience.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Design Systems",
    ],
    images: [
      " /images/services/uiuximg1.png ",
      " /images/services/uiuximg2.png ",
      " /images/services/uiuximg3.png ",
      " /images/services/uiuximg4.png ",
    ],
  },
  {
    id: "04",
    title: "iOS Development",
    subtitle: "Apple Ecosystem",
    description:
      "Deliver premium experiences for iPhone and iPad users. We build high-performance, native iOS applications using Swift and SwiftUI that align perfectly with Apple's Human Interface Guidelines.",
    features: [
      "Swift & SwiftUI",
      "App Store Deployment",
      "Core Data Integration",
      "Apple Watch & TV OS",
    ],
    images: [
      " /images/services/iosimg1.png ",
      " /images/services/iosimg2.png ",
    ],
  },
  {
    id: "05",
    title: "Hosting & Management",
    subtitle: "Server & Security",
    description:
      "Your digital assets need a secure home. We provide robust hosting solutions, 24/7 server monitoring, and automated maintenance to ensure your application runs smoothly with zero downtime.",
    features: [
      "AWS / VPS Hosting",
      "SSL & Security Patches",
      "24/7 Server Monitoring",
      "Automated Backups",
    ],
    images: [
      " /images/services/hostingimg1.png ",
      " /images/services/hostingimg2.png ",
    ],
  },
  {
    id: "06",
    title: "API Development",
    subtitle: "System Integration",
    description:
      "Connect your systems seamlessly. We architect secure, scalable, and well-documented APIs (REST & GraphQL) that act as the perfect bridge between your frontend, backend, and third-party services.",
    features: [
      "RESTful & GraphQL APIs",
      "Secure Authentication (JWT)",
      "Third-Party Integrations",
      "Swagger Documentation",
    ],
    images: [
      " /images/services/apidevimg1.png ",
      " /images/services/apidevimg2.png ",
      " /images/services/apidevimg3.png ",
    ],
  },
];
// SINGLE SERVICE SECTION COMPONENT
const ServiceSection = ({ service }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });
  useEffect(() => {
    let interval;
    if (isInView) {
      interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % service.images.length);
      }, 2600);
    }
    return () => clearInterval(interval);
  }, [isInView, service.images.length]);
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden snap-start"
    >
      {/*   BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImgIndex}
            src={service.images[currentImgIndex]}
            alt={service.title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>
      {/*  MAIN CONTENT CONTAINER */}
      <div className=" relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-row items-center gap-4 lg:gap-20">
        {/* LEFT SIDE: TITLE & HEADING */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className=" w-[35%] lg:w-1/2 space-y-2 lg:space-y-6"
        >
          <div className="flex items-center gap-4">
            <span className="text-lg md:text-7xl font-extrabold  text-transparent bg-clip-text bg-linear-to-b  from-vvrm-cyan  to-vvrm-blue font-serif leading-none">
              {service.id}
            </span>
            <div className=" h-0.5 w-6 md:w-10 bg-vvrm-cyan"></div>
          </div>
          <div className="space-y-2">
            <span className="text-blue-200 font-bold font-serif lg:tracking-[0.2em]  tracking-wide uppercase text-[7px] lg:text-sm animate-pulse">
              {service.subtitle}
            </span>
            <h2 className=" text-base md:text-5xl font-serif font-bold text-white leading-tight">
              {service.title.split(" ")[0]} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-vvrm-blue to-white">
                {service.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </div>
        </motion.div>
        {/* RIGHT SIDE: DESCRIPTION CARD*/}
        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 20 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, rotateY: 0 }
              : { opacity: 0, x: 100, rotateY: 20 }
          }
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 60,
            damping: 15,
            delay: 0.1,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className=" w-[65%] lg:w-1/2"
        >
          <div className="  p-4 md:p-12 rounded-2xl    group hover:border-vvrm-cyan/40 transition-all duration-500">
            <div className="absolute -top-2 -right-2 w-10 h-10  opacity-50"></div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10  opacity-50"></div>
            <p className=" text-gray-100 text-[10px] translate-x-3 lg:translate-x-0 lg:text-2xl font-serif tracking-wide leading-relaxed mb-4 lg:mb-8">
              {service.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 font-serif gap-4 mb-8">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 lg:text-sm text-sm text-gray-200 group-hover:text-white transition-colors"
                >
                  <FiCheckCircle className="text-vvrm-cyan shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
// MAIN PAGE COMPONENT
const Services = () => {
  return (
    <div className="w-full bg-vvrm-dark text-white snap-y snap-mandatory min-h-screen   scroll-smooth">
      {servicesData.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
      <section className="h-screen snap-start flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src=" /videos/services.mp4 " type="video/mp4" />
          </video>
          <div className="absolute inset-0   from-vvrm-dark   to-vvrm-dark"></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-5xl mt-8 font-bold mb-8 font-serif tracking-tighter text-[#1AC1EF]">
              VVRM <br />
              <span className="text-white tracking-wider  ">
                Beyond Limits.
              </span>
            </h2>
            <p className="text-gray-100 font-serif max-w-lg mx-auto mb-10 text-lg md:text-xl font-light tracking-wide">
              Engineering the next generation of digital products. Are you ready
              to innovate?
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
              <Link
                to="/contact"
                className=" px-12 py-4 border font-serif border-white/20 text-white rounded-full font-bold hover:bg-white/10  duration-500 transition-transform hover:scale-120"
              >
                Contact Us
              </Link>
              <Link
                to="/career"
                className="px-12 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-transform hover:scale-120 duration-500"
              >
                Join Team
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 text-xs tracking-[0.5em] uppercase text-white animate-bounce">
          The End
        </div>
      </section>
    </div>
  );
};
export default Services;
