import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='login__container'>
      <h2 className='col-sm-offset-5'>Login</h2>
      <form className='row'>
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
