import './Home.css';
import SubscribeBox from "../../components/SubscribeBox/SubscribeBox";

function Home() {
  return (
    <div className="home-page">
      {/* <section className="hero-section">
        <h1>Welcome to the Cozy Tea Shop</h1>
        <p>Discover our collection of teas and soothing blends.</p>
      </section> */}

      <section className="newsletter-section">
        <SubscribeBox compact />
      </section>
    </div>
  );
}

export default Home;