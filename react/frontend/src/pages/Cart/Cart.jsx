import React from 'react';
import CartCourse from '../../components/cartCourse/cartCourse.jsx';
import "../../index.css";
import { Link } from 'react-router-dom';


const Cart = ({ cartCourses, calculateTotal }) => {
  return (
    <div className="content-wrap page-conatainer">
      <h1>Your Cart</h1>
      
      {cartCourses.length > 0 ? (
        <div className="row cards">
          {cartCourses.map((course) => (
            <CartCourse key={course.id} course={course} />
          ))}
           
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
       <Link to="/checkout" className="button primary checkout-button" state={{ total: calculateTotal() }}>
            Checkout
          </Link>
    </div>
  );
};

export default Cart;