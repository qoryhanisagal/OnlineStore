import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog/Catalog';  // Import the Catalog component
import Footer from './components/Footer'; 

// load bootstrap and icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//import 'bootstrap-icons/font/bootstrap-icons.css'; //
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <>
      {/* Global Banner on Top */}
      <Banner />

      {/* Navbar below the banner */}
      <Navbar></Navbar>
      
      {/* Catalog */}
      <Catalog></Catalog>

      {/* Footer */}  
      <Footer></Footer>
    </> 
);
}
export default App;

/**
 * create a Footer component
 * jsx and css
 * 
 * import on app.jsx
 * and render it below the h1
 * 
 */