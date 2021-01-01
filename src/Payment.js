import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        {/*Payment section delivery address*/}
        <div ClassName="payment__section">
          <div ClassName="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div ClassName="payment__address">
            <p></p>
          </div>
        </div>
        {/*Payment section Items review*/}
        <div ClassName="payment__section"></div>
        {/*Payment section Payment Method*/}
        <div ClassName="payment__section"></div>
      </div>
    </div>
  );
}

export default Payment;
