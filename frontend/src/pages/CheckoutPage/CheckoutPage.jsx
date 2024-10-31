import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
    const location = useLocation();
  const { total } = location.state || {};
  const clientId = "AXGedky7tPB3jDTjJtikmCviDA2wzXWC1lAjwOELO-oKBgsFD5hChc7tdFUnSGAuhFFtP6xVzcDtTSnL";

  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
      <PayPalScriptProvider options={{ "client-id": clientId }}>
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
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default CheckoutPage;