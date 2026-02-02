import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiArrowRight,
  FiX,
  FiZap,
  FiTrendingUp,
  FiSmile,
  FiTarget,
  FiUploadCloud,
  FiFileText,
  FiTrash2,
} from "react-icons/fi";
//  HERO SLIDES
const heroSlides = [
  "/images/careers/sec1img1.png",
  "/images/careers/sec1img2.png",
  "/images/careers/sec1img3.png",
];
const cultureSlides = [
  "/images/careers/sec3img1.png",
  "/images/careers/sec3img2.png",
  "/images/careers/sec3img3.png",
];
const changingTexts = [
  "Build The Future",
  "Code With Passion",
  "Craft Digital Masterpieces",
  "Innovate Every Day",
  "Shape The World",
];
//  PERKS DATA
const perks = [
  {
    icon: <FiZap />,
    title: "Innovation First",
    desc: "We don't just follow trends, we set them. Work on AI, AR/VR & Blockchain.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Rapid Growth",
    desc: "Clear career paths. From Junior to Lead, we guide your journey.",
  },
  {
    icon: <FiSmile />,
    title: "Work-Life Harmony",
    desc: "Flexible hours, remote options, and weekend offs. We care about YOU.",
  },
  {
    icon: <FiTarget />,
    title: "Impactful Work",
    desc: "Your code will be used by thousands. See the result of your hard work.",
  },
];
// JOB DATA
const jobOpenings = [
  {
    id: 1,
    title: "Senior Android Developer",
    type: "Full-time",
    location: "Remote",
    exp: "4+ Years",
    salary: "₹12L - ₹18L",
    dept: "Mobile App",
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    type: "Full-time",
    location: "Rohtak Office",
    exp: "2+ Years",
    salary: "₹6L - ₹10L",
    dept: "Web Dev",
  },
  {
    id: 3,
    title: "iOS Swift Engineer",
    type: "Contract",
    location: "Remote",
    exp: "3+ Years",
    salary: "$25/hr",
    dept: "Mobile App",
  },
  {
    id: 4,
    title: "Creative UI/UX Designer",
    type: "Full-time",
    location: "Rohtak Office",
    exp: "1+ Years",
    salary: "₹4L - ₹7L",
    dept: "Design",
  },
  {
    id: 5,
    title: "Node.js Backend Architect",
    type: "Part-time",
    location: "Remote",
    exp: "5+ Years",
    salary: "₹15L - ₹22L",
    dept: "Backend",
  },
  {
    id: 6,
    title: "AWS DevOps Engineer",
    type: "Contract",
    location: "Remote",
    exp: "3+ Years",
    salary: "₹10L - ₹15L",
    dept: "Cloud",
  },
];
const Career = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [cultureSlideIndex, setCultureSlideIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // State for changing text
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);
  // --- FILTER STATES ---
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("All"); // Default state matches Option value
  // --- FILTER LOGIC ---
  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.dept.toLowerCase().includes(searchTerm.toLowerCase());
    // 2. Department Filter
    let matchesDept = true;
    if (filterDept === "All") {
      matchesDept = true;
    } else {
      matchesDept = job.dept === filterDept;
    }
    return matchesSearch && matchesDept;
  });
  useEffect(() => {
    const readyTimer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(readyTimer);
  }, []);
  // Auto Slide Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  // Culture Section Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCultureSlideIndex((prev) => (prev + 1) % cultureSlides.length);
    }, 2000); // 4 seconds change
    return () => clearInterval(timer);
  }, []);
  // Changing Text every 2.5 Seconds
  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % changingTexts.length);
    }, 2000); // 2.5 seconds readability ke liye best hai
    return () => clearInterval(textTimer);
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file);
  };
  // FALLING CARD
  const containerDrop = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const cardDrop = {
    hidden: { y: -100, opacity: 0, rotate: -5 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "tween", bounce: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="w-full bg-vvrm-dark text-white min-h-screen relative overflow-x-hidden">
      {/*  HERO SECTION */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={heroSlides[currentSlide]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:text-5xl text-3xl md:text-6xl font-extrabold font-serif tracking-tight mb-6"
          >
            Build the{" "}
            <span className="text-transparent font-sans bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue">
              Future
            </span>{" "}
            With Us <br />
          </motion.h1>
          {/* CHANGING TEXT ANIMATION */}
          <div className="h-12 overflow-hidden relative">
            {" "}
            {/* Fixed Height to prevent jumping */}
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className=" lg:text-3xl  font-serif font-semibold bg-clip-text bg-linear-to-r  text-white"
              >
                {changingTexts[textIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="lg:text-xl text-lg text-gray-200 font-serif max-w-2xl mt-6 mx-auto">
            We don't just write code , we craft experiences. If you are
            passionate about technology,{" "}
            <span className="text-transparent font-serif bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue">
              {" "}
              VVRM{" "}
            </span>
            Technologies is your playground.
          </p>
        </div>
      </section>
      {/* SECTION 2: OPENINGS & SEARCH */}
      <section className="relative py-10 px-8 sm:px-12 lg:px-24 min-h-screen overflow-hidden">
        {/* -BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="w-full h-full"
          >
            <img
              src="/images/careers/sec2bgimg.png"
              alt="Background"
              className="w-full h-full object-cover opacity-150"
            />
          </motion.div>
          <div className=" absolute inset-0 bg-linear-to-r from-vvrm-dark via-vvrm-dark/80 to-vvrm-dark/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-start">
            {/* LEFT SIDE: JOB LIST   */}
            <div className="w-full lg:w-7/12 flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      layout
                      initial={{ opacity: 0, x: -50 }} // Slide from Left
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative overflow-hidden p-6 md:p-8 transform-gpu will-change-transform  transition-all duration-300  ] cursor-pointer"
                      onClick={() => setSelectedJob(job)}
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-vvrm-cyan/10 to-transparent opacity-0   transition-opacity duration-500"></div>
                      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="lg:text-[28px] font-bold font-serif text-white group-hover:text-vvrm-cyan transition-colors">
                              {job.title}
                            </h3>
                            <span className="lg:px-3 lg:py-0.5 px-7 py-3 rounded-full border border-white/20 text-xs text-gray-300 bg-black/20">
                              {job.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1.5">
                              <FiMapPin className="text-vvrm-cyan" />{" "}
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FiBriefcase className="text-vvrm-cyan" />{" "}
                              {job.exp}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FiDollarSign className="text-vvrm-cyan" />{" "}
                              {job.salary}
                            </span>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-vvrm-cyan group-hover:text-white transition-all">
                          <FiArrowRight className="transform group-hover:-rotate-45 transition-transform duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-10 text-center border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md"
                  >
                    <FiSearch className="mx-auto text-4xl mb-4 text-gray-600" />
                    <p className="text-gray-400">
                      No positions found. Try a different search.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* RIGHT SIDE: STICKY SEARCH DASHBOARD & TITLE */}
            <div className="w-full lg:w-5/12 lg:sticky  ">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-6xl font-extrabold font-serif text-white mb-2">
                    Our Open <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue">
                      Roles
                    </span>
                  </h2>
                  <p className="text-gray-200 lg:text-lg  text-sm font-serif tracking-wider leading-relaxed">
                    Join the innovators.{" "}
                    <span className="text-transparent font-serif font-bold bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue">
                      Filter by role or search directly to{" "}
                    </span>{" "}
                    find your next challenge at VVRM.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="relative group">
                    <FiSearch
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 group-focus-within:text-vvrm-cyan transition-colors"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Search Job (e.g. React)"
                      className="w-full font-serif lg:text-lg text-sm font-bold bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-200  focus:bg-black/40 outline-none transition-all"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full font-serif text-sm bg-black/10 text-white border border-white/10 rounded-xl px-4 py-4 outline-none  focus:bg-black/40 cursor-pointer appearance-none"
                      value={filterDept}
                      onChange={(e) => setFilterDept(e.target.value)}
                    >
                      <option value="All" className="bg-vvrm-card">
                        All Departments
                      </option>
                      <option value="Mobile App" className="bg-vvrm-card">
                        Mobile App Development
                      </option>
                      <option value="Web Dev" className="bg-vvrm-card">
                        Web Development
                      </option>
                      <option value="Design" className="bg-vvrm-card">
                        UI/UX Design
                      </option>
                      <option value="Backend" className="bg-vvrm-card">
                        Backend Engineering
                      </option>
                      <option value="Cloud" className="bg-vvrm-card">
                        Cloud Infrastructure
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/*  NEW SECTION: THE VVRM ECOSYSTEM  */}
      <section className="py-24 px-8 sm:px-12 lg:px-24 bg-vvrm-card/30 border-y border-gray-800/50 perspective-1000">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT SIDE: FALLING CARDS */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4">
                Why{" "}
                <span className="text-transparent text-4xl font-serif bg-clip-text bg-linear-to-r from-vvrm-cyan to-vvrm-blue">
                  VVRM ?
                </span>
              </h2>
              <p className="text-gray-200 font-serif tracking-wider text-lg">
                We create an ecosystem where you don't just work, you evolve.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-25"
              variants={containerDrop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
            >
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  variants={cardDrop}
                  whileHover={{ y: -5, borderColor: "#00C2FF" }}
                  className="rounded-2xl group hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-vvrm-cyan/10 rounded-lg flex items-center justify-center text-vvrm-cyan text-4xl mb-4 group-hover:bg-vvrm-cyan group-hover:text-white transition-all">
                    {perk.icon}
                  </div>
                  <h3 className="text-lg  font-serif tracking-wider text-white mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-sm font-serif tracking-widest text-gray-200">
                    {perk.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* RIGHT SIDE: IMAGE SLIDER */}
          <motion.div
            className="w-full lg:w-1/2 relative lg:h-125 h-60 rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={cultureSlideIndex}
                src={cultureSlides[cultureSlideIndex]}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>{" "}
            <div className="absolute inset-0 bg-linear-to-t from-vvrm-dark via-transparent to-transparent opacity-80"></div>{" "}
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-9999 flex justify-end">
            {" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            ></motion.div>
            {/*  Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-lg h-full  overflow-y-auto"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold font-serif tracking-wider text-white">
                      Apply Now
                    </h2>
                    <p className="text-xs text-gray-300 mt-3 font-serif uppercase tracking-widest">
                      Join the VVRM{" "}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <FiX size={24} className="text-gray-400 hover:text-white" />
                  </button>
                </div>
                {/* Job Summary Card */}
                <div className="bg-linear-to-br from-vvrm-dark to-vvrm-cyan/5 p-5 rounded-xl border border-white/10 mb-8">
                  <p className="text-gray-300 font-serif tracking-wider text-xs uppercase font-bold mb-2">
                    Applying for Role:
                  </p>
                  <h3 className="text-[18px] font-bold font-serif text-white mb-1">
                    {selectedJob.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 font-serif mt-2 text-sm text-white">
                    <span>{selectedJob.location}</span> •{" "}
                    <span>{selectedJob.type}</span> •{" "}
                    <span>{selectedJob.salary}</span>
                  </div>
                </div>
                {/* Application Form */}
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Application Sent!");
                    setSelectedJob(null);
                  }}
                >
                  <div className="space-y-2">
                    <label className="text-gray-200 text-sm font-serif tracking-widest font-semibold ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-vvrm-dark font-serif mt-2 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-vvrm-cyan outline-none transition-all placeholder-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-serif tracking-widest font-semibold ml-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      className="w-full bg-vvrm-dark mt-2 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-vvrm-cyan outline-none transition-all placeholder-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-serif  tracking-wider font-semibold ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-vvrm-dark mt-2 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-vvrm-cyan outline-none transition-all placeholder-gray-600"
                    />
                  </div>
                  {/* File Upload Area */}
                  <div className="space-y-2">
                    <label className="text-gray-300 tracking-wider text-sm font-serif font-semibold ml-1">
                      Resume / CV
                    </label>
                    {!resume ? (
                      <label className="block  border-gray-700 mt-3 rounded-xl p-8 text-center hover:border-vvrm-cyan hover:bg-vvrm-cyan/5 transition-all cursor-pointer bg-vvrm-dark group">
                        <FiUploadCloud className="mx-auto text-3xl text-gray-500 group-hover:text-vvrm-cyan mb-3 transition-colors" />
                        <p className="text-sm text-gray-300 font-serif font-medium">
                          Click to upload Resume
                        </p>
                        <p className="text-xs text-gray-300 font-sans mt-2">
                          PDF, DOC, DOCX (Max 5MB)
                        </p>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                      </label>
                    ) : (
                      <div className="border border-vvrm-cyan bg-vvrm-cyan/10 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="p-2 bg-vvrm-cyan/20 rounded-lg">
                            <FiFileText className="text-vvrm-cyan" />
                          </div>
                          <span className="text-sm text-white truncate font-medium">
                            {resume.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setResume(null)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    )}
                  </div>
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-linear-to-r from-vvrm-cyan to-vvrm-blue rounded-xl font-bold text-white shadow-lg shadow-vvrm-cyan/20 hover:shadow-vvrm-cyan/40 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      Submit Application <FiArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Career;
