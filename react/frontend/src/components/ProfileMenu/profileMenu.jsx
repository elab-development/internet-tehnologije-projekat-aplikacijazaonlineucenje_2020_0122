import React from 'react'
import { useState } from 'react';
//import "../../index.css";
import "../ProfileMenu/profilemenu.css";
import profileAvatar from '../../assets/profileAvatar.jpg';



function ProfileMenu() {
    const [menuActive, setMenuActive] = useState(false);
  
    const menuToggle = () => {
      setMenuActive(!menuActive);
    };
  
    return (
      <div className="action">
        <div className="profile" onClick={menuToggle}>
          <img src={profileAvatar} alt="Profile Avatar" />
        </div>
        <div className={`menu ${menuActive ? 'active' : ''}`}>
          
          <ul>
            <li>
              <a href="#">My profile</a>
            </li>
            <li>
              <a href="#">My courses</a>
            </li>
           
           
            
          </ul>
        </div>
      </div>
    );
  }
  
  export default ProfileMenu;
