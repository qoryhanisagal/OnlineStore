// Importing the banner-specific styles so this component has its own look
import './Banner.css';

// Creating a reusable banner component for the top of the site
// I want this to advertise things like free shipping or seasonal promos
const Banner = () => {
  return (
    <div className="banner">
      {/* This is the message I want all users to see — I emphasized the code with <strong> so it stands out */}
      <p className="banner-text">
        For free shipping on orders over $100 and more use code <strong>FREESHIPPINGYAY</strong>
      </p>
    </div>
  );
};

// Exporting it so I can use <Banner /> anywhere in my app (like App.jsx)
export default Banner;