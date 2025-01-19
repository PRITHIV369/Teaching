import React, { useState, useEffect } from "react";
import Work1 from "../assets/img/work1.jpeg";
import Work2 from "../assets/img/work2.jpeg";
import Work3 from "../assets/img/work3.jpeg";

const WorksCarousel = () => {
  const works = [Work1, Work2, Work3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + works.length) % works.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative px-6 py-12 bg-gradient-to-br from-white via-gray-100 to-yellow-50">
      <h2 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 mb-8 drop-shadow-lg">
        My Works
      </h2>
      <div className="relative flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:scale-110 transition-transform duration-300 rounded-full p-3 shadow-lg focus:ring-4 focus:ring-yellow-300 z-10"
        >
          &#10094;
        </button>
        <img
          src={works[currentIndex]}
          alt={`Work ${currentIndex + 1}`}
          className="w-full md:h-[25rem] h-[15rem] max-w-3xl rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
        />
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:scale-110 transition-transform duration-300 rounded-full p-3 shadow-lg focus:ring-4 focus:ring-yellow-300 z-10"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default WorksCarousel;
