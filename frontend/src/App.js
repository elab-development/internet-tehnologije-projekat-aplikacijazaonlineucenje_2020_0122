import Navbar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/LoginPage/Login.jsx";
import Register from "./pages/RegisterPage/Register.jsx";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart/Cart.jsx";
import Course from "./pages/CoursesPage/Course.jsx";
import picture1 from "../src/assets/20944356.jpg";
import picture2 from "../src/assets/GIU AMA 198-06.jpg";
import picture3 from "../src/assets/download.jpg";
import HomePage from "./pages/HomePage/HomePage.jsx";

const courses = [
  {
    id: 1,
    title: "Kurs 1",
    description: "Opis kursa 1",
    amount: 0,
    picture: picture1
  },
  {
    id: 2,
    title: "Kurs 2",
    description: "Opis kursa 2",
    amount: 0,
    picture: picture2
  },
  {
    id: 3,
    title: "Kurs 3",
    description: "Opis kursa 3",
    amount: 0,
    picture: picture3
  },
];

function App() {
  const [cartNum, setCartNum] = useState(0);

  const addToCart = (id) => {
    courses.map((course) => {
      if (course.id === id) {
        course.amount = course.amount + 1;
        setCartNum(cartNum + 1); 
        console.log("product id=", course.id, "amount=", course.amount);
      }
      return course;
    });
  };

  const remFromCart = (id) => {
    courses.map((course) => {
      if (course.id === id) {
        if (course.amount > 0) {
          course.amount = course.amount - 1;
          setCartNum(cartNum - 1);
          console.log("product id=", course.id, "amount=", course.amount);
        } else {
          alert("Amount of product is already 0.");
        }
      }
      return course;
    });
  };

  return (
    <BrowserRouter>
      <Navbar cartNum={cartNum} />
      <Routes>
        <Route path="/pocetna" element={<HomePage/>} />
        <Route
          path="/kursevi"
          element={<Course products={courses} onAdd={addToCart} onRemove={remFromCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
