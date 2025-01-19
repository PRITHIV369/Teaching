import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-3xl font-extrabold text-white tracking-widest hover:scale-105 transition-transform duration-300">
              Sanskrit
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Profile", id: "profile" },
              { name: "Works", id: "works" },
              { name: "Courses", id: "courses" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group px-4 py-2 rounded-md text-lg font-semibold text-white hover:text-gray-200 transition duration-300 ease-in-out"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
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
        <div className="md:hidden bg-yellow-500 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: "Profile", id: "profile" },
              { name: "Works", id: "works" },
              { name: "Courses", id: "courses" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="w-full block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-yellow-600 hover:shadow-inner transition duration-300 ease-in-out"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
