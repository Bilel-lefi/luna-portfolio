import React, { useState, useEffect } from "react";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyModal from "./CaseStudyModal";
import caseStudies from "../constants/caseStudies";

function CaseStudiesList() {
  const [openCard, setOpenCard] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind's `lg` breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div id="CaseStudies" className="py-10 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-primary mb-10 underline">
        Case Studies 
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            onSeeMore={() =>
              isDesktop ? setOpenCard(study) : setOpenCard((prev) => (prev?.id === study.id ? null : study))
            }
          />
        ))}
      </div>

      {/* Modal for PC only */}
      {isDesktop && openCard && (
        <CaseStudyModal study={openCard} onClose={() => setOpenCard(null)} />
      )}

      {/* Inline for mobile/tablet */}
      {!isDesktop && openCard && (
        <div className="mt-6 max-w-3xl mx-auto">
          <CaseStudyModal study={openCard} onClose={() => setOpenCard(null)} />
        </div>
      )}
    </div>
  );
}

export default CaseStudiesList;
