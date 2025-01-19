import React from "react";
import { Helmet } from "react-helmet";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Sanskirt</title>
        <meta
          name="description"
          content="Connect with us on social media platforms like Facebook, Instagram, Twitter, YouTube, and LinkedIn to stay updated with our latest news."
        />
        <meta name="keywords" content="social media, Facebook, Instagram, Twitter, LinkedIn, YouTube" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Your Company Name | Social Media Links" />
        <meta
          property="og:description"
          content="Connect with us on social media platforms like Facebook, Instagram, Twitter, YouTube, and LinkedIn to stay updated with our latest news."
        />
        <meta property="og:image" content="path_to_image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Company Name | Social Media Links" />
        <meta
          name="twitter:description"
          content="Connect with us on social media platforms like Facebook, Instagram, Twitter, YouTube, and LinkedIn to stay updated with our latest news."
        />
        <meta name="twitter:image" content="path_to_image.jpg" />
        <meta name="twitter:site" content="@your_twitter_handle" />
      </Helmet>

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
    </>
  );
};

export default Footer;
