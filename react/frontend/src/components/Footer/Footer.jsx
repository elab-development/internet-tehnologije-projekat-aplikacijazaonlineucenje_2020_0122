import React from 'react';
import { Link } from "react-router-dom";
import "../../index.css";
//import "../Footer/footer.css";
import { FaInfoCircle, FaPhone, FaLock, FaFileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="row">
        <ul className="row">
          <li className="col-sm"><Link to="/o-nama"><FaInfoCircle /> O nama</Link></li>
          <li className="col-sm"><Link to="/kontakt"><FaPhone /> Kontakt</Link></li>
          <li className="col-sm"><Link to="/politika-privatnosti"><FaLock /> Politika privatnosti</Link></li>
          <li className="col-sm"><Link to="/uslovi-koriscenja"><FaFileAlt /> Uslovi korišćenja</Link></li>
        </ul>
      </div>
      <div className="row">
        <p className="col-sm text-center">© Projektni ITEH</p>
      </div>
    </footer>
  );
};

export default Footer;
