import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Purchase.css";

function Purchase() {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice } = useContext(CartContext);

  const [shippingMethod, setShippingMethod] = useState("Post Office Delivery");
  const [paymentMethod, setPaymentMethod] = useState("Mobile Pay");
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Order submitted:", {
      cartItems,
      shippingMethod,
      paymentMethod,
      formData,
    });
  };

  return (
    <div className="purchase-page">
      <div className="purchase-container">
        <div className="two-column-layout">
          {/* Left Column: Items Overview */}
          <div
            className="items-overview"
            style={{
              borderLeft: "1px solid #0e465a",
              borderTop: "1px solid #0e465a",
              borderRight: "none",
              borderBottom: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <div className="back-btn-wrapper">
              <button className="back-btn" onClick={() => navigate("/cart")}>
                ← Back to Cart
              </button>
            </div>
            <h2>Items overview</h2>
            <p>
              This is your order summary where you can edit and delete your order
              and select your preferred delivery type.
            </p>

            {cartItems.map((item) => (
              <div className="purchase-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>Packed Bags</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="item-price">${item.price * item.quantity}</div>
              </div>
            ))}

            <h5 className="section-title">Available Shipping Methods</h5>
            <div className="boxed-section">
              <label className="shipping-option">
                <input
                  type="radio"
                  checked={shippingMethod === "Post Office Delivery"}
                  onChange={() => setShippingMethod("Post Office Delivery")}
                />
                Post Office Delivery <span>Free</span>
              </label>
            </div>

            <h5 className="section-title">Payment Options</h5>
            <div className="boxed-section">
              <label className="payment-option">
                <input
                  type="radio"
                  checked={paymentMethod === "Mobile Pay"}
                  onChange={() => setPaymentMethod("Mobile Pay")}
                />
                Mobile Pay
              </label>
            </div>
          </div>

          {/* Right Column: Payment Form */}
          <div className="payment-details">
            <h2>Payment details</h2>
            <p>Fill in your payment details and complete the order.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />

              <button type="submit" className="finish-btn">
                Finish purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;