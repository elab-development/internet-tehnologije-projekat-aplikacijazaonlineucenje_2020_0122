import React from 'react'
import { Link } from "react-router-dom";
import "../../index.css";

const Navbar = () => {
  return (
   
    <div className = 'container'>
      
    <nav>
      
        <ul className='row'>
            <p className='col-sm-offset-1' ><Link to ="pocetna">Pocetna</Link></p>
            <p className='col-sm-offset-1'><Link to ="kursevi">Kursevi</Link></p>
            <p className='col-sm-offset-5'><Link to ="login">Login</Link></p>
            <p className='col-sm-offset-1'><Link to ="register">Registruj se</Link></p>
        </ul>
    </nav>
    

    
</div>   
    
  )
}

export default Navbar
