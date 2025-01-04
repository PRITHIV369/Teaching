import React, { useState, useEffect } from "react";
import Work1 from '../assets/img/work1.jpeg'
import Work2 from '../assets/img/work2.jpeg'
import Work3 from '../assets/img/work3.jpeg'
const WorksCarousel = () => {
  const works = [
    Work1,
    Work2,
    Work3
  ];

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
    <div className="relative px-6">
      <h2 className="text-2xl text-center font-bold text-yellow-700 mb-8 mt-8">
        My Works
      </h2>
      <div className="relative flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 text-white bg-yellow-700 rounded-full p-2"
        >
          &#10094;
        </button>
        <img
          src={works[currentIndex]}
          alt={`Work ${currentIndex + 1}`}
          className="w-full md:h-[25rem] h-[15rem] max-w-3xl rounded-lg shadow-xl"
        />
        <button
          onClick={nextSlide}
          className="absolute right-4 text-white bg-yellow-700 rounded-full p-2"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default WorksCarousel;
