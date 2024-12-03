import React from 'react'
import { useState } from 'react';
//import "../../index.css";
import "../ProfileMenu/profilemenu.css";
import profileAvatar from "../../assets/profileAvatar.jpg";
import "../../index.css"
import { Link } from "react-router-dom";



function ProfileMenu({loggedUser}) {
    const [menuActive, setMenuActive] = useState(false);
    const img = 'http://localhost:8000/storage/' + loggedUser.image;
    const menuToggle = () => {
      setMenuActive(!menuActive);
    };
   
  
    return (
      <div className="action">
        <div className="profile" onClick={menuToggle}>
            <p>{loggedUser.name}</p>
          <img src={loggedUser.image !=null ? img:profileAvatar} alt="User Avatar" />
         
         
        </div>
        <div className={`menu ${menuActive ? 'active' : ''}`}>
          
          <ul>
            <li>
              
              <Link to="user/profile">My profile</Link>
            </li>
            <li>
              <Link to="user/courses">My courses</Link>
            </li>
           
           
            
          </ul>
        </div>
      </div>
    );
  }
  
  export default ProfileMenu;
