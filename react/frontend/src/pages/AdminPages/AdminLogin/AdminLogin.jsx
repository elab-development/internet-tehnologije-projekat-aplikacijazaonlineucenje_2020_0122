import React, { useState } from 'react';
import './adminLogin.css'; 
import axios from 'axios';

const AdminLogin = ({ addToken, addUser }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

   

  function handleInput(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
      
    });
    console.log(userData);
  }

  function handleAdminLogin(e) {
    e.preventDefault();
    axios.post('api/login', userData).then((res) => {
      if (res.data.success === true) {
        if (res.data.user.role_id === 1) {
           const token = res.data.access_token;
          window.sessionStorage.setItem("auth_token", token);
         
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          addToken(res.data.access_token);
          addUser(res.data.user);
         // console.log(res.data.user);
          alert("Dobrodošli, admin!");
        }
      }else{
        alert("greska");
      }
    }).catch((e) => {
      console.log(e);
      
    });
  }

  return (
    <div className='admin-login-container'>
      <h2 className='admin-login-title'>Admin Login</h2>
      <form className='admin-login-form' onSubmit={handleAdminLogin}>
        <div className='admin-login-input-group'>
          <label htmlFor="email">Admin Email:</label>
          <input type="text" id="email" name="email" onInput={handleInput} className="admin-login-input"/>
        </div>
        <div className='admin-login-input-group'>
          <label htmlFor="password">Admin Password:</label>
          <input type="password" id="password" name="password" onInput={handleInput} className="admin-login-input"/>
        </div>
        
        <button className='admin-login-button' type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
