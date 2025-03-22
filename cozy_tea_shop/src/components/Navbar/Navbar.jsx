import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { cartItems } = useContext(CartContext); // Grabs cart data

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Total quantity

  return (
    <div className="navbar">
      <span className="title">Cozy<br />Tea Shop</span>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/filter">Catalog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            <i className="bi bi-bag"></i> {/* Bootstrap bag icon */}
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;