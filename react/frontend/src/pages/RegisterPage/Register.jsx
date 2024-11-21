import React, { useState } from 'react';
import "./register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    role_id: 3,
    img: ""
  });

  let navigate = useNavigate();

  const handleInput = (e) => {
    let newUserData = { ...userData };
    if (e.target.type === "file") {
      newUserData[e.target.name] = e.target.files[0]; // Za fajl, uzmi prvi odabrani fajl
    } else {
      newUserData[e.target.name] = e.target.value; // Za tekstualna polja
    }

    setUserData(newUserData);
    console.log(newUserData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('api/register', userData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
        navigate("/login");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Register</h2>
        <form onSubmit={handleRegister} className="row" encType='multipart/form-data'>
          {/* Profilna Slika */}
          <div className="col-sm-12 col-md-6">
            <label htmlFor="img" className="form-label">Image</label>
            <input type="file" name="img" className="input-file" placeholder="image" onInput={handleInput} />
          </div>

          {/* Name */}
          <div className="col-sm-12 col-md-6">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" className="input-text" onInput={handleInput} required />
          </div>

          {/* Password */}
          <div className="col-sm-12 col-md-6">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" id="password" name="password" className="input-text" onInput={handleInput} required />
          </div>

          {/* Email */}
          <div className="col-sm-12 col-md-6">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" className="input-text" onInput={handleInput} required />
          </div>

          {/* Submit Button */}
          <div className="col-sm-12">
            <button className="button primary" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
