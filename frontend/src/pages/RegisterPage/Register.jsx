import React from 'react';
import "./register.css";

const RegisterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

   
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const password = formData.get('password');
    const email = formData.get('email');
    const role = formData.get('role');

   
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Role:', role);
  };

  return (
  <div className='register__container'>
    <div className='container'>
      <h2 className='col-sm-offset-4'>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='col-sm-offset-2' >
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className='col-sm-offset-2'>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className='col-sm-offset-2'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className='col-sm-offset-2'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className='col-sm-offset-2'>
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" required>
            <option value="">Select Role</option>
            <option value="Administrator">Administrator</option>
            <option value="Predavač">Predavač</option>
            <option value="Korisnik">Korisnik</option>
          </select>
        </div>
        <div className='col-sm-offset-3'>
        <button className='primary' type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default RegisterForm;