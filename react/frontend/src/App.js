import Navbar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/LoginPage/Login.jsx";
import Register from "./pages/RegisterPage/Register.jsx";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserPages/UserProfilePage/UserProfile.jsx";
import axios from "axios";
import Cart from "./pages/Cart/Cart.jsx";
import Course from "./pages/CoursesPage/Course.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
import UserCourses from "./pages/UserPages/UserCoursePage/UserCourses.jsx";
import AdminLogin from "./pages/AdminPages/AdminLogin/AdminLogin.jsx";
import Users from "./pages/AdminPages/Users/Users.jsx";
import UserDetails from "./pages/AdminPages/UserDetails/UserDetails.jsx";
import AdminRegister from "./pages/AdminPages/Register admin/AdminRegister.jsx";
import Predavaci from "./pages/AdminPages/Predavaci/Predavaci.jsx";
import TeacherDetails from "./pages/AdminPages/TeacherDetails/TeacherDetails.jsx";
import AddCoursePage from "./pages/TeacherPages/AddCoursePage.jsx";
import TeacherCoursesPage from "./pages/TeacherPages/TeacherCourses/TeacherCoursesPage.jsx";
import TeacherCourseDetailsPage from "./pages/TeacherPages/TeacherCourseDetailsPage/TeacherCourseDetailsPage.jsx";
import AddLessonPage from "./pages/TeacherPages/AddLessonPage/AddLessonPage.jsx";
import LessonMaterialsPage from "./pages/TeacherPages/LessonMaterialsPage/LessonMaterialsPage.jsx";


function App() {

  const[courses, setCourses] = useState();
 
  useEffect(()=>{
    if(courses == null){
      axios.get("api/courses").then((res)=>{
        const coursesWithAmount = res.data.course.map(course => ({
          ...course,
          amount: 0, 
        }));
        setCourses(coursesWithAmount);
        
  });
    }
  },[courses]);

  const updateCoursesAfterAdding = () => {
    axios.get("api/courses").then((res) => {
      const coursesWithAmount = res.data.course.map(course => ({
        ...course,
        amount: 0,
      }));
      setCourses(coursesWithAmount);
    }).catch((e) => {
      console.error("Error updating courses:", e);
    });
  };

 



  const [cartNum, setCartNum] = useState(0);
  const [cartCourses, setCartCourses] = useState([]);
  const [token, setToken] = useState(); 
  const [user, setUser] = useState();

  const[loggedUserCourses, setLoggedUserCourses] = useState();

  useEffect(()=>{
      if( user != null){
          axios.get('/api/users/'+ user.id +'/purchaseds').then((res) => {
              setLoggedUserCourses(res.data.data);
          });
      }
    },[user]);

    function updateCourses() {
      if (user != null) {
          axios.get('/api/users/' + user.id + '/purchaseds').then((res) => {
              setLoggedUserCourses(res.data.data);
          });
      }
  }


  const addToCart = (id) => {
    const isInCart = cartCourses.some((course) => course.id === id);

    if (isInCart) {
      alert("Ne mozete kupiti 2 puta isti kurs");
      return;
    }

    const updatedCourses = courses.map((course) => {
      if (course.id === id) {
        course.amount = 1;
      }
      return course;
    });
  
    setCartCourses(updatedCourses.filter((course) => course.amount > 0));
    setCartNum(cartNum + 1);
  };

  const remFromCart = (id) => {
    courses.map((course) => {
      if (course.id === id) {
        if (course.amount > 0) {
          course.amount = 0;
          setCartNum(cartNum - 1);
          refreshCart();
          console.log("product id=", course.id, "amount=", course.amount);
        } else {
          alert("Amount of product is already 0.");
        }
      }
      return course;
    });
  };

  function addCourseToUserCourses(newCourse) {
    console.log('Adding course:', newCourse);
    setLoggedUserCourses((prevCourses) => [...prevCourses, newCourse]);
}

  const refreshCart = () => {
    const newCourses = cartCourses.filter((course) => course.amount > 0);
    setCartCourses(newCourses);
  };

  function calculateTotal() {
    return cartCourses.reduce((total, course) => total + course.price * course.amount, 0);
  }

  function addToken(auth_token){
    setToken(auth_token);
  }
  
  function addUser(user){
    setUser(user);
  }


  return (
    <BrowserRouter>
       <><Navbar cartNum={cartNum} token = {token} loggedUser = {user} />
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/courses" element={<Course courses={courses} onAdd={addToCart} onRemove={remFromCart} />}/>
        <Route path="teacher/courses" element={<TeacherCoursesPage courses={courses} />}/>
        <Route path="teacher/courses/course_details" element={<TeacherCourseDetailsPage loggedUser ={user}/>}/>
        <Route path="/add_lesson" element={<AddLessonPage/>}/>
        <Route path="/lesson/materials" element={<LessonMaterialsPage/>}/>
        <Route path="user/courses/course_details" element={<TeacherCourseDetailsPage  />}/>
        <Route path="/login" element={<Login addToken={addToken} addUser = {addUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart cartCourses={cartCourses} calculateTotal={calculateTotal} />} />
        <Route path="/checkout" element={<CheckoutPage cartCourses={cartCourses} loggedUser={user} userCourses = {loggedUserCourses} updateUserCourses={updateCourses} />} />
        <Route path="/admin/login" element={<AdminLogin addToken={addToken} addUser={addUser} />} />
        <Route path="/admin/users" element={<Users  />}/>
        <Route path="/admin/teachers" element={<Predavaci  />}/>
        <Route path="/admin/teachers/teacher_details" element={<TeacherDetails  />}/>
        <Route path="/admin/register" element={<AdminRegister  />}/>
        <Route path="/admin/users/user_details" element={<UserDetails  />}/>
        <Route path="/teacher/add_course" element={<AddCoursePage updateCourses={updateCoursesAfterAdding} />}/>
        <Route path="/user/profile" element={<UserProfile loggedUser={user}/>} />
        <Route path="/user/courses" element={<UserCourses loggedUser={user} courses={loggedUserCourses} />} />

      </Routes>
      <Footer /></>
      
    </BrowserRouter>
  );
}

export default App;
