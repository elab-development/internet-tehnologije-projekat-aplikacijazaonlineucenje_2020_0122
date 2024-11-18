import React, { useState, useEffect } from 'react';
import CoursesWithDetails from '../../../components/CoursesWithDetails/CoursesWithDetails.jsx';
//import "../CoursesPage/course.css";



const TeacherCoursesPage = ({courses}) => {
  const [searchTerm, setSearchTerm] = useState("");
 

  

  
  const filteredCourses = courses
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  return (
    <div className="container page-container">
       <div className="content-wrap">
      <div className="row" style={{ justifyContent: 'flex-end'}}>
        <input
          type="text"
          placeholder="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
      </div>

      <div className="row">
        
      {courses == null ? <></> : (
    filteredCourses.map((course) => (
      <CoursesWithDetails
        key={course.id}
        course={course}
      />
    ))
  )}




      </div>
    </div>
    </div>
  );
};

export default TeacherCoursesPage;