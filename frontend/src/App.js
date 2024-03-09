import Navbar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/LoginPage/Login.jsx";
import Register from "./components/RegisterPage/Register.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
    
    <Navbar />

    <Routes>
      <Route path="/pocetna" element= {<div>pocetna</div>}/>
      <Route path="/kursevi" element= {<div>kursevi</div>}/>
      <Route path="/login" element= {<Login/>} />
      <Route path="/register" element= {<Register />}/>
     
    </Routes>
    <Footer />
   </BrowserRouter>

    
    
   
  );
}

export default App;
