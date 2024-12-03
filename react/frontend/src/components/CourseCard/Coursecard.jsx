import React from 'react';
import "./coursecard.css";


const Coursecard = ({ course, onAdd, onRemove }) => {
  return (
    <div className="card small">
      <div className='section'>
        <h2>{course.title}</h2>
      </div>
      <div className='section'>
        <img src="https:/picsum.photos/200" className="section media" alt='picture' />
      </div>
      <div className='section'>
        <p>{course.description}</p>   
      </div>
      <div className='section'>
        <p>{course.price + '$'}</p>   
      </div>
      <div className='section row'>
        
        <div className="button-group">

          <button className="primary small" onClick={() => onAdd(course.id)}>Dodaj u korpu</button>
          <button className="secondary small" onClick={() => onRemove(course.id)}>Izbaci iz korpe</button> 
        </div>
      </div>
    </div>
  );
}

export default Coursecard;
