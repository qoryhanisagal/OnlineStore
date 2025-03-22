import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog/Catalog";
import TeaFilter from "./pages/TeaFilter/TeaFilter";
import About from "./pages/About/About";
import Admin from "./pages/AdminDashboard/Admin";
import Footer from "./components/Footer";
import './App.css';
// Clean imports using index.jsx

// Load bootstrap and fontawesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  // This App component serves as the main layout for the Cozy Tea Shop.
  // It renders global components like the banner, navbar, and footer, as well as key page sections such as the catalog, filters, about section, and admin dashboard.
  
  return (
    <>
    <BrowserRouter>
      {/* Top banner and navigation shown on every page *
      {/* Global Banner on Top - reusable announcement strip across all pages */}
      <Banner />

      {/* Navigation bar - sits below the banner for easy page navigation */}
      <Navbar />

      {/* Main route container */ }
      <Routes>
        {/* HomePage - Home Splash Page */}
       <Route path="/" element={<Home />} />

        {/* Catalog Page - showcases all tea products */}
        <Route path='/catalog' element={<Catalog />} />

      {/* Tea Filter - enables users to filter tea by category */}
        <Route path="/filter" element={<TeaFilter />} />

      {/* About Page - displays author name, email, and message interaction */}
        <Route path="/about" element={<About />} />

      {/* Admin Dashboard - contains product and discount forms for admin users */}
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {/* Footer - includes newsletter sign-up and site navigation */}
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;