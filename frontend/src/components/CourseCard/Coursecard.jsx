import React from 'react';
import "./coursecard.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const Coursecard = ({ course, onAdd, onRemove }) => {
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
        <p>Dodaj u korpu</p>
        <div className="button-group">
          <button className="small" onClick={() => onAdd(course.id)}><FaPlus /></button>
          <button className="small" onClick={() => onRemove(course.id)}><FaMinus /></button> 
        </div>
      </div>
    </div>
  );
}

export default Coursecard;
