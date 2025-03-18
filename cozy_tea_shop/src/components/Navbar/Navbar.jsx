import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <span className="title">Cozy<br />Tea Shop</span>
      <ul>
        <li>Home</li>
        <li>Catalog</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;