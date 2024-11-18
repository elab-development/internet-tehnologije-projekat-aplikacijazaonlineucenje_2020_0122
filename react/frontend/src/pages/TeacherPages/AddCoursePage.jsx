import React from 'react';
import "./register.css";
import axios from 'axios';
import { useState } from 'react';


const AddCoursePage = ({updateCourses}) => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: 0
    
  }); 
  
  function handleInput(e){
  
    let newCourseData = courseData;
    newCourseData[e.target.name] = e.target.value;
    setCourseData(newCourseData);
    console.log(newCourseData); 
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
  axios.post('api/courses', courseData).then((res) => {

      console.log(res.data);
      alert("kurs je uspesno sacuvan");
      updateCourses();    
  }).catch(e =>{
    console.log(e);
    alert("kurs nije uspesno sacuvan");
  });
  };

  return (
  <div className='page-container'>
    <div className='container content-wrap'>
      <h2 className='col-sm-offset-2'>Kreiraj kurs</h2>
      <form onSubmit={handleAddCourse}>
        <div className='col-sm-offset-2' >
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" onInput={handleInput} required  />
        </div>
        
        
        <div className='col-sm-offset-2'>
          <label htmlFor="description">Description:</label>
          <textarea type="description" id="description" name="description" onInput={handleInput}  required />
        </div>
        <div className='col-sm-offset'>
          <label htmlFor="price">Price:</label>
          <input type="price" id="price" name="price" onInput={handleInput} required />
        </div>
        
        <div className='col-sm-offset-3'>
        <button className='primary' type="submit">Dodaj kurs</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default AddCoursePage;