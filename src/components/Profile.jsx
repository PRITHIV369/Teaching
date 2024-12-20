import React from "react";
import pic1 from "../assets/img/pic1.jpg"
import pic2 from "../assets/img/pic2.jpeg"
import pic3 from "../assets/img/pic3.jpeg"
const Profile = () => {
  const images = [pic1, pic3, pic3, pic2];

  return (
    <div className="relative bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 py-16 px-6 overflow-hidden">
      <div className="absolute top-[-50px] left-[-50px] w-[250px] h-[250px] bg-orange-300 rounded-full mix-blend-multiply opacity-30 animate-orb"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] bg-yellow-400 rounded-full mix-blend-multiply opacity-30 animate-orb animation-delay-2000"></div>
      <div className="absolute top-10 right-20 w-[200px] h-[200px] bg-orange-500 rounded-full mix-blend-multiply opacity-20 animate-orb animation-delay-4000"></div>
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-[15rem] md:h-[15rem] h-[10rem] rounded-xl shadow-md object-cover border border-orange-200"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-200 via-orange-300 to-red-400 opacity-0 group-hover:opacity-50 transition duration-500"></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center space-y-6 animate-slide-in-right">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-700 text-center">
            Your Sanskrit Teacher here,
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            Our Sanskrit teacher is a passionate educator with a deep love for
            the ancient language. With years of experience and a unique teaching
            style, they make learning Sanskrit engaging and enriching for every
            student. Their dedication to preserving this timeless language is
            truly inspiring.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            Through innovative methods and a supportive approach, they bring the
            beauty of Sanskrit literature and culture to life. Join their
            classes to embark on a journey of knowledge and tradition.
          </p>
          <a href="https://forms.gle/DW59SFPC56m3BNQ96" target="_blank">
          <button className="w-[100%] px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:from-orange-600 hover:to-red-600 transition duration-300 transform hover:scale-105 animate-bounce">
            Register Now
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;