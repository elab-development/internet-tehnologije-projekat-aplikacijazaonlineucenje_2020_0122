import React from 'react';
import { Link } from 'react-router-dom';



const LessonCard = ({ lesson }) => {
 


    return (
        <div className="card small">
          <div className="section">
            <h2>{lesson.title}</h2>
          </div>
          
          <div className="section">
            <p>{lesson.content}</p>   
          </div>
          
          
      <div className="section">
        <Link to={`/lesson/materials`} className="button primary" state={lesson}>
          Materijali
        </Link>
      </div>
    </div>
        
      );
}

export default LessonCard;
