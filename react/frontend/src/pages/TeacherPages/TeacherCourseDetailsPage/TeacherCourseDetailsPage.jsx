import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import LessonCard from '../../../components/lessonCard/LessonCard';

const TeacherCourseDetailsPage = ({loggedUser}) => {
    const location = useLocation();
    const course = location.state;
    const [lessons, setLessons] = useState();

    useEffect( ()=>{
        if(lessons == null){
          axios.get("api/course/"+course.id+"/lesson").then((res)=>{
            setLessons(res.data.lessons);
            //console.log(res.data);
      });
        }
      },[]);

  return (
    <div className="container">
      <h1 className="text-center">Kurs</h1>
      <div className="box">
        <div className="row">
          <div className="col-4">
            <strong>Title:</strong>
          </div>
          <div className="col-8">{course.title}</div>
        </div>
        <div className="row">
          <div className="col-4">
            <strong>Description:</strong>
          </div>
          <div className="col-8">{course.description}</div>
        </div>
        <div className="row">
          <div className="col-4">
            <strong>Price:</strong>
          </div>
          <div className="col-8">{course.price}</div>
        </div>
        <div>
            {loggedUser ?  <Link to="/add_lesson" className="secondary" state={course}>
              Dodaj lekciju
            </Link>:<></>}
        </div>
        
      </div>
      <br />
      <br />
      <h1 className="text-center">Lekcije</h1>
      <br />
      {lessons== null ? <>Nema dostupnih lekcija</> : (
    lessons.map((lesson) => (
      <LessonCard
        key={lesson.id}
        lesson={lesson}
        
      />
    ))
  )}
                

    </div>
  )
}

export default TeacherCourseDetailsPage
