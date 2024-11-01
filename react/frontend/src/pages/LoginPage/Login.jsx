import React from 'react'
import './login.css'

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

   
    
    const username = formData.get('username');
    const password = formData.get('password');
   

   
    console.log('Username: ',username);
    console.log('Password:', password);
    
  };


  return (
    <div className='login__container'>
      <h2 className='col-sm-offset-5'>Login</h2>
      <form className='row' onSubmit={handleSubmit}>
        <div className='col-sm-offset-4'>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className='col-sm-offset-4'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className='col-sm-offset-5'>
        <button className='primary' type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
