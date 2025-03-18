import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Define themes per route
  const themes = {
    '/': 'default',
    '/shop': 'light-orange',
    '/about': 'teal',
    // add more paths here
  };

  // Get the current theme based on the URL
  const currentTheme = themes[location.pathname] || 'default';

  return (
    <>
      <Banner />
      <Navbar theme={currentTheme} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;