import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "./styles/fonts.css";
import AppWrapper from './AppWrapper';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartProvider } from './context/CartContext.jsx';
import { UserProvider } from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <AppWrapper />
      </CartProvider>
    </UserProvider>
  </StrictMode>
);
