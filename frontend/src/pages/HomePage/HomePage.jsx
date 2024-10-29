import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css'; // Dodatni stilovi, ako su potrebni

const Homepage = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Dobrodošli na našu platformu!</h1>
        <p>Otvorite vrata novim znanjima i veštinama kroz širok spektar kurseva i programa.</p>
        <div className="button-group">
          <Link to="/kursevi" className="button primary">Pogledajte Kurseve</Link>
          <Link to="/register" className="button secondary">Registrujte se</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;