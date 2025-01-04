import React from "react";
import sanskrit from "../assets/img/sanskrit.jpeg";
const courses = [
  { title: "Course 1", image: sanskrit },
  { title: "Course 2", image: sanskrit },
  { title: "Course 3", image: sanskrit },
  { title: "Course 4", image: sanskrit },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="text-center text-2xl font-bold my-8 text-yellow-700">Our Courses</h2>
      <div className="grid-container">
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
