import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling to section
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-extrabold tracking-wide text-white hover:text-orange-200 transition duration-300 ease-in-out">
              Sanskrit
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Profile", "Myworks", "Courses"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="relative group px-3 py-2 rounded-md text-lg font-medium hover:text-orange-100 transition duration-300 ease-in-out"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-orange-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-200 focus:outline-none"
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
        <div className="md:hidden bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Profile", "Myworks", "Courses"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}  // Scroll to the section
                className="w-full block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-500 hover:shadow-md transition duration-300 ease-in-out"
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
