import React from "react";
import sanskrit from "../assets/img/sanskrit.jpeg";
import "../assets/css/common.css"; 
const courses = [
  { title: "Subothini Exam Preparation - ₹1500     ", image: sanskrit },
  { title: "Pravesha Exam Preparation - ₹1500      ", image: sanskrit },
  { title: "Parichaya Exam Preparation - ₹1500      ", image: sanskrit },
  { title: "Siksha Exam Preparation - ₹1500       ", image: sanskrit },
  { title: "KovidaExam Preparation - ₹1500     ", image: sanskrit },
  { title: "Vishnu Sahasranamam slokas - ₹1000", image: sanskrit },
  { title: "Lalitha Sahasranamam slokas - ₹1000 ", image: sanskrit },
  { title: "Bagavathgita (all chapters) - ₹1000 ", image: sanskrit },
  { title: "CBSE Sylabus and Metric Sylabus - ₹1000", image: sanskrit },
  { title: "Sanskrit Basic and slokas classes - ₹1000", image: sanskrit },
  // { title: "Course 13", image: sanskrit },
  // { title: "Course 14", image: sanskrit },
  // { title: "Course 15", image: sanskrit },
];

const Courses = () => {
  return (
    <div  className="course-container">
      <h2 className="text-center w-screen text-2xl font-bold my-8 text-yellow-700">Courses Available</h2>
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