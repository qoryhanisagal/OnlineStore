import { createContext, useState } from 'react';

// I create the context so other components can use it
export const CartContext = createContext();

// I create the provider that wraps my app and shares cart data
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // I use this to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item._id === product._id
      );

      if (existingItemIndex !== -1) {
        // If the product is already in the cart, I update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: product.quantity, //  Overwrites with latest quantity
        };
        return updatedItems;
      } else {
        // If it's not in the cart yet, I add it
        return [...prevItems, product];
      }
    });
  };

  // I remove a product by its _id
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== id)
    );
  };

  // I increase the quantity of a specific product
  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  //  I decrease the quantity and remove it if the quantity goes to 0
  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // I use this to completely clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // I calculate the total quantity of items
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // I calculate the total price of the cart
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  // I provide everything that components need to use from this context
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity, // Needed for + button
        decrementQuantity, // Needed for - button
        clearCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// I export this so I can wrap my app with it
export default CartProvider;