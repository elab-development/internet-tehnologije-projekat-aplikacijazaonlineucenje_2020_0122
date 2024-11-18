import React from 'react'
import './login.css'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({addToken, addUser}) => {
  let navigation = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

function handleInput(e){
  
  let newUserData = userData;
  newUserData[e.target.name] = e.target.value;
  setUserData(newUserData); 
}

function handleLogin(e){
  e.preventDefault();
  axios.post('api/login', userData).then((res) => {
    if(res.data.user.role_id === 1){
      alert("Korisnik je admin");
      return;
    }
    if(res.data.user.is_blocked === 1){
      alert("Korisnik je blokiran");
      return;
    }
      if(res.data.success === true){
        console.log(res.data)
       
        const token = res.data.access_token;
          window.sessionStorage.setItem("auth_token", token);
         
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        addToken(res.data.access_token);
        addUser(res.data.user); 
        navigation('/');
      }else{
        alert("neuspeh");
      }
      

      
      

  }).catch(e =>{
    console.log(e);
   
  });
}

  return (
    <div className='login_container page-container content-wrap'>
      <h2 className='col-sm-offset-5'>Login</h2>
      <form className='row' onSubmit={handleLogin}>
        <div className='row col-sm-offset-5'>
          
          <label className='col-sm-offset-4' htmlFor="email"  >Email:</label> 
          <input type="text" id="email" name="email" onInput={handleInput} />
        </div>
        <div className='col-sm-offset-5' >
          <label className='col-sm-offset-3' htmlFor="password">Password:</label>
          <input  type="password" id="password" name="password"  onInput={handleInput} />
        </div>
        <div className='col-sm-offset-5'>
        <button className='primary' type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
