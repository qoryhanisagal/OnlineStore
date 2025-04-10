import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  // I pull everything I need from my CartContext
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotalPrice, // I use this to show total
  } = useContext(CartContext);

  // I use this to route users back to catalog page
  const navigate = useNavigate();

  return (
    <div className="shopping-cart">
      {/* Cart Heading */}
      <h2>My shopping bag</h2>

      {/* Cart Items List */}
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your bag is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              {/* Product Image */}
              <img src={item.image} alt={item.name} />

              {/* Product Info */}
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="quantity-control">
                <button onClick={() => decrementQuantity(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item._id)}>+</button>
              </div>

              {/* Remove Button with Trash Icon */}
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item._id)}
                aria-label="Remove item"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Cart Total */}
      {cartItems.length > 0 && (
        <div className="cart-total">
          {/* 💵 I calculate and show the total using getTotalPrice */}
          <h3>Total: ${getTotalPrice()}</h3>
        </div>
      )}

      {/* Promo & Checkout Section */}
      {cartItems.length > 0 && (
        <div className="cart-options">
          {/* Optional Checkboxes */}
          <div className="checkboxes">
            <label>
              <input type="checkbox" />
              Buying as a Gift? Tick here to include gift wrapping.
            </label>
            <label>
              <input type="checkbox" />
              Do you want to subscribe to our newsletter for limited offers and promotions?
            </label>
          </div>

          {/* Navigation Buttons */}
          <div className="cart-buttons-wrapper">
            <div className="cart-buttons">
              <button className="checkout-btn">Go to checkout</button>
              <button
                className="store-btn"
                onClick={() => navigate("/catalog")}
              >
                Back to store
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;