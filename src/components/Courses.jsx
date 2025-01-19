import React from "react";
import { Helmet } from "react-helmet";
import sanskrit from "../assets/img/sanskrit.jpeg";

const courses = [
  { title: "Course 1", image: sanskrit },
  { title: "Course 2", image: sanskrit },
  { title: "Course 3", image: sanskrit },
  { title: "Course 5", image: sanskrit },
  { title: "Course 6", image: sanskrit },
  { title: "Course 7", image: sanskrit },
  { title: "Course 8", image: sanskrit },
  { title: "Course 9", image: sanskrit },
  { title: "Course 10", image: sanskrit },
  { title: "Course 11", image: sanskrit },
  { title: "Course 12", image: sanskrit },
  { title: "Course 13", image: sanskrit },
  { title: "Course 14", image: sanskrit },
  { title: "Course 15", image: sanskrit },
];

const Courses = () => {
  return (
<<<<<<< HEAD
    <div className="course-container relative overflow-auto">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Courses</title>
        <meta
          name="description"
          content="Explore a wide variety of courses to enhance your skills in various fields. Learn and grow with us."
        />
        <meta name="keywords" content="Courses, online courses, learning, education, React, programming" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Courses | Your Website Name" />
        <meta
          property="og:description"
          content="Explore a wide variety of courses to enhance your skills in various fields. Learn and grow with us."
        />
        <meta property="og:image" content="path_to_image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/courses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Courses | Your Website Name" />
        <meta
          name="twitter:description"
          content="Explore a wide variety of courses to enhance your skills in various fields. Learn and grow with us."
        />
        <meta name="twitter:image" content="path_to_image.jpg" />
        <meta name="twitter:site" content="@your_twitter_handle" />
      </Helmet>

      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-300 to-white rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500 to-white rounded-full blur-3xl opacity-60"></div>
      <h2 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 mb-8 drop-shadow-lg">
        Courses
      </h2>
      <div className="grid-container overflow-auto max-h-[70vh]">
=======
    <div className="course-container">
      <h2 className="text-center w-screen text-2xl font-bold my-8 text-yellow-700">Our Courses</h2>
      <div className="grid-container">
>>>>>>> 3394fd78d307f722a63b208791642620509c4d33
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title bg-amber-600 text-white">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
