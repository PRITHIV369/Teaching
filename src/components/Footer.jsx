import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-700 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-2xl font-bold mb-4">Follow Us</p>
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-600"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-600"
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className="text-center text-sm">
          &copy; 2024 Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
