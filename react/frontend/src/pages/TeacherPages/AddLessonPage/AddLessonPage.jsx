import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const AddLessonPage = () => {

    const location = useLocation();
    const course = location.state;
    const [materials, setMaterials] = useState([]);
  const [LessonData, setLessonData] = useState({
    course_id: course.id,
    title: "",
    content: "",
  }); 
  
  function handleInput(e){
  
    let newLessonData = LessonData;
    newLessonData[e.target.name] = e.target.value;
    setLessonData(newLessonData);
    console.log(newLessonData); 
  };

  function handleFileChange(e) {
    e.preventDefault();
    const newFiles = Array.from(e.target.files);
  setMaterials((prevMaterials) => {
    const updatedMaterials = [...prevMaterials, ...newFiles];
    console.log(updatedMaterials); // Proverite šta se dešava odmah
    return updatedMaterials;
  });
  }


  const handleAddLesson = async (e) => {
    let newLessonId = 0;
    e.preventDefault();
   await axios.post('api/lessons', LessonData).then((res) => {
    
      console.log(res.data);
    newLessonId = res.data.lesson.id;
    console.log(newLessonId);
      alert("Lekcija je uspesno sacuvana");
       
  })
   addMaterials(newLessonId);

  };


  const addMaterials =  (lessonId) => {
    try {
       
        for (const file of materials) {
            const formData = new FormData();
            
         
            formData.append("file", file);
            formData.append("lesson_id", lessonId);

            
            const fileType = file.type.startsWith("video/") ? "video" : "text";
            
            formData.append("type", fileType);

            console.log([...formData.entries()]);
            axios.post('api/materials', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                  console.log(res.data);
              });

            
        }

        alert("Svi materijali su uspešno dodati!");
    } catch (error) {
        console.error(error);
        alert("Došlo je do greške prilikom dodavanja materijala.");
    }
};
  

  return (
  <div className='page-container'>
    <div className='container content-wrap'>
      <h2 className='col-sm-offset-2'>Kreiraj Lekciju</h2>
      <form onSubmit={handleAddLesson} encType='multipart/form-data'>
        <div className='col-sm-offset-2' >
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" onInput={handleInput} required  />
        </div>
        
        
        <div className='col-sm-offset-2'>
          <label htmlFor="content">Description:</label>
          <textarea type="content" id="content" name="content" onInput={handleInput}  required />
        </div>
       
        
        <div className='col-sm-offset-3'>
        <button className='primary' type="submit">Dodaj lekciju</button>
        </div>

        <div className="col-sm-offset-2">
            <label htmlFor="materials">Dodaj materijale:</label>
            <input
              type="file"
              id="materials"
              multiple
              onChange={handleFileChange}
            />
          </div>

      </form>
    </div>
  </div>
  );
};

export default AddLessonPage;