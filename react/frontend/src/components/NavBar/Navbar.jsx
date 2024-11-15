import React from 'react'
import { Link } from "react-router-dom";
import "../../index.css";
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios';
import ProfileMenu from '../ProfileMenu/profileMenu';


const Navbar = ({cartNum, token, loggedUser, loggedUserCourses}) => {
  
  function handleLogout(){
    
   
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'api/logout',
      headers: { 
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'), 
      },
      
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.setItem("auth_token", null);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
    
  }
  if(loggedUser != null && loggedUser.role_id === 3){
  return (
    <div className = 'container'>
    <nav>   
        <ul className='row'>
            <div className='col-sm-offset-1' ><Link to ="home">Pocetna</Link></div>
            <div className='col-sm-offset-1'><Link to ="courses">Kursevi</Link></div>
            {token == null ? (<div className='col-sm-offset-2'><Link to ="login">Login</Link></div>)
            :(<div className='col-sm-offset-2'><Link to ="/" onClick={handleLogout}>Logout</Link></div>)}
            <div className='col-sm-offset-1'><Link to ="register">Registruj se</Link></div>
            <div className='col-sm-offset-1'><Link to = "cart"><FaCartShopping />{cartNum}</Link></div>
            {token == null ? <p></p>
            :( <div className='col-sm-offset-1'><ProfileMenu loggedUser = {loggedUser} courses={loggedUserCourses} /></div>)}
        </ul>
    </nav>
</div>    
  )
}
  if(loggedUser != null && loggedUser.role_id === 1){
    return (
      <div className = 'container'>
      <nav>   
          <ul className='row'>
              <div className='col-sm-offset-1' ><Link to ="admin/users">Korisnici</Link></div>
              <div className='col-sm-offset-1'><Link to ="courses">Predavaci</Link></div>
              {token == null ? (<div className='col-sm-offset-3'><Link to ="login">Login</Link></div>)
              :(<div className='col-sm-offset-3'><Link to ="/" onClick={handleLogout}>Logout</Link></div>)}
             
              
              {token == null ? <p></p>
              :( <div className='col-sm-offset-1'><ProfileMenu loggedUser = {loggedUser} courses={loggedUserCourses} /></div>)}
          </ul>
      </nav>
  </div>    
    )
  }
  if(loggedUser == null){
    return (
      <div className = 'container'>
      <nav>   
          <ul className='row'>
              <div className='col-sm-offset-1' ><Link to ="home">Pocetna</Link></div>
              <div className='col-sm-offset-1'><Link to ="courses">Kursevi</Link></div>
              {token == null ? (<div className='col-sm-offset-2'><Link to ="login">Login</Link></div>)
              :(<div className='col-sm-offset-2'><Link to ="/" onClick={handleLogout}>Logout</Link></div>)}
              <div className='col-sm-offset-1'><Link to ="register">Registruj se</Link></div>
              <div className='col-sm-offset-1'><Link to = "cart"><FaCartShopping />{cartNum}</Link></div>
              {token == null ? <p></p>
              :( <div className='col-sm-offset-1'><ProfileMenu loggedUser = {loggedUser} courses={loggedUserCourses} /></div>)}
          </ul>
      </nav>
  </div>    
    )
  }


}

export default Navbar
