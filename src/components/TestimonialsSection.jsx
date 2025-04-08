import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Trevor Coker",
    company: "Psychedelic Dip",
    message:
      "Luna provides a great service that can enhance any international business. You should get in touch and check out the website to see how she can help!",
  },
  {
    name: "Ellen Worrel",
    company: "EW Languages",
    message:
      "Luna is a great partner to work with. Nothing is too much trouble and she always communicates any queries very clearly. It is a pleasure to work with her and I hope we continue to work together for many years to come!",
  },
  {
    name: "Aleksandra Zygan",
    company: "",
    message:
      "Luna is a great linguist, very dedicated and accurate. She always delivers excellent quality jobs and we can fully rely on her.",
  },
];
const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-primary mb-8 underline"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What My Clients Say
        </motion.h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 text-center h-[400px] flex flex-col justify-between border border-white hover:shadow-2xl transition-transform transform hover:scale-105">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-2xl">👤</span>
                  </div>
                </div>
                <div>
                  <h3 className="mt-3 text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600 italic">{testimonial.company}</p>
                </div>
                <hr className="my-3 border-gray-300" />
                <p className="text-gray-700">{testimonial.message}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSection;
