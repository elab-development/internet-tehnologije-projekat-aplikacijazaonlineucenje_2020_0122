import axios from 'axios'
import React from 'react'

const UserCourses = ({loggedUser}) => {
    
    

    axios.get('/api/users/'+ loggedUser.id +'/purchaseds').then((res) => {
    
        console.log(res.data);
        
    });

  return (
    <div className='row'> 
      ovo je user courses
    </div>
  )
}

export default UserCourses
