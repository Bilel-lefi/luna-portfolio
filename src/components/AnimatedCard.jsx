import React, { useState } from "react";
import luna from "../assets/luna.png";

function AnimatedCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [1, 2, 3, 4];

  return (
    <section className="bg-zinc-50 overflow-hidden">
      <div className="max-w-screen-xl px-4 md:px-12 mx-auto py-12 lg:py-24 flex justify-center">
        <div className="flex flex-row gap-4 max-w-full overflow-hidden">
          {images.map((_, index) => (
            <div
              key={index}
              className={`overflow-hidden transition-all duration-500 ease-in-out cursor-pointer`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              style={{
                width: activeIndex === index ? "400px" : "200px", // full or half width
                marginLeft: activeIndex !== null && activeIndex !== index ? "-100px" : "0", // overlap others
                zIndex: activeIndex === index ? 10 : 1, // bring to front
              }}
            >
              <img
                src={luna}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover rounded-xl transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnimatedCards;
