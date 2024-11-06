import React from 'react'
import { Link } from "react-router-dom";
import "../../index.css";
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios';
import ProfileMenu from '../ProfileMenu/profileMenu';


const Navbar = ({cartNum, token, loggedUser}) => {
  console.log(loggedUser)
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
  return (
   
    <div className = 'container'>
      
    <nav>
      
        <ul className='row'>
            <p className='col-sm-offset-1' ><Link to ="home">Pocetna</Link></p>
            <p className='col-sm-offset-1'><Link to ="courses">Kursevi</Link></p>

            {token == null ? (<p className='col-sm-offset-2'><Link to ="login">Login</Link></p>)
            :(<p className='col-sm-offset-2'><Link to ="/" onClick={handleLogout}>Logout</Link></p>)}



            <p className='col-sm-offset-1'><Link to ="register">Registruj se</Link></p>
            <p className='col-sm-offset-1'><Link to = "cart"><FaCartShopping />{cartNum}</Link></p>


            {token == null ? <p></p>
            :( <p className='col-sm-offset-1'><ProfileMenu loggedUser = {loggedUser} /></p>)}

        </ul>
    </nav>
    

    
</div>   
    
  )
}

export default Navbar
