import "./SubscribeBox.css";

function SubscribeBox({ compact = false, showImage = true }) {
  return (
    <div className={`subscribe-wrapper ${compact ? "compact" : ""}`}>
      {/* Left side: Form */}
      <div className="subscribe-left">
        <h2>Stay up to date. <br /> Get a $10 voucher!</h2>
        <p>
          Subscribe now to the Cozy Tea newsletter and be the first to hear about new products and promotions.
        </p>
        <form className={`subscribe-form ${compact ? "compact" : ""}`}>
          <div className="form-row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="your@email.com" />
          <button type="submit">Register</button>
        </form>
      </div>

      {/* Conditionally render the image */}
      {showImage && (
        <div className="subscribe-right">
          <img src="/img/newsletter-hero.png" alt="Tea Promotion" />
        </div>
      )}
    </div>
  );
}

export default SubscribeBox;