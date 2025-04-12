import { motion } from "framer-motion";
import luna from "../assets/luna.png";
import TestimonialsSection from "./TestimonialsSection";
import "./Typewriter.css";
import CaseStudiesList from "./CaseStudiesList";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import bg2 from "../assets/bg2.jpeg";
import bg3 from "../assets/bg3.jpg";
const StatsSection = () => {
  const stats = [
    { value: 132, label: "Happy clients" },
    { value: 654, label: "Projects delivered" },
    { value: 1000000, label: "Words translated, edited and reviewed" },
    { value: 0, label: "Deadlines missed" },
    { value: 100, label: "Satisfaction rating" },
  ];

  const [animatedValues, setAnimatedValues] = useState(
    stats.map((stat) => ({ value: 0, label: stat.label }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues((prevValues) =>
        prevValues.map((stat, index) => {
          const targetValue = stats[index].value;
          if (stat.value < targetValue) {
            return {
              ...stat,
              value: Math.min(
                stat.value + Math.ceil(targetValue / 100),
                targetValue
              ),
            };
          }
          return stat;
        })
      );
    }, 40); // Incrémentation toutes les 40 ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="py-16 px-6 bg-white text-center">
      <motion.h2
        className="text-3xl font-bold text-primary mb-8 underline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        In figures
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {animatedValues.map((stat, index) => (
          <motion.div
            key={index}
            className="relative group bg-gray-50 p-6 rounded-lg shadow-lg h-40 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Animated background ON HOVER */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#dda7d3] to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

            {/* Card content */}
            <div className="relative z-10 text-center">
              <p className="text-4xl font-semibold text-teal-600">
                {stats[index].value === 1000000
                  ? `${
                      stat.value >= 1000000 ? "1M" : stat.value.toLocaleString()
                    }`
                  : stats[index].value === 100
                  ? `${stat.value >= 100 ? "100%" : `${stat.value}%`}`
                  : stat.value}
                {stat.value < stats[index].value && "+"}
              </p>

              <p className="text-lg text-gray-700">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="font-sans  text-gray-900">
      <div
        className=""
        style={{
          background: "linear-gradient(to right, #44a299, white 55%)",
        }}
      >
        <section id="hero" className="flex pt-12 pb-2 px-6 overflow-hidden">
          <div className="relative z-10 container mx-auto flex flex-col  bg-transparent">
            <div className="flex flex-col md:flex-row ">
              <motion.div
                className=" flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={luna}
                  alt="Logo"
                  className="w-60 h-auto rounded-3xl mb-5 sm:mb-0"
                />
              </motion.div>
              <motion.h1
                className="px-3 text-4xl font-bold text-primary mb-4 ml-1 text-center md:text-left"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center justify-center">
                  <h1 className="text-tertiary pb-4 text-4xl md:text-6xl font-bold whitespace-nowrap border-r-4 border-white  animate-typewriter overflow-hidden">
                    Hi! I'm Luna{" "}
                  </h1>
                </div>
                French translator for art & culture
              </motion.h1>
            </div>

            <motion.div
              className="ml-1 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.p
                className="py-5 md:text-3xl text-gray-700 mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Helping museums & institutions get more international visitors
                each year with expertly curated language services
              </motion.p>
              <motion.p
                className="text-lg text-gray-700 mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="flex justify-center md:justify-start space-x-6 pb-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={40}
                      className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                    />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={40}
                      className="text-pink-600 hover:text-pink-800 transition-all duration-300"
                    />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter
                      size={40}
                      className="text-blue-400 hover:text-blue-600 transition-all duration-300"
                    />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={40}
                      className="text-blue-700 hover:text-blue-900 transition-all duration-300"
                    />
                  </a>
                </div>
              </motion.p>
            </motion.div>
          </div>
          <div className="flex items-center justify-center bg-cover bg-right opacity-100 bg-transparent">
            <img src={bg2} alt="" className="w-[80%] hidden md:block " />
          </div>
        </section>
        <section id="intro" className="pb-10 px-6 text-center ">
          <motion.h1
            className="text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Devoted, Specialised, Experienced translator
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            An all-in-one best-in-class translation service, captivating
            audiences through the power of translation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center "
          >
            <a
              href="#CaseStudies"
              className="px-6 py-3 text-center text-white font-semibold rounded-full shadow-md hover:bg-primary-dark text-xs md:text-sm bg-tertiary"
            >
              <span className="block">
                I handle projects in all main languages,
              </span>
              <span className="block">see examples below</span>
            </a>
          </motion.div>
        </section>
      </div>
      <section className="bg-white">
        <CaseStudiesList />
      </section>

      <StatsSection />
      <TestimonialsSection />

      <section id="contact" className="py-16 px-6 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold text-primary mb-4 underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let's work together !
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Click below to book a FREE consultation with me.
        </motion.p>
        <a
          href="http://calendly.com/artlifetranslations/consultation"
          className="btn px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary-dark"
        >
          Book Consultation
        </a>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>
          &copy; Luna Jungblut, MA, MCIL CL |{" "}
          <a href="mailto:luna@artlifetranslations.com" className="underline">
            Email
          </a>{" "}
          |{" "}
          <a href="https://artlifetranslations.com" className="underline">
            Website
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
