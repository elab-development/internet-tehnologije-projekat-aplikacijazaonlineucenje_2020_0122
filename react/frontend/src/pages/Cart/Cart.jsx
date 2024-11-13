import React from 'react';
import CartCourse from '../../components/cartCourse/cartCourse.jsx';
import "../../index.css";
import { Link } from 'react-router-dom';



const Cart = ({ cartCourses, calculateTotal }) => {
  //sconst history  = useHistory();
  function checkForLoggedIn(e){
    if(window.sessionStorage.getItem('auth_token') == null){
      alert('korisnik nije ulogovan');
      e.preventDefault();
      //history.push('/login');
      return;
    }
  }
  return (
    <div className="container content-wrap page-conatainer">
      <h1>Your Cart</h1>
      
      {cartCourses.length > 0 ? (
        <div className="row responsive cards">
          {cartCourses.map((course) => (
            <CartCourse key={course.id} course={course} />
          ))}
           
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}

{cartCourses.length > 0 && (
        <div className="total-price center">
          <h2>Total Price: ${calculateTotal().toFixed(2)}</h2>
        </div>
      )}
        <div>
       <Link to="/checkout" onClick={checkForLoggedIn} className="button primary checkout-button" state={{ total: calculateTotal() }}>
            Checkout
          </Link>
        </div>
    </div>
  );
};

export default Cart;