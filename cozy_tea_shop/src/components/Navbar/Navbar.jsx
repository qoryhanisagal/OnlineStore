import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useContext(CartContext); // Grabs cart data
  const { user } = useContext(UserContext); // Grabs user data

  // Calculate total quantity for cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      {/* Logo and Title */}
      {/* Clickable logo that routes to Home */}
      <Link to="/" className="logo-link">
        <div className="title">
          <img src="/img/cozy-tea-logo.png" alt="Cozy Tea Logo" className="logo-icon" />
           <span>Cozy Tea Shop</span>
        </div>
      </Link>

      {/* Navigation Links */}
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/filter">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        
        <li>
        <Link to="/newsletter">Subscribe</Link>
        </li>
         {/* <li>
          <Link to="/admin">Admin</Link>
        </li> */}
        {/* <li>
          <Link to="/profile">Profile</Link>
        </li> */}
      </ul>

        {/* Container for Cart and User Greeting */}
        <div className="cart-user-container">
          {/* Search Icon */}
          <Link to="/search" className="nav-icon">
            <i className="bi bi-search"></i>
          </Link>

          {/* Favorites Link */}
          <Link to="/favorites" className="nav-icon">
            <i className="bi bi-heart"></i> {/* Bootstrap heart icon */}
          </Link>

          {/* Notification Icon */}
          <Link to="/notifications" className="nav-icon">
            <i className="bi bi-bell"></i>
          </Link>
          
          {/* Cart Link and Badge */}
          <Link to="/cart" className="nav-icon">
            <div className="cart-icon-container">
              <i className="bi bi-bag"></i> {/* Bootstrap bag icon */}
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>
          </Link>

          {/* Admin Icon */}
          <Link to="/admin" className="nav-icon">
            <i className="bi bi-shield-lock"></i> {/* Bootstrap shield lock icon */}
          </Link>

          {/* User Greeting */}
          <Link to="/profile" className="nav-user">
            <i className="bi bi-person-circle"></i> {/* Bootstrap person icon */}
            Hello, {user.name || "Koiree"}!
          </Link>
        </div>
    </div>
  );
}

export default Navbar;