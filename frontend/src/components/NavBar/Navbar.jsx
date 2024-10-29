import React from 'react'
import { Link } from "react-router-dom";
import "../../index.css";
import { FaCartShopping } from "react-icons/fa6";
import "./navbar.css";

const Navbar = ({cartNum}) => {
  return (
   
    <div className = 'container'>
      
    <nav>
      
        <ul className='row'>
            <p className='col-sm-offset-1' ><Link to ="pocetna">Pocetna</Link></p>
            <p className='col-sm-offset-1'><Link to ="kursevi">Kursevi</Link></p>
            <p className='col-sm-offset-3'><Link to ="login">Login</Link></p>
            <p className='col-sm-offset-1'><Link to ="register">Registruj se</Link></p>
            <p className='col-sm-offset-1'><Link to = "cart"><FaCartShopping />{cartNum}</Link></p>
            
               
        </ul>
    </nav>
    

    
</div>   
    
  )
}

export default Navbar
