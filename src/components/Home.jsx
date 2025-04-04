import React from "react";
import { motion } from "framer-motion";
import luna from "../assets/luna.png"; // Assurez-vous que l'image est au bon emplacement

const StatsSection = () => {
  const stats = [
    { value: "132+", label: "Happy clients" },
    { value: "654+", label: "Projects delivered" },
    { value: "1 million+", label: "Words translated, edited and reviewed" },
    { value: "350+", label: "Conferences interpreted" },
    { value: "234+", label: "Videos & Films subtitled" },
    { value: "3", label: "Industry conferences as public speaker" },
    { value: "1", label: "Translated novel published" },
    { value: "0", label: "Deadlines missed" },
    { value: "100%", label: "Satisfaction rating" },
  ];

  return (
    <section id="stats" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-primary mb-8">IN FIGURES</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="text-4xl font-semibold text-teal-600">{stat.value}</p>
            <p className="text-lg text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="font-sans bg-[#44a299] text-gray-900">
      <section id="hero" className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={luna} alt="Logo" className="w-60 h-auto rounded-full" />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold text-primary mb-4">
              French Translator for Art & Culture
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Helping Museums & Institutions get more International Visitors
              each year with Expertly Curated Language Services
            </p>
          </motion.div>
        </div>
      </section>

      <section id="intro" className="py-16 px-6 text-center bg-gray-100">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Devoted, Specialised, Experienced Translator
        </h1>
        <p className="text-lg mb-6">
          An all-in-one best-in-class translation service, captivating audiences
          through the power of translation.
        </p>
        <p>
          <a
            href="#projects"
            className="btn px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary-dark"
          >
            Explore Case Studies
          </a>
        </p>
      </section>

      <StatsSection />

      <section id="projects" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Some Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="project bg-gray-50 p-6 rounded-lg shadow-lg">
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
            <p>Read More</p>
          </div>

          {/* Project 2 */}
          <div className="project bg-gray-50 p-6 rounded-lg shadow-lg">
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
          </div>

          {/* Project 3 */}
          <div className="project bg-gray-50 p-6 rounded-lg shadow-lg">
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
            <p>
              <a
                href="mailto:luna@artlifetranslations.com"
                className="text-primary"
              >
                Contact Luna
              </a>
            </p>
          </div>
          {/* Project 4 */}
          <div className="project bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Picturing Auschwitz</h3>
            <p>
              <strong>Words Translated:</strong> 7K
            </p>
            <p>
              <strong>Description:</strong> Translated exhibition content for
              the Auschwitz-Birkenau Museum, displayed at the UN HQ.
            </p>
            <p>
              <a
                href="mailto:luna@artlifetranslations.com"
                className="text-primary"
              >
                Contact Luna
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Let's Work Together!
        </h2>
        <p className="text-lg mb-6">
          Click below to book a FREE consultation with Luna Jungblut.
        </p>
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
