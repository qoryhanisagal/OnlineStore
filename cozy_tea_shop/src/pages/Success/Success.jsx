import React from "react";
import { Link } from "react-router-dom";
import "./Success.css"; // You’ll create this CSS file next

function Success() {
  return (
    <div className="success-container">
      {/* ✅ Confirmation Heading */}
      <h1 className="success-title">Thank you for your purchase!</h1>

      {/* ✅ Confirmation Icon or Image */}
      <img
        src="/img/success.png"
        alt="Success"
        className="success-image"
      />

      {/* ✅ Message Body */}
      <p className="success-message">
        Your order has been placed and is being processed.
      </p>
      <p className="success-details">
        You’ll receive a confirmation email shortly. Estimated delivery: 3–5 business days.
      </p>

      {/* ✅ Button to go back to the shop */}
      <Link to="/catalog" className="success-button">
        Continue Shopping
      </Link>
    </div>
  );
}

export default Success;