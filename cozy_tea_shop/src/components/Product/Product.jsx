import "./Product.css";
// Notes: Come back and refactor this as a proper TeaCard component.
// The "Add to Bag" button and product images are not uniform in size or layout.
// Consider creating a separate TeaCard component for better reusability and styling control.
import QuantityPicker from "../QuantityPicker";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Product(props) {
  // I'm pulling from the cartcontext
  const { addToCart } = useContext(CartContext);

  // I'm using React state to track the quantity selected for this product
  const [quantity, setQuantity] = useState(1);

  // This function is triggered when the user clicks the 'Add to bag' button
  // It currently just logs the quantity and product title to the console
  function add() {
    console.log(`Adding ${quantity}x ${props.data.title} to cart`);
  }

  // This callback updates the quantity when the QuantityPicker changes
  function handleQuantity(val) {
    setQuantity(val);
  }

  // Calculate the total cost based on selected quantity and unit price
  const total = (props.data.price * quantity).toFixed(2);
  function add() {
    const productToAdd = {
      ...props.data,
      quantity: quantity,
    };
    addToCart(productToAdd); // Send the product to cart context
  }

  return (
    <>
      {/* Product card container with image, title, price display, and cart controls */}
      <div className="product">
        {/* Display the product image */}
        <img src={props.data.image} alt={props.data.title} />

        {/* Show the product title */}
        <h5>{props.data.title}</h5>

        {/* Display total and unit price. Highlight total if quantity > 1 */}
        <div className="prices">
          <label className={`total ${quantity > 1 ? "highlight-total" : ""}`}>
              Total: ${total}
          </label>
          <label className="unit">Unit: ${props.data.price}</label>
      </div>

        {/* QuantityPicker allows users to select how many units they want */}
        <div className="controls">
          <QuantityPicker onChange={handleQuantity} />
        </div>

        {/* Add to bag button with cart icon */}
        <button className="add-btn" onClick={add}>
          <i className="fa-solid fa-cart-plus"></i> Add to bag
        </button>
      </div>
    </>
  );
}

export default Product;