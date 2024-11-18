import React from 'react';
import "./coursesWithDetails.css";
import { Link } from 'react-router-dom';

const CoursesWithDetails = ({course}) => {
  return (
    <div className="card small">
      <div className='section'>
        <h2>{course.title}</h2>
      </div>
      <div className='section'>
        <img src={course.picture} className="section media" alt='picture' />
      </div>
      <div className='section'>
        <p>{course.description}</p>   
      </div>
      <div className='section'>
        <p>{course.price + '$'}</p>   
      </div>
      <div className='section row'>
        
        <div className="button-group">

        <Link to="course_details" className="secondary-button" state={course}>Detalji</Link>
          
        </div>
      </div>
    </div>
  );
}

export default CoursesWithDetails;
