import React from 'react';
import "./register.css";
import axios from 'axios';
import { useState } from 'react';


const RegisterPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    role_id: ""
  }); 
  
  function handleInput(e){
  
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
    console.log(newUserData); 
  };

  const handleRegister = (e) => {
    e.preventDefault();
  axios.post('api/register', userData).then((res) => {
      console.log(res.data);
      alert("novi " + (userData.role_id === "2" ? 'predavac' : 'administrator') + " registrovan");
  }).catch(e =>{
    console.log(e);
  });
  };

  return (
    
  <div className='page-container'>
   
    <div className='container content-wrap'>
      <h2 className='col-sm-offset-2'>Register</h2>
      <form onSubmit={handleRegister}>
        <div className='col-sm-offset-2' >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onInput={handleInput} required  />
        </div>
        
        
        <div className='col-sm-offset-2'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onInput={handleInput}  required />
        </div>
        <div className='col-sm-offset-2'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onInput={handleInput} required />
        </div>
        <div className='col-sm-offset-2'>
          <label htmlFor="role">Role:</label>
          <select id="role_id" name="role_id" onInput={handleInput} required>
            <option value="">Select Role</option>
            <option value="1">Administrator</option>
            <option value="2">Predavač</option>
            
          </select>
        </div>
        <div className='col-sm-offset-4'>
        <button className='primary' type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default RegisterPage;