import { Outlet, useLocation } from 'react-router-dom';
// Based on my own research: I’m using react-router-dom’s Outlet and useLocation
// to dynamically render page content and detect the current route path for theme switching.
// I’ll need to confirm with my professor if this is within scope for FSDI-108.
// Reference: https://reactrouter.com/en/main/components/outlet
// Outlet lets me nest routes inside a shared layout component
// Reference: https://reactrouter.com/en/main/hooks/use-location
// useLocation gives me access to the current path for route-specific styling or logic


// I’m importing the components that will appear across all pages
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  // I use useLocation to get the current route path (e.g., /shop, /about)
  const location = useLocation();

  // I created a theme map for different routes so I can pass different styles or props based on the path
  const themes = {
    '/': 'default',          // Homepage uses default theme
    '/shop': 'light-orange', // Shop route gets a light orange navbar
    '/about': 'teal',        // About route has a teal navbar
    // I can add more routes and match them with specific themes here
  };

  // I check the current path and assign the appropriate theme
  // If the route doesn’t match anything, I fallback to 'default'
  const currentTheme = themes[location.pathname] || 'default';

  return (
    <>
      {/* I’m rendering the banner across all pages */}
      <Banner />
      
      {/* Navbar gets the dynamic theme based on route */}
      <Navbar theme={currentTheme} />

      {/* Outlet renders the specific content of the route (like shop, about, etc.) */}
      <Outlet />

      {/* Footer is consistent across all pages */}
      <Footer />
    </>
  );
};

// I’m exporting the Layout so it can be used in my router as a wrapper for all pages
export default Layout;