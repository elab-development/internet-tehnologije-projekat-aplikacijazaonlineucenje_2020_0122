import React from 'react';



const LessonCard = ({ lesson }) => {
 
  return (
    <div className="card small">
      <div className='section'>
        <h2>{lesson.title}</h2>
      </div>
      
      <div className='section'>
        <p>{lesson.content}</p>   
      </div>
      <div className='section row'>
      <h3>belongs to: {lesson.course_id}</h3>

      </div>
      
    </div>
  );
}

export default LessonCard;
