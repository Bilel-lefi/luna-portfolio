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
    { value: 350, label: "Conferences interpreted" },
    { value: 234, label: "Videos & Films subtitled" },
    // {
    //   value: 3,
    //   label:
    //     "Industry conferences as public speaker Translated novel published",
    // },
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
        IN FIGURES
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
                {stat.value}
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
      <section id="hero" className="flex py-16 px-6 overflow-hidden bg-[#c1ecf1] md:bg-white"
      // style={{backgroundImage:`url:(${bg3})`}}
      >
        {/* Contenu principal */}
        <div className="relative z-10 container mx-auto flex flex-col  bg-transparent">
          <div className="flex flex-col md:flex-row">
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
              className="px-3 text-4xl font-bold text-primary mb-4 text-center md:text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center">
                <h1 className="text-tertiary text-4xl md:text-6xl font-bold whitespace-nowrap border-r-4 border-white pr-4 animate-typewriter overflow-hidden">
                  Hi ! I'am Luna{" "}
                </h1>
              </div>
              French Translator for Art & Culture
            </motion.h1>
          </div>

          <motion.div
            className=" text-center md:text-left"
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
              Helping Museums & Institutions get more International Visitors
              each year with Expertly Curated Language Services
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="flex justify-center md:justify-start space-x-6">
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
      <section className="bg-white">
        <CaseStudiesList />
      </section>
      <section id="intro" className="py-16 px-6 text-center bg-gray-100">
        <motion.h1
          className="text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Devoted, Specialised, Experienced Translator
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          An all-in-one best-in-class translation service, captivating audiences
          through the power of translation.
        </motion.p>
        <motion.p>
          <a
            href="#CaseStudies"
            className="btn px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary-dark"
          >
            Explore Case Studies
          </a>
        </motion.p>
      </section>

      <StatsSection />
      <TestimonialsSection />
      <section id="projects" className="py-16 px-6 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center text-primary mb-12 underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Some Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <motion.div
            className="project bg-gray-50 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Auschwitz: Not Long Ago, Not Far Away
            </h3>
            <p>
              <strong>Words Translated:</strong> 70K
            </p>
            <p>
              <strong>Description:</strong> Translated the exhibition from
              English into Swedish in collaboration with the Auschwitz-Birkenau
              Museum.
            </p>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="project bg-gray-50 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              UNESCO Heritage Project
            </h3>
            <p>
              <strong>Words Translated:</strong> 20K
            </p>
            <p>
              <strong>Description:</strong> Co-translated and edited a UNESCO
              heritage project for a large cultural platform.
            </p>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="project bg-gray-50 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Audioguide Translation
            </h3>
            <p>
              <strong>Words Translated:</strong> 100K
            </p>
            <p>
              <strong>Description:</strong> Translated and reviewed audioguide
              content for one of the world's most famous museums.
            </p>
          </motion.div>
          {/* Project 4 */}
          <motion.div
            className="project bg-gray-50 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Picturing Auschwitz</h3>
            <p>
              <strong>Words Translated:</strong> 7K
            </p>
            <p>
              <strong>Description:</strong> Translated exhibition content for
              the Auschwitz-Birkenau Museum, displayed at the UN HQ.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold text-primary mb-4 underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let's Work Together !
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Click below to book a FREE consultation with Luna Jungblut.
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
