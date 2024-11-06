import React, { useState, useEffect } from 'react';
import Coursecard from '../../components/CourseCard/Coursecard';
//import "../CoursesPage/course.css";


const Course = ({ courses, onAdd, onRemove }) => {
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
      <Coursecard
        key={course.id}
        course={course}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    ))
  )}




      </div>
    </div>
    </div>
  );
};

export default Course;