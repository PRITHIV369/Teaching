import React from "react";
import sanskrit from "../assets/img/sanskrit.jpeg";
import "../assets/css/common.css"; 
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
    <div  className="course-container">
      <h2 className="text-center w-screen text-2xl font-bold my-8 text-yellow-700">Our Courses</h2>
      <div id="course" className="grid-container">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title bg-yellow-700">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;