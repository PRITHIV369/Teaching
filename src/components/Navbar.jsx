import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-extrabold tracking-wide text-yellow-700 hover:text-yellow-600 transition duration-300 ease-in-out">
              Avyukth
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Profile", "Works", "Courses"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative group px-3 py-2 rounded-md text-lg font-medium text-yellow-800 hover:text-yellow-600 transition duration-300 ease-in-out"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-700 hover:text-yellow-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Profile", "Works", "Courses"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="w-full block px-3 py-2 rounded-md text-base font-medium text-yellow-700 hover:bg-gray-100 hover:shadow-inner transition duration-300 ease-in-out"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (section) => {
//     const element = document.getElementById(section);
//     element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav className="bg-transparent fixed top-0 left-0 w-full z-50 shadow-none">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Brand */}
//           <div className="flex items-center space-x-2">
//             <div className="text-4xl font-bold text-yellow-800 hover:scale-110 transition-transform cursor-pointer">
//               Sanskrit
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             {["Profile", "Works", "Courses"].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="px-6 py-3 rounded-full text-yellow-800 text-lg font-bold hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-yellow-800 hover:text-yellow-600 focus:outline-none"
//             >
//               <svg
//                 className="h-8 w-8"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-transparent shadow-none">
//           <div className="px-4 pt-4 pb-3 space-y-2">
//             {["Profile", "Works", "Courses"].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="w-full text-left px-6 py-3 rounded-lg text-yellow-800 font-bold hover:bg-yellow-500 transition-all duration-300"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (section) => {
//     const element = document.getElementById(section);
//     element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
// <<<<<<< HEAD
//     <nav className="bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg sticky top-0 z-50 w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="text-3xl font-extrabold text-white tracking-widest hover:scale-105 transition-transform duration-300">
//               Sanskrit
//             </div>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             {[
//               { name: "Profile", id: "profile" },
//               { name: "Works", id: "works" },
//               { name: "Courses", id: "courses" },
//             ].map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className="relative group px-4 py-2 rounded-md text-lg font-semibold text-white hover:text-gray-200 transition duration-300 ease-in-out"
//               >
//                 {item.name}
//                 <span className="absolute inset-x-0 bottom-0 h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
// =======
//     <nav className="bg-transparent fixed top-0 left-0 w-full z-50 shadow-md border-b-2 border-gray-300">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Brand */}
//           <div className="flex items-center space-x-2">
//             <div className="text-4xl font-bold text-yellow-800 hover:scale-110 transition-transform cursor-pointer">
//               Sanskrit
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             {["Profile", "Works", "Courses"].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="px-6 py-3 rounded-full text-yellow-800 text-lg font-bold hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
//               >
//                 {item}
// >>>>>>> 3394fd78d307f722a63b208791642620509c4d33
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
// <<<<<<< HEAD
//               className="text-white hover:text-gray-200 focus:outline-none"
// =======
//               className="text-yellow-800 hover:text-yellow-600 focus:outline-none"
// >>>>>>> 3394fd78d307f722a63b208791642620509c4d33
//             >
//               <svg
//                 className="h-8 w-8"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
// <<<<<<< HEAD
//         <div className="md:hidden bg-yellow-500 shadow-md">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {[
//               { name: "Profile", id: "profile" },
//               { name: "Works", id: "works" },
//               { name: "Courses", id: "courses" },
//             ].map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   scrollToSection(item.id);
//                   setIsOpen(false);
//                 }}
//                 className="w-full block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-yellow-600 hover:shadow-inner transition duration-300 ease-in-out"
// =======
//         <div className="md:hidden bg-transparent shadow-none">
//           <div className="px-4 pt-4 pb-3 space-y-2">
//             {["Profile", "Works", "Courses"].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="w-full text-left px-6 py-3 rounded-lg text-yellow-800 font-bold hover:bg-yellow-500 transition-all duration-300"
// >>>>>>> 3394fd78d307f722a63b208791642620509c4d33
//               >
//                 {item.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
