

import {React} from 'react'
import CartCourse from '../../../components/cartCourse/cartCourse.jsx';


const UserCourses = ({courses}) => {
    
    

    
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
