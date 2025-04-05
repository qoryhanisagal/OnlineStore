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
      <span className="title">
        Cozy
        <br />
        Tea Shop
      </span>

      {/* Navigation Links */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/filter">Catalog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

        {/* Container for Cart and User Greeting */}
        <div className="nav-right">
          {/* Cart Link and Badge */}
          <Link to="/cart" className="nav-icon">
            <div style={{ position: "relative", display: "inline-block" }}>
              <i className="bi bi-bag"></i> {/* Bootstrap bag icon */}
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>
          </Link>

          {/* User Greeting */}
          <span className="nav-user">
            Hello, {user.name || "Guest"}!
          </span>
        </div>
    </div>
  );
}

export default Navbar;