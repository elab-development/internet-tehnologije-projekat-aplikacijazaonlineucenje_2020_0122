
import axios from 'axios'
import {React, useState,useEffect} from 'react'
import CartCourse from '../../components/cartCourse/cartCourse.jsx';


const UserCourses = ({loggedUser}) => {
    
    const[courses, setCourses] = useState();

    useEffect(()=>{
        if(courses == null){
            axios.get('/api/users/'+ loggedUser.id +'/purchaseds').then((res) => {
    
                console.log(res.data);
                setCourses(res.data.data);
            });
        }
      },[courses])

    
  return (
    <div className='row'> 
     {courses == null ? <></> : (
     courses.map((item) => (
        <CartCourse key={item.id} course={item.course} />
    ))
  )}
    </div>
  )
}

export default UserCourses
