    import React from "react";
    import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
    import { useLocation } from "react-router-dom";
    import axios from "axios";

    const CheckoutPage = ({cartCourses, loggedUser, userCourses,updateUserCourses}) => {
        // console.log('User courses:', userCourses);
        // console.log('cart courses:', cartCourses);
        const location = useLocation();
    const { total } = location.state || {};
    const clientId = "AXGedky7tPB3jDTjJtikmCviDA2wzXWC1lAjwOELO-oKBgsFD5hChc7tdFUnSGAuhFFtP6xVzcDtTSnL";
    
    function handlePurchase(){
       
        const userCourseIds = userCourses.map(userCourse => userCourse.course.id);
        const cartCourseIds = cartCourses.map(cartCourse => cartCourse.id);
        
        
        const hasOverlap = cartCourseIds.some(courseId => userCourseIds.includes(courseId));
        
        if (hasOverlap) {
            alert("Već posedujete jedan ili više kurseva iz korpe. Kupovina nije moguća.");
            return;
        }

        cartCourses.map((course) => {
            axios.post("/api/purchaseds",{
                user_id: loggedUser.id,
                course_id: course.id,
                payment_method: 'bank transfer',
              }).then((response) => {
                updateUserCourses();
            });
        }); 
    }

    return (
        <div className="checkout-container">
        <h1>Checkout Page</h1>
        <PayPalScriptProvider options={{ "client-id": clientId }}>
            <div className="buttons">
            <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
                return actions.order.create({
                purchase_units: [
                    {
                    amount: {
                        value: total,
                    },
                    },
                ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                alert(`Transaction completed by ${details.payer.name.given_name}`);
                //const paymentMethod = details.purchase_units[0].payments.captures[0].payment_method;
                //console.log(details);
                handlePurchase();
                });
            }}
            />
            </div>
        </PayPalScriptProvider>
        </div>
    );
    };

    export default CheckoutPage;