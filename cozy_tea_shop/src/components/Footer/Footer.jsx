import './Footer.css';

function Footer() {
  /* Footer component displays the newsletter signup, site links, and social media icons */
  return (
    <>
      {/* Main footer container */}
      <footer className="footer">
        {/* Left section with newsletter promo text and social icons */}
        <div className="footer-section left">
          {/* Promotional message encouraging users to subscribe */}
          <p className="newsletter-text">
            Let’s stay in touch! Sign up to our newsletter and get the best deals!
          </p>
          {/* Footer brand or logo */}
          <div className="footer-logo">Cozy Tea Shop</div>
          {/* Social media icons (Facebook, Instagram) */}
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Center section with email subscription and helpful links */}
        <div className="footer-section center">
          {/* Email input and subscribe button */}
          <div className="newsletter-row">
            <input
              type="text"
              className="footer-input"
              placeholder="Insert your email address here"
            />
            <button className="subscribe-button">Subscribe now</button>
          </div>

          {/* Help and Other footer navigation links */}
          <div className="footer-links">
            {/* Column for Help links */}
            <div>
              <strong>Help</strong>
              <ul>
                <li>FAQ</li>
                <li>Customer Service</li>
                <li>How to guides</li>
                <li>Contact us</li>
              </ul>
            </div>
            {/* Column for Other links */}
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
    </>
  );
}

export default Footer;