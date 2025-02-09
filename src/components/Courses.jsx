import React from "react";
import sanskrit from "../assets/img/sanskrit.jpeg";
import "../assets/css/common.css"; 
const courses = [
  { title: "Subothini", image: sanskrit },
  { title: "Pravesha", image: sanskrit },
  { title: "Parichaya", image: sanskrit },
  { title: "Siksha", image: sanskrit },
  { title: "Kovida", image: sanskrit },
  { title: "Vishnu Sahasranamam - slokas", image: sanskrit },
  { title: "Lalitha Sahasranamam - slokas ", image: sanskrit },
  // { title: "Course 9", image: sanskrit },
  // { title: "Course 10", image: sanskrit },
  // { title: "Course 11", image: sanskrit },
  // { title: "Course 12", image: sanskrit },
  // { title: "Course 13", image: sanskrit },
  // { title: "Course 14", image: sanskrit },
  // { title: "Course 15", image: sanskrit },
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