import React from "react";
import { motion } from "framer-motion";

function CaseStudyModal({ study, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3 }}
        className="bg-white max-w-3xl w-full rounded-xl shadow-xl overflow-y-auto max-h-[90vh] p-6 space-y-4"
      >
        <div className="relative mb-4">
          <h2 className="text-2xl font-bold text-tertiary text-center w-full">
            {study.title}
          </h2>
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4  md:right-0 md:top-0 text-gray-600 text-5xl hover:text-black"
          >
            ×
          </button>
        </div>

        <p>
          <span className="font-semibold text-xl text-primary">Service :</span>{" "}
          {study.service}
        </p>
        <p>
          <span className="font-semibold text-xl text-primary">Language :</span>{" "}
          {study.languages}
        </p>
        <p>
          <span className="font-semibold text-xl text-primary">Subject :</span>{" "}
          {study.topic}
        </p>
        <p>{study.description}</p>
        <p>
          <span className="font-semibold text-xl text-primary">Results :</span>{" "}
          {study.results}
        </p>
        <blockquote className="italic text-gray-600">
          <span className="font-semibold text-xl text-primary ">
            Testimonial :
          </span>{" "}
          {study.testimonial}
        </blockquote>
        {study.images.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {study.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${study.title}-${i}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default CaseStudyModal;
