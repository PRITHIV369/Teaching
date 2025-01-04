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
              Sanskrit
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
            {["Profile", "Myworks", "Courses"].map((item) => (
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
