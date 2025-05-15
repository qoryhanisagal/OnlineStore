import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile/Profile";
import Cart from './pages/Cart/cart';
import Catalog from "./pages/Catalog/Catalog";
import TeaFilter from "./pages/TeaFilter/TeaFilter";
import About from "./pages/About/About";
import Admin from "./pages/AdminDashboard/Admin";
import Footer from "./components/Footer";
import Newsletter from "./pages/Newsletter/Newsletter";
import Purchase from './pages/Purchase/Purchase';
import Success from "./pages/Success/Success";
import './App.css';
// Clean imports using index.jsx

// Load bootstrap and fontawesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  // This App component serves as the main layout for the Cozy Tea Shop.
  // It renders global components like the banner, navbar, and footer, as well as key page sections such as the catalog, filters, about section, and admin dashboard.
  const location = useLocation();
  // The useLocation hook is used to get the current location object, which contains information about the current URL.
  // I will use this for conditionally rendering components or styles based on the current route.

  return (
    <>
      <Banner />
      {/* Banner - displays the main promotional image and text */}

      {/* Navigation bar - sits below the banner for easy page navigation */}
      <Navbar />

      {/* Main content area - where the main page components are rendered */}

      <Routes>
        {/* HomePage - Home Splash Page */}
       <Route path="/" element={<Home />} />

        {/* My Shoppping Bag Page */}
       <Route path="/cart" element={<Cart />} />

        {/* Catalog Page - showcases all tea products */}
        <Route path='/catalog' element={<Catalog />} />

        {/* Newsletter Page - allows users to sign up for the newsletter */}
        <Route path="/newsletter" element={<Newsletter />} />

        {/* Tea Filter - enables users to filter tea by category */}
        <Route path="/filter" element={<TeaFilter />} />

        {/* About Page - displays author name, email, and message interaction */}
        <Route path="/about" element={<About />} />

        {/* Profile Page - user profile and settings */}
        <Route path="/profile" element={<Profile />} />

        {/* Admin Dashboard - contains product and discount forms for admin users */}
        <Route path="/admin" element={<Admin />} />

        {/* Payment Page - allows users to select shipping and payment methods */}
        <Route path="/purchase" element={<Purchase />} />

        {/* Success Page - displays a confirmation message after a successful purchase */}
        <Route path="/success" element={<Success />} />
      </Routes>

     

      {/* Footer - includes newsletter sign-up and site navigation */}
      
      {location.pathname !== "/newsletter" && <Footer />}
    </>
  );
}

export default App;