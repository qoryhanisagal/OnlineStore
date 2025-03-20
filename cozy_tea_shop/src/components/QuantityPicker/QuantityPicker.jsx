// QuantityPicker.jsx - A reusable component that lets users increase or decrease quantity of a product before adding to cart.
// Used in product cards across the site.
import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker(props) {
  // I'm using state to store the current quantity (default is 1)
  const [quantity, setQuantity] = useState(1);

  // This function increases the quantity by 1 and notifies the parent (if an onChange callback was passed in)
  const increase = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    if (props.onChange) {
      props.onChange(newQty);
    }
  };

  // This function decreases the quantity by 1 but prevents it from going below 1
  // It also notifies the parent if an onChange callback exists
  const decrease = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      if (props.onChange) {
        props.onChange(newQty);
      }
    }
  };

  // Render the quantity picker layout with - and + buttons and the current quantity in between
  return (
    <div className="quantity-picker">
      {/* Decrease button */}
      <button onClick={decrease}>-</button>
      {/* Quantity display */}
      <label>{quantity}</label>
      {/* Increase button */}
      <button onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;