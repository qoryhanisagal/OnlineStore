import "./Newsletter.css";
import SubscribeBox from "../../components/SubscribeBox/SubscribeBox";

function Newsletter() {
  return (
    <div className="newsletter-signup">
      <div className="left">
        <SubscribeBox showImage={false} />
        <p className="disclaimer">
          By submitting this form, you agree to receive our newsletter via email. You can unsubscribe at any time. See our <a href="/privacy">privacy policy</a>.
        </p>
      </div>
      <div className="right">
      <img src="/img/newsletter-right.png" alt="Newletter Promotion" />
      </div>
    </div>
  );
}

export default Newsletter;