import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function CaseStudyCard({ study, showDetails, onSeeMore, isDesktop }) {
  return (
    <div onClick={onSeeMore} className="w-full cursor-pointer bg-gray-100/10 ring-1 ring-gray-900/10 hover:shadow-gray-100 rounded-xl overflow-hidden transition duration-300 hover:shadow-lg">
      <img
        src={study.images[0]}
        alt={study.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <div className="h-20 ">
          <h2 className="text-2xl font-bold text-gray-800">{study.title}</h2>
        </div>
        <div className="flex justify-end ">
          <button
            className="px-4 py-2 text-white bg-tertiary rounded-lg hover:bg-primary-dark transition"
            style={{
              borderTopLeftRadius: "1rem",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "0rem",
              borderTopRightRadius: "0rem",
            }}
          >
            {showDetails ? "See Less" : "See More"}
          </button>
        </div>
      </div>

      {/* Only show inline content on mobile/tablet (not on desktop) */}
      {!isDesktop && (
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 space-y-3"
            >
              <p>
                <span className="font-semibold">Service:</span> {study.service}
              </p>
              <p>
                <span className="font-semibold">wordsTranslated:</span>{" "}
                {study.wordsTranslated}
              </p>
              <p>
                <span className="font-semibold">Subject:</span> {study.topic}
              </p>
              <p>{study.description}</p>
              <p>
                <span className="font-semibold">Results:</span> {study.results}
              </p>
              <blockquote className="italic text-gray-600">
                <span className="font-semibold">Testimonial:</span>{" "}
                {study.testimonial}
              </blockquote>
              {study.images.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
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
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default CaseStudyCard;
