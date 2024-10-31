import React from 'react';



const Coursecard = ({ course }) => {
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
      <div className='section row'>
      <h3>Amount: {course.amount}</h3>
    
      </div>
    </div>
  );
}

export default Coursecard;
