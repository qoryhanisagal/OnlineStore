import "./NewsletterSignup.css";
import SubscribeBox from "../../components/SubscribeBox/SubscribeBox";
import newsletterImage from "../../assets/newsletter-tea.jpg"; // use your image path

function NewsletterSignup() {
  return (
    <div className="newsletter-signup">
      <div className="left">
        <h1>Stay up to date. Get a $10 voucher!</h1>
        <p>
          Subscribe now to the Cozy Tea newsletter and be the first to hear about new products and promotions.
        </p>
        <SubscribeBox />
        <p className="disclaimer">
          By submitting this form, you agree to receive our newsletter via email. You can unsubscribe at any time. See our <a href="/privacy">privacy policy</a>.
        </p>
      </div>
      <div className="right">
        <img src="/img/newsletter-hero.png" alt="Newletter Promotion" />
      </div>
    </div>
  );
}

export default NewsletterSignup;