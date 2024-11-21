import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const AddLessonPage = () => {

    const location = useLocation();
    const course = location.state;

  const [LessonData, setLessonData] = useState({
    course_id: course.id,
    title: "",
    content: ""
    
  }); 
  
  function handleInput(e){
  
    let newLessonData = LessonData;
    newLessonData[e.target.name] = e.target.value;
    setLessonData(newLessonData);
    console.log(newLessonData); 
  };

  const handleAddLesson = (e) => {
    e.preventDefault();
  axios.post('api/lessons', LessonData).then((res) => {

      console.log(res.data);
      alert("Lekcija je uspesno sacuvana");
      
  }).catch(e =>{
    console.log(e);
    alert("Lekcija nije uspesno sacuvana");
  });
  };

  return (
  <div className='page-container'>
    <div className='container content-wrap'>
      <h2 className='col-sm-offset-2'>Kreiraj Lekciju</h2>
      <form onSubmit={handleAddLesson}>
        <div className='col-sm-offset-2' >
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" onInput={handleInput} required  />
        </div>
        
        
        <div className='col-sm-offset-2'>
          <label htmlFor="content">Content:</label>
          <textarea type="content" id="content" name="content" onInput={handleInput}  required />
        </div>
       
        
        <div className='col-sm-offset-3'>
        <button className='primary' type="submit">Dodaj kurs</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default AddLessonPage;