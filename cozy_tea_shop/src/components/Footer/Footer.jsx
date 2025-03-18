import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section left">
        <p className="newsletter-text">
          Let’s stay in touch! Sign up to our newsletter and get the best deals!
        </p>
        <div className="footer-logo">Cozy Tea Shop</div>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      <div className="footer-section center">
        <div className="newsletter-row">
          <input
            type="text"
            className="footer-input"
            placeholder="Insert your email address here"
          />
          <button className="subscribe-button">Subscribe now</button>
        </div>

        <div className="footer-links">
          <div>
            <strong>Help</strong>
            <ul>
              <li>FAQ</li>
              <li>Customer Service</li>
              <li>How to guides</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <strong>Other</strong>
            <ul>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
              <li>Subscriptions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;