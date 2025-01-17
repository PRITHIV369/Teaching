// import React from "react";
// import pic1 from "../assets/img/pic1.jpg";
// import pic2 from "../assets/img/pic2.jpeg";
// import pic3 from "../assets/img/pic3.jpeg";

// const Profile = () => {
//   return (
//     <div className="relative bg-white px-6 overflow-hidden flex md:items-center items-start justify-center">
//       <div className="grid md:grid-cols-2 md:gap-12 gap-0 items-center max-w-7xl mx-auto">
//         <div className="relative flex justify-center">
//       <div className="cubep md:my-60 my-20">
//         <div className="sidep frontp"><img src={pic1} className="w-[100%] h-[100%]"/></div>
//         <div className="sidep backp"><img src={pic2} className="w-[100%] h-[100%]"/></div>
//         <div className="sidep leftp"><img src={pic3} className="w-[100%] h-[100%]"/></div>
//         <div className="sidep rightp"><img src={pic1} className="w-[100%] h-[100%]"/></div>
//         <div className="sidep topp"><img src={pic2} className="w-[100%] h-[100%]"/></div>
//         <div className="sidep bottomp"><img src={pic3} className="w-[100%] h-[100%]"/></div>
//             </div>
//         </div>
//         <div className="">
//           <h2 className="text-2xl md:text-5xl font-bold text-yellow-700 leading-tight mb-4 text-center">
//             Sanskrit Teacher Here,
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed text-justify">
//             Our Sanskrit teacher is a passionate educator with a deep love for
//             the ancient language. With years of experience and a unique teaching
//             style, they make learning Sanskrit engaging and enriching for every
//             student. Their dedication to preserving this timeless language is
//             truly inspiring. Through innovative methods and a supportive approach, 
//             they bring the beauty of Sanskrit literature and culture to life. Join their
//             classes to embark on a journey of knowledge and tradition.
//           </p>
//           <a
//             href="https://forms.gle/DW59SFPC56m3BNQ96"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <center>
//               <button
//                 type="button"
//                 className="w-[100%] mt-10 text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 Register Now
//               </button>
//             </center>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React from "react";
import pic1 from "../assets/img/pic1.jpg";
import pic2 from "../assets/img/pic2.jpeg";
import pic3 from "../assets/img/pic3.jpeg";

const Profile = () => {
  return (
<<<<<<< HEAD
    <div className="relative bg-gradient-to-br from-white via-gray-100 to-yellow-50 text-gray-800 px-6 overflow-hidden flex md:items-center items-start justify-center min-h-screen">
      <div className="grid md:grid-cols-2 md:gap-12 gap-6 items-center max-w-7xl mx-auto z-10">
        <div className="relative flex justify-center">
          <div className="cubep md:my-40 my-20 transform hover:scale-105 transition duration-500">
            <div className="sidep frontp">
              <img src={pic1} alt="pic1" className="w-[100%] h-[100%] rounded-md shadow-lg" />
            </div>
            <div className="sidep backp">
              <img src={pic2} alt="pic2" className="w-[100%] h-[100%] rounded-md shadow-lg" />
            </div>
            <div className="sidep leftp">
              <img src={pic3} alt="pic3" className="w-[100%] h-[100%] rounded-md shadow-lg" />
            </div>
            <div className="sidep rightp">
              <img src={pic1} alt="pic4" className="w-[100%] h-[100%] rounded-md shadow-lg" />
            </div>
            <div className="sidep topp">
              <img src={pic2} alt="pic5" className="w-[100%] h-[100%] rounded-md shadow-lg" />
            </div>
            <div className="sidep bottomp">
              <img src={pic3} alt="pic6" className="w-[100%] h-[100%] rounded-md shadow-lg" />
            </div>
          </div>
        </div>
        <div className="relative bg-white shadow-2xl rounded-lg p-8 z-20 border border-yellow-300">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 leading-tight mb-4 text-center drop-shadow-md">
            Sanskrit Teacher Here
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-justify drop-shadow-sm">
            Our Sanskrit teacher is a passionate educator with a deep love for
            the ancient language. With years of experience and a unique teaching
            style, they make learning Sanskrit engaging and enriching for every
            student. Their dedication to preserving this timeless language is
            truly inspiring. Through innovative methods and a supportive approach, 
            they bring the beauty of Sanskrit literature and culture to life. Join their
            classes to embark on a journey of knowledge and tradition.
=======
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-200 px-6 overflow-hidden flex md:items-center items-start justify-center">
      <div className="grid md:grid-cols-2 md:gap-12 gap-0 items-center max-w-7xl mx-auto">
        <div className="relative flex justify-center">
          <div className="cubep md:my-60 my-20">
            <div className="sidep frontp">
              <img src={pic1} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="sidep backp">
              <img src={pic2} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="sidep leftp">
              <img src={pic3} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="sidep rightp">
              <img src={pic1} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="sidep topp">
              <img src={pic2} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="sidep bottomp">
              <img src={pic3} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-5xl font-bold text-yellow-800 leading-tight mb-6 text-center">
            Sanskrit Teacher Here
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            Our Sanskrit teacher is a passionate educator with a deep love for the ancient language. With years of experience and a unique teaching style, they make learning Sanskrit engaging and enriching for every student. Their dedication to preserving this timeless language is truly inspiring. Through innovative methods and a supportive approach, they bring the beauty of Sanskrit literature and culture to life. Join their classes to embark on a journey of knowledge and tradition.
>>>>>>> 3394fd78d307f722a63b208791642620509c4d33
          </p>
          <a
            href="https://forms.gle/DW59SFPC56m3BNQ96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <center>
              <button
                type="button"
<<<<<<< HEAD
                className="w-[100%] mt-10 text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform hover:scale-105 transition duration-300"
=======
                className="w-[90%] mt-10 text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-lg px-5 py-3 text-center"
>>>>>>> 3394fd78d307f722a63b208791642620509c4d33
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
