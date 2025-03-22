import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <span className="title">Cozy<br />Tea Shop</span>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/filter">Catalog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;