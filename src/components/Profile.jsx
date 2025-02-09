import React from "react";
import "../assets/css/common.css";
import pic1 from "../assets/img/pic1.jpg";
import pic2 from "../assets/img/pic2.jpg";
import pic3 from "../assets/img/pic3.jpg";
import pic4 from "../assets/img/pic4.jpg";

const Profile = () => {
  return (
    <div className="relative bg-white px-6 overflow-hidden flex md:items-center items-start justify-center">
      <div className="grid md:grid-cols-2 md:gap-12 gap-0 items-center max-w-7xl mx-auto">
        <div className="relative flex justify-center">
      <div className="cubep md:my-60 my-20">
        <div className="sidep leftp"><img src={pic3} className="w-[100%] h-[100%]"/></div>
        <div className="sidep frontp"><img src={pic1} className="w-[100%] h-[100%]"/></div>
        <div className="sidep backp"><img src={pic2} className="w-[100%] h-[100%]"/></div>
        <div className="sidep topp"><img src={pic2} className="w-[100%] h-[100%]"/></div>
        <div className="sidep rightp"><img src={pic4} className="w-[100%] h-[100%]"/></div>
        <div className="sidep bottomp"><img src={pic1} className="w-[100%] h-[100%]"/></div>
            </div>
        </div>
        <div className="">
          <h2 className="text-2xl md:text-5xl font-bold text-yellow-700 leading-tight mb-4 text-center">
            Acharya Anand Here,
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            I'm a passionate educator with a deep love for
            the Sanskrit. With years of experience and a unique teaching
            style, I make learning Sanskrit engaging and enriching for every
            student. My dedication to preserving this timeless language is
            truly inspiring. Through innovative methods and a supportive approach, 
            I bring the beauty of Sanskrit literature and culture to life. Join my online
            classes to embark on a journey of knowledge.
          </p>
          <a
            href="https://forms.gle/DW59SFPC56m3BNQ96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <center>
              <button
                type="button"
                className="w-[100%] mt-10 text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Register Now
              </button>
            </center>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;