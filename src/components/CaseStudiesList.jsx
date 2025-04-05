import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import caseStudies from "../constants/caseStudies";

function CaseStudyCard({ study, showDetails, toggleContent }) {
  return (
    <div
      onClick={toggleContent}
      className="cursor-pointer w-full bg-white shadow-xl rounded-xl overflow-hidden transition duration-300 hover:shadow-2xl"
    >
      <img
        src={study.images[0]}
        alt={study.title}
        className="w-full h-64 object-cover"
      />

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="p-6 space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-800">{study.title}</h2>
            <p>
              <span className="font-semibold">Service :</span> {study.service}
            </p>
            <p>
              <span className="font-semibold">Langues :</span> {study.languages}
            </p>
            <p>
              <span className="font-semibold">Sujet :</span> {study.topic}
            </p>
            <p>{study.description}</p>
            <p>
              <span className="font-semibold">Résultats :</span> {study.results}
            </p>
            <blockquote className="italic text-gray-600">
              <span className="font-semibold">Testimonial : </span>{" "}
              {study.testimonial}
            </blockquote>

            {study.images.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {study.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${study.title} image ${index + 2}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CaseStudiesList() {
  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <div className="py-10 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Case Study </h1>\
      <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            showDetails={openCardId === study.id}
            toggleContent={() => toggleCard(study.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CaseStudiesList;
