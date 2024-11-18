

import {React} from 'react'

import CoursesWithDetails from '../../../components/CoursesWithDetails/CoursesWithDetails';


const UserCourses = ({courses}) => {
    
    

    
  return (
    <div className='row'> 
     {courses == null ? <></> : (
     courses.map((item) => (
        <CoursesWithDetails key={item.id} course={item.course} />
    ))
  )}
    </div>
  )
}

export default UserCourses
