import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <h2 className="checkout__title">Your Shopping Cart</h2>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
      {/* Basket item goes here*/}
    </div>
  );
}

export default Checkout;
